import { categories } from '../data/categories';
import { scoreConfig } from '../config/consultant';
import type { Answers, AssessmentMode, AssessmentQuestion, Scores, CategoryScore, AnswerValue } from '../types/assessment';
export const isNumeric=(v:unknown):v is 1|2|3|4|5=>typeof v==='number'&&Number.isInteger(v)&&v>=1&&v<=5;
export const isAnswered=(v:unknown):v is AnswerValue=>isNumeric(v)||v==='na'||v==='unknown';
export const normalizedScore=(value:number)=>{if(!isNumeric(value))throw new Error('Maturity must be an integer from 1 to 5.');return (value-1)/4*100;};
export const classification=(score:number|null)=>score===null?{label:'Insufficient coverage',tone:'unknown'}:scoreConfig.thresholds.find(b=>score>=b.min) || scoreConfig.thresholds.at(-1)!;
export function calculateScores(qs:AssessmentQuestion[],answers:Answers,mode:AssessmentMode):Scores {
 const categoryScores:CategoryScore[]=categories.map(c=>{
  const items=qs.filter(q=>q.category===c.id);let weighted=0,weights=0,numeric=0,unknown=0,excluded=0,missing=0;
  for(const q of items){const v=answers[q.id]?.value;if(isNumeric(v)&&Number.isFinite(q.weight)&&q.weight>0){numeric++;weighted+=normalizedScore(v)*q.weight;weights+=q.weight;}else if(v==='na')excluded++;else if(v==='unknown')unknown++;else missing++;}
  return {category:c.id,score:numeric>=scoreConfig.minimumCategoryAnswers[mode]&&weights>0?weighted/weights:null,numeric,unknown,excluded,missing,total:items.length,coverage:items.length?numeric/items.length*100:0};
 });
 const numeric=categoryScores.reduce((n,c)=>n+c.numeric,0),unknown=categoryScores.reduce((n,c)=>n+c.unknown,0),excluded=categoryScores.reduce((n,c)=>n+c.excluded,0),missing=categoryScores.reduce((n,c)=>n+c.missing,0),total=qs.length;
 const valid=categoryScores.filter(c=>c.score!==null);const complete=total>0&&missing===0;
 const eligible=complete&&valid.length>=scoreConfig.minimumCategories&&numeric/total>=scoreConfig.minimumNumericCoverage;
 const weightSum=valid.reduce((sum,c)=>sum+scoreConfig.categoryWeights[c.category],0);
 const overall=eligible&&weightSum>0?valid.reduce((sum,c)=>sum+c.score!*scoreConfig.categoryWeights[c.category],0)/weightSum:null;
 return {categories:categoryScores,overall,complete,eligible,numeric,unknown,excluded,missing,total,scorableCategories:valid.length,coverage:total?numeric/total*100:0,applicableCoverage:total>excluded?numeric/(total-excluded)*100:0};
}
