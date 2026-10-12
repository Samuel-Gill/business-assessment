import {z} from 'zod';
import {questionsForMode} from '../data/questions';
import {blankProfile} from './validation';
import type {Draft} from '../types/assessment';
export const draftKey='bh360:draft:v1';
const schema=z.object({version:z.literal(1),mode:z.enum(['quick','comprehensive']),profile:z.object(Object.fromEntries(Object.keys(blankProfile).map(k=>[k,k==='consent'?z.boolean():z.string().max(1500)]))).strict(),answers:z.record(z.string(),z.object({value:z.union([z.literal(1),z.literal(2),z.literal(3),z.literal(4),z.literal(5),z.literal('na'),z.literal('unknown')]).optional(),comment:z.string().max(1500),followUp:z.string().max(1500)})),index:z.number().int().nonnegative(),stage:z.enum(['landing','profile','assessment','review','results']),reportDate:z.string()});
export function readDraft():Draft|null {try{const raw=sessionStorage.getItem(draftKey);if(!raw)return null;const parsed=schema.safeParse(JSON.parse(raw));if(!parsed.success)return null;const d=parsed.data as unknown as Draft;const qs=questionsForMode(d.mode);d.index=Math.min(d.index,qs.length-1);d.answers=Object.fromEntries(Object.entries(d.answers).filter(([id])=>qs.some(q=>q.id===id)));return d;}catch{return null;}}
export function saveDraft(draft:Draft):boolean{try{sessionStorage.setItem(draftKey,JSON.stringify(draft));return true;}catch{return false;}}
export function clearDraft(){try{sessionStorage.removeItem(draftKey);}catch{/* In-memory navigation remains available. */}}
