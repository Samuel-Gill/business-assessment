export type CategoryId = 'operations' | 'finance' | 'accounting' | 'management' | 'hr' | 'technology';
export type AssessmentMode = 'quick' | 'comprehensive';
export type AnswerValue = 1 | 2 | 3 | 4 | 5 | 'na' | 'unknown';
export type Priority = 'Critical' | 'High' | 'Medium' | 'Low';
export type Stage = 'landing' | 'profile' | 'assessment' | 'review' | 'results' | 'confirmation';
export interface BusinessProfile {organization:string;contact:string;title:string;email:string;industry:string;size:string;years:string;phone:string;website:string;location:string;revenue:string;locations:string;goals:string;challenge:string;consent:boolean}
export interface Answer {value?:AnswerValue;comment:string;followUp:string}
export type Answers = Record<string,Answer>;
export interface AssessmentQuestion {id:string;category:CategoryId;text:string;description:string;answerType:'maturity'|'agreement';weight:number;critical:boolean;quick:boolean;applicableIndustries:string[];followUp:{low:string;high:string};recommendationIds:string[];impact:number;effort:number}
export interface Recommendation {id:string;questionId:string;category:CategoryId;title:string;finding:string;impact:string;action:string;benefit:string;owner:string;effort:number}
export interface CategoryScore {category:CategoryId;score:number|null;numeric:number;unknown:number;excluded:number;missing:number;total:number;coverage:number}
export interface Scores {categories:CategoryScore[];overall:number|null;complete:boolean;eligible:boolean;coverage:number;applicableCoverage:number;numeric:number;unknown:number;excluded:number;missing:number;scorableCategories:number;total:number}
export interface ActionItem extends Recommendation {answer:number;priority:Priority;rank:number;timeline:string;phase:'immediate'|'short'|'long'}
export interface Finding {questionId:string;category:CategoryId;text:string;answer:number}
export interface AssessmentReport {id:string;date:string;mode:AssessmentMode;profile:BusinessProfile;questions:AssessmentQuestion[];answers:Answers;scores:Scores;strengths:Finding[];actions:ActionItem[];risks:ActionItem[];clarifications:AssessmentQuestion[]}
export interface Draft {version:1;mode:AssessmentMode;profile:BusinessProfile;answers:Answers;index:number;stage:Stage;reportDate:string}
