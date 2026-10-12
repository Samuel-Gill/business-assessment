import {scoreConfig} from '../config/consultant';
import type {AssessmentQuestion,Priority} from '../types/assessment';
export function rankPriority(q:AssessmentQuestion,answer:number):{rank:number;priority:Priority;timeline:string;phase:'immediate'|'short'|'long'} {
 const rank=(5-answer)*q.weight+q.impact+(q.critical?5:0)-q.effort;
 const priority:Priority=q.critical&&answer<=2||rank>=scoreConfig.priority.critical?'Critical':rank>=scoreConfig.priority.high?'High':rank>=scoreConfig.priority.medium?'Medium':'Low';
 const phase=priority==='Critical'||priority==='High'?'immediate':priority==='Medium'?'short':'long';
 return {rank,priority,phase,timeline:phase==='immediate'?'Within 30 days':phase==='short'?'31–90 days':'3–12 months'};
}
