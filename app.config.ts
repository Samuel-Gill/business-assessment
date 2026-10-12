/** Central application branding. Edit here, then restart/rebuild the app. */
export const appConfig = {
  appName: 'Transcend Solution Group',
  // Local SVG, PNG, JPG, or WebP in public/. Example: public/my-logo.png → /my-logo.png
  appLogo: '/tsg-logo.png',
  // Optional overrides. Empty means automatically generated from appName + appLogo.
  appFavicon: '',
  appThumbnail: '',
  // Use the deployed origin so social/email image URLs are absolute. Change when moving hosts.
  appUrl: 'https://business-health-360.genialcoin9.chatgpt.site',
  tagline: 'Clarity for your next chapter',
  description: "Understand your organization's strengths, uncover improvement opportunities, and build a practical action plan.",
  themeColor: '#14213D',
};
export type AppConfig = typeof appConfig;
