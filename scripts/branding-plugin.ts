import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve,extname,sep} from 'node:path';
import {Resvg} from '@resvg/resvg-js';
import type {Plugin} from 'vite';
import type {AppConfig} from '../app.config';
const escape=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
function assetFile(root:string,path:string){if(!path.startsWith('/')||path.startsWith('//')||/[?#]/.test(path))throw new Error('Branding images must be local public/ paths, e.g. /my-logo.png.');const dir=resolve(root,'public'),file=resolve(dir,decodeURIComponent(path.slice(1)));if(!file.startsWith(dir+sep))throw new Error('Branding image must be inside public/.');return file;}
export function prepareBranding(config:AppConfig,root:string){
 if(!config.appName.trim()||config.appName.length>100||/[\r\n]/.test(config.appName))throw new Error('appName must contain 1–100 characters on one line.');
 if(config.appUrl&&(!URL.canParse(config.appUrl)||!['https:','http:'].includes(new URL(config.appUrl).protocol)))throw new Error('appUrl must be an absolute HTTP(S) URL or an empty string.');
 const logoBytes=readFileSync(assetFile(root,config.appLogo));const ext=extname(config.appLogo).toLowerCase();const types:Record<string,string>={'.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp'};if(!types[ext])throw new Error('appLogo must be an SVG, PNG, JPG, or WebP image.');
 const logoSource=ext==='.svg'?logoBytes.toString('utf8'):`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><image href="data:${types[ext]};base64,${logoBytes.toString('base64')}" width="512" height="512" preserveAspectRatio="xMidYMid meet"/></svg>`;
 const square=(size:number)=>new Resvg(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><image href="data:image/png;base64,${new Resvg(logoSource,{fitTo:{mode:'width',value:512}}).render().asPng().toString('base64')}" x="0" y="0" width="${size}" height="${size}" preserveAspectRatio="xMidYMid meet"/></svg>`).render().asPng();
 const png=square(256),favicon=square(64);
 const lines:string[]=[];let line='';for(const word of config.appName.split(/\s+/)){if(line&&(line+' '+word).length>25){lines.push(line);line=word;}else line=line?line+' '+word:word;}if(line)lines.push(line);
 const size=lines.length>3?48:lines.length>2?56:66;
 const title=lines.map((s,i)=>`<text x="80" y="${260+i*(size+18)}" font-size="${size}" font-family="DejaVu Sans,Arial,sans-serif" font-weight="bold" fill="white">${escape(s)}</text>`).join('');
 const thumbnail=new Resvg(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="${escape(config.themeColor)}"/><circle cx="1100" cy="190" r="240" fill="#2563EB" opacity=".12"/><rect x="80" y="72" width="84" height="84" rx="20" fill="white" opacity=".1"/><image href="data:image/png;base64,${png.toString('base64')}" x="88" y="80" width="68" height="68"/>${title}<rect x="80" y="500" width="55" height="4" fill="#D4A94E"/><text x="80" y="553" font-family="DejaVu Sans,Arial,sans-serif" font-size="25" fill="#B7C8E1">${escape(config.tagline)}</text></svg>`,{font:{loadSystemFonts:true}}).render().asPng();
 const assets={'app-favicon.png':favicon,'app-thumbnail.png':thumbnail,'app-report-logo.png':png};
 const hashed=(path:string,bytes:Uint8Array)=>`${path}?v=${createHash('sha256').update(bytes).digest('hex').slice(0,12)}`;
 const override=(path:string,fallback:string)=>path?hashed(path,readFileSync(assetFile(root,path))):hashed('/'+fallback,assets[fallback as keyof typeof assets]);
 const urls={logo:hashed(config.appLogo,logoBytes),favicon:override(config.appFavicon,'app-favicon.png'),thumbnail:override(config.appThumbnail,'app-thumbnail.png'),reportLogo:hashed('/app-report-logo.png',png)};
 const absolute=(path:string)=>config.appUrl?new URL(path,config.appUrl).href:path;
 const tags=[
  {tag:'title',children:escape(`${config.tagline} · ${config.appName}`)},
  {tag:'meta',attrs:{name:'application-name',content:config.appName}},
  {tag:'meta',attrs:{name:'apple-mobile-web-app-title',content:config.appName}},
  {tag:'meta',attrs:{name:'description',content:config.description}},
  {tag:'meta',attrs:{name:'theme-color',content:config.themeColor}},
  {tag:'link',attrs:{rel:'icon',href:urls.favicon}},
  {tag:'link',attrs:{rel:'apple-touch-icon',href:urls.reportLogo}},
  {tag:'meta',attrs:{property:'og:type',content:'website'}},
  {tag:'meta',attrs:{property:'og:site_name',content:config.appName}},
  {tag:'meta',attrs:{property:'og:title',content:config.appName}},
  {tag:'meta',attrs:{property:'og:description',content:config.description}},
  {tag:'meta',attrs:{property:'og:image',content:absolute(urls.thumbnail)}},
  {tag:'meta',attrs:{property:'og:image:alt',content:`${config.appName} — ${config.tagline}`}},
  {tag:'meta',attrs:{name:'twitter:card',content:'summary_large_image'}},
  {tag:'meta',attrs:{name:'twitter:title',content:config.appName}},
  {tag:'meta',attrs:{name:'twitter:description',content:config.description}},
  {tag:'meta',attrs:{name:'twitter:image',content:absolute(urls.thumbnail)}},
  ...(config.appUrl?[{tag:'meta',attrs:{property:'og:url',content:config.appUrl}},{tag:'link',attrs:{rel:'canonical',href:config.appUrl}}]:[]),
 ];
 const plugin:Plugin={name:'central-app-branding',transformIndexHtml(){return tags.map(tag=>({...tag,injectTo:'head' as const}));},configureServer(server){server.middlewares.use((req,res,next)=>{const name=(req.url||'').split('?')[0].replace(/^\//,'');if(!(name in assets)){next();return;}res.setHeader('Content-Type','image/png');res.setHeader('Cache-Control','no-cache');res.end(assets[name as keyof typeof assets]);});},generateBundle(){for(const [fileName,source] of Object.entries(assets))this.emitFile({type:'asset',fileName,source});}};
 return {urls,assets,plugin};
}
