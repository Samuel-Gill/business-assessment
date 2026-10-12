const env = import.meta.env;
export const consultant = {
  firmName: env.VITE_FIRM_NAME?.trim() || 'Business Health 360',
  name: env.VITE_CONSULTANT_NAME?.trim() || 'Business Health Advisory',
  email: env.VITE_CONSULTANT_EMAIL?.trim() || '',
  phone: env.VITE_CONSULTANT_PHONE?.trim() || '',
  website: env.VITE_CONSULTANT_WEBSITE?.trim() || '',
  bookingUrl: env.VITE_BOOKING_URL?.trim() || '',
  logo: '',
  colors: {navy:'#14213D',blue:'#2563EB',gold:'#D4A94E'},
  welcome: 'Clarity today. A stronger business tomorrow.',
  disclaimer: 'This report is based on information self-reported by the organization and is intended for preliminary business assessment and consulting discussions. It does not constitute a financial audit, legal opinion, cybersecurity certification, or guarantee of business performance.',
};
export function safeUrl(value:string):string|undefined {try {const u=new URL(value);return ['https:','http:'].includes(u.protocol)?u.href:undefined;}catch{return undefined;}}
export const consultationUrl = safeUrl(consultant.bookingUrl) || (consultant.email ? `mailto:${consultant.email}?subject=Business%20Health%20Consultation` : undefined);
export const scoreConfig = {
  thresholds: [{min:85,label:'Strong',tone:'strong'},{min:70,label:'Good',tone:'good'},{min:55,label:'Developing',tone:'developing'},{min:40,label:'Needs Attention',tone:'attention'},{min:0,label:'Critical Improvement Needed',tone:'critical'}],
  categoryWeights: {operations:1,finance:1,accounting:1,management:1,hr:1,technology:1},
  minimumCategoryAnswers: {quick:2,comprehensive:5},minimumCategories:4,minimumNumericCoverage:0.5,
  priority: {critical:17,high:12,medium:4},
};
export const emailConfig = {
  serviceId:env.VITE_EMAILJS_SERVICE_ID?.trim()||'',templateId:env.VITE_EMAILJS_TEMPLATE_ID?.trim()||'',publicKey:env.VITE_EMAILJS_PUBLIC_KEY?.trim()||'',
  includeFullResponses:env.VITE_EMAILJS_INCLUDE_FULL_RESPONSES!=='false',
  maxBytes:Math.min(45000,Math.max(10000,Number(env.VITE_EMAILJS_MAX_BYTES)||42000)),
  captchaSiteKey:env.VITE_RECAPTCHA_SITE_KEY?.trim()||'',
};
export const emailReady=Boolean(emailConfig.serviceId&&emailConfig.templateId&&emailConfig.publicKey&&consultant.email);
