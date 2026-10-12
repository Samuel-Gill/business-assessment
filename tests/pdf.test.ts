// @vitest-environment node
import {it,expect} from 'vitest';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createReportDocument} from '../src/services/reportService';
import {reportFor} from './fixtures';
import {appConfig} from '../app.config';
import {prepareBranding} from '../scripts/branding-plugin';
it('creates a paginated Unicode report with all selected responses and long comments',()=>{
 const r=reportFor('comprehensive',2);r.profile.organization='Riverbend Services — Café São Paulo';r.answers['finance-03'].comment=('Cash flow review includes receivables, payroll, and upcoming commitments. ').repeat(20).slice(0,1500);r.answers['technology-04'].followUp='Restore tests are scheduled for the first Friday of each quarter.';
 const fonts={regular:readFileSync('public/fonts/report-regular.ttf').toString('base64'),bold:readFileSync('public/fonts/report-bold.ttf').toString('base64')};const branding=prepareBranding(appConfig,process.cwd());const doc=createReportDocument(r,fonts,{data:branding.assets['app-report-logo.png'].toString('base64')});expect(doc.getNumberOfPages()).toBeGreaterThan(10);const bytes=doc.output('arraybuffer');expect(bytes.byteLength).toBeGreaterThan(30000);const output=process.env.BH360_QA_DIR||join(tmpdir(),'bh360-qa');mkdirSync(output,{recursive:true});writeFileSync(join(output,'sample-report.pdf'),Buffer.from(bytes));
});
