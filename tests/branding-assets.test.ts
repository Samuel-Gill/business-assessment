// @vitest-environment node
import {describe,it,expect} from 'vitest';
import {prepareBranding} from '../scripts/branding-plugin';
import {appConfig} from '../app.config';
import {mkdtempSync,mkdirSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
describe('branding build assets and metadata',()=>{
 it('updates derived branding when a replacement logo is uploaded and supports PNG logos',()=>{
  const root=mkdtempSync(join(tmpdir(),'brand-assets-'));try{mkdirSync(join(root,'public'));const source='<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle cx="32" cy="32" r="28" fill="#ff0066"/></svg>';writeFileSync(join(root,'public','custom.svg'),source);const custom=prepareBranding({...appConfig,appLogo:'/custom.svg'},root),original=prepareBranding(appConfig,process.cwd());expect(custom.urls.logo).not.toBe(original.urls.logo);expect(custom.urls.favicon).not.toBe(original.urls.favicon);expect(custom.urls.thumbnail).not.toBe(original.urls.thumbnail);writeFileSync(join(root,'public','custom.png'),custom.assets['app-report-logo.png']);const png=prepareBranding({...appConfig,appLogo:'/custom.png'},root);expect(png.urls.logo).toMatch(/custom.png\?v=/);expect(png.assets['app-report-logo.png'].length).toBeGreaterThan(500);}finally{rmSync(root,{recursive:true,force:true});}
 });
 it('escapes company names containing punctuation in the initial HTML title',()=>{
  const b=prepareBranding({...appConfig,appName:'ACME & <Partners>'},process.cwd());const transform=b.plugin.transformIndexHtml as ()=>{tag:string;children?:string}[];const title=transform().find(t=>t.tag==='title');expect(title?.children).toContain('ACME &amp; &lt;Partners&gt;');
 });

 it('generates PNG favicon, report logo, and 1200 by 630 thumbnail',()=>{const b=prepareBranding(appConfig,process.cwd());for(const asset of Object.values(b.assets))expect(asset.subarray(0,8).toString('hex')).toBe('89504e470d0a1a0a');const png=b.assets['app-thumbnail.png'];expect(png.readUInt32BE(16)).toBe(1200);expect(png.readUInt32BE(20)).toBe(630);expect(b.urls.logo).toMatch(/app-logo.svg\?v=/);});
 it('updates generated social imagery when the central name changes',()=>{const first=prepareBranding(appConfig,process.cwd()),second=prepareBranding({...appConfig,appName:'Riverbend Advisory'},process.cwd());expect(second.urls.thumbnail).not.toBe(first.urls.thumbnail);expect(second.urls.logo).toBe(first.urls.logo);});
 it('supports separate favicon/thumbnail overrides and rejects missing or unsafe logo paths',()=>{const b=prepareBranding({...appConfig,appFavicon:'/app-logo.svg',appThumbnail:'/app-logo.svg'},process.cwd());expect(b.urls.favicon).toBe(b.urls.logo);expect(b.urls.thumbnail).toBe(b.urls.logo);expect(()=>prepareBranding({...appConfig,appLogo:'/missing.png'},process.cwd())).toThrow();expect(()=>prepareBranding({...appConfig,appLogo:'https://example.com/logo.png'},process.cwd())).toThrow(/local/);expect(()=>prepareBranding({...appConfig,appLogo:'/../package.json'},process.cwd())).toThrow(/inside public/);});
});
