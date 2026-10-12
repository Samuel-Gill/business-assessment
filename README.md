# Business Health 360

A complete static React + TypeScript business assessment application. It supports a 24-question Quick Assessment and a 60-question Comprehensive Assessment across operations, finance, accounting, strategy, people, and technology. Responses drive deterministic scores, mapped recommendations, a prioritized roadmap, and a paginated downloadable PDF.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

A blank EmailJS configuration is supported: customers can complete, preview, and download their reports, but submitting shows a clear configuration error. No successful submission is simulated.

```bash
npm test
npm run build
npm run preview
```

The production output is `dist/`. No application server, database, user account, or paid AI service is required.

## Configure the consultant

Edit `.env.local` using `.env.example`, then restart development or rebuild production. All `VITE_*` values are browser-public build-time values. Never place private API keys, SMTP credentials, or a CAPTCHA secret in these variables.

Required for sending:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_CONSULTANT_EMAIL` (public contact address, not a dynamic email recipient)

Optional branding/contact values include consultant name, firm name, phone, website, and booking URL. Booking URLs accept only HTTP(S); otherwise a configured consultant email becomes the consultation link. Without either, the app explains that contact details await configuration rather than opening a broken link.

Change brand colors, logo path, welcome copy, disclaimer, and score configuration in `src/config/consultant.ts`. The CSS uses navy, blue, and gold custom properties initialized from the configuration. Category-specific colors are in `src/data/categories.ts`. Set `logo` to the path of an approved local asset in `public/` to use it in the header; the default is a Lucide brand mark.

## EmailJS setup

1. Create an EmailJS account and connect your sending email service.
2. Create a consultant template. Set **To Email** to the consultant's fixed address directly in EmailJS. Never make the recipient a user-supplied template variable.
3. Set **Subject** to `{{subject}}` and **Reply-To** to `{{reply_to}}`. Use a sender supported by the connected service, rather than the customer's address as From.
4. Copy the content from `EMAILJS_TEMPLATE.html` into the template. Use double-bracket variables, which EmailJS escapes. Do not replace them with unsafe triple-bracket interpolation.
5. Fill the service, template, public key, and consultant contact values in `.env.local` or your hosting project's build environment. Restart/rebuild.
6. Add only approved production domains and local development origins to EmailJS's domain allowlist. Review service quotas, spam protections, and rate settings.
7. For production spam protection, enable reCAPTCHA **v2** in EmailJS's template settings. Put its secret only in the EmailJS dashboard. Set the public site key as `VITE_RECAPTCHA_SITE_KEY`, and register the same approved hostnames in Google reCAPTCHA. The app renders the checkbox challenge and sends `g-recaptcha-response`.
8. Run an actual end-to-end test using a fictional organization on your deployed domain. Confirm service acceptance, the consultant's inbox, complete response formatting, reply-to behavior, and any CAPTCHA requirements. EmailJS API acceptance alone does not prove inbox delivery.

The app uses the official `@emailjs/browser` SDK. No recipient address is passed in the payload. It blocks concurrent submissions and avoids repeat sends after a confirmed success during the current page session. SDK throttling is configured to ten seconds. After an ambiguous network failure, verify receipt with the consultant before retrying; browser-only logic cannot guarantee exactly-once delivery across refreshes, tabs, or lost responses.

### Complete responses, limits, and PDFs

EmailJS documents a 50 KB total dynamic-variable limit. This implementation uses a conservative 42,000-byte UTF-8 JSON budget by default (maximum configurable budget 45,000). The size check includes variable names and serialized content, which is conservative.

- `VITE_EMAILJS_INCLUDE_FULL_RESPONSES=true`: send a concise executive summary and all selected questions, answers, comments, and follow-up details when they fit.
- If full details exceed the budget, use an explicit summary-only plan. Before submission, the client must acknowledge that the complete PDF needs to be downloaded and separately shared. Both the email and confirmation disclose this scope. No response is silently truncated.
- `VITE_EMAILJS_INCLUDE_FULL_RESPONSES=false`: always use this acknowledged summary-only behavior.
- If even the summary exceeds capacity, sending is refused and a backup report remains available.

The app generates downloadable PDFs in the browser using jsPDF with embedded DejaVu fonts and line-based pagination. It does **not** attach PDFs, host report links, or email customer copies. Add attachments or a separate auto-reply only after configuring and testing those features with your EmailJS service and subscription limits. The supplied template displays every payload section; a different template that omits `full_responses` will not deliver complete details even if the API succeeds.

## Scoring rules and assumptions

- Numeric maturity ratings are integers from 1 to 5, consistently stronger at higher values.
- Normalization: `((answer - 1) / 4) * 100`.
- Category score: weighted mean of normalized numeric answers. Configured critical practices have weight 2; others weight 1.
- Not Applicable is excluded; Not Sure is unknown and excluded. Unknowns generate clarification prompts, not negative findings. Missing responses never become zero.
- Category minimum numeric answers: 2 in Quick mode; 5 in Comprehensive mode.
- Overall score requires every selected question to have a response, at least 4 scorable categories, and numeric answers to at least 50% of selected questions. This is a documented practical default, not a validated statistical standard.
- Overall score is the equally weighted mean of scorable categories. Categories with insufficient responses are excluded and visibly identified. Having an overall score does not mean complete coverage of all dimensions.
- Numeric coverage = numeric answers / all selected questions. Applicable coverage = numeric answers / (all questions - Not Applicable).
- Scores display whole numbers, but diagnostic classification uses the unrounded value. A displayed 85 may be classified Good when the underlying score is below 85.
- Bands: Strong ≥85, Good ≥70, Developing ≥55, Needs Attention ≥40, otherwise Critical Improvement Needed. These are consultant-defined bands, not external industry benchmarks.
- Tied categories are labeled as ties. Radar charts omit missing category points; the score table gives the full coverage and uncertainty.

## Questions, recommendations, and priorities

`src/data/questions.ts` defines 60 configurable questions, including ID, category, text, explanation, weight, answer type, follow-up prompts, quick-mode inclusion, recommendation IDs, critical flag, potential impact, and estimated effort. The question bank supports industry metadata, but core questions are retained for all industries to guarantee 24 or 60 selected questions. Clients select Not Applicable where appropriate.

To customize questions:

1. Update the question bank, preserving unique stable IDs.
2. Maintain exactly four `quick: true` questions and ten comprehensive questions per category unless intentionally changing mode counts and tests.
3. Map recommendations in `src/data/recommendations.ts`. There is one distinct practical action for every core question.
4. Adjust industry context and size-aware implementation advice in `src/data/industryRules.ts`.
5. Update test expectations when changing scoring weights or selection counts. If changing draft structure or answer compatibility, bump its version/storage key.

Ratings 1–3 produce recommendations. Ratings 4–5 are eligible for reported strengths. Unknown answers produce clarification items. Priority rank combines `(5 - answer) * weight + impact + critical bonus - effort`; configured cutoffs determine critical/high/medium/low bands. Critical practices rated 1 or 2 are promoted to Critical regardless of the rank. Actions are sorted deterministically, with stable question IDs breaking ties.

Default timing: Critical/High within 30 days; Medium 31–90 days; Low 3–12 months. The PDF and dashboard also explain the 30/60/90-day sequencing. Responsible functions and expected benefits are planning suggestions, not assertions about the client's current organization or quantified ROI.

Technology content uses NIST Cybersecurity Framework 2.0 as conceptual guidance for governance, protection, detection, response, and recovery. This is neither a NIST compliance instrument nor an independent security review. Accounting and HR results do not constitute audit or legal determinations.

## Progress and privacy

Unsent profiles and responses use `sessionStorage`, rather than persistent local storage. They survive same-tab refreshes and ordinary navigation within the browser session. Session lifecycle and browser restoration behavior depend on the browser; unsent data is not uploaded to an assessment database. It is cleared after confirmed email-service acceptance or an explicitly confirmed fresh start. If storage is unavailable, the app warns that only in-memory progress is available. A close/refresh warning helps avoid accidental loss before submission.

The application gathers business contact details and self-reported practices. Financial ranges and context are optional. It requests no account numbers, tax IDs, credentials, or confidential documents. Personal or confidential details should not be entered into free-text fields unnecessarily. CAPTCHA, if configured, loads Google's verification service; email submission sends the configured assessment content to EmailJS and the connected email service.

## Deployment

### Vercel

Import this project into a Git repository, then import it in Vercel. Choose Vite with build command `npm run build` and output `dist`. Add the public `VITE_*` configuration values in the build environment and deploy. The app uses a step-based flow, so it needs no SPA route rewrites. The included `vercel.json` sets static build settings and basic response headers.

### Netlify

Use build command `npm run build`, publish directory `dist`, and configure the same public build variables. `netlify.toml` contains these settings. Rebuild after changing environment variables.

### ChatGPT Sites

The delivered hosted app is private to its owner by default. Source and deployment are maintained through Sites. For client access, use an appropriate approved sharing audience or deploy this source to your own Vercel/Netlify project. Removing the `.openai` folder from an independent copy has no effect on Vite functionality.

## Troubleshooting

- **Online submission awaiting setup:** configure all four email/contact settings and rebuild. Check the fixed recipient in EmailJS.
- **401/403 or verification errors:** check the public key, domain allowlist, CAPTCHA settings, and service/template access.
- **429:** wait before retrying; check quota and spam protection.
- **Accepted but no email:** check EmailJS history, connected provider status, spam folders, recipient, and template output.
- **Summary-only notice:** comments may exceed capacity or full details may be disabled. Download and separately share the full PDF.
- **PDF fails:** check that `public/fonts/` is deployed and can be fetched; retry when online. Long reports may take longer on low-memory devices. Unsupported writing systems may require replacement fonts.
- **No overall score:** inspect coverage, unknowns, and category minimums. Do not replace uncertain answers with guesses to obtain a score.
- **Dependency/runtime errors:** use the documented Node version and install from the included npm lockfile.

## Verification and limits

See `TEST_REPORT.md` for the checks performed. Unit and DOM component tests cover the engine, both journeys, review/editing, consent, submission states, session clearing, and chart components. PDF bytes are generated and visually inspected separately. Browser viewport screenshots and real email delivery were not verified in this environment. Before public client use, configure your consultant branding and EmailJS service, and conduct real browser/mobile and end-to-end delivery checks.

This frontend has no secure admin interface, cross-device progress, permanent assessment database, or background delivery queue. Browser controls reduce mistakes and abuse but are not a substitute for service-side allowlists, CAPTCHA, and quotas. Scores depend on self-report and coverage, and should be used to support a consulting conversation.

## References

- EmailJS SDK: https://www.emailjs.com/docs/sdk/send/
- SDK options and throttling: https://www.emailjs.com/docs/sdk/options/
- Dynamic variable escaping and limits: https://www.emailjs.com/docs/user-guide/dynamic-variables-templates/
- CAPTCHA v2 integration: https://www.emailjs.com/docs/user-guide/adding-captcha-verification/
- NIST CSF 2.0: https://www.nist.gov/cyberframework

DejaVu font license is bundled in `public/fonts/DejaVu-License.txt`.
