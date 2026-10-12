import {recommendations} from '../data/recommendations';
import {isNumeric,calculateScores} from './scoring';
import {rankPriority} from './prioritization';
import {tailoredAction} from '../data/industryRules';
import type {Answers,AssessmentQuestion,BusinessProfile,AssessmentMode,AssessmentReport,ActionItem} from '../types/assessment';
export function generateReport(qs:AssessmentQuestion[],answers:Answers,profile:BusinessProfile,mode:AssessmentMode,date:string,id:string):AssessmentReport {
 const actions:ActionItem[]=qs.flatMap(q=>{const v=answers[q.id]?.value;if(!isNumeric(v)||v>3)return [];return q.recommendationIds.flatMap(rid=>{const r=recommendations.find(r=>r.id===rid&&r.questionId===q.id);return r?[{...r,action:tailoredAction(r.action,profile),answer:v,...rankPriority(q,v)}]:[];});}).sort((a,b)=>b.rank-a.rank||a.questionId.localeCompare(b.questionId));
 const strengths=qs.filter(q=>isNumeric(answers[q.id]?.value)&&Number(answers[q.id].value)>=4).sort((a,b)=>Number(answers[b.id].value)-Number(answers[a.id].value)||b.weight-a.weight||a.id.localeCompare(b.id)).map(q=>({questionId:q.id,category:q.category,text:recommendations.find(r=>r.questionId===q.id)?.title||q.text,answer:Number(answers[q.id].value)}));
 return {id,date,mode,profile:{...profile},questions:qs,answers:structuredClone(answers),scores:calculateScores(qs,answers,mode),strengths,actions,risks:actions.filter(a=>qs.find(q=>q.id===a.questionId)?.critical&&a.answer<=2),clarifications:qs.filter(q=>answers[q.id]?.value==='unknown')};
}
