import {describe,it,expect} from 'vitest';
import {render,screen} from '@testing-library/react';
import {appConfig,appAssets,pageTitle,reportFilename} from '../src/config/branding';
import {Brand,Footer} from '../src/components/Common';
import {buildEmailPlan} from '../src/services/emailService';
import {reportFor} from './fixtures';
describe('central app branding',()=>{
 it('uses the configured name and image in the header and footer',()=>{render(<><Brand onClick={()=>{}}/><Footer/></>);expect(screen.getByRole('button',{name:`${appConfig.appName} home`})).toBeInTheDocument();expect(screen.getAllByText(appConfig.appName)).toHaveLength(2);expect(document.querySelector('.brand-mark img')).toHaveAttribute('src',appAssets.logo);});
 it('uses the configured name in every page title and PDF filename',()=>{for(const stage of ['landing','profile','assessment','review','results','confirmation'])expect(pageTitle(stage)).toContain(appConfig.appName);expect(reportFilename('Café Services')).toMatch(/-Cafe-Services\.pdf$/);expect(reportFilename('')).toMatch(/-Organization\.pdf$/);});
 it('brands the email payload from the same configuration',()=>{const p=buildEmailPlan(reportFor());expect(p.params.app_name).toBe(appConfig.appName);expect(p.params.app_logo).toBe(new URL(appAssets.logo,appConfig.appUrl).href);expect(p.params.report_summary).toContain(appConfig.appName);});
});
