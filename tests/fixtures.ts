import {blankProfile} from '../src/utils/validation';
import {questionsForMode} from '../src/data/questions';
import {generateReport} from '../src/utils/diagnostics';
import type {AssessmentMode,Answers,AnswerValue,BusinessProfile} from '../src/types/assessment';
export const profile:BusinessProfile={...blankProfile,organization:'Riverbend Services',contact:'Jordan Morgan',title:'Operations Director',email:'jordan@example.com',industry:'Professional Services',size:'11–50 employees',years:'8',consent:true};
export function answersFor(mode:AssessmentMode,value:AnswerValue):Answers{return Object.fromEntries(questionsForMode(mode).map(q=>[q.id,{value,comment:'',followUp:''}]));}
export function reportFor(mode:AssessmentMode='quick',value:AnswerValue=3){return generateReport(questionsForMode(mode),answersFor(mode,value),profile,mode,'2026-10-12T03:00:00.000Z','BH-TEST-001');}
