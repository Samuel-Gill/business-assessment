import type { CategoryId } from '../types/assessment';
export const categories: {id:CategoryId;name:string;short:string;description:string;color:string;icon:string}[] = [
 {id:'operations',name:'Business Operations',short:'Operations',description:'Build consistency into the way work gets done.',color:'#2563EB',icon:'workflow'},
 {id:'finance',name:'Financial Management',short:'Finance',description:'Understand the numbers shaping your future.',color:'#0F766E',icon:'chart'},
 {id:'accounting',name:'Accounting & Controls',short:'Accounting',description:'Create reliable records and stronger safeguards.',color:'#8B5CF6',icon:'shield'},
 {id:'management',name:'Management & Strategy',short:'Strategy',description:'Turn your direction into focused execution.',color:'#B67B1F',icon:'target'},
 {id:'hr',name:'Human Resources',short:'People',description:'Help your people and organization grow together.',color:'#E05B76',icon:'users'},
 {id:'technology',name:'Technology & Digital',short:'Technology',description:'Make your systems work smarter, and safer.',color:'#0891B2',icon:'monitor'},
];
export const industries=['Retail','Manufacturing','Healthcare','Professional Services','Technology','Construction','Hospitality','Education','Nonprofit','Logistics','Real Estate','Financial Services','Other'];
export const sizes=['1–10 employees','11–50 employees','51–200 employees','201–500 employees','500+ employees'];
export const scale=[
 {value:1,label:'Not implemented',detail:'No defined practice is in place.'},
 {value:2,label:'Rarely implemented',detail:'Ad hoc or only occasionally used.'},
 {value:3,label:'Partially implemented',detail:'Some structure, with inconsistent use.'},
 {value:4,label:'Mostly implemented',detail:'Usually followed; a few gaps remain.'},
 {value:5,label:'Fully implemented',detail:'Consistent, documented, and reviewed.'},
] as const;
export const answerLabel=(v:unknown)=>typeof v==='number'?`${v} — ${scale[v-1]?.label||'Invalid'}`:v==='na'?'Not applicable':v==='unknown'?'Not sure':'Unanswered';
