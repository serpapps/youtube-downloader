const YTDL_CONTROL_EVENTS={cancel:"ytdlDownloader:cancelDownload",clear:"ytdlDownloader:clearCompleted",cancelAll:"ytdlDownloader:cancelAll"};let controlEventsRegistered=!1;function requestDownloadCancel(p){if(!p)return console.warn("⚠️ cancel event received without a downloadId"),!1;let b=!1;if(window.globalDownloadManager&&typeof window.globalDownloadManager.cancelDownload=="function")try{window.globalDownloadManager.cancelDownload(p),b=!0}catch(q){console.error("❌ Download manager cancel failed:",q)}if(typeof chrome<"u"&&chrome.runtime)try{chrome.runtime.sendMessage({action:"cancelDownload",downloadId:p}).catch(q=>{console.error("❌ Cancel request failed:",q)}),b=!0}catch(q){console.error("❌ Chrome runtime error:",q)}return b}function requestClearCompletedDownloads(){let p=!1;if(window.globalDownloadManager&&typeof window.globalDownloadManager.clearCompletedDownloads=="function")try{window.globalDownloadManager.clearCompletedDownloads(),p=!0}catch(b){console.error("❌ Failed to clear completed downloads via manager:",b)}if(typeof chrome<"u"&&chrome.runtime)try{chrome.runtime.sendMessage({action:"clearCompletedDownloads"}).catch(b=>{console.error("❌ clearCompletedDownloads request failed:",b)}),p=!0}catch(b){console.error("❌ Chrome runtime error:",b)}return p}function requestCancelAllDownloads(){let p=!1;if(window.globalDownloadManager&&typeof window.globalDownloadManager.cancelAllDownloads=="function")try{window.globalDownloadManager.cancelAllDownloads(),p=!0}catch(b){console.error("❌ Download manager cancelAll failed:",b)}if(typeof chrome<"u"&&chrome.runtime)try{chrome.runtime.sendMessage({action:"cancelAllDownloads"}).catch(b=>{console.error("❌ Cancel all request failed:",b)}),p=!0}catch(b){console.error("❌ Chrome runtime error:",b)}return p}function ensureControlEventsRegistered(){if(!controlEventsRegistered)try{document.addEventListener(YTDL_CONTROL_EVENTS.cancel,p=>{try{requestDownloadCancel(p?.detail?.downloadId)}catch(b){console.error("❌ Failed to process cancel event:",b)}}),document.addEventListener(YTDL_CONTROL_EVENTS.clear,()=>{try{requestClearCompletedDownloads()}catch(p){console.error("❌ Failed to process clear event:",p)}}),document.addEventListener(YTDL_CONTROL_EVENTS.cancelAll,()=>{try{requestCancelAllDownloads()}catch(p){console.error("❌ Failed to process cancel-all event:",p)}}),controlEventsRegistered=!0}catch(p){console.error("❌ Failed to register control event listeners:",p)}}if(ensureControlEventsRegistered(),!window.embeddedVideoDetectorLoaded){let H=function(){return new Promise((n,i)=>{const a=indexedDB.open(q,_t);a.onupgradeneeded=l=>{const s=l.target.result;s.objectStoreNames.contains(C)||s.createObjectStore(C)},a.onsuccess=l=>{n(l.target.result)},a.onerror=l=>{i(l.target.error)}})},ot=function(n=!1){console.log("🔍 [CONTENT] ===== checkForNewVideos started ====="),console.log("🔍 [CONTENT] Current URL:",window.location.href),console.log("🔍 [CONTENT] Document title:",document.title),console.log("🔍 [CONTENT] Force detection:",n);const i=window.location.href,a=Date.now();It=i,Bt=a,X().then(l=>{if(console.log("🔍 [CONTENT] checkForNewVideos result:",l),l){console.log(`🎬 [CONTENT] ✅ Detected ${l.platform} video:`,l.title),console.log("🎬 [CONTENT] Video details:",{id:l.id,platform:l.platform,formats:l.formats?.length||0,files:l.files?.length||0,url:l.url});try{chrome.runtime.sendMessage({type:"videoDetected",videoInfo:l,url:window.location.href,title:document.title,timestamp:Date.now()}),console.log("🎬 [CONTENT] ✅ Video detection message sent to background")}catch(s){console.error("❌ [CONTENT] Failed to send video detection message:",s)}}else console.log("🔍 [CONTENT] No videos detected on current page")}).catch(l=>{console.error("❌ [CONTENT] Error in video detection:",l)})};var openDB=H,checkForNewVideos=ot;window.embeddedVideoDetectorLoaded=!0,(async function(){if(window.__ytdlDownloadButtonInjected)return;window.__ytdlDownloadButtonInjected=!0;const i="__ytdl_download_btn_style",a="youtubePlayerOverlayHidden";let l=!1;try{l=(await chrome.storage.local.get([a]))?.[a]===!0}catch(t){console.warn("Could not read the player overlay preference:",t)}function s(){if(document.getElementById(i))return;const t=document.createElement("style");t.id=i,t.textContent=`
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
      `,document.documentElement.appendChild(t)}function m(t,e={}){const o=document.getElementById("__ytdl_download_toast");o&&o.remove();const r=document.createElement("div");if(r.id="__ytdl_download_toast",r.textContent=t,e.actionText&&e.onAction){const d=document.createElement("button");d.textContent=e.actionText,d.addEventListener("click",()=>{try{e.onAction()}catch{}r.remove()}),r.appendChild(d)}document.body.appendChild(r),requestAnimationFrame(()=>r.classList.add("ytdl-show")),setTimeout(()=>{r.isConnected&&r.classList.remove("ytdl-show")},e.duration||4200),setTimeout(()=>{r.isConnected&&r.remove()},(e.duration||4200)+400)}async function u(t={}){const e=!!t.silent;try{const o=await chrome.runtime.sendMessage({action:"getCachedVideoInfo"}).catch(()=>null);if(o?.success&&o.videoInfo)return e||m("Video ready! Opening download popup..."),o.videoInfo;const r=location.href,d=await chrome.runtime.sendMessage({action:"extractVideoInfo",url:r}).catch(()=>null);if(d?.success)return e||m("Video prepared! Opening download popup..."),d.videoInfo;e||m("Could not prepare video. Please try again.",{duration:6e3})}catch(o){console.warn("YTDL ensureVideoInfoCached error",o),e||m("Error preparing video. Please try again.")}return null}function g(t){const e=Number(t||0);if(!Number.isFinite(e)||e<=0)return"";const o=["B","KB","MB","GB"],r=Math.min(o.length-1,Math.floor(Math.log(e)/Math.log(1024)));return`${(e/Math.pow(1024,r)).toFixed(r===0?0:1)} ${o[r]}`}function T(t){if(!t)return 0;if(t.height)return Number(t.height)||0;const o=String(t.qualityLabel||t.quality||"").match(/(\d{3,4})p/i);return o?Number(o[1]):0}function f(t,e=0){const o=Number(t?.width||0);return Number.isFinite(o)&&o>0?o:e>0?Math.round(e*(16/9)):0}function S(t){const e=Number(t?.fps||t?.frameRate||t?.framerate||0);return Number.isFinite(e)&&e>0?Math.round(e):0}function k(t){const e=t?.duration||t?.lengthSeconds||t?.durationSeconds;if(typeof e=="number"&&Number.isFinite(e))return e>1e4?e/1e3:e;const o=String(e||"");if(/^\d+(\.\d+)?$/.test(o)){const d=Number(o);return d>1e4?d/1e3:d}const r=o.split(":").map(d=>Number(d));return r.length>=2&&r.every(d=>Number.isFinite(d))?r.reduce((d,c)=>d*60+c,0):0}function L(t,e="mp4"){const o=String(t?.container||t?.mimeType||"").toLowerCase();return o.includes("webm")?"webm":o.includes("mp4")||o.includes("m4a")||o.includes("aac")?"mp4":o.includes("opus")?"webm":e}function P(t,e){const o=Number(t?.contentLength||t?.size||t?.fileSize||0);if(Number.isFinite(o)&&o>0)return o;const r=k(e),d=Number(t?.bitrate||t?.averageBitrate||t?.audioBitrate||0);return r>0&&Number.isFinite(d)&&d>0?d*r/8:0}function $(t){return t>=4320?"8K":t>=2160?"4K":t>=1440?"2K":t>=1080?"HD":""}function j(t){const e=String(t?.container||t?.mimeType||"").toLowerCase();return e.includes("webm")||e.includes("opus")?"WEBM":"M4A"}function I(t,e,o){const r=f(t,o),d=S(t),c=g(P(t,e)),w=L(t).toUpperCase();return[r&&o?`${r}x${o}`:"",d?`${d}FPS`:"",w,c].filter(Boolean).join(" - ")}function h(t){const e=Array.isArray(t?.formats)?t.formats:[],o=e.map((y,_)=>({format:y,index:_,height:T(y)})).filter(({format:y,height:_})=>y?.hasVideo&&_>0),r=new Map;for(const y of o){const _=r.get(y.height);(!_||Number(y.format?.bitrate||0)>Number(_.format?.bitrate||0))&&r.set(y.height,y)}const d=[...r.entries()].sort((y,_)=>_[0]-y[0]).slice(0,8).map(([y,_])=>{const B=$(y),gt=I(_.format,t,y);return{key:`video-${y}`,group:"Video",label:`${y}p${B?` ${B}`:""}`,detail:gt,optionText:`${y}p${B?` ${B}`:""} | ${gt}`,downloadKind:"video",selectedQualityIndex:_.index}}),c=d[0],w=c?[{key:"video-best",group:"Video",label:`Best${$(T(e[c.selectedQualityIndex]))?` ${$(T(e[c.selectedQualityIndex]))}`:""}`,detail:c.detail,optionText:`Best | ${c.detail}`,downloadKind:"video",selectedQualityIndex:null},...d]:[{key:"video-best",group:"Video",label:"Best",detail:"Highest detected stream",optionText:"Best | highest detected stream",downloadKind:"video",selectedQualityIndex:null}],x=e.map((y,_)=>({format:y,index:_})).filter(({format:y})=>y?.hasAudio&&!y?.hasVideo).sort((y,_)=>Number(_.format?.bitrate||_.format?.audioBitrate||0)-Number(y.format?.bitrate||y.format?.audioBitrate||0))[0];if(x){w.push({key:"audio-mp3-320",group:"Audio",label:"MP3 320kbps",detail:"browser processed",optionText:"MP3 320kbps | browser processed",downloadKind:"audio",audioFormat:"mp3",audioBitrate:32e4,selectedQualityIndex:x.index});const y=j(x.format);w.push({key:"audio-original",group:"Audio",label:`${y} Original`,detail:"fastest",optionText:`${y} Original | fastest`,downloadKind:"audio",audioFormat:"original",selectedQualityIndex:x.index})}return w}async function N(){try{const t=await chrome.runtime.sendMessage({action:"openPopup"});t&&t.success?m("Download popup opened!"):m("Please click the extension icon to open the download popup.",{actionText:"Got it",onAction:()=>{}})}catch(t){console.warn("YTDL openExtensionPopup error",t),m("Please click the extension icon in the toolbar to download.",{actionText:"Got it",onAction:()=>{}})}}async function D(t={}){const e=document.getElementById("__ytdl_download_menu"),o=document.getElementById("__ytdl_download_btn"),r=document.getElementById("__ytdl_player_toolbar"),d=document.getElementById("__ytdl_player_download_btn");if(!o?.classList.contains("ytdl-busy"))try{o?.classList.add("ytdl-busy"),r?.classList.add("ytdl-toolbar-busy"),o&&(o.innerHTML='<div class="ytdl-spin"></div><span>Starting...</span>'),d&&(d.textContent="Starting..."),e?.classList.remove("ytdl-menu-open");const c=await u();if(!c){m("Could not detect formats for this video yet. Press play and try Refresh.",{duration:6500});return}const w=c?.url||location.href,U=t.downloadKind==="audio"?"downloadAudio":"downloadVideo",x=await chrome.runtime.sendMessage({action:U,url:w,videoInfo:c,embedInfo:c,downloadKind:t.downloadKind||"video",audioFormat:t.audioFormat||null,audioBitrate:t.audioBitrate||null,selectedQualityIndex:t.selectedQualityIndex??null}).catch(y=>({success:!1,error:y?.message||String(y)}));x?.success?m(t.downloadKind==="audio"?"Audio download queued.":"Video download queued."):m(x?.error||"Could not start download.",{duration:6500})}finally{o&&(o.innerHTML="<span>Download</span>"),d&&(d.textContent="Download"),o?.classList.remove("ytdl-busy"),r?.classList.remove("ytdl-toolbar-busy")}}function Y(t){const e=document.querySelector("#__ytdl_player_toolbar .ytdl-toolbar-status");e&&(e.textContent=t||"")}function z(t){const e=document.getElementById("__ytdl_player_quality_select"),o=document.getElementById("__ytdl_player_quality_button"),r=document.getElementById("__ytdl_player_quality_menu"),d=document.getElementById("__ytdl_player_download_btn");if(!e)return;const c=h(t);window.__ytdlPlayerToolbarOptions=c,e.innerHTML="",r&&(r.innerHTML="");const w=new Map,U=new Set;for(const x of c){if(!w.has(x.group)){const _=document.createElement("optgroup");_.label=x.group,w.set(x.group,_),e.appendChild(_)}if(r&&!U.has(x.group)){const _=document.createElement("div");_.className="ytdl-quality-group",_.textContent=x.group,r.appendChild(_),U.add(x.group)}const y=document.createElement("option");if(y.value=x.key,y.textContent=x.optionText,y.title=`${x.label} - ${x.detail||""}`.trim(),w.get(x.group).appendChild(y),r){const _=document.createElement("button");_.type="button",_.className="ytdl-quality-choice",_.dataset.optionKey=x.key,_.innerHTML='<span class="ytdl-quality-label"></span><span class="ytdl-quality-detail"></span>',_.querySelector(".ytdl-quality-label").textContent=x.label,_.querySelector(".ytdl-quality-detail").textContent=x.detail||"",_.addEventListener("click",B=>{B.preventDefault(),B.stopPropagation(),Q(x.key),r.classList.remove("ytdl-quality-menu-open")}),r.appendChild(_)}}e.disabled=!c.length,o&&(o.disabled=!c.length),d&&(d.disabled=!c.length),c.length&&Q(c[0].key),Y(c.length?"":"No formats")}function Q(t){const e=document.getElementById("__ytdl_player_quality_select"),o=document.getElementById("__ytdl_player_quality_button"),r=document.getElementById("__ytdl_player_quality_menu"),d=window.__ytdlPlayerToolbarOptions||[],c=d.find(w=>w.key===t)||d[0];if(c){if(e&&(e.value=c.key),o){const w=o.querySelector(".ytdl-quality-button-label");w&&(w.textContent=c.optionText),o.title=c.optionText}r?.querySelectorAll(".ytdl-quality-choice").forEach(w=>{w.classList.toggle("ytdl-selected",w.dataset.optionKey===c.key)})}}async function A(t={}){const e=document.getElementById("__ytdl_player_toolbar"),o=document.getElementById("__ytdl_player_quality_select"),r=document.getElementById("__ytdl_player_quality_button"),d=document.getElementById("__ytdl_player_download_btn");try{if(e?.classList.add("ytdl-toolbar-busy"),o&&!window.__ytdlPlayerToolbarOptions?.length&&(o.innerHTML="<option>Scanning formats...</option>",o.disabled=!0),r){r.disabled=!0;const w=r.querySelector(".ytdl-quality-button-label");w&&!window.__ytdlPlayerToolbarOptions?.length&&(w.textContent="Scanning formats...")}d&&(d.disabled=!0),Y("Scanning");const c=await u({silent:!0});if(!c){if(Y("Try again"),o&&(o.innerHTML="<option>No formats detected yet</option>"),r){r.disabled=!1;const w=r.querySelector(".ytdl-quality-button-label");w&&(w.textContent="No formats detected yet")}return null}return z(c),t.silent||m("YouTube formats loaded."),c}finally{e?.classList.remove("ytdl-toolbar-busy")}}async function Ft(){let t=window.__ytdlPlayerToolbarOptions||[];t.length||(await A({silent:!0}),t=window.__ytdlPlayerToolbarOptions||[]);const e=document.getElementById("__ytdl_player_quality_select"),o=t.find(r=>r.key===e?.value)||t[0];if(!o){m("No downloadable formats detected yet.",{duration:6e3});return}await D(o)}async function ct(){try{const e=(await O())?.downloadManager||window.globalDownloadManager||M;if(typeof e?.show=="function")e.show();else if(typeof et=="function")et();else throw new Error("Download manager is unavailable.");const o=performance.now()+1e3;for(;performance.now()<o;){const r=document.getElementById("ytdl-download-manager"),d=r?getComputedStyle(r):null;if(!!r&&d?.display!=="none"&&d?.visibility!=="hidden"&&Number(d?.opacity||"0")>.9&&r.getBoundingClientRect().width>200)return!0;await new Promise(w=>requestAnimationFrame(w))}throw new Error("Download manager did not become visible.")}catch(t){return console.error("❌ Failed to open download queue:",t),!1}}function nt(){document.querySelectorAll("#__ytdl_download_btn, #__ytdl_download_menu, .ytdl-serp-download-button").forEach(t=>{t.remove()})}function at(){return/(?:\/watch|\/shorts\/)/.test(location.pathname)}function G(){const t=["#movie_player",".html5-video-player","ytd-watch-flexy #player","#player-container","ytd-player","video.html5-main-video"],e=new Set;for(const o of t)for(const r of document.querySelectorAll(o)){if(e.has(r))continue;e.add(r);const d=getComputedStyle(r),c=r.getBoundingClientRect();if(d.display!=="none"&&d.visibility!=="hidden"&&c.width>=240&&c.height>=120)return r}return null}async function rt(t,e={}){return l=t===!0,l?nt():V(),e.persist!==!1&&await chrome.storage.local.set({[a]:l}),e.announce!==!1&&m(l?"Player button hidden. Restore it from the sidebar setting.":"Player button shown.",{duration:5e3}),!0}window.__ytdlSetPlayerOverlayHidden=rt,window.__ytdlIsPlayerOverlayHidden=()=>l;function Ot(){const t=document.getElementById("__ytdl_player_toolbar");t&&t.remove();const e=document.createElement("div");return e.id="__ytdl_player_toolbar",e.innerHTML=`
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
      `,e.querySelector("#__ytdl_player_download_btn")?.addEventListener("click",async o=>{o.preventDefault(),o.stopPropagation(),await Ft()}),e.querySelector("#__ytdl_player_quality_button")?.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation();const r=document.getElementById("__ytdl_player_quality_menu"),d=document.getElementById("__ytdl_player_quality_button"),c=r?.classList.toggle("ytdl-quality-menu-open");d?.setAttribute("aria-expanded",c?"true":"false")}),e.querySelector("#__ytdl_player_refresh_btn")?.addEventListener("click",async o=>{o.preventDefault(),o.stopPropagation(),await A()}),e.querySelector("#__ytdl_player_queue_btn")?.addEventListener("click",async o=>{o.preventDefault(),o.stopPropagation(),await ct()?m("Download queue opened."):m("Could not open the download queue.",{duration:6e3})}),document.addEventListener("click",o=>{o.target.closest("#__ytdl_player_toolbar")||(document.getElementById("__ytdl_player_quality_menu")?.classList.remove("ytdl-quality-menu-open"),document.getElementById("__ytdl_player_quality_button")?.setAttribute("aria-expanded","false"))}),e}function ut(t){if(!t)return!1;const e=Ot();return e.classList.add("ytdl-flow-toolbar"),pt(t,e)?(it(t,e),setTimeout(()=>A({silent:!0}),250),!0):!1}function $t(t){const o=[t?.closest?.("ytd-watch-flexy"),...document.querySelectorAll("ytd-watch-flexy")].filter(Boolean).map(r=>r.querySelector?.("#below")).find(r=>r?.parentElement);return o?.parentElement?o:null}function pt(t,e){if(!t||!e)return!1;const o=$t(t);return o?((e.parentElement!==o.parentElement||e.nextElementSibling!==o)&&o.before(e),e.isConnected):!1}function At(t){return!!(document.fullscreenElement||t?.classList?.contains("ytp-fullscreen")||t?.closest?.(".ytp-fullscreen")||document.querySelector(".html5-video-player.ytp-fullscreen"))}function R(t){t?.classList.remove("ytdl-toolbar-positioned")}function it(t,e){if(!t||!e?.isConnected)return!1;const o=G()||t;if(At(o))return R(e),!1;const r=o.getBoundingClientRect();return r.width<240||r.height<120||!pt(o,e)?(R(e),!1):(Vt(o),e.classList.toggle("ytdl-toolbar-compact",r.width<760),e.classList.toggle("ytdl-toolbar-narrow",r.width<540),e.classList.toggle("ytdl-toolbar-tiny",r.width<390),e.classList.add("ytdl-toolbar-positioned"),!0)}let mt=null,W=null;function J(){const t=G(),e=document.getElementById("__ytdl_player_toolbar");t&&e?it(t,e):R(e)}function Vt(t){mt===t||typeof ResizeObserver!="function"||(W||(W=new ResizeObserver(()=>{J()})),W.disconnect(),mt=t,W.observe(t))}function Yt(){const t=document.getElementById("__ytdl_download_menu");t&&t.remove();const e=document.createElement("div");return e.id="__ytdl_download_menu",e.innerHTML=`
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
      `,e.addEventListener("click",async o=>{const r=o.target.closest("button[data-ytdl-action]");if(!r)return;o.preventDefault(),o.stopPropagation();const d=r.dataset.ytdlAction;d==="video-best"?await D({downloadKind:"video"}):d==="mp3-320"?await D({downloadKind:"audio",audioFormat:"mp3",audioBitrate:32e4}):d==="audio-original"?await D({downloadKind:"audio",audioFormat:"original"}):d==="queue"?(e.classList.remove("ytdl-menu-open"),await ct()?m("Download queue opened."):m("Could not open the download queue.",{duration:6e3})):d==="hide-overlay"?await rt(!0):(e.classList.remove("ytdl-menu-open"),await u(),await N())}),document.addEventListener("click",o=>{!e.isConnected||o.target.closest("#__ytdl_download_btn, #__ytdl_download_menu")||e.classList.remove("ytdl-menu-open")}),e}function V(){if(!at())return nt(),document.getElementById("__ytdl_player_toolbar")?.remove(),!1;nt(),document.querySelectorAll("div[data-ytdl-dl-btn]").forEach(d=>{console.log("🧹 Removing YouTube detector button:",d.getAttribute("data-ytdl-dl-btn")),d.remove()});const e=G(),o=e?.closest("#movie_player, .html5-video-player, #player-container, ytd-player")||e;if(!o)return!1;if(getComputedStyle(o).position==="static"&&(o.style.position="relative"),!l){const d=document.createElement("button");d.id="__ytdl_download_btn",d.className="ytdl-serp-download-button",d.type="button",d.innerHTML="<span>Download</span>",d.addEventListener("click",async c=>{if(c.preventDefault(),c.stopPropagation(),d.classList.contains("ytdl-busy"))return;document.getElementById("__ytdl_download_menu")?.classList.toggle("ytdl-menu-open")}),o.appendChild(d),o.appendChild(Yt())}return ut(o),console.log(l?"✅ Player overlay remains hidden:":"✅ Download button injected into container:",o.id||o.className),!0}if(s(),!V()){const t=new MutationObserver(()=>{V()&&t.disconnect()});t.observe(document.documentElement||document.body,{childList:!0,subtree:!0});let e=0;const o=setInterval(()=>{(V()||++e>20)&&clearInterval(o)},500)}let yt=null;const ft=()=>{const t=new URL(location.href),e=t.searchParams.get("v")||(t.hostname==="youtu.be"?t.pathname.slice(1):null)||(t.pathname.includes("/shorts/")?t.pathname.split("/shorts/")[1]?.split("?")[0]:null);if(e&&e!==yt){yt=e,console.log("🎬 Video changed to:",e);const o=document.getElementById("__ytdl_download_btn");o&&(o.classList.remove("ytdl-busy"),o.innerHTML="<span>Download</span>"),window.__ytdlPlayerToolbarOptions=[];try{V()}catch(r){console.warn("⚠️ Failed to re-inject download button after video change:",r)}}};document.addEventListener("yt-navigate-finish",()=>{setTimeout(()=>{at()&&V()},0)}),setInterval(ft,4e3),window.addEventListener("resize",J,{passive:!0}),window.visualViewport?.addEventListener("resize",J,{passive:!0}),document.addEventListener("fullscreenchange",()=>{J()}),setInterval(()=>{const t=G(),e=at();let o=document.getElementById("__ytdl_player_toolbar");if(!e){o?.remove();return}if(!t){R(o);return}try{o?.isConnected||(ut(t),o=document.getElementById("__ytdl_player_toolbar")),it(t,o)}catch(r){console.warn("⚠️ Failed to restore under-player toolbar:",r)}},1500),chrome.storage.onChanged.addListener((t,e)=>{e!=="local"||!t?.[a]||rt(t[a].newValue===!0,{persist:!1,announce:!1})}),ft()})().catch(n=>{console.error("Failed to initialize YouTube player controls:",n)});let p;const b=async()=>{try{p=await import(`chrome-extension://${chrome.runtime.id}/detectors/video-detector.js`),console.log("📹 Video detector modules loaded successfully")}catch(n){throw console.error("❌ Failed to load video detector modules:",n),n}};b().catch(n=>{console.error("❌ Failed to initialize video detectors:",n)});const q="YouTubeDownloaderDB",C="ytdlFileStore",_t=1;async function wt(n,i){const a=await H();return new Promise((l,s)=>{const m=a.transaction(C,"readwrite"),g=m.objectStore(C).put(i,n);m.oncomplete=()=>{l(!0)},m.onerror=T=>{s(T.target.error)},g.onerror=T=>{s(T.target.error)}})}async function lt(n){const i=await H();return new Promise((a,l)=>{const u=i.transaction(C,"readonly").objectStore(C).get(n);u.onsuccess=g=>a(g.target.result),u.onerror=g=>l(g.target.error)})}async function bt(n,i){console.error(`🔍🔍 VERIFY FUNCTION CALLED: ${i} segments, downloadId: ${n}`);for(let a=0;a<i;a++){const l=`ytdl_segment_${n}_${a}`;a<5&&console.error(`🔍 Checking segment ${a} with key: ${l}`);const s=await lt(l);if(!s)throw console.error(`❌ MISSING SEGMENT ${a}: key=${l}, data=${s}`),new Error(`Segment ${a} not found in storage after download (key: ${l})`);a<5&&console.error(`✅ Segment ${a} found: ${s?"YES":"NO"}, size: ${s?s.byteLength||s.length:"N/A"}`)}return console.error(`✅ All ${i} segments verified successfully!`),!0}async function X(){p||await b();try{console.log("🔍 Using modular video detection...");const n=await p.detectVideoWithEnhancements("youtube");if(n)return console.log("✅ Found video using modular detectors:",n.platform),n}catch(n){console.error("❌ Error in modular video detection:",n)}return console.log("❌ No videos found"),null}const ht=async()=>(p||await b(),await p.detectVideoWithEnhancements("youtube")),zt=async()=>(p||await b(),await p.detectVideoWithEnhancements("youtube")),dt=async()=>(p||await b(),await p.detectVideoWithEnhancements("youtube")),xt=async()=>(p||await b(),(await p.detectAllVideos()).filter(i=>(i.platform||"").toLowerCase()==="youtube"));async function vt(n){try{console.log("🖼️ Content Script: Fetching thumbnail from:",n);const i=await fetch(n);if(!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);const a=await i.blob(),l=new FileReader;return new Promise((s,m)=>{l.onload=()=>{console.log("✅ Content script thumbnail fetch successful"),s({success:!0,dataUrl:l.result})},l.onerror=()=>{console.error("❌ Content script thumbnail fetch failed: FileReader error"),m({success:!1,error:"Failed to read thumbnail blob"})},l.readAsDataURL(a)})}catch(i){return console.error("❌ Content script thumbnail fetch failed:",i),{success:!1,error:i.message}}}const F=new Map;class Tt{constructor(i=20){this.maxConcurrent=i,this.running=0,this.queue=[]}async add(i){return new Promise((a,l)=>{this.queue.push({task:i,resolve:a,reject:l}),this.process()})}async process(){if(this.running>=this.maxConcurrent||this.queue.length===0)return;this.running++;const{task:i,resolve:a,reject:l}=this.queue.shift();try{const s=await i();a(s)}catch(s){l(s)}finally{this.running--,this.process()}}}const Dt=new Tt(20);async function Z(n,i={}){const a=new URL(n),l=location.href,s={method:i.method||"GET",headers:i.headers||void 0,body:i.body,mode:"cors",cache:"no-store",referrer:l,referrerPolicy:"strict-origin-when-cross-origin",signal:i.signal},m=async u=>{const g={...s,credentials:u};return console.log(`🔗 Fetching ${a.hostname} with credentials=${u}`),await fetch(n,g)};try{let u=await m("omit");if(u.ok||(console.warn(`⚠️ First fetch not OK (${u.status}). Retrying with credentials: include`),u=await m("include")),!u.ok)throw console.error("❌ Fetch failed after retries:",u.status,u.statusText),new Error(`Fetch failed: ${u.status} ${u.statusText}`);return u}catch{console.warn("⚠️ Fetch threw before response (likely CORS). Retrying with credentials: include");try{const g=await m("include");if(!g.ok)throw console.error("❌ Fetch with credentials still failed:",g.status,g.statusText),new Error(`Fetch failed (with credentials): ${g.status} ${g.statusText}`);return g}catch(g){throw console.error("❌ authenticatedFetch final error:",g),g}}}async function Rt(n,i){console.log("🎬 Starting YouTube video download:",{m3u8Url:n.substring(0,100)+"...",fileName:i});const a=`ytdl_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;console.log("📥 Download ID:",a);const l=new AbortController;F.set(a,{status:"starting",progress:0,fileName:i,startTime:Date.now(),abortController:l});try{chrome.runtime.sendMessage({type:"showDownloadProgress",downloadId:a,filename:i,downloaded:0,total:0,progress:0,status:"Starting download..."}),console.log("📋 Step 1: Fetching M3U8 manifest...");const m=await(await Z(n,{signal:l.signal})).text();console.log("✅ Manifest fetched successfully"),console.log("📋 Manifest preview:",m.substring(0,200)+"...");const u=m.split(`
`).filter(h=>h&&!h.startsWith("#")&&h.trim().length>0);if(u.length===0)throw new Error("No video segments found in M3U8 manifest");console.log(`📊 Found ${u.length} video segments`);const g=u.length;chrome.runtime.sendMessage({type:"showDownloadProgress",downloadId:a,filename:i,downloaded:0,total:g,progress:0,status:`Found ${g} segments`}),console.log("🎬 Step 2: Downloading video segments...");let T=0;const f=u.map((h,N)=>Dt.add(async()=>{try{const D=h.startsWith("http")?h:new URL(h,n).href,z=await(await Z(D,{signal:l.signal})).arrayBuffer(),Q=`ytdl_segment_${a}_${N}`;await wt(Q,z),T++;const A=Math.round(T/g*100);return console.log(`✅ Segment ${N+1}/${g} downloaded (${A}%)`),chrome.runtime.sendMessage({type:"showDownloadProgress",downloadId:a,filename:i,downloaded:T,total:g,progress:A,status:`Downloaded ${T}/${g} segments`}),z}catch(D){throw console.error(`❌ Failed to download segment ${N}:`,D),D}}));await Promise.all(f),console.log("✅ All segments downloaded successfully"),console.log("🔍 Step 3: Verifying all segments..."),await bt(a,g),console.log("🔗 Step 4: Combining segments and triggering download...");const S=[];for(let h=0;h<g;h++){const N=`ytdl_segment_${a}_${h}`,D=await lt(N);D&&S.push(new Uint8Array(D))}const k=S.reduce((h,N)=>h+N.length,0),L=new Uint8Array(k);let P=0;for(const h of S)L.set(h,P),P+=h.length;console.log(`📁 Combined video file size: ${(L.length/1024/1024).toFixed(2)} MB`);const $=new Blob([L],{type:"video/mp4"}),j=URL.createObjectURL($),I=document.createElement("a");I.href=j,I.download=i||"ytdl_video.mp4",document.body.appendChild(I),I.click(),document.body.removeChild(I),setTimeout(()=>URL.revokeObjectURL(j),6e4),console.log("🧹 Cleaning up temporary segments...");for(let h=0;h<g;h++){const N=`ytdl_segment_${a}_${h}`;try{(await H()).transaction(C,"readwrite").objectStore(C).delete(N)}catch(D){console.warn(`Warning: Could not clean up segment ${h}:`,D)}}chrome.runtime.sendMessage({type:"showDownloadProgress",downloadId:a,filename:i,downloaded:g,total:g,progress:100,status:"Download completed!"}),F.delete(a),console.log("🎉 YouTube video download completed successfully!")}catch(s){console.error("❌ YouTube video download failed:",s);const m=s&&s.name==="AbortError"?"Download cancelled":`Download failed: ${s.message}`;throw chrome.runtime.sendMessage({type:"showDownloadProgress",downloadId:a,filename:i,downloaded:0,total:0,progress:0,status:m}),F.delete(a),s}}let M,v,st,tt;const Et=async()=>{try{const a=await import(`chrome-extension://${chrome.runtime.id}/download-manager/integration-helper.js`);st=a.createModularDownloadManager,tt=a.createCompatibilityLayer,console.log("📥 Download manager integration helper loaded successfully")}catch(n){throw console.error("❌ Failed to load download manager integration helper:",n),n}},Ct=async()=>{if(M&&v)return{downloadManager:M,compatLayer:v};try{return await Et(),M=st(),v=tt(M),console.log("📥 YouTube download manager initialized with compatibility layer"),{downloadManager:M,compatLayer:v}}catch(n){throw console.error("❌ Failed to initialize download manager:",n),n}};let St,Nt,qt,et,Mt,Lt,E,kt,Pt;const O=async()=>{if(E&&window.globalDownloadManager&&document.getElementById("ytdl-download-manager"))return console.log("📥 Download manager compatibility layer already set up"),{downloadManager:window.globalDownloadManager,compatLayer:{showDownloadProgress:E}};if(window.globalDownloadManager&&!E)console.log("📥 Global download manager exists, setting up compatibility layer only"),M=window.globalDownloadManager,v=tt(M);else{const n=await Ct();M=n.downloadManager,v=n.compatLayer}window.globalDownloadManager=M,St=v.activeDownloads,Nt=v.downloadManagerPanel,qt=v.isDownloadManagerCollapsed,et=v.showDownloadManager,Mt=v.hideDownloadManager,Lt=v.toggleDownloadManager,E=v.showDownloadProgress,kt=v.hideDownloadProgress,Pt=v.updateDownloadManagerHeader,console.log("✅ Compatibility layer loaded - modular download manager ready"),console.log("✅ Updated window functions with download manager instance")};(()=>{try{return(window.location.hostname||"").includes("youtube.com")}catch{return!1}})()?(setTimeout(()=>{const n=document.querySelectorAll("#ytdl-download-manager");if(n.length>1){console.log(`🧹 Found ${n.length} duplicate download manager panels during startup, removing extras`);for(let i=1;i<n.length;i++)n[i].remove(),console.log(`🧹 Removed duplicate startup panel ${i}`)}},1e3),O().catch(n=>{console.error("❌ Failed to auto-initialize download manager:",n)})):setTimeout(()=>{const n=document.getElementById("ytdl-download-manager");if(n)try{n.remove(),console.log("🧹 Removed stray download manager panel on non-YouTube domain")}catch{}},0);let It=null,Bt=0;setTimeout(()=>{console.log("🔍 Performing initial video detection..."),ot()},1e3);let K=null;if(new MutationObserver(n=>{let i=!1;n.forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0){for(const l of a.addedNodes)if(l.nodeType===Node.ELEMENT_NODE&&(l.tagName==="VIDEO"||l.tagName==="IFRAME"||l.querySelector&&(l.querySelector("video")||l.querySelector("iframe")))){i=!0;break}}}),i&&(K&&clearTimeout(K),console.log("🔄 DOM change detected, scheduling video check..."),K=setTimeout(()=>{K=null,ot()},1500))}).observe(document.body,{childList:!0,subtree:!0}),chrome.runtime.onMessage.addListener((n,i,a)=>{const l=n.action||n.type;return console.log("📨 [CONTENT] ===== Message received ====="),console.log("📨 [CONTENT] Message type:",l),console.log("📨 [CONTENT] Full request:",n),console.log("📨 [CONTENT] Sender:",i),(async()=>{try{switch(l){case"detectVideo":console.log("📨 [CONTENT] Processing detectVideo request...");const s=await X();console.log("📨 [CONTENT] findFirstAvailableVideo result:",s),s?(console.log("✅ [CONTENT] Video detected, platform:",s.platform),console.log("✅ [CONTENT] Video details:",{id:s.id,title:s.title,formats:s.formats?.length||0,files:s.files?.length||0}),a({success:!0,videoInfo:s})):(console.log("❌ [CONTENT] No video detected"),a({success:!1,error:"No video found"}));break;case"downloadVideo":return;case"showDownloadProgress":console.log("📥 Content Script: Received showDownloadProgress request:",n);try{await O(),E?await E(n.downloadId,n.filename,n.downloaded,n.total,n.progress,n.status):console.warn("⚠️ showDownloadProgress function not available after initialization"),a({success:!0})}catch(f){console.error("❌ Failed to initialize download manager for showDownloadProgress:",f),a({success:!1,error:"Failed to initialize download manager"})}return!0;case"openDownloadQueue":return a({success:await openDownloadQueue()}),!0;case"findYouTubeNativeVideo":const m=await dt();a(m?{success:!0,embedInfo:m}:{success:!1,embedInfo:null});break;case"cancelDownload":if(console.log("🚫 Content Script: Received cancel download request:",n.downloadId),F.has(n.downloadId)){try{F.get(n.downloadId)?.abortController?.abort()}catch{}F.delete(n.downloadId)}a({success:!0});break;case"extractYouTubeVideoInfo":console.log("🔍 [CONTENT] Processing extractYouTubeVideoInfo request");try{const f=await dt();console.log("🔍 [CONTENT] findYouTubeNativeVideo result:",f),f?(console.log("✅ [CONTENT] Found YouTube video info:",{id:f.id,title:f.title,platform:f.platform,formats:f.formats?.length||0,files:f.files?.length||0}),a({success:!0,videoInfo:f})):(console.log("❌ [CONTENT] No YouTube video found"),a({success:!1,error:"No YouTube video found"}))}catch(f){console.error("❌ [CONTENT] Error extracting YouTube video info:",f),a({success:!1,error:f.message})}break;case"getVideoInfo":const u=await X();a({success:!!u,videoInfo:u,data:u});break;case"findYouTubeEmbed":const g=await ht();a(g);break;case"getAllYouTubeNativeVideos":const T=await xt();a(T);break;case"fetchThumbnail":return console.log("🖼️ Content Script: Received fetchThumbnail request for:",n.url),vt(n.url).then(f=>{console.log("🖼️ Content Script: Sending thumbnail response:",f.success?"SUCCESS":"FAILED"),a(f)}).catch(f=>{console.error("❌ Content Script: Thumbnail fetch failed:",f),a({success:!1,error:f.message||f})}),!0;case"proxyAuthenticatedRequest":return console.log("🔗 Content Script: Received proxyAuthenticatedRequest for:",n.url?.substring(0,100)+"..."),Z(n.url,n.options).then(async f=>{const S=f.status,k=f.statusText;let L=new ArrayBuffer(0);try{L=await f.arrayBuffer()}catch{}const P=L.byteLength||0;if(!f.ok){console.warn("⚠️ Content Script: Proxied request non-OK:",S,k,"size:",P),a({success:!1,status:S,statusText:k,dataType:"arrayBuffer",data:L,error:`HTTP ${S} ${k}`});return}console.log("✅ Content Script: Proxied request OK:",S,k,"size:",P),a({success:!0,dataType:"arrayBuffer",data:L,status:S,statusText:k})}).catch(f=>{console.error("❌ Content Script: Proxied request failed:",f),a({success:!1,error:f.message||f})}),!0;default:console.log("❓ Unknown message type:",l),a({success:!1,error:"Unknown message type"})}}catch(s){console.error("❌ Error handling message:",s),a({success:!1,error:s.message})}})(),!0}),window.location.hostname.includes("youtube.com")){console.log("🎓 [YouTube Content] Requesting current download status to sync download manager across tabs"),setTimeout(()=>{chrome.runtime.sendMessage({action:"getQueueStatus"},n=>{n&&n.activeDownloads&&n.activeDownloads.length>0?(console.log(`📊 [YouTube Content] Found ${n.activeDownloads.length} active downloads to sync`),O().then(()=>{n.activeDownloads.forEach(async i=>{E&&await E(i.id,i.title||"Active Download",0,0,i.percentage,i.status)})}).catch(i=>{console.error("❌ Failed to initialize download manager for cross-tab sync:",i)})):console.log("📊 [YouTube Content] No active downloads found or response structure issue")})},2e3),document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")try{chrome.runtime.sendMessage({action:"getQueueStatus"},n=>{!n||!n.success||O().then(async()=>{try{const i=window.globalDownloadManager;if(i){const a=i.getAllDownloads(),l=new Set(Array.from(a.keys())),s=Array.isArray(n.activeDownloads)?n.activeDownloads:[],m=new Set(s.map(u=>u.id));for(const u of l)m.has(u)||i.removeDownloadItem(u);if(E)for(const u of s)await E(u.id,u.title||"Active Download",0,0,u.percentage,u.status)}}catch{}}).catch(()=>{})})}catch{}});try{chrome.storage.onChanged.addListener((n,i)=>{if(typeof window<"u"&&window.__dm_enable_storage_push===!0){if(i!=="local"||!n.downloadManagerGlobalState)return;const a=n.downloadManagerGlobalState.newValue;if(!a||!a.downloads)return;O().then(async()=>{if(E)for(const l of Object.keys(a.downloads)){const s=a.downloads[l];await E(s.id||l,s.filename||"Download",s.downloaded||0,s.total||0,s.progress||0,s.status||"")}}).catch(()=>{})}})}catch{}}console.log("✅ Content script loaded successfully with modular detectors")}try{chrome.runtime.onMessage.addListener((p,b,q)=>{if(!(!p||!p.action)&&p.action==="startYouTubeContentDownload")return(async()=>{try{await downloadYouTubeVideoFromContentScript(p.m3u8Url,p.fileName),q({success:!0})}catch(C){q({success:!1,error:C?.message||String(C)})}})(),!0})}catch{}
