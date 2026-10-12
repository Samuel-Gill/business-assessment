import '@testing-library/jest-dom/vitest';
import {vi,afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
if(typeof window!=='undefined'){
 window.scrollTo=()=>{};window.matchMedia=()=>({matches:false,media:'',onchange:null,addListener:()=>{},removeListener:()=>{},addEventListener:()=>{},removeEventListener:()=>{},dispatchEvent:()=>true});
 Object.defineProperty(HTMLElement.prototype,'getBoundingClientRect',{value:()=>({x:0,y:0,top:0,left:0,bottom:320,right:600,width:600,height:320,toJSON:()=>({})})});
 class ResizeObserverMock {constructor(private callback:ResizeObserverCallback){}observe(target:Element){this.callback([{target,contentRect:{width:600,height:320}} as ResizeObserverEntry],this as unknown as ResizeObserver);}unobserve(){}disconnect(){}}
 vi.stubGlobal('ResizeObserver',ResizeObserverMock);
 HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','');};HTMLDialogElement.prototype.close=function(){this.removeAttribute('open');};
}
afterEach(()=>cleanup());
