import {appConfig} from '../../app.config';
export {appConfig};
export const appAssets = __APP_ASSETS__;
export function pageTitle(stage:string){const label=stage==='landing'?appConfig.tagline:stage==='results'?'Your Report':stage==='profile'?'Business Profile':stage==='review'?'Review':stage==='confirmation'?'Thank You':'Assessment';return `${label} · ${appConfig.appName}`;}
export function publicAssetUrl(path:string){return new URL(path,appConfig.appUrl||window.location.origin).href;}
export function reportFilename(organization:string){const slug=(s:string)=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]+/g,'-').replace(/^-|-$/g,'');return `${slug(appConfig.appName)||'Assessment'}-${slug(organization)||'Organization'}.pdf`;}
