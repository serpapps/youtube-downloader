(()=>{var Mt=Object.getOwnPropertyNames,Ot=(dt,A)=>function(){return A||(0,dt[Mt(dt)[0]])((A={exports:{}}).exports,A),A.exports},Pt=Ot({"../../../../../private/var/folders/q_/c0zf21jx1yd234f503mxfw680000gn/T/youtube-downloader-crossbrowser-1785402907975/harden-youtube-downloader-chrome-1785402908689/youtube-downloader/serp-bundles/content-1.bundle.js"(dt,A){(function(){const n={SITE_NAME:"YouTube",POPUP_TITLE:"Downloader for YouTube",activationHeading:"Get started in seconds",activationTitle:"Activate Video Downloader for YouTube",AUTH:{baseUrl:"https://auth.serp.co",entitlement:"youtube-downloader",storagePrefix:"youtube-downloader",requiresCode:!0},WORKER_URL:"https://ghl-check-license-worker-v2.farleythecoder.workers.dev",GUMROAD_PRODUCT_ID:"DZSfWhkbzpWRm8Rbtt5qMg==",GH_LICENSE_ID:"xKtOmYPdZ6shNVfwk9uQ",PRODUCT_URL:"https://serp.ly/youtube-downloader",UPDATE_CHECK:{enabled:!0,provider:"github-releases",repoOwner:"serpapps",repoName:"youtube-downloader",checkIntervalMs:216e5,requestTimeoutMs:8e3,releaseApiUrl:"https://api.github.com/repos/serpapps/youtube-downloader/releases/latest",releasePageUrl:"https://github.com/serpapps/youtube-downloader/releases/latest"},LOG_LEVEL:"error",LOG_MIRROR_TO_BG:!0,AUTH_ENTITLEMENT_ALIASES:[],COLORS:{brandAccent:"#ff0000",brandAccentHover:"#cc0000",bgDark:"#181818",bgDarker:"#0f0f0f",borderDark:"#303030",inputBorder:"#3d3d3d",textPrimary:"#ffffff",textMuted:"#b3b3b3",textSubtle:"#e0e0e0",success:"#4caf50",error:"#ff5722",info:"#1e88e5",lightBg:"#ffffff",lightBorder:"#e9ecef",lightMutedText:"#6c757d",lightPanelBg:"#f8f9fa",lightMutedText2:"#95a5a6",darkTextStrong:"#1f1f1f"}};function c(v=""){return String(v).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/_/g,"-").toLowerCase()}function w(v=typeof document<"u"?document:null,V=n.COLORS,N="site-theme-vars"){if(v)try{if(v.getElementById(N))return;const W=v.createElement("style");W.id=N;const ct=Object.entries(V||{}).filter(([,B])=>B!=null&&String(B)!=="").map(([B,ut])=>`--${c(B)}:${String(ut)};`).join(`
        `);W.textContent=`:root{
        ${ct}
      }`,(v.head||v.documentElement).appendChild(W)}catch{}}try{globalThis.SiteConfig=n}catch{}try{n.AUTH_BASE_URL=n.AUTH&&n.AUTH.baseUrl,n.AUTH_ENTITLEMENT=n.AUTH&&n.AUTH.entitlement,n.AUTH_STORAGE_PREFIX=n.AUTH&&n.AUTH.storagePrefix,n.AUTH_ENTITLEMENT_ALIASES=Array.isArray(n.AUTH_ENTITLEMENT_ALIASES)?[...new Set(n.AUTH_ENTITLEMENT_ALIASES.map(v=>String(v).trim()).filter(Boolean))]:[]}catch{}try{typeof document<"u"&&w(document,n.COLORS,"serp-auth-theme-vars")}catch{}try{globalThis.applySiteThemeVariables=w}catch{}try{globalThis.applyYoutubeThemeVariables=w}catch{}try{w()}catch{}})();var S={debug:10,info:20,warn:30,error:40,silent:90};function qt(){try{if(typeof globalThis<"u"&&globalThis.YTDL_LOG_LEVEL){const n=String(globalThis.YTDL_LOG_LEVEL).toLowerCase();if(n in S)return n}}catch{}try{if(typeof process<"u"&&process.env&&process.env.YTDL_LOG_LEVEL){const n=String(process.env.YTDL_LOG_LEVEL).toLowerCase();if(n in S)return n}}catch{}try{if(typeof globalThis<"u"&&globalThis.SiteConfig&&globalThis.SiteConfig.LOG_LEVEL){const c={none:"silent",error:"error",warn:"warn",log:"info",info:"info",debug:"debug"}[String(globalThis.SiteConfig.LOG_LEVEL).toLowerCase()];if(c&&c in S)return c}}catch{}return"info"}var I={level:qt(),prefix:"YTDL"};function kt(){try{if(typeof globalThis<"u"&&globalThis.YTDL_LOG_LEVEL){const n=String(globalThis.YTDL_LOG_LEVEL).toLowerCase();if(n in S)return n}}catch{}try{if(typeof globalThis<"u"&&globalThis.SiteConfig&&globalThis.SiteConfig.LOG_LEVEL){const c={none:"silent",error:"error",warn:"warn",log:"info",info:"info",debug:"debug"}[String(globalThis.SiteConfig.LOG_LEVEL).toLowerCase()];if(c&&c in S)return c}}catch{}return I.level}function j(n){const c=S[kt()]||S.info;return(S[n]??S.info)>=c}function K(n,c){const w=new Date().toISOString(),v=`[${I.prefix}]`;return[`${w} ${v}:`,...c]}var Q=(()=>{try{const n=console||{},c=function(){};return{log:(n.log||c).bind(console),info:(n.info||n.log||c).bind(console),warn:(n.warn||n.log||c).bind(console),error:(n.error||n.log||c).bind(console),debug:(n.debug||n.log||c).bind(console),trace:(n.trace||n.log||c).bind(console)}}catch{const c=function(){};return{log:c,info:c,warn:c,error:c,debug:c,trace:c}}})(),et={setLevel(n){const c=String(n||"").toLowerCase();return c in S&&(I.level=c),I.level},getLevel(){return I.level},setPrefix(n){return I.prefix=String(n||"YTDL"),I.prefix},getPrefix(){return I.prefix},debug:(...n)=>{j("debug")&&Q.debug(...K("debug",n))},info:(...n)=>{j("info")&&Q.info(...K("info",n))},warn:(...n)=>{j("warn")&&Q.warn(...K("warn",n))},error:(...n)=>{j("error")&&Q.error(...K("error",n))},trace:(...n)=>{j("debug")&&Q.trace(...K("trace",n))},patchConsole(){try{Object.entries({log:"info",info:"info",warn:"warn",error:"error",debug:"debug",trace:"trace"}).forEach(([c,w])=>{const v=(...V)=>et[w](...V);try{Object.defineProperty(v,"name",{value:`logger_${w}`})}catch{}try{console[c]=v}catch{}})}catch{}}};try{typeof globalThis<"u"&&(globalThis.ytdlLogger=et)}catch{}try{typeof globalThis<"u"&&!globalThis.__YTDL_LOGGER_PATCHED__&&(et.patchConsole(),globalThis.__YTDL_LOGGER_PATCHED__=!0)}catch{}try{typeof A<"u"&&A.exports&&(A.exports=et)}catch{}var st={cancel:"ytdlDownloader:cancelDownload",clear:"ytdlDownloader:clearCompleted",cancelAll:"ytdlDownloader:cancelAll"},ht=!1;function At(n){if(!n)return console.warn("⚠️ cancel event received without a downloadId"),!1;let c=!1;if(window.globalDownloadManager&&typeof window.globalDownloadManager.cancelDownload=="function")try{window.globalDownloadManager.cancelDownload(n),c=!0}catch(w){console.error("❌ Download manager cancel failed:",w)}if(typeof chrome<"u"&&chrome.runtime)try{chrome.runtime.sendMessage({action:"cancelDownload",downloadId:n}).catch(w=>{console.error("❌ Cancel request failed:",w)}),c=!0}catch(w){console.error("❌ Chrome runtime error:",w)}return c}function It(){let n=!1;if(window.globalDownloadManager&&typeof window.globalDownloadManager.clearCompletedDownloads=="function")try{window.globalDownloadManager.clearCompletedDownloads(),n=!0}catch(c){console.error("❌ Failed to clear completed downloads via manager:",c)}if(typeof chrome<"u"&&chrome.runtime)try{chrome.runtime.sendMessage({action:"clearCompletedDownloads"}).catch(c=>{console.error("❌ clearCompletedDownloads request failed:",c)}),n=!0}catch(c){console.error("❌ Chrome runtime error:",c)}return n}function Bt(){let n=!1;if(window.globalDownloadManager&&typeof window.globalDownloadManager.cancelAllDownloads=="function")try{window.globalDownloadManager.cancelAllDownloads(),n=!0}catch(c){console.error("❌ Download manager cancelAll failed:",c)}if(typeof chrome<"u"&&chrome.runtime)try{chrome.runtime.sendMessage({action:"cancelAllDownloads"}).catch(c=>{console.error("❌ Cancel all request failed:",c)}),n=!0}catch(c){console.error("❌ Chrome runtime error:",c)}return n}function Vt(){if(!ht)try{document.addEventListener(st.cancel,n=>{try{At(n?.detail?.downloadId)}catch(c){console.error("❌ Failed to process cancel event:",c)}}),document.addEventListener(st.clear,()=>{try{It()}catch(n){console.error("❌ Failed to process clear event:",n)}}),document.addEventListener(st.cancelAll,()=>{try{Bt()}catch(n){console.error("❌ Failed to process cancel-all event:",n)}}),ht=!0}catch(n){console.error("❌ Failed to register control event listeners:",n)}}if(Vt(),!window.embeddedVideoDetectorLoaded){let n=function(){return new Promise((a,l)=>{const r=indexedDB.open(V,W);r.onupgradeneeded=d=>{const u=d.target.result;u.objectStoreNames.contains(N)||u.createObjectStore(N)},r.onsuccess=d=>{a(d.target.result)},r.onerror=d=>{l(d.target.error)}})},c=function(a=!1){console.log("🔍 [CONTENT] ===== checkForNewVideos started ====="),console.log("🔍 [CONTENT] Current URL:",window.location.href),console.log("🔍 [CONTENT] Document title:",document.title),console.log("🔍 [CONTENT] Force detection:",a);const l=window.location.href,r=Date.now();ee=l,oe=r,pt().then(d=>{if(console.log("🔍 [CONTENT] checkForNewVideos result:",d),d){console.log(`🎬 [CONTENT] ✅ Detected ${d.platform} video:`,d.title),console.log("🎬 [CONTENT] Video details:",{id:d.id,platform:d.platform,formats:d.formats?.length||0,files:d.files?.length||0,url:d.url});try{chrome.runtime.sendMessage({type:"videoDetected",videoInfo:d,url:window.location.href,title:document.title,timestamp:Date.now()}),console.log("🎬 [CONTENT] ✅ Video detection message sent to background")}catch(u){console.error("❌ [CONTENT] Failed to send video detection message:",u)}}else console.log("🔍 [CONTENT] No videos detected on current page")}).catch(d=>{console.error("❌ [CONTENT] Error in video detection:",d)})};Ft=n,$t=c,window.embeddedVideoDetectorLoaded=!0,(async function(){if(window.__ytdlDownloadButtonInjected)return;window.__ytdlDownloadButtonInjected=!0;const l="__ytdl_download_btn_style",r="youtubePlayerOverlayHidden";let d=!1;try{d=(await chrome.storage.local.get([r]))?.[r]===!0}catch(t){console.warn("Could not read the player overlay preference:",t)}function u(){if(document.getElementById(l))return;const t=document.createElement("style");t.id=l,t.textContent=`
        #__ytdl_download_btn {
          position: absolute !important;
          top: 12px !important;
          right: 12px !important;
          z-index: 9999 !important;
          background: rgba(9,9,11,0.9) !important;
          color: #fff !important;
          border: 1px solid rgba(255,45,85,0.48) !important;
          border-radius: 8px !important;
          padding: 8px 11px !important;
          font-size: 13px !important;
          font-weight: 800 !important;
          line-height: 1 !important;
          font-family: "YouTube Sans", Roboto, Arial, sans-serif !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          backdrop-filter: blur(4px) !important;
          transition: all .2s ease !important;
          box-shadow: 0 12px 34px rgba(0,0,0,0.35) !important;
          text-decoration: none !important;
          outline: none !important;
          margin: 0 !important;
          min-width: auto !important;
          max-width: none !important;
          width: auto !important;
          height: auto !important;
        }
        #__ytdl_download_btn:hover {
          background: rgba(17,17,20,0.98) !important;
          border-color: rgba(255,45,85,0.78) !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4) !important;
        }
        #__ytdl_download_btn.ytdl-busy {
          pointer-events: none !important;
          opacity: 0.8 !important;
        }
        #__ytdl_download_menu {
          position: absolute !important;
          top: 54px !important;
          right: 12px !important;
          z-index: 10000 !important;
          width: 274px !important;
          padding: 10px !important;
          border-radius: 8px !important;
          border: 1px solid rgba(255,255,255,0.18) !important;
          background: rgba(9,9,11,0.98) !important;
          color: #f8fafc !important;
          box-shadow: 0 24px 70px rgba(0,0,0,0.55) !important;
          font-family: "YouTube Sans", Roboto, Arial, sans-serif !important;
          opacity: 0 !important;
          transform: translateY(-6px) !important;
          pointer-events: none !important;
          transition: opacity .16s ease, transform .16s ease !important;
        }
        #__ytdl_download_menu.ytdl-menu-open {
          opacity: 1 !important;
          transform: translateY(0) !important;
          pointer-events: auto !important;
        }
        #__ytdl_download_menu .ytdl-menu-head {
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          padding: 2px 2px 8px !important;
          font-size: 13px !important;
          font-weight: 900 !important;
          border-bottom: 1px solid rgba(255,255,255,0.12) !important;
        }
        #__ytdl_download_menu .ytdl-ready {
          color: #ff8da3 !important;
          font-size: 11px !important;
          font-weight: 800 !important;
        }
        #__ytdl_download_menu .ytdl-group {
          padding-top: 8px !important;
        }
        #__ytdl_download_menu .ytdl-caption {
          color: #a8b3c7 !important;
          font-size: 10px !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          margin: 0 4px 6px !important;
        }
        #__ytdl_download_menu button {
          width: 100% !important;
          height: 34px !important;
          border: 0 !important;
          border-radius: 7px !important;
          background: transparent !important;
          color: #edf2fb !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          padding: 0 9px !important;
          cursor: pointer !important;
          font-size: 13px !important;
          font-weight: 800 !important;
          font-family: inherit !important;
        }
        #__ytdl_download_menu button:hover {
          background: rgba(255,45,85,0.14) !important;
        }
        #__ytdl_download_menu button.ytdl-hot {
          background: rgba(255,51,79,0.16) !important;
        }
        #__ytdl_download_menu button span:last-child {
          color: #a8b3c7 !important;
          font-size: 11px !important;
          font-weight: 800 !important;
        }
        #__ytdl_download_menu .ytdl-menu-toggle {
          position: relative !important;
          flex: 0 0 auto !important;
          width: 28px !important;
          height: 16px !important;
          border: 1px solid rgba(255,45,85,0.72) !important;
          border-radius: 999px !important;
          background: rgba(255,45,85,0.34) !important;
        }
        #__ytdl_download_menu .ytdl-menu-toggle::after {
          content: "" !important;
          position: absolute !important;
          top: 2px !important;
          right: 2px !important;
          width: 10px !important;
          height: 10px !important;
          border-radius: 50% !important;
          background: #fff !important;
          box-shadow: 0 1px 4px rgba(0,0,0,0.5) !important;
        }
        #__ytdl_download_btn .ytdl-spin { 
          width:14px !important; 
          height:14px !important; 
          border:2px solid #fff !important; 
          border-top-color: transparent !important; 
          border-radius:50% !important; 
          animation: ytdl-spin 0.8s linear infinite !important; 
        }
        @keyframes ytdl-spin { to { transform: rotate(360deg); } }
        #__ytdl_download_toast {
          position: fixed !important;
          bottom: 24px !important; 
          right: 24px !important;
          background: #202124 !important;
          color: #e8eaed !important;
          padding: 12px 16px !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.5) !important;
          font-size: 14px !important;
          z-index: 2147483646 !important;
          opacity: 0 !important;
          transform: translateY(12px) !important;
          transition: all .3s ease !important;
          max-width: 360px !important;
          font-family: "YouTube Sans", Roboto, Arial, sans-serif !important;
          font-weight: 400 !important;
          text-decoration: none !important;
          outline: none !important;
          margin: 0 !important;
        }
        #__ytdl_download_toast.ytdl-show { 
          opacity:1 !important; 
          transform: translateY(0) !important; 
        }
        #__ytdl_download_toast button { 
          background: #065fd4 !important; 
          color:#fff !important; 
          border:none !important; 
          border-radius:6px !important; 
          padding:6px 12px !important; 
          cursor:pointer !important; 
          margin-left:12px !important; 
          font-size:12px !important;
          font-weight: 500 !important;
          transition: background .2s ease !important;
          text-decoration: none !important;
          outline: none !important;
        }
        #__ytdl_download_toast button:hover { 
          background:#0956c4 !important; 
        }
        #__ytdl_player_toolbar {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          width: 100% !important;
          min-height: 40px !important;
          box-sizing: border-box !important;
          margin: 8px 0 10px !important;
          padding: 5px 7px !important;
          border: 1px solid rgba(255, 45, 85, 0.34) !important;
          border-radius: 8px !important;
          background: #fff !important;
          color: #0f172a !important;
          font-family: "YouTube Sans", Roboto, Arial, sans-serif !important;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12) !important;
          position: relative !important;
          z-index: 20 !important;
        }
        #__ytdl_player_toolbar.ytdl-flow-toolbar:not(.ytdl-toolbar-positioned) {
          display: none !important;
        }
        html[dark] #__ytdl_player_toolbar,
        [dark] #__ytdl_player_toolbar,
        ytd-watch-flexy[dark] #__ytdl_player_toolbar {
          background: #111114 !important;
          color: #f8fafc !important;
          border-color: rgba(255, 45, 85, 0.4) !important;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28) !important;
        }
        #__ytdl_player_toolbar .ytdl-toolbar-brand {
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          min-width: 78px !important;
          white-space: nowrap !important;
          font-size: 12px !important;
          font-weight: 900 !important;
        }
        #__ytdl_player_toolbar .ytdl-toolbar-mark {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          height: 20px !important;
          min-width: 31px !important;
          padding: 0 5px !important;
          border-radius: 5px !important;
          background: linear-gradient(135deg, #ff2d55, #ff5a36) !important;
          color: #fff !important;
          font-size: 10px !important;
          font-weight: 900 !important;
          letter-spacing: 0 !important;
        }
        #__ytdl_player_toolbar .ytdl-quality-wrap {
          flex: 1 1 auto !important;
          min-width: 120px !important;
          position: relative !important;
        }
        #__ytdl_player_quality_select {
          display: none !important;
        }
        #__ytdl_player_quality_button {
          width: 100% !important;
          height: 30px !important;
          border: 1px solid rgba(255, 45, 85, 0.45) !important;
          border-radius: 6px !important;
          background: #fff !important;
          color: #111827 !important;
          font-size: 12px !important;
          font-weight: 650 !important;
          font-family: inherit !important;
          padding: 0 7px !important;
          outline: none !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 8px !important;
          text-align: left !important;
        }
        #__ytdl_player_quality_button span:first-child {
          min-width: 0 !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
          white-space: nowrap !important;
        }
        html[dark] #__ytdl_player_quality_button,
        [dark] #__ytdl_player_quality_button,
        ytd-watch-flexy[dark] #__ytdl_player_quality_button {
          background: #111114 !important;
          color: #f8fafc !important;
          border-color: rgba(255, 45, 85, 0.48) !important;
        }
        #__ytdl_player_quality_menu {
          position: absolute !important;
          left: 0 !important;
          right: 0 !important;
          bottom: calc(100% + 7px) !important;
          z-index: 2147483645 !important;
          max-height: 260px !important;
          overflow: auto !important;
          padding: 6px !important;
          border-radius: 8px !important;
          border: 1px solid rgba(255, 45, 85, 0.48) !important;
          background: #ffffff !important;
          color: #111827 !important;
          box-shadow: 0 18px 54px rgba(0, 0, 0, 0.32) !important;
          display: none !important;
        }
        html[dark] #__ytdl_player_quality_menu,
        [dark] #__ytdl_player_quality_menu,
        ytd-watch-flexy[dark] #__ytdl_player_quality_menu {
          background: #111114 !important;
          color: #f8fafc !important;
        }
        #__ytdl_player_quality_menu.ytdl-quality-menu-open {
          display: grid !important;
          gap: 3px !important;
        }
        #__ytdl_player_quality_menu .ytdl-quality-group {
          padding: 4px 7px 2px !important;
          color: #64748b !important;
          font-size: 10px !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
        }
        #__ytdl_player_quality_menu .ytdl-quality-choice {
          width: 100% !important;
          min-height: 34px !important;
          padding: 5px 7px !important;
          border: 0 !important;
          border-radius: 5px !important;
          background: transparent !important;
          color: inherit !important;
          cursor: pointer !important;
          display: grid !important;
          grid-template-columns: auto 1fr !important;
          gap: 8px !important;
          align-items: center !important;
          text-align: left !important;
          font-family: inherit !important;
        }
        #__ytdl_player_quality_menu .ytdl-quality-choice:hover,
        #__ytdl_player_quality_menu .ytdl-quality-choice.ytdl-selected {
          background: rgba(255, 45, 85, 0.14) !important;
        }
        #__ytdl_player_quality_menu .ytdl-quality-label {
          font-size: 12px !important;
          font-weight: 900 !important;
          white-space: nowrap !important;
        }
        #__ytdl_player_quality_menu .ytdl-quality-detail {
          min-width: 0 !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
          white-space: nowrap !important;
          color: #64748b !important;
          font-size: 11px !important;
          font-weight: 700 !important;
        }
        #__ytdl_player_download_btn,
        #__ytdl_player_refresh_btn,
        #__ytdl_player_queue_btn {
          height: 30px !important;
          border: 0 !important;
          border-radius: 6px !important;
          padding: 0 12px !important;
          cursor: pointer !important;
          font-size: 12px !important;
          font-weight: 850 !important;
          font-family: inherit !important;
          white-space: nowrap !important;
        }
        #__ytdl_player_download_btn {
          min-width: 84px !important;
          background: #ff2d55 !important;
          color: #fff !important;
        }
        #__ytdl_player_download_btn:hover {
          background: #e71942 !important;
        }
        #__ytdl_player_download_btn:disabled,
        #__ytdl_player_toolbar.ytdl-toolbar-busy #__ytdl_player_download_btn {
          cursor: wait !important;
          opacity: 0.65 !important;
        }
        #__ytdl_player_refresh_btn,
        #__ytdl_player_queue_btn {
          width: 30px !important;
          padding: 0 !important;
          background: transparent !important;
          color: inherit !important;
          border: 1px solid rgba(148, 163, 184, 0.45) !important;
        }
        #__ytdl_player_refresh_btn:hover,
        #__ytdl_player_queue_btn:hover {
          border-color: rgba(255, 45, 85, 0.72) !important;
          background: rgba(255, 45, 85, 0.1) !important;
        }
        #__ytdl_player_toolbar .ytdl-toolbar-status {
          min-width: 0 !important;
          color: #64748b !important;
          font-size: 11px !important;
          font-weight: 800 !important;
          text-align: right !important;
          white-space: nowrap !important;
        }
        #__ytdl_player_toolbar .ytdl-toolbar-status:empty {
          display: none !important;
        }
        html[dark] #__ytdl_player_toolbar .ytdl-toolbar-status,
        [dark] #__ytdl_player_toolbar .ytdl-toolbar-status,
        ytd-watch-flexy[dark] #__ytdl_player_toolbar .ytdl-toolbar-status {
          color: #9aa7bb !important;
        }
        #__ytdl_player_toolbar.ytdl-toolbar-compact .ytdl-toolbar-brand {
          min-width: 31px !important;
        }
        #__ytdl_player_toolbar.ytdl-toolbar-compact .ytdl-toolbar-brand > span:last-child,
        #__ytdl_player_toolbar.ytdl-toolbar-compact .ytdl-toolbar-status {
          display: none !important;
        }
        #__ytdl_player_toolbar.ytdl-toolbar-compact .ytdl-quality-wrap {
          min-width: 0 !important;
        }
        #__ytdl_player_toolbar.ytdl-toolbar-narrow {
          gap: 4px !important;
          padding: 4px 5px !important;
        }
        #__ytdl_player_toolbar.ytdl-toolbar-narrow .ytdl-toolbar-brand {
          min-width: 0 !important;
        }
        #__ytdl_player_toolbar.ytdl-toolbar-narrow #__ytdl_player_download_btn {
          width: 30px !important;
          min-width: 30px !important;
          padding: 0 !important;
          font-size: 0 !important;
        }
        #__ytdl_player_toolbar.ytdl-toolbar-narrow #__ytdl_player_download_btn::before {
          content: "↓" !important;
          font-size: 15px !important;
          line-height: 1 !important;
        }
        #__ytdl_player_toolbar.ytdl-toolbar-tiny .ytdl-toolbar-brand,
        #__ytdl_player_toolbar.ytdl-toolbar-tiny #__ytdl_player_refresh_btn {
          display: none !important;
        }
      `,document.documentElement.appendChild(t)}function y(t,e={}){const o=document.getElementById("__ytdl_download_toast");o&&o.remove();const i=document.createElement("div");if(i.id="__ytdl_download_toast",i.textContent=t,e.actionText&&e.onAction){const s=document.createElement("button");s.textContent=e.actionText,s.addEventListener("click",()=>{try{e.onAction()}catch{}i.remove()}),i.appendChild(s)}document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("ytdl-show")),setTimeout(()=>{i.isConnected&&i.classList.remove("ytdl-show")},e.duration||4200),setTimeout(()=>{i.isConnected&&i.remove()},(e.duration||4200)+400)}async function m(t={}){const e=!!t.silent;try{const o=await chrome.runtime.sendMessage({action:"getCachedVideoInfo"}).catch(()=>null);if(o?.success&&o.videoInfo)return e||y("Video ready! Opening download popup..."),o.videoInfo;const i=location.href,s=await chrome.runtime.sendMessage({action:"extractVideoInfo",url:i}).catch(()=>null);if(s?.success)return e||y("Video prepared! Opening download popup..."),s.videoInfo;e||y("Could not prepare video. Please try again.",{duration:6e3})}catch(o){console.warn("YTDL ensureVideoInfoCached error",o),e||y("Error preparing video. Please try again.")}return null}function _(t){const e=Number(t||0);if(!Number.isFinite(e)||e<=0)return"";const o=["B","KB","MB","GB"],i=Math.min(o.length-1,Math.floor(Math.log(e)/Math.log(1024)));return`${(e/Math.pow(1024,i)).toFixed(i===0?0:1)} ${o[i]}`}function L(t){if(!t)return 0;if(t.height)return Number(t.height)||0;const o=String(t.qualityLabel||t.quality||"").match(/(\d{3,4})p/i);return o?Number(o[1]):0}function g(t,e=0){const o=Number(t?.width||0);return Number.isFinite(o)&&o>0?o:e>0?Math.round(e*(16/9)):0}function M(t){const e=Number(t?.fps||t?.frameRate||t?.framerate||0);return Number.isFinite(e)&&e>0?Math.round(e):0}function k(t){const e=t?.duration||t?.lengthSeconds||t?.durationSeconds;if(typeof e=="number"&&Number.isFinite(e))return e>1e4?e/1e3:e;const o=String(e||"");if(/^\d+(\.\d+)?$/.test(o)){const s=Number(o);return s>1e4?s/1e3:s}const i=o.split(":").map(s=>Number(s));return i.length>=2&&i.every(s=>Number.isFinite(s))?i.reduce((s,p)=>s*60+p,0):0}function q(t,e="mp4"){const o=String(t?.container||t?.mimeType||"").toLowerCase();return o.includes("webm")?"webm":o.includes("mp4")||o.includes("m4a")||o.includes("aac")?"mp4":o.includes("opus")?"webm":e}function F(t,e){const o=Number(t?.contentLength||t?.size||t?.fileSize||0);if(Number.isFinite(o)&&o>0)return o;const i=k(e),s=Number(t?.bitrate||t?.averageBitrate||t?.audioBitrate||0);return i>0&&Number.isFinite(s)&&s>0?s*i/8:0}function z(t){return t>=4320?"8K":t>=2160?"4K":t>=1440?"2K":t>=1080?"HD":""}function nt(t){const e=String(t?.container||t?.mimeType||"").toLowerCase();return e.includes("webm")||e.includes("opus")?"WEBM":"M4A"}function $(t,e,o){const i=g(t,o),s=M(t),p=_(F(t,e)),h=q(t).toUpperCase();return[i&&o?`${i}x${o}`:"",s?`${s}FPS`:"",h,p].filter(Boolean).join(" - ")}function x(t){const e=Array.isArray(t?.formats)?t.formats:[],o=e.map((f,b)=>({format:f,index:b,height:L(f)})).filter(({format:f,height:b})=>f?.hasVideo&&b>0),i=new Map;for(const f of o){const b=i.get(f.height);(!b||Number(f.format?.bitrate||0)>Number(b.format?.bitrate||0))&&i.set(f.height,f)}const s=[...i.entries()].sort((f,b)=>b[0]-f[0]).slice(0,8).map(([f,b])=>{const Y=z(f),Nt=$(b.format,t,f);return{key:`video-${f}`,group:"Video",label:`${f}p${Y?` ${Y}`:""}`,detail:Nt,optionText:`${f}p${Y?` ${Y}`:""} | ${Nt}`,downloadKind:"video",selectedQualityIndex:b.index}}),p=s[0],h=p?[{key:"video-best",group:"Video",label:`Best${z(L(e[p.selectedQualityIndex]))?` ${z(L(e[p.selectedQualityIndex]))}`:""}`,detail:p.detail,optionText:`Best | ${p.detail}`,downloadKind:"video",selectedQualityIndex:null},...s]:[{key:"video-best",group:"Video",label:"Best",detail:"Highest detected stream",optionText:"Best | highest detected stream",downloadKind:"video",selectedQualityIndex:null}],T=e.map((f,b)=>({format:f,index:b})).filter(({format:f})=>f?.hasAudio&&!f?.hasVideo).sort((f,b)=>Number(b.format?.bitrate||b.format?.audioBitrate||0)-Number(f.format?.bitrate||f.format?.audioBitrate||0))[0];if(T){h.push({key:"audio-mp3-320",group:"Audio",label:"MP3 320kbps",detail:"browser processed",optionText:"MP3 320kbps | browser processed",downloadKind:"audio",audioFormat:"mp3",audioBitrate:32e4,selectedQualityIndex:T.index});const f=nt(T.format);h.push({key:"audio-original",group:"Audio",label:`${f} Original`,detail:"fastest",optionText:`${f} Original | fastest`,downloadKind:"audio",audioFormat:"original",selectedQualityIndex:T.index})}return h}async function O(){try{const t=await chrome.runtime.sendMessage({action:"openPopup"});t&&t.success?y("Download popup opened!"):y("Please click the extension icon to open the download popup.",{actionText:"Got it",onAction:()=>{}})}catch(t){console.warn("YTDL openExtensionPopup error",t),y("Please click the extension icon in the toolbar to download.",{actionText:"Got it",onAction:()=>{}})}}async function D(t={}){const e=document.getElementById("__ytdl_download_menu"),o=document.getElementById("__ytdl_download_btn"),i=document.getElementById("__ytdl_player_toolbar"),s=document.getElementById("__ytdl_player_download_btn");if(!o?.classList.contains("ytdl-busy"))try{o?.classList.add("ytdl-busy"),i?.classList.add("ytdl-toolbar-busy"),o&&(o.innerHTML='<div class="ytdl-spin"></div><span>Starting...</span>'),s&&(s.textContent="Starting..."),e?.classList.remove("ytdl-menu-open");const p=await m();if(!p){y("Could not detect formats for this video yet. Press play and try Refresh.",{duration:6500});return}const h=p?.url||location.href,tt=t.downloadKind==="audio"?"downloadAudio":"downloadVideo",T=await chrome.runtime.sendMessage({action:tt,url:h,videoInfo:p,embedInfo:p,downloadKind:t.downloadKind||"video",audioFormat:t.audioFormat||null,audioBitrate:t.audioBitrate||null,selectedQualityIndex:t.selectedQualityIndex??null}).catch(f=>({success:!1,error:f?.message||String(f)}));T?.success?y(t.downloadKind==="audio"?"Audio download queued.":"Video download queued."):y(T?.error||"Could not start download.",{duration:6500})}finally{o&&(o.innerHTML="<span>Download</span>"),s&&(s.textContent="Download"),o?.classList.remove("ytdl-busy"),i?.classList.remove("ytdl-toolbar-busy")}}function Z(t){const e=document.querySelector("#__ytdl_player_toolbar .ytdl-toolbar-status");e&&(e.textContent=t||"")}function J(t){const e=document.getElementById("__ytdl_player_quality_select"),o=document.getElementById("__ytdl_player_quality_button"),i=document.getElementById("__ytdl_player_quality_menu"),s=document.getElementById("__ytdl_player_download_btn");if(!e)return;const p=x(t);window.__ytdlPlayerToolbarOptions=p,e.innerHTML="",i&&(i.innerHTML="");const h=new Map,tt=new Set;for(const T of p){if(!h.has(T.group)){const b=document.createElement("optgroup");b.label=T.group,h.set(T.group,b),e.appendChild(b)}if(i&&!tt.has(T.group)){const b=document.createElement("div");b.className="ytdl-quality-group",b.textContent=T.group,i.appendChild(b),tt.add(T.group)}const f=document.createElement("option");if(f.value=T.key,f.textContent=T.optionText,f.title=`${T.label} - ${T.detail||""}`.trim(),h.get(T.group).appendChild(f),i){const b=document.createElement("button");b.type="button",b.className="ytdl-quality-choice",b.dataset.optionKey=T.key,b.innerHTML='<span class="ytdl-quality-label"></span><span class="ytdl-quality-detail"></span>',b.querySelector(".ytdl-quality-label").textContent=T.label,b.querySelector(".ytdl-quality-detail").textContent=T.detail||"",b.addEventListener("click",Y=>{Y.preventDefault(),Y.stopPropagation(),at(T.key),i.classList.remove("ytdl-quality-menu-open")}),i.appendChild(b)}}e.disabled=!p.length,o&&(o.disabled=!p.length),s&&(s.disabled=!p.length),p.length&&at(p[0].key),Z(p.length?"":"No formats")}function at(t){const e=document.getElementById("__ytdl_player_quality_select"),o=document.getElementById("__ytdl_player_quality_button"),i=document.getElementById("__ytdl_player_quality_menu"),s=window.__ytdlPlayerToolbarOptions||[],p=s.find(h=>h.key===t)||s[0];if(p){if(e&&(e.value=p.key),o){const h=o.querySelector(".ytdl-quality-button-label");h&&(h.textContent=p.optionText),o.title=p.optionText}i?.querySelectorAll(".ytdl-quality-choice").forEach(h=>{h.classList.toggle("ytdl-selected",h.dataset.optionKey===p.key)})}}async function H(t={}){const e=document.getElementById("__ytdl_player_toolbar"),o=document.getElementById("__ytdl_player_quality_select"),i=document.getElementById("__ytdl_player_quality_button"),s=document.getElementById("__ytdl_player_download_btn");try{if(e?.classList.add("ytdl-toolbar-busy"),o&&!window.__ytdlPlayerToolbarOptions?.length&&(o.innerHTML="<option>Scanning formats...</option>",o.disabled=!0),i){i.disabled=!0;const h=i.querySelector(".ytdl-quality-button-label");h&&!window.__ytdlPlayerToolbarOptions?.length&&(h.textContent="Scanning formats...")}s&&(s.disabled=!0),Z("Scanning");const p=await m({silent:!0});if(!p){if(Z("Try again"),o&&(o.innerHTML="<option>No formats detected yet</option>"),i){i.disabled=!1;const h=i.querySelector(".ytdl-quality-button-label");h&&(h.textContent="No formats detected yet")}return null}return J(p),t.silent||y("YouTube formats loaded."),p}finally{e?.classList.remove("ytdl-toolbar-busy")}}async function ne(){let t=window.__ytdlPlayerToolbarOptions||[];t.length||(await H({silent:!0}),t=window.__ytdlPlayerToolbarOptions||[]);const e=document.getElementById("__ytdl_player_quality_select"),o=t.find(i=>i.key===e?.value)||t[0];if(!o){y("No downloadable formats detected yet.",{duration:6e3});return}await D(o)}async function Tt(){try{const e=(await U())?.downloadManager||window.globalDownloadManager||P;if(typeof e?.show=="function")e.show();else if(typeof ft=="function")ft();else throw new Error("Download manager is unavailable.");const o=performance.now()+1e3;for(;performance.now()<o;){const i=document.getElementById("ytdl-download-manager"),s=i?getComputedStyle(i):null;if(!!i&&s?.display!=="none"&&s?.visibility!=="hidden"&&Number(s?.opacity||"0")>.9&&i.getBoundingClientRect().width>200)return!0;await new Promise(h=>requestAnimationFrame(h))}throw new Error("Download manager did not become visible.")}catch(t){return console.error("❌ Failed to open download queue:",t),!1}}function gt(){document.querySelectorAll("#__ytdl_download_btn, #__ytdl_download_menu, .ytdl-serp-download-button").forEach(t=>{t.remove()})}function _t(){return/(?:\/watch|\/shorts\/)/.test(location.pathname)}function rt(){const t=["#movie_player",".html5-video-player","ytd-watch-flexy #player","#player-container","ytd-player","video.html5-main-video"],e=new Set;for(const o of t)for(const i of document.querySelectorAll(o)){if(e.has(i))continue;e.add(i);const s=getComputedStyle(i),p=i.getBoundingClientRect();if(s.display!=="none"&&s.visibility!=="hidden"&&p.width>=240&&p.height>=120)return i}return null}async function bt(t,e={}){return d=t===!0,d?gt():G(),e.persist!==!1&&await chrome.storage.local.set({[r]:d}),e.announce!==!1&&y(d?"Player button hidden. Restore it from the sidebar setting.":"Player button shown.",{duration:5e3}),!0}window.__ytdlSetPlayerOverlayHidden=bt,window.__ytdlIsPlayerOverlayHidden=()=>d;function ae(){const t=document.getElementById("__ytdl_player_toolbar");t&&t.remove();const e=document.createElement("div");return e.id="__ytdl_player_toolbar",e.innerHTML=`
        <div class="ytdl-toolbar-brand">
          <span class="ytdl-toolbar-mark">SERP</span>
          <span>Download</span>
        </div>
        <div class="ytdl-quality-wrap">
          <select id="__ytdl_player_quality_select" aria-label="YouTube download quality">
            <option>Scan formats...</option>
          </select>
          <button id="__ytdl_player_quality_button" type="button" aria-label="Choose YouTube download quality" aria-expanded="false">
            <span class="ytdl-quality-button-label">Scan formats...</span>
          </button>
          <div id="__ytdl_player_quality_menu"></div>
        </div>
        <button id="__ytdl_player_download_btn" type="button" disabled>Download</button>
        <button id="__ytdl_player_refresh_btn" type="button" title="Refresh formats" aria-label="Refresh formats">↻</button>
        <button id="__ytdl_player_queue_btn" type="button" title="Open queue" aria-label="Open queue">⋯</button>
        <span class="ytdl-toolbar-status">Ready</span>
      `,e.querySelector("#__ytdl_player_download_btn")?.addEventListener("click",async o=>{o.preventDefault(),o.stopPropagation(),await ne()}),e.querySelector("#__ytdl_player_quality_button")?.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation();const i=document.getElementById("__ytdl_player_quality_menu"),s=document.getElementById("__ytdl_player_quality_button"),p=i?.classList.toggle("ytdl-quality-menu-open");s?.setAttribute("aria-expanded",p?"true":"false")}),e.querySelector("#__ytdl_player_refresh_btn")?.addEventListener("click",async o=>{o.preventDefault(),o.stopPropagation(),await H()}),e.querySelector("#__ytdl_player_queue_btn")?.addEventListener("click",async o=>{o.preventDefault(),o.stopPropagation(),await Tt()?y("Download queue opened."):y("Could not open the download queue.",{duration:6e3})}),document.addEventListener("click",o=>{o.target.closest("#__ytdl_player_toolbar")||(document.getElementById("__ytdl_player_quality_menu")?.classList.remove("ytdl-quality-menu-open"),document.getElementById("__ytdl_player_quality_button")?.setAttribute("aria-expanded","false"))}),e}function Et(t){if(!t)return!1;const e=ae();return e.classList.add("ytdl-flow-toolbar"),Lt(t,e)?(wt(t,e),setTimeout(()=>H({silent:!0}),250),!0):!1}function re(t){const o=[t?.closest?.("ytd-watch-flexy"),...document.querySelectorAll("ytd-watch-flexy")].filter(Boolean).map(i=>i.querySelector?.("#below")).find(i=>i?.parentElement);return o?.parentElement?o:null}function Lt(t,e){if(!t||!e)return!1;const o=re(t);return o?((e.parentElement!==o.parentElement||e.nextElementSibling!==o)&&o.before(e),e.isConnected):!1}function ie(t){return!!(document.fullscreenElement||t?.classList?.contains("ytp-fullscreen")||t?.closest?.(".ytp-fullscreen")||document.querySelector(".html5-video-player.ytp-fullscreen"))}function X(t){t?.classList.remove("ytdl-toolbar-positioned")}function wt(t,e){if(!t||!e?.isConnected)return!1;const o=rt()||t;if(ie(o))return X(e),!1;const i=o.getBoundingClientRect();return i.width<240||i.height<120||!Lt(o,e)?(X(e),!1):(le(o),e.classList.toggle("ytdl-toolbar-compact",i.width<760),e.classList.toggle("ytdl-toolbar-narrow",i.width<540),e.classList.toggle("ytdl-toolbar-tiny",i.width<390),e.classList.add("ytdl-toolbar-positioned"),!0)}let Dt=null,it=null;function lt(){const t=rt(),e=document.getElementById("__ytdl_player_toolbar");t&&e?wt(t,e):X(e)}function le(t){Dt===t||typeof ResizeObserver!="function"||(it||(it=new ResizeObserver(()=>{lt()})),it.disconnect(),Dt=t,it.observe(t))}function de(){const t=document.getElementById("__ytdl_download_menu");t&&t.remove();const e=document.createElement("div");return e.id="__ytdl_download_menu",e.innerHTML=`
        <div class="ytdl-menu-head"><span>Download</span><span class="ytdl-ready">Ready</span></div>
        <div class="ytdl-group">
          <div class="ytdl-caption">Video</div>
          <button type="button" class="ytdl-hot" data-ytdl-action="video-best"><span>Best MP4</span><span>auto</span></button>
          <button type="button" data-ytdl-action="popup"><span>Choose quality</span><span>popup</span></button>
        </div>
        <div class="ytdl-group">
          <div class="ytdl-caption">Audio</div>
          <button type="button" data-ytdl-action="mp3-320"><span>MP3 320kbps</span><span>new</span></button>
          <button type="button" data-ytdl-action="audio-original"><span>M4A Original</span><span>fast</span></button>
        </div>
        <div class="ytdl-group">
          <button type="button" data-ytdl-action="queue"><span>Open Queue</span><span>panel</span></button>
        </div>
        <div class="ytdl-group">
          <button type="button" data-ytdl-action="hide-overlay" aria-pressed="true" title="Hide the player overlay button">
            <span>Player button</span><span class="ytdl-menu-toggle" aria-hidden="true"></span>
          </button>
        </div>
      `,e.addEventListener("click",async o=>{const i=o.target.closest("button[data-ytdl-action]");if(!i)return;o.preventDefault(),o.stopPropagation();const s=i.dataset.ytdlAction;s==="video-best"?await D({downloadKind:"video"}):s==="mp3-320"?await D({downloadKind:"audio",audioFormat:"mp3",audioBitrate:32e4}):s==="audio-original"?await D({downloadKind:"audio",audioFormat:"original"}):s==="queue"?(e.classList.remove("ytdl-menu-open"),await Tt()?y("Download queue opened."):y("Could not open the download queue.",{duration:6e3})):s==="hide-overlay"?await bt(!0):(e.classList.remove("ytdl-menu-open"),await m(),await O())}),document.addEventListener("click",o=>{!e.isConnected||o.target.closest("#__ytdl_download_btn, #__ytdl_download_menu")||e.classList.remove("ytdl-menu-open")}),e}function G(){if(!_t())return gt(),document.getElementById("__ytdl_player_toolbar")?.remove(),!1;gt(),document.querySelectorAll("div[data-ytdl-dl-btn]").forEach(s=>{console.log("🧹 Removing YouTube detector button:",s.getAttribute("data-ytdl-dl-btn")),s.remove()});const e=rt(),o=e?.closest("#movie_player, .html5-video-player, #player-container, ytd-player")||e;if(!o)return!1;if(getComputedStyle(o).position==="static"&&(o.style.position="relative"),!d){const s=document.createElement("button");s.id="__ytdl_download_btn",s.className="ytdl-serp-download-button",s.type="button",s.innerHTML="<span>Download</span>",s.addEventListener("click",async p=>{if(p.preventDefault(),p.stopPropagation(),s.classList.contains("ytdl-busy"))return;document.getElementById("__ytdl_download_menu")?.classList.toggle("ytdl-menu-open")}),o.appendChild(s),o.appendChild(de())}return Et(o),console.log(d?"✅ Player overlay remains hidden:":"✅ Download button injected into container:",o.id||o.className),!0}if(u(),!G()){const t=new MutationObserver(()=>{G()&&t.disconnect()});t.observe(document.documentElement||document.body,{childList:!0,subtree:!0});let e=0;const o=setInterval(()=>{(G()||++e>20)&&clearInterval(o)},500)}let Ct=null;const St=()=>{const t=new URL(location.href),e=t.searchParams.get("v")||(t.hostname==="youtu.be"?t.pathname.slice(1):null)||(t.pathname.includes("/shorts/")?t.pathname.split("/shorts/")[1]?.split("?")[0]:null);if(e&&e!==Ct){Ct=e,console.log("🎬 Video changed to:",e);const o=document.getElementById("__ytdl_download_btn");o&&(o.classList.remove("ytdl-busy"),o.innerHTML="<span>Download</span>"),window.__ytdlPlayerToolbarOptions=[];try{G()}catch(i){console.warn("⚠️ Failed to re-inject download button after video change:",i)}}};document.addEventListener("yt-navigate-finish",()=>{setTimeout(()=>{_t()&&G()},0)}),setInterval(St,4e3),window.addEventListener("resize",lt,{passive:!0}),window.visualViewport?.addEventListener("resize",lt,{passive:!0}),document.addEventListener("fullscreenchange",()=>{lt()}),setInterval(()=>{const t=rt(),e=_t();let o=document.getElementById("__ytdl_player_toolbar");if(!e){o?.remove();return}if(!t){X(o);return}try{o?.isConnected||(Et(t),o=document.getElementById("__ytdl_player_toolbar")),wt(t,o)}catch(i){console.warn("⚠️ Failed to restore under-player toolbar:",i)}},1500),chrome.storage.onChanged.addListener((t,e)=>{e!=="local"||!t?.[r]||bt(t[r].newValue===!0,{persist:!1,announce:!1})}),St()})().catch(a=>{console.error("Failed to initialize YouTube player controls:",a)});let w;const v=async()=>{try{w=await import(`chrome-extension://${chrome.runtime.id}/detectors/video-detector.js`),console.log("📹 Video detector modules loaded successfully")}catch(a){throw console.error("❌ Failed to load video detector modules:",a),a}};v().catch(a=>{console.error("❌ Failed to initialize video detectors:",a)});const V="YouTubeDownloaderDB",N="ytdlFileStore",W=1;async function ct(a,l){const r=await n();return new Promise((d,u)=>{const y=r.transaction(N,"readwrite"),_=y.objectStore(N).put(l,a);y.oncomplete=()=>{d(!0)},y.onerror=L=>{u(L.target.error)},_.onerror=L=>{u(L.target.error)}})}async function B(a){const l=await n();return new Promise((r,d)=>{const m=l.transaction(N,"readonly").objectStore(N).get(a);m.onsuccess=_=>r(_.target.result),m.onerror=_=>d(_.target.error)})}async function ut(a,l){console.error(`🔍🔍 VERIFY FUNCTION CALLED: ${l} segments, downloadId: ${a}`);for(let r=0;r<l;r++){const d=`ytdl_segment_${a}_${r}`;r<5&&console.error(`🔍 Checking segment ${r} with key: ${d}`);const u=await B(d);if(!u)throw console.error(`❌ MISSING SEGMENT ${r}: key=${d}, data=${u}`),new Error(`Segment ${r} not found in storage after download (key: ${d})`);r<5&&console.error(`✅ Segment ${r} found: ${u?"YES":"NO"}, size: ${u?u.byteLength||u.length:"N/A"}`)}return console.error(`✅ All ${l} segments verified successfully!`),!0}async function pt(){w||await v();try{console.log("🔍 Using modular video detection...");const a=await w.detectVideoWithEnhancements("youtube");if(a)return console.log("✅ Found video using modular detectors:",a.platform),a}catch(a){console.error("❌ Error in modular video detection:",a)}return console.log("❌ No videos found"),null}const Yt=async()=>(w||await v(),await w.detectVideoWithEnhancements("youtube")),se=async()=>(w||await v(),await w.detectVideoWithEnhancements("youtube")),vt=async()=>(w||await v(),await w.detectVideoWithEnhancements("youtube")),Rt=async()=>(w||await v(),(await w.detectAllVideos()).filter(l=>(l.platform||"").toLowerCase()==="youtube"));async function Ut(a){try{console.log("🖼️ Content Script: Fetching thumbnail from:",a);const l=await fetch(a);if(!l.ok)throw new Error(`HTTP ${l.status}: ${l.statusText}`);const r=await l.blob(),d=new FileReader;return new Promise((u,y)=>{d.onload=()=>{console.log("✅ Content script thumbnail fetch successful"),u({success:!0,dataUrl:d.result})},d.onerror=()=>{console.error("❌ Content script thumbnail fetch failed: FileReader error"),y({success:!1,error:"Failed to read thumbnail blob"})},d.readAsDataURL(r)})}catch(l){return console.error("❌ Content script thumbnail fetch failed:",l),{success:!1,error:l.message}}}const R=new Map;class zt{constructor(l=20){this.maxConcurrent=l,this.running=0,this.queue=[]}async add(l){return new Promise((r,d)=>{this.queue.push({task:l,resolve:r,reject:d}),this.process()})}async process(){if(this.running>=this.maxConcurrent||this.queue.length===0)return;this.running++;const{task:l,resolve:r,reject:d}=this.queue.shift();try{const u=await l();r(u)}catch(u){d(u)}finally{this.running--,this.process()}}}const Ht=new zt(20);async function mt(a,l={}){const r=new URL(a),d=location.href,u={method:l.method||"GET",headers:l.headers||void 0,body:l.body,mode:"cors",cache:"no-store",referrer:d,referrerPolicy:"strict-origin-when-cross-origin",signal:l.signal},y=async m=>{const _={...u,credentials:m};return console.log(`🔗 Fetching ${r.hostname} with credentials=${m}`),await fetch(a,_)};try{let m=await y("omit");if(m.ok||(console.warn(`⚠️ First fetch not OK (${m.status}). Retrying with credentials: include`),m=await y("include")),!m.ok)throw console.error("❌ Fetch failed after retries:",m.status,m.statusText),new Error(`Fetch failed: ${m.status} ${m.statusText}`);return m}catch{console.warn("⚠️ Fetch threw before response (likely CORS). Retrying with credentials: include");try{const _=await y("include");if(!_.ok)throw console.error("❌ Fetch with credentials still failed:",_.status,_.statusText),new Error(`Fetch failed (with credentials): ${_.status} ${_.statusText}`);return _}catch(_){throw console.error("❌ authenticatedFetch final error:",_),_}}}async function ce(a,l){console.log("🎬 Starting YouTube video download:",{m3u8Url:a.substring(0,100)+"...",fileName:l});const r=`ytdl_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;console.log("📥 Download ID:",r);const d=new AbortController;R.set(r,{status:"starting",progress:0,fileName:l,startTime:Date.now(),abortController:d});try{chrome.runtime.sendMessage({type:"showDownloadProgress",downloadId:r,filename:l,downloaded:0,total:0,progress:0,status:"Starting download..."}),console.log("📋 Step 1: Fetching M3U8 manifest...");const y=await(await mt(a,{signal:d.signal})).text();console.log("✅ Manifest fetched successfully"),console.log("📋 Manifest preview:",y.substring(0,200)+"...");const m=y.split(`
`).filter(x=>x&&!x.startsWith("#")&&x.trim().length>0);if(m.length===0)throw new Error("No video segments found in M3U8 manifest");console.log(`📊 Found ${m.length} video segments`);const _=m.length;chrome.runtime.sendMessage({type:"showDownloadProgress",downloadId:r,filename:l,downloaded:0,total:_,progress:0,status:`Found ${_} segments`}),console.log("🎬 Step 2: Downloading video segments...");let L=0;const g=m.map((x,O)=>Ht.add(async()=>{try{const D=x.startsWith("http")?x:new URL(x,a).href,J=await(await mt(D,{signal:d.signal})).arrayBuffer(),at=`ytdl_segment_${r}_${O}`;await ct(at,J),L++;const H=Math.round(L/_*100);return console.log(`✅ Segment ${O+1}/${_} downloaded (${H}%)`),chrome.runtime.sendMessage({type:"showDownloadProgress",downloadId:r,filename:l,downloaded:L,total:_,progress:H,status:`Downloaded ${L}/${_} segments`}),J}catch(D){throw console.error(`❌ Failed to download segment ${O}:`,D),D}}));await Promise.all(g),console.log("✅ All segments downloaded successfully"),console.log("🔍 Step 3: Verifying all segments..."),await ut(r,_),console.log("🔗 Step 4: Combining segments and triggering download...");const M=[];for(let x=0;x<_;x++){const O=`ytdl_segment_${r}_${x}`,D=await B(O);D&&M.push(new Uint8Array(D))}const k=M.reduce((x,O)=>x+O.length,0),q=new Uint8Array(k);let F=0;for(const x of M)q.set(x,F),F+=x.length;console.log(`📁 Combined video file size: ${(q.length/1024/1024).toFixed(2)} MB`);const z=new Blob([q],{type:"video/mp4"}),nt=URL.createObjectURL(z),$=document.createElement("a");$.href=nt,$.download=l||"ytdl_video.mp4",document.body.appendChild($),$.click(),document.body.removeChild($),setTimeout(()=>URL.revokeObjectURL(nt),6e4),console.log("🧹 Cleaning up temporary segments...");for(let x=0;x<_;x++){const O=`ytdl_segment_${r}_${x}`;try{(await n()).transaction(N,"readwrite").objectStore(N).delete(O)}catch(D){console.warn(`Warning: Could not clean up segment ${x}:`,D)}}chrome.runtime.sendMessage({type:"showDownloadProgress",downloadId:r,filename:l,downloaded:_,total:_,progress:100,status:"Download completed!"}),R.delete(r),console.log("🎉 YouTube video download completed successfully!")}catch(u){console.error("❌ YouTube video download failed:",u);const y=u&&u.name==="AbortError"?"Download cancelled":`Download failed: ${u.message}`;throw chrome.runtime.sendMessage({type:"showDownloadProgress",downloadId:r,filename:l,downloaded:0,total:0,progress:0,status:y}),R.delete(r),u}}let P,E,xt,yt;const Gt=async()=>{try{const r=await import(`chrome-extension://${chrome.runtime.id}/download-manager/integration-helper.js`);xt=r.createModularDownloadManager,yt=r.createCompatibilityLayer,console.log("📥 Download manager integration helper loaded successfully")}catch(a){throw console.error("❌ Failed to load download manager integration helper:",a),a}},jt=async()=>{if(P&&E)return{downloadManager:P,compatLayer:E};try{return await Gt(),P=xt(),E=yt(P),console.log("📥 YouTube download manager initialized with compatibility layer"),{downloadManager:P,compatLayer:E}}catch(a){throw console.error("❌ Failed to initialize download manager:",a),a}};let Kt,Qt,Wt,ft,Zt,Jt,C,Xt,te;const U=async()=>{if(C&&window.globalDownloadManager&&document.getElementById("ytdl-download-manager"))return console.log("📥 Download manager compatibility layer already set up"),{downloadManager:window.globalDownloadManager,compatLayer:{showDownloadProgress:C}};if(window.globalDownloadManager&&!C)console.log("📥 Global download manager exists, setting up compatibility layer only"),P=window.globalDownloadManager,E=yt(P);else{const a=await jt();P=a.downloadManager,E=a.compatLayer}window.globalDownloadManager=P,Kt=E.activeDownloads,Qt=E.downloadManagerPanel,Wt=E.isDownloadManagerCollapsed,ft=E.showDownloadManager,Zt=E.hideDownloadManager,Jt=E.toggleDownloadManager,C=E.showDownloadProgress,Xt=E.hideDownloadProgress,te=E.updateDownloadManagerHeader,console.log("✅ Compatibility layer loaded - modular download manager ready"),console.log("✅ Updated window functions with download manager instance")};(()=>{try{return(window.location.hostname||"").includes("youtube.com")}catch{return!1}})()?(setTimeout(()=>{const a=document.querySelectorAll("#ytdl-download-manager");if(a.length>1){console.log(`🧹 Found ${a.length} duplicate download manager panels during startup, removing extras`);for(let l=1;l<a.length;l++)a[l].remove(),console.log(`🧹 Removed duplicate startup panel ${l}`)}},1e3),U().catch(a=>{console.error("❌ Failed to auto-initialize download manager:",a)})):setTimeout(()=>{const a=document.getElementById("ytdl-download-manager");if(a)try{a.remove(),console.log("🧹 Removed stray download manager panel on non-YouTube domain")}catch{}},0);let ee=null,oe=0;setTimeout(()=>{console.log("🔍 Performing initial video detection..."),c()},1e3);let ot=null;if(new MutationObserver(a=>{let l=!1;a.forEach(r=>{if(r.type==="childList"&&r.addedNodes.length>0){for(const d of r.addedNodes)if(d.nodeType===Node.ELEMENT_NODE&&(d.tagName==="VIDEO"||d.tagName==="IFRAME"||d.querySelector&&(d.querySelector("video")||d.querySelector("iframe")))){l=!0;break}}}),l&&(ot&&clearTimeout(ot),console.log("🔄 DOM change detected, scheduling video check..."),ot=setTimeout(()=>{ot=null,c()},1500))}).observe(document.body,{childList:!0,subtree:!0}),chrome.runtime.onMessage.addListener((a,l,r)=>{const d=a.action||a.type;return console.log("📨 [CONTENT] ===== Message received ====="),console.log("📨 [CONTENT] Message type:",d),console.log("📨 [CONTENT] Full request:",a),console.log("📨 [CONTENT] Sender:",l),(async()=>{try{switch(d){case"detectVideo":console.log("📨 [CONTENT] Processing detectVideo request...");const u=await pt();console.log("📨 [CONTENT] findFirstAvailableVideo result:",u),u?(console.log("✅ [CONTENT] Video detected, platform:",u.platform),console.log("✅ [CONTENT] Video details:",{id:u.id,title:u.title,formats:u.formats?.length||0,files:u.files?.length||0}),r({success:!0,videoInfo:u})):(console.log("❌ [CONTENT] No video detected"),r({success:!1,error:"No video found"}));break;case"downloadVideo":return;case"showDownloadProgress":console.log("📥 Content Script: Received showDownloadProgress request:",a);try{await U(),C?await C(a.downloadId,a.filename,a.downloaded,a.total,a.progress,a.status):console.warn("⚠️ showDownloadProgress function not available after initialization"),r({success:!0})}catch(g){console.error("❌ Failed to initialize download manager for showDownloadProgress:",g),r({success:!1,error:"Failed to initialize download manager"})}return!0;case"openDownloadQueue":return r({success:await openDownloadQueue()}),!0;case"findYouTubeNativeVideo":const y=await vt();r(y?{success:!0,embedInfo:y}:{success:!1,embedInfo:null});break;case"cancelDownload":if(console.log("🚫 Content Script: Received cancel download request:",a.downloadId),R.has(a.downloadId)){try{R.get(a.downloadId)?.abortController?.abort()}catch{}R.delete(a.downloadId)}r({success:!0});break;case"extractYouTubeVideoInfo":console.log("🔍 [CONTENT] Processing extractYouTubeVideoInfo request");try{const g=await vt();console.log("🔍 [CONTENT] findYouTubeNativeVideo result:",g),g?(console.log("✅ [CONTENT] Found YouTube video info:",{id:g.id,title:g.title,platform:g.platform,formats:g.formats?.length||0,files:g.files?.length||0}),r({success:!0,videoInfo:g})):(console.log("❌ [CONTENT] No YouTube video found"),r({success:!1,error:"No YouTube video found"}))}catch(g){console.error("❌ [CONTENT] Error extracting YouTube video info:",g),r({success:!1,error:g.message})}break;case"getVideoInfo":const m=await pt();r({success:!!m,videoInfo:m,data:m});break;case"findYouTubeEmbed":const _=await Yt();r(_);break;case"getAllYouTubeNativeVideos":const L=await Rt();r(L);break;case"fetchThumbnail":return console.log("🖼️ Content Script: Received fetchThumbnail request for:",a.url),Ut(a.url).then(g=>{console.log("🖼️ Content Script: Sending thumbnail response:",g.success?"SUCCESS":"FAILED"),r(g)}).catch(g=>{console.error("❌ Content Script: Thumbnail fetch failed:",g),r({success:!1,error:g.message||g})}),!0;case"proxyAuthenticatedRequest":return console.log("🔗 Content Script: Received proxyAuthenticatedRequest for:",a.url?.substring(0,100)+"..."),mt(a.url,a.options).then(async g=>{const M=g.status,k=g.statusText;let q=new ArrayBuffer(0);try{q=await g.arrayBuffer()}catch{}const F=q.byteLength||0;if(!g.ok){console.warn("⚠️ Content Script: Proxied request non-OK:",M,k,"size:",F),r({success:!1,status:M,statusText:k,dataType:"arrayBuffer",data:q,error:`HTTP ${M} ${k}`});return}console.log("✅ Content Script: Proxied request OK:",M,k,"size:",F),r({success:!0,dataType:"arrayBuffer",data:q,status:M,statusText:k})}).catch(g=>{console.error("❌ Content Script: Proxied request failed:",g),r({success:!1,error:g.message||g})}),!0;default:console.log("❓ Unknown message type:",d),r({success:!1,error:"Unknown message type"})}}catch(u){console.error("❌ Error handling message:",u),r({success:!1,error:u.message})}})(),!0}),window.location.hostname.includes("youtube.com")){console.log("🎓 [YouTube Content] Requesting current download status to sync download manager across tabs"),setTimeout(()=>{chrome.runtime.sendMessage({action:"getQueueStatus"},a=>{a&&a.activeDownloads&&a.activeDownloads.length>0?(console.log(`📊 [YouTube Content] Found ${a.activeDownloads.length} active downloads to sync`),U().then(()=>{a.activeDownloads.forEach(async l=>{C&&await C(l.id,l.title||"Active Download",0,0,l.percentage,l.status)})}).catch(l=>{console.error("❌ Failed to initialize download manager for cross-tab sync:",l)})):console.log("📊 [YouTube Content] No active downloads found or response structure issue")})},2e3),document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")try{chrome.runtime.sendMessage({action:"getQueueStatus"},a=>{!a||!a.success||U().then(async()=>{try{const l=window.globalDownloadManager;if(l){const r=l.getAllDownloads(),d=new Set(Array.from(r.keys())),u=Array.isArray(a.activeDownloads)?a.activeDownloads:[],y=new Set(u.map(m=>m.id));for(const m of d)y.has(m)||l.removeDownloadItem(m);if(C)for(const m of u)await C(m.id,m.title||"Active Download",0,0,m.percentage,m.status)}}catch{}}).catch(()=>{})})}catch{}});try{chrome.storage.onChanged.addListener((a,l)=>{if(typeof window<"u"&&window.__dm_enable_storage_push===!0){if(l!=="local"||!a.downloadManagerGlobalState)return;const r=a.downloadManagerGlobalState.newValue;if(!r||!r.downloads)return;U().then(async()=>{if(C)for(const d of Object.keys(r.downloads)){const u=r.downloads[d];await C(u.id||d,u.filename||"Download",u.downloaded||0,u.total||0,u.progress||0,u.status||"")}}).catch(()=>{})}})}catch{}}console.log("✅ Content script loaded successfully with modular detectors")}var Ft,$t;try{chrome.runtime.onMessage.addListener((n,c,w)=>{if(!(!n||!n.action)&&n.action==="startYouTubeContentDownload")return(async()=>{try{await downloadYouTubeVideoFromContentScript(n.m3u8Url,n.fileName),w({success:!0})}catch(v){w({success:!1,error:v?.message||String(v)})}})(),!0})}catch{}}});Pt()})();
/* serp_honey_chrome_a924c8b3 */
