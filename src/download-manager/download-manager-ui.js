export class DownloadManagerUI{constructor(e={}){this.config=e,this.panel=null,this.elements={}}createPanel(){if(this.panel)return this.panel;const e=document.getElementById("ytdl-download-manager");return e?(this.panel=e,this.cacheElements(),this.bindEvents(),this.panel):(this.panel=document.createElement("div"),this.panel.id="ytdl-download-manager",this.panel.style.cssText=this.generatePanelStyles(),this.panel.innerHTML=this.generatePanelHTML(),document.querySelector(this.config.integration?.parentSelector||"body").appendChild(this.panel),this.cacheElements(),this.bindEvents(),this.panel)}generatePanelStyles(){const t=typeof window<"u"&&window.innerWidth<500?Math.min(window.innerWidth-40,340):380,n=typeof window<"u"?Math.min(window.innerHeight-80,500):500;return`
      position: fixed;
      top: 20px;
      right: 20px;
      width: ${t}px;
      max-height: ${n}px;
      background: #09090b;
      border: 1px solid rgba(255, 45, 85, 0.42);
      border-radius: 8px;
      box-shadow: 0 24px 70px rgba(0,0,0,0.55);
      z-index: 2147483647;
      isolation: isolate;
      pointer-events: auto;
      font-family: "YouTube Sans", Roboto, Arial, sans-serif;
      font-size: 13px;
      color: #f8fafc;
      overflow: hidden;
      transform: translateX(100%);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    `}getPositionStyles(e){switch(e){case"right":return"top: 20px; right: 20px;";case"left":return"top: 20px; left: 20px;";case"top":return"top: 20px; left: 50%; transform: translateX(-50%);";case"bottom":return"bottom: 20px; left: 50%; transform: translateX(-50%);";default:return"top: 20px; right: 20px;"}}generatePanelHTML(){const e=this.config.integration?.cssPrefix||"dm",t=this.config.labels||{},n=this.config.behavior||{},o=typeof window<"u"?Math.min(window.innerHeight-80,500):500;return`
      <div id="${e}-download-manager-header" style="
        background: linear-gradient(135deg, rgba(255,45,85,0.15), rgba(255,90,54,0.08));
        color: #f8fafc;
        padding: 12px 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 850;
        cursor: pointer;
        user-select: none;
        border-bottom: 1px solid rgba(255,255,255,0.12);
      ">
        <div id="${e}-download-manager-title">Downloads (0 active)</div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button id="${e}-download-manager-cancel-all" title="Cancel all active downloads" style="
            background: rgba(255,51,79,0.18);
            border: 1px solid rgba(255,51,79,0.45);
            color: #fff;
            padding: 5px 8px;
            border-radius: 7px;
            cursor: pointer;
            font-size: 11px;
            transition: background 0.2s ease;
            display: none;
          " onmouseover="this.style.background='rgba(255,51,79,0.28)'" onmouseout="this.style.background='rgba(255,51,79,0.18)'">Cancel All</button>
          <button id="${e}-download-manager-clear" title="Clear completed" style="
            background: rgba(255,45,85,0.12);
            border: 1px solid rgba(255,45,85,0.38);
            color: #ffdbe2;
            padding: 5px 8px;
            border-radius: 7px;
            cursor: pointer;
            font-size: 11px;
            transition: background 0.2s ease;
          " onmouseover="this.style.background='rgba(255,45,85,0.22)'" onmouseout="this.style.background='rgba(255,45,85,0.12)'">Clear</button>
          <button id="${e}-download-manager-collapse" title="Collapse" style="
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.12);
            color: white;
            font-size: 16px;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            border-radius: 7px;
            transition: background 0.2s ease;
          " onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">−</button>
        </div>
      </div>
      <div id="${e}-download-manager-content" style="
        max-height: ${o-50}px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: rgba(255,255,255,0.28) transparent;
        background: #0b0f19;
      "></div>
      <style>
        #${e}-download-manager-content::-webkit-scrollbar {
          width: 6px;
        }
        #${e}-download-manager-content::-webkit-scrollbar-track {
          background: #0b0f19;
        }
        #${e}-download-manager-content::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.28);
          border-radius: 3px;
        }
        #${e}-download-manager-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.42);
        }
      </style>
    `}generateContentStyles(){return""}cacheElements(){const e=this.config.integration?.cssPrefix||"dm";this.elements={header:this.panel.querySelector(`#${e}-download-manager-header`),title:this.panel.querySelector(`#${e}-download-manager-title`),content:this.panel.querySelector(`#${e}-download-manager-content`),downloadsList:this.panel.querySelector(`#${e}-download-manager-content`),collapseBtn:this.panel.querySelector(`#${e}-download-manager-collapse`),clearBtn:this.panel.querySelector(`#${e}-download-manager-clear`),cancelAllBtn:this.panel.querySelector(`#${e}-download-manager-cancel-all`)}}bindEvents(){this.elements.header?this.elements.header.addEventListener("click",o=>{o.target.tagName!=="BUTTON"&&this.toggleCollapsed()}):console.error("❌ Header not found!"),this.elements.collapseBtn?this.elements.collapseBtn.addEventListener("click",o=>{o.stopPropagation(),this.toggleCollapsed()}):console.error("❌ Collapse button not found!");const e=this.config.integration?.cssPrefix||"dm",t=`${e}-download-manager-clear`,n=`${e}-download-manager-cancel-all`;if(this.elements.clearBtn)this.elements.clearBtn.addEventListener("click",o=>{o.stopPropagation(),this.emit("clearCompleted")});else{console.error("❌ Clear button not found!"),console.error("❌ Tried selector:",`#${t}`);const o=document.querySelector(`#${t}`);console.error("❌ Element exists in DOM:",!!o)}if(this.elements.cancelAllBtn)this.elements.cancelAllBtn.addEventListener("click",o=>{o.stopPropagation(),this.emit("cancelAll")});else{console.error("❌ Cancel all button not found!"),console.error("❌ Tried selector:",`#${n}`);const o=document.querySelector(`#${n}`);console.error("❌ Element exists in DOM:",!!o)}this.elements.content?this.elements.content.addEventListener("click",o=>{const a=o.target;if(a.classList.contains("cancel-download-btn")){const l=a.getAttribute("data-download-id");o.stopPropagation(),this.emit("cancelDownload",l)}if(a.classList.contains("remove-download-btn")){const l=a.getAttribute("data-download-id");o.stopPropagation(),o.preventDefault(),this.emit("removeDownload",l)}}):console.error("❌ Content element not found for event delegation!")}showPanel(){this.panel||this.createPanel();const e=this.config.ui?.position||"right";this.panel.style.transform="translateX(0)",this.panel.style.opacity="1",this.emit("panelShown")}hidePanel(){if(!this.panel)return;const e=this.config.ui?.position||"right",t=e==="right"?"translateX(100%)":e==="left"?"translateX(-100%)":"translateY(-100%)";this.panel.style.transform=t,this.panel.style.opacity="0",this.emit("panelHidden")}toggleCollapsed(){const e=!this._isCollapsed;return this.setCollapsed(e),this.emit("collapseToggled",e),e}setCollapsed(e){this._isCollapsed=!!e,this.elements.content&&(this._isCollapsed?this.elements.content.style.display="none":this.elements.content.style.display="block",this.elements.collapseBtn&&(this.elements.collapseBtn.textContent=this._isCollapsed?"+":"−",this.elements.collapseBtn.title=this._isCollapsed?"Expand":"Collapse"))}updateHeader(e){if(!this.elements.title)return;const t=this.config.labels||{},n=t.title||"📥 Downloads",o=e.active>0?(t.activeDownloads||"({count} active)").replace("{count}",e.active):t.noActiveDownloads||"(0 active)";if(this.elements.title.textContent=`${n} ${o}`,this.elements.collapseBtn&&(this.elements.collapseBtn.textContent=this._isCollapsed?"+":"−",this.elements.collapseBtn.title=this._isCollapsed?"Expand":"Collapse"),this.elements.clearBtn){const a=e.completed>0||e.cancelled>0||e.failed>0;this.elements.clearBtn.style.display=a?"block":"none"}this.elements.cancelAllBtn&&(this.elements.cancelAllBtn.style.display=e.active>0?"block":"none")}updateDownloadItem(e,t){if(!this.elements.downloadsList)return;let n=document.getElementById(`download-item-${e}`);const o=!n;n||(n=document.createElement("div"),n.id=`download-item-${e}`,n.style.cssText=`
        padding: 8px 12px;
        border-bottom: 1px solid #333;
        background: #1b1b1b;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(-10px);
      `,this.elements.downloadsList.appendChild(n),this.buildDownloadItemSkeleton(n,e),requestAnimationFrame(()=>{n.style.opacity="1",n.style.transform="translateY(0)"})),this.updateDownloadItemInPlace(n,t)}populateDownloadItem(e,t){const n=Math.round(t.progress||0),o=n>=100||t.isCompleted,a=t.isCancelled||t.status?.toLowerCase().includes("cancelled")||t.status?.toLowerCase().includes("canceled"),l=t.status?.toLowerCase().includes("failed")||t.status?.toLowerCase().includes("error")||t.status?.toLowerCase().includes("interrupted"),c=o||a||l,i=t.filename||"Unknown",p=t.downloaded||0,r=t.total||0,h=t.status||"Downloading...",d=u=>{if(u===0)return"0 B";const b=1024,x=["B","KB","MB","GB"],s=Math.floor(Math.log(u)/Math.log(b));return parseFloat((u/Math.pow(b,s)).toFixed(2))+" "+x[s]},f=d(p),g=r>0?d(r):"Unknown",y=p===0&&r===0;e.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
        <div style="flex: 1; min-width: 0;">
          <div style="font-weight: 500; color: ${c?l?"#f44336":o?"#4caf50":"#ff9800":"#fff"}; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${l?"❌":o?"✅":a?"🚫":"🎬"} ${i}
          </div>
        </div>
${c?`<button data-download-id="${e.id.replace("download-item-","")}" class="remove-download-btn"
                   style="background: none; border: none; color: #ccc; font-size: 14px; cursor: pointer; padding: 2px 4px; border-radius: 2px; margin-left: 8px; flex-shrink: 0; transition: all 0.2s ease;"
                   onmouseover="this.style.background='#333'; this.style.color='#fff'" 
                   onmouseout="this.style.background='none'; this.style.color='#ccc'"
                   title="Remove from list">×</button>`:`<button data-download-id="${e.id.replace("download-item-","")}" class="cancel-download-btn"
                   style="background: #d32f2f; border: none; color: #fff; font-size: 10px; cursor: pointer; padding: 2px 6px; border-radius: 3px; margin-left: 8px; flex-shrink: 0; transition: all 0.2s ease; font-weight: 500;"
                   onmouseover="this.style.background='#b71c1c'" 
                   onmouseout="this.style.background='#d32f2f'"
                   title="Cancel active download">STOP</button>`}
      </div>
      
      <div style="margin-bottom: 6px;">
        <div style="background: #333; border-radius: 10px; height: 4px; overflow: hidden;">
          <div style="background: ${l?"#f44336":a?"#ff9800":o?"#4caf50":"#007acc"}; height: 100%; width: ${n}%; transition: all 0.3s ease;"></div>
        </div>
      </div>
      
      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: #ccc;">
        <span>${n}%</span>
        <span style="text-align: right; flex: 1; margin-left: 8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          ${y?h:`${f}${r>0?` / ${g}`:""}`}
        </span>
      </div>
    `}buildDownloadItemSkeleton(e,t){e.style.cssText=`
      padding: 12px 14px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      background: #09090b;
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(-10px);
    `;const n=document.createElement("div");n.style.cssText="display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 10px;";const o=document.createElement("div");o.dataset.role="badge",o.style.cssText="width: 38px; height: 34px; border-radius: 8px; display: grid; place-items: center; flex-shrink: 0; background: rgba(255,45,85,0.1); border: 1px solid rgba(255,45,85,0.28); color: #ff8da3; font-size: 10px; font-weight: 900;";const a=document.createElement("div");a.style.cssText="flex: 1; min-width: 0;";const l=document.createElement("div");l.dataset.role="title",l.style.cssText="font-weight: 800; color: #f8fafc; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";const c=document.createElement("div");c.dataset.role="status-line",c.style.cssText="margin-top: 3px; color: #a8b3c7; font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;",a.appendChild(l),a.appendChild(c);const i=document.createElement("button");i.dataset.role="action",i.setAttribute("data-download-id",t),i.className="cancel-download-btn",i.textContent="Stop",i.style.cssText="background: rgba(255,51,79,0.18); border: 1px solid rgba(255,51,79,0.44); color: #fff; font-size: 11px; cursor: pointer; padding: 6px 8px; border-radius: 7px; flex-shrink: 0; transition: all 0.2s ease; font-weight: 800;",i.onmouseover=function(){this.style.background="rgba(255,51,79,0.28)"},i.onmouseout=function(){this.style.background="rgba(255,51,79,0.18)"},n.appendChild(o),n.appendChild(a),n.appendChild(i);const p=document.createElement("div");p.style.cssText="margin-bottom: 8px;";const r=document.createElement("div");r.style.cssText="background: rgba(255,255,255,0.1); border-radius: 999px; height: 6px; overflow: hidden;";const h=document.createElement("div");h.dataset.role="progress-fill",h.style.cssText="background: linear-gradient(90deg, #ff2d55, #ff5a36); height: 100%; width: 0%; transition: all 0.3s ease;",r.appendChild(h),p.appendChild(r);const d=document.createElement("div");d.style.cssText="display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: #a8b3c7;";const f=document.createElement("span");f.dataset.role="percent",f.textContent="0%";const g=document.createElement("span");g.dataset.role="details",g.style.cssText="text-align: right; flex: 1; margin-left: 8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;",g.textContent="Starting...",d.appendChild(f),d.appendChild(g),e.appendChild(n),e.appendChild(p),e.appendChild(d)}updateDownloadItemInPlace(e,t){const n=Math.round(t.progress||0),o=n>=100||t.isCompleted,a=t.isCancelled||t.status?.toLowerCase?.().includes("cancelled")||t.status?.toLowerCase?.().includes("canceled"),l=t.status?.toLowerCase?.().includes("failed")||t.status?.toLowerCase?.().includes("error")||t.status?.toLowerCase?.().includes("interrupted"),c=o||a||l,i=t.filename||"Unknown",p=t.downloaded||0,r=t.total||0,h=t.status||"Downloading...",d=m=>{if(m===0)return"0 B";const S=1024,B=["B","KB","MB","GB"],E=Math.floor(Math.log(m)/Math.log(S));return parseFloat((m/Math.pow(S,E)).toFixed(2))+" "+B[E]},f=d(p),g=r>0?d(r):"Unknown",y=p===0&&r===0,u=e.querySelector('[data-role="badge"]'),b=e.querySelector('[data-role="title"]'),x=e.querySelector('[data-role="status-line"]'),s=e.querySelector('[data-role="action"]'),v=e.querySelector('[data-role="progress-fill"]'),C=e.querySelector('[data-role="percent"]'),k=e.querySelector('[data-role="details"]'),w=String(i||"").toLowerCase(),$=w.includes("mp3")||w.includes("audio")?"MP3":w.includes("4k")||w.includes("2160")?"4K":"MP4";if(u){u.textContent=$;const m=$==="MP3";u.style.color=m?"#ffc0aa":"#ff8da3",u.style.borderColor=m?"rgba(255,90,54,0.34)":"rgba(255,45,85,0.28)",u.style.background=m?"rgba(255,90,54,0.11)":"rgba(255,45,85,0.1)"}b&&(b.style.color=c?l?"#ff6b7a":o?"#36d58b":"#ffc857":"#f8fafc",b.textContent=i),x&&(x.textContent=h,x.style.color=l?"#ff6b7a":a?"#ffc857":"#a8b3c7"),s&&(s.setAttribute("data-download-id",e.id.replace("download-item-","")),c?(s.className="remove-download-btn",s.textContent="×",s.title="Remove from list",s.style.background="rgba(255,255,255,0.05)",s.style.border="1px solid rgba(255,255,255,0.12)",s.style.color="#d7deea",s.style.fontSize="14px",s.onmouseover=function(){this.style.background="rgba(255,255,255,0.12)",this.style.color="#fff"},s.onmouseout=function(){this.style.background="rgba(255,255,255,0.05)",this.style.color="#d7deea"}):(s.className="cancel-download-btn",s.textContent="Stop",s.title="Cancel active download",s.style.background="rgba(255,51,79,0.18)",s.style.border="1px solid rgba(255,51,79,0.44)",s.style.color="#fff",s.style.fontSize="11px",s.onmouseover=function(){this.style.background="rgba(255,51,79,0.28)"},s.onmouseout=function(){this.style.background="rgba(255,51,79,0.18)"})),v&&(v.style.width=`${n}%`,v.style.background=l?"#ff334f":a?"#ffc857":o?"#36d58b":"linear-gradient(90deg, #ff2d55, #ff5a36)"),C&&(C.textContent=`${n}%`),k&&(k.textContent=y?h:`${f}${r>0?` / ${g}`:""}`)}removeDownloadItem(e){if(this.elements.downloadsList&&(this.removalInProgress||(this.removalInProgress=new Set),!this.removalInProgress.has(e))){this.removalInProgress.add(e);try{const t=this.elements.downloadsList.querySelector(`#download-item-${e}`);t&&t.remove()}finally{setTimeout(()=>{this.removalInProgress.delete(e)},100)}}}truncateFilename(e,t=35){if(!e||e.length<=t)return e;const n=e.substring(e.lastIndexOf("."));return e.substring(0,e.lastIndexOf(".")).substring(0,t-n.length-3)+"..."+n}on(e,t){this._listeners||(this._listeners=new Map),this._listeners.has(e)||this._listeners.set(e,new Set),this._listeners.get(e).add(t)}emit(e,...t){if(!this._listeners)return;const n=this._listeners.get(e);n&&n.forEach(o=>{try{o(...t)}catch(a){console.error(`🎨 Error in UI event listener for ${e}:`,a)}})}destroy(){this.panel&&(this.panel.remove(),this.panel=null),this.elements={},this._listeners&&this._listeners.clear()}}
