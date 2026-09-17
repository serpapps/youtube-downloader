(function(){const u=globalThis.Auth,r=globalThis.SiteConfig||{},I=r.SITE_NAME||"Downloader",f=r.HELP_URL||r.helpUrl||"https://help.serp.co/en/",S=r.helpLinkLabel||"Need help?";try{const e=document.getElementById("bootSplash");e&&setTimeout(()=>{try{e.classList.add("hidden")}catch{}},2500)}catch{}const B=`
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--border-dark);
}

.header h1,
.header h2 {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0;
  color: var(--text-primary) !important;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header > :first-child {
  flex: 1 1 auto;
  min-width: 0;
}

.header-right,
.auth-status,
#helpBtn,
.help-btn,
#helpTextDisplay,
.help-text-display,
#helpSection,
#quickHelpBtn,
#quickHelpBanner,
.quick-help-banner,
.help-icon-btn {
  display: none !important;
}

.need-help-link {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 13px;
}

.need-help-link:hover {
  color: var(--text-subtle);
}

.top-help-link {
  margin-left: auto;
  margin-top: 0;
  align-self: center;
  flex: 0 0 auto;
  white-space: nowrap;
  padding-left: 10px;
}

/* Popup-shell compatibility (social/capture layouts) */
body[data-auth-screen="visible"] {
  margin: 0 !important;
  width: 400px !important;
  min-height: auto !important;
  overflow-x: hidden !important;
}

body[data-auth-screen="visible"] .bg-orbit {
  display: none !important;
}

body[data-auth-screen="visible"] .popup-shell {
  width: 400px !important;
  min-height: 200px !important;
  padding: 16px !important;
  background: var(--bg-dark) !important;
  color: var(--text-primary) !important;
}

body[data-auth-screen="visible"] .popup-shell > #bootSplash,
body[data-auth-screen="visible"] .popup-shell > .boot-splash,
body[data-auth-screen="visible"] .popup-shell > #status,
body[data-auth-screen="visible"] .popup-shell > .status {
  display: none !important;
}

body[data-auth-screen="visible"] .popup-shell .kicker,
body[data-auth-screen="visible"] .popup-shell .subtitle,
body[data-auth-screen="visible"] .popup-shell .ghost-btn {
  display: none !important;
}

#activationSection:not(.hidden) ~ #mainContent {
  display: none !important;
}

.activation-section {
  position: relative;
  overflow: hidden;
  padding: 0 !important;
  border-radius: 16px;
  border: 1px solid var(--border-dark) !important;
  background:
    radial-gradient(circle at 20% -10%, rgba(80, 108, 240, 0.14), transparent 45%),
    radial-gradient(circle at 90% 120%, rgba(80, 108, 240, 0.1), transparent 45%),
    var(--bg-dark) !important;
}

.activation-ambient {
  position: absolute;
  width: 420px;
  height: 420px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -52%);
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--brand-accent) 25%, transparent) 0%, transparent 72%);
  pointer-events: none;
  z-index: 0;
}

.activation-panel {
  position: relative;
  z-index: 1;
  padding: 24px 22px 20px;
}

.activation-icon-badge {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--brand-accent), var(--brand-accent-hover));
  box-shadow: 0 8px 28px color-mix(in srgb, var(--brand-accent) 36%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.activation-icon-badge svg {
  width: 24px;
  height: 24px;
  color: var(--text-primary);
}

.activation-header h2 {
  color: var(--text-primary);
  font-size: 22px;
  line-height: 1.15;
  margin: 0 0 10px 0;
  text-align: left;
}

.activation-subtitle {
  color: var(--text-subtle);
  margin: 0 0 18px 0;
  font-size: 13px;
  line-height: 1.5;
  text-align: left;
}

.trial-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  color: var(--success);
  background: color-mix(in srgb, var(--success) 16%, transparent);
  border: 1px solid color-mix(in srgb, var(--success) 35%, transparent);
  padding: 6px 11px;
  border-radius: 999px;
  margin-bottom: 18px;
}

.trial-pill svg {
  width: 14px;
  height: 14px;
}

.activation-form {
  width: 100%;
}

.input-group {
  margin-bottom: 14px;
}

.input-group label {
  display: block;
  color: var(--text-subtle);
  font-size: 13px;
  margin-bottom: 8px;
  font-weight: 600;
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 42px;
  padding: 0 12px;
  border: 1px solid var(--input-border) !important;
  border-radius: 10px;
  background: var(--bg-darker) !important;
  box-sizing: border-box;
}

.input-icon {
  position: static;
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  pointer-events: none;
  flex: 0 0 18px;
  order: -1;
}

.input-icon svg {
  width: 18px;
  height: 18px;
  display: block;
}

.input-wrapper input {
  width: 100%;
  min-width: 0;
  height: 100%;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 42px !important;
  border: 0 !important;
  border-radius: 0;
  background: transparent !important;
  appearance: none;
  -webkit-appearance: none;
  transform: none;
  color: var(--text-primary) !important;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  box-sizing: border-box;
}

.input-wrapper input::placeholder {
  color: var(--text-muted);
}

.input-wrapper:focus-within {
  border-color: color-mix(in srgb, var(--brand-accent) 65%, var(--input-border)) !important;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-accent) 25%, transparent);
}

.input-wrapper input:focus {
  outline: none;
  box-shadow: none;
}

.activation-actions {
  display: grid;
  gap: 10px;
  margin-top: 2px;
}

.activate-btn {
  width: 100%;
  padding: 13px;
  background: var(--brand-accent) !important;
  color: var(--text-primary) !important;
  border: none !important;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease;
}

.activate-btn:hover:not(:disabled) {
  background: var(--brand-accent-hover) !important;
  box-shadow: 0 8px 24px color-mix(in srgb, var(--brand-accent) 28%, transparent);
}

.activate-btn:active:not(:disabled) {
  transform: scale(0.985);
}

.activate-btn:disabled {
  opacity: 0.62;
  cursor: not-allowed;
}

.activation-actions .secondary {
  background: var(--bg-darker) !important;
  border: 1px solid var(--border-dark) !important;
  color: var(--text-primary) !important;
}

.activation-actions .secondary:hover:not(:disabled) {
  background: color-mix(in srgb, var(--brand-accent) 20%, var(--bg-darker)) !important;
  border-color: color-mix(in srgb, var(--brand-accent) 50%, var(--border-dark)) !important;
  box-shadow: none;
}

.activation-status {
  padding: 10px;
  border-radius: 10px;
  margin: 14px 0;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
}

.activation-status.success {
  background: color-mix(in srgb, var(--success) 14%, transparent);
  color: var(--success);
  border: 1px solid color-mix(in srgb, var(--success) 38%, transparent);
}

.activation-status.error {
  background: color-mix(in srgb, var(--error) 14%, transparent);
  color: var(--error);
  border: 1px solid color-mix(in srgb, var(--error) 38%, transparent);
}

.activation-status.info {
  background: color-mix(in srgb, var(--info) 14%, transparent);
  color: var(--info);
  border: 1px solid color-mix(in srgb, var(--info) 38%, transparent);
}

.upgrade-link {
  display: block;
  text-align: center;
  margin-top: 6px;
  font-size: 13px;
  color: var(--text-muted);
  text-decoration: none;
}

.upgrade-link span {
  color: var(--brand-accent);
  font-weight: 700;
}

.upgrade-link:hover span {
  color: color-mix(in srgb, var(--brand-accent) 85%, white 15%);
}

.quick-help-link {
  color: var(--brand-accent);
  text-decoration: underline;
  white-space: nowrap;
}

.hidden {
  display: none !important;
}
`;async function L(){try{const[e]=await chrome.tabs.query({active:!0,currentWindow:!0});return Number.isFinite(e?.id)?e.id:null}catch{return null}}async function P(){try{if(!chrome?.runtime?.sendMessage)return!1;await chrome.runtime.sendMessage({action:"refreshYouTubeActivationUi",forceActivated:!0}).catch(()=>null);const e=await L();return!!(await chrome.runtime.sendMessage({action:"openYouTubeSidePanel",tabId:e,forceActivated:!0}))?.success}catch{return!1}}async function N(){try{if(!chrome?.sidePanel?.open)return!1;const e=await L(),i={path:"sidepanel-loading.html",enabled:!0};if(Number.isFinite(e)&&(i.tabId=e),chrome.sidePanel.setOptions&&await chrome.sidePanel.setOptions(i),Number.isFinite(e))return await chrome.sidePanel.open({tabId:e}),!0;const h=(await chrome.tabs.query({active:!0,lastFocusedWindow:!0}).catch(()=>[]))?.[0]?.windowId;if(Number.isFinite(h))return await chrome.sidePanel.open({windowId:h}),!0}catch{}return!1}function s(e,i,t){if(e&&(e.textContent=i||"",e.className="activation-status",t&&(e.classList.add(t),e.classList.add("status-"+t)),e.classList.remove("hidden"),t!=="success")){try{clearTimeout(e.__hideTimer)}catch{}e.__hideTimer=setTimeout(()=>{try{e.classList.add("hidden")}catch{}},5e3)}}function _(){if(document.getElementById("serp-auth-ui-styles"))return;const e=document.createElement("style");e.id="serp-auth-ui-styles",e.textContent=B,(document.head||document.documentElement).appendChild(e)}function M(e,i){const t=r.activationHeading||"Get started in seconds",h=r.activationSubtitle||"Enter your email to activate the extension. We'll send a quick verification code - no password needed.",w=r.sendCodeLabel||"Send verification code",x=r.verifyCodeLabel||"Verify & Continue",o=r.upgradePrefixText||"Want unlimited downloads?",l=r.buyLinkLabel||"Get a license ->",y=r.trialPillText||"3 free downloads included";e.innerHTML=`
      <div class="activation-ambient" aria-hidden="true"></div>
      <div class="activation-panel">
        <div class="activation-icon-badge" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
          </svg>
        </div>
        <div class="activation-header">
          <h2>${t}</h2>
          <p class="activation-subtitle">${h}</p>
        </div>
        <div class="trial-pill" role="status" aria-live="polite">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          ${y}
        </div>
        <div class="activation-form">
        <div class="input-group">
          <label for="emailInput">Email address</label>
          <div class="input-wrapper">
            <input type="email" id="emailInput" placeholder="you@example.com" autocomplete="email" />
            <span class="input-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
            </span>
          </div>
        </div>
        <div class="input-group hidden" id="codeGroup">
          <label for="codeInput">Verification Code</label>
          <div class="input-wrapper">
            <input type="text" id="codeInput" placeholder="123456" inputmode="numeric" autocomplete="one-time-code" />
            <span class="input-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 7.5V6a3 3 0 10-6 0v1.5m6 0h-6m6 0h1.5A1.5 1.5 0 0118 9v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 18V9a1.5 1.5 0 011.5-1.5H9"/>
              </svg>
            </span>
          </div>
        </div>
        <div class="activation-actions">
          <button id="sendCodeBtn" class="activate-btn" type="button">${w}</button>
          <button id="activateBtn" class="activate-btn hidden" type="button">${x}</button>
        </div>
        <div id="activationStatus" class="activation-status hidden"></div>
        <a href="#" id="buyKeyLink" class="upgrade-link" target="_blank">${o} <span>${l}</span></a>
        </div>
      </div>
    `;const p=e.querySelector("#buyKeyLink"),d=r.PRODUCT_URL||i||"";p&&(d?p.setAttribute("href",d):p.remove())}function q(){if(!f||document.getElementById("needHelpTopLink"))return;const e=document.createElement("a");e.id="needHelpTopLink",e.className="need-help-link top-help-link",e.href=f,e.target="_blank",e.rel="noopener noreferrer",e.textContent=S;const i=document.querySelector(".header");if(i){i.appendChild(e);return}const t=document.querySelector(".header h1, .header h2");t&&t.insertAdjacentElement("afterend",e)}function z(){if(!f)return;document.querySelectorAll(".help-text-content, #helpSection, #quickHelpBanner, .quick-help-banner").forEach(i=>{if(!i||i.querySelector('[data-serp-help-link="1"]'))return;const t=document.createElement("a");t.href=f,t.target="_blank",t.rel="noopener noreferrer",t.textContent=S,t.className="quick-help-link",t.style.color="var(--brand-accent, #7aa2ff)",t.style.textDecoration="underline",t.setAttribute("data-serp-help-link","1"),i.appendChild(document.createTextNode(" ")),i.appendChild(t)})}function T(e,i,t){e&&e.classList.remove("hidden"),i&&i.classList.remove("hidden");try{t&&t.focus()}catch{}}function A(){if(z(),!u||!chrome?.storage?.local)return;const e=document.getElementById("activationSection");if(!e||e.dataset.serpAuthUi==="1")return;const i=()=>{e.dataset.serpAuthUi="1";const t=document.getElementById("mainContent");t&&t.classList.add("hidden");const h=document.getElementById("buyKeyLink"),w=h?h.getAttribute("href"):"",x=document.getElementById("helpSection");x&&x.remove(),_(),M(e,w),q();const o=document.getElementById("emailInput"),l=document.getElementById("codeInput"),y=document.getElementById("codeGroup"),p=document.getElementById("sendCodeBtn"),d=document.getElementById("activateBtn"),c=document.getElementById("activationStatus");if(!o||!l||!d||!p)return;const E=u.storageKeys&&u.storageKeys.email||"authEmail",H=(u.config||{}).entitlementName||r.AUTH_ENTITLEMENT||r.ENTITLEMENT||r.SITE_NAME||I||"default-entitlement",k=`otpState:${String(H).replace(/[^a-z0-9_-]+/gi,"-")}`,O=600*1e3;let b="";function V(n){const a={email:n||null,sentAt:Date.now()};b=String(n||"");try{chrome.storage.local.set({[k]:a})}catch{}}function v(){b="";try{chrome.storage.local.remove([k])}catch{}}function j(n){const a=n&&n.message?String(n.message):"";return/NO_ENTITLEMENTS|no[_ -]?entitlements|401/i.test(a)?"You're signed in, but this email does not have access yet. Please purchase access or use the email that owns your license.":a||"Activation failed."}function F(n){if(!n)return;const a=n.sentAt,m=n.email;m&&!o.value&&(o.value=String(m)),typeof a=="number"&&Date.now()-a<O?(b=String(m||""),T(y,d,l),s(c,"Enter the code we emailed you.","info")):v()}try{chrome.storage.local.get([E,k],n=>{const a=n&&n[E];a&&!o.value&&(o.value=String(a)),F(n&&n[k])})}catch{}o.addEventListener("input",()=>{try{const n=String(o.value||"").trim();chrome.storage.local.set({[E]:n}),b&&b!==n&&v()}catch{}});async function U(){const n=String(o.value||"").trim();if(!n){s(c,"Please enter your email.","error");return}p.disabled=!0,s(c,"Sending code...","info");try{await u.requestCode(n),s(c,"Code sent! Check your email.","success"),T(y,d,l),V(n)}catch(a){const m=a&&a.message?a.message:"Failed to send code.";s(c,m,"error")}finally{p.disabled=!1}}async function C(){const n=String(o.value||"").trim(),a=String(l.value||"").trim();if(!n||!a){s(c,"Please enter both email and code.","error");return}d.disabled=!0,s(c,"Verifying code...","info");const m=await N();try{await u.activate({email:n,code:a});const g=await u.checkActivation();if(!g||!g.isActivated){v(),s(c,"You're signed in, but this email does not have access yet. Please purchase access or use the email that owns your license.","error");return}v(),s(c,"Activation successful! Opening sidebar...","success");const $=await P();if(m||$){setTimeout(()=>{try{window.close()}catch{}},180);return}s(c,"Activation successful! Loading...","success"),setTimeout(()=>{try{window.location.reload()}catch{}},600)}catch(g){v(),s(c,j(g),"error")}finally{d.disabled=!1}}p&&p.addEventListener("click",U),d&&d.addEventListener("click",C),o.addEventListener("keypress",n=>{if(n.key==="Enter")try{l&&l.focus()}catch{}}),l.addEventListener("keypress",n=>{n.key==="Enter"&&C()})};try{chrome.storage.local.get(["isActivated"],t=>{t&&t.isActivated||i()})}catch{i()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",A):A()})();
