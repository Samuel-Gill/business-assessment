import emailjs from '@emailjs/browser';
import {emailConfig,emailReady} from '../config/consultant';
import {categories,answerLabel} from '../data/categories';
import {profileSchema} from '../utils/validation';
import type {AssessmentReport} from '../types/assessment';
const displayScore=(s:number|null)=>s===null?'Insufficient coverage':`${Math.round(s)}/100`;
const clean=(s:string)=>s.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g,'');
export interface EmailPlan {params:Record<string,string>;fullDetails:boolean;reason:string;bytes:number}
export function buildEmailPlan(report:AssessmentReport,includeFull=emailConfig.includeFullResponses,maxBytes=emailConfig.maxBytes):EmailPlan {
 const p=report.profile,s=report.scores;
 const summary=[`New Business Assessment Submitted\nAssessment reference: ${report.id}`,`Organization: ${p.organization}\nContact: ${p.contact} (${p.title})\nEmail: ${p.email}\nIndustry: ${p.industry}\nEmployees: ${p.size}\nYears in operation: ${p.years}\nPhone: ${p.phone||'Not provided'}\nWebsite: ${p.website||'Not provided'}\nCity / State: ${p.location||'Not provided'}\nRevenue range (optional): ${p.revenue||'Not provided'}\nLocations: ${p.locations||'Not provided'}\nGoals: ${p.goals||'Not provided'}\nCurrent challenge: ${p.challenge||'Not provided'}`,`Assessment date: ${new Date(report.date).toLocaleString('en-US')}\nAssessment mode: ${report.mode}\nOverall health: ${displayScore(s.overall)}\nNumeric coverage: ${Math.round(s.coverage)}% (${s.numeric}/${s.total})\nUnknown: ${s.unknown}; Not applicable: ${s.excluded}; Missing: ${s.missing}\nScorable categories: ${s.scorableCategories}/6`,
 'CATEGORY SCORES\n'+s.categories.map(c=>`${categories.find(k=>k.id===c.category)!.name}: ${displayScore(c.score)}; ${c.numeric}/${c.total} numeric, ${c.unknown} unknown, ${c.excluded} excluded`).join('\n'),
 'TOP STRENGTHS\n'+(report.strengths.slice(0,3).map(f=>`${f.text} (self-reported ${f.answer}/5)`).join('\n')||'No sufficiently strong practices reported.'),
 'PRIORITY IMPROVEMENT AREAS\n'+(report.actions.slice(0,3).map(a=>`${a.title}: ${a.finding}`).join('\n')||'No low-rated practices identified in answered questions.'),
 'TOP RECOMMENDED ACTIONS\n'+(report.actions.slice(0,5).map(a=>`[${a.priority}] ${a.title}\nFinding: ${a.finding}\nImpact: ${a.impact}\nAction: ${a.action}\nTimeline: ${a.timeline}; Owner: ${a.owner}\nExpected benefit: ${a.benefit}`).join('\n\n')||'Maintain reported practices and validate evidence with the consultant.'),
 'CLARIFICATIONS\n'+(report.clarifications.map(q=>q.text).join('\n')||'None'),
 'Methodology: numeric responses use ((answer - 1) / 4) x 100. Questions are weighted within categories. Category weights are equal. Unknown and not applicable responses are excluded. Bands are consultant-defined, not industry benchmarks. This is self-reported preliminary information, not an audit or certification.'];
 const full='COMPLETE ASSESSMENT RESPONSES\n'+report.questions.map(q=>{const a=report.answers[q.id];return `${q.id} | ${q.text}\nAnswer: ${answerLabel(a?.value)}\nComment: ${a?.comment||'None'}\nAdditional detail: ${a?.followUp||'None'}`;}).join('\n\n');
 const params:Record<string,string>={subject:`New Business Assessment — ${clean(p.organization)}`,organization:clean(p.organization),contact_name:clean(p.contact),reply_to:p.email,assessment_id:report.id,report_summary:clean(summary.join('\n\n')),full_responses:'',delivery_scope:'Executive summary only. Full report is available for the client to download. No PDF attachment is included.'};
 const size=()=>new TextEncoder().encode(JSON.stringify(params)).length;
 let fullDetails=false;let reason=includeFull?'Full responses exceed the configured email size limit.':'This email service is configured for summary delivery.';
 if(includeFull){params.full_responses=clean(full);params.delivery_scope='Executive summary and all selected assessment responses. No PDF attachment is included.';if(size()<=maxBytes){fullDetails=true;reason='All responses and comments fit within the configured limit.';}else{params.full_responses='';params.delivery_scope='Executive summary only: full responses exceed the configured email size limit. Download and separately share the PDF for complete details. No responses were silently truncated.';}}
 if(size()>maxBytes)throw new Error('The summary exceeds the configured email capacity. Download the complete report and contact the consultant.');
 return {params,fullDetails,reason,bytes:size()};
}
export interface SubmissionReceipt {fullDetails:boolean;acceptedAt:string;assessmentId:string}
export function createSubmissionService(send:typeof emailjs.send=emailjs.send,ready=()=>emailReady){
 const successful=new Map<string,SubmissionReceipt>();const active=new Set<string>();
 return async (report:AssessmentReport,captchaToken=''):Promise<SubmissionReceipt>=>{
  if(successful.has(report.id))return successful.get(report.id)!;
  if(active.has(report.id))throw new Error('This assessment is already being submitted. Please wait.');
  if(!ready())throw new Error('Online submission is not configured yet. Your assessment has not been sent. Download your report and contact the consultant.');
  profileSchema.parse(report.profile);
  if(!report.scores.complete)throw new Error('Answer every question before submitting. Not applicable and Not sure are valid responses.');
  if(emailConfig.captchaSiteKey&&!captchaToken)throw new Error('Complete the verification before submitting.');
  const plan=buildEmailPlan(report);active.add(report.id);
  try {const response=await send(emailConfig.serviceId,emailConfig.templateId,{...plan.params,...(captchaToken?{'g-recaptcha-response':captchaToken}:{})},{publicKey:emailConfig.publicKey,blockHeadless:true,limitRate:{id:'bh360-submission',throttle:10000}});
   if(response.status<200||response.status>=300)throw new Error('The email service did not accept this assessment.');
   const receipt={fullDetails:plan.fullDetails,acceptedAt:new Date().toISOString(),assessmentId:report.id};successful.set(report.id,receipt);return receipt;
  }catch(error){const status=(error as {status?:number})?.status;
   if(status===429)throw new Error('Please wait a moment before retrying. Your answers are preserved.');
   if(status===400||status===401||status===403)throw new Error('The email configuration or verification was rejected. Your assessment was not confirmed. Download the report or contact the consultant.');
   throw new Error('Submission could not be confirmed. Your answers are preserved. You can retry or download the complete report. If a network response was lost, contact the consultant before retrying to avoid a duplicate.');
  }finally{active.delete(report.id);}
 };
}
export const submitAssessment=createSubmissionService();
