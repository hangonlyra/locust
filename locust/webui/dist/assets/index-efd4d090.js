import{j as t,M as Se,B as m,I as Y,d as we,u as ge,r as l,a as Te,b as w,T as u,L as p,C as v,c as $,e as Ce,f as ke,g as ve,h,D as T,i as b,F as Re,k as $e,l as De,A as Z,m as X,n as ee,o as te,p as Pe,q as Ee,s as Ae,P as Ie,t as Le,v as Me,w as K,x as J,y as Ne,z as Fe,E as Oe,G as g,H as Ue,J as Ge,K as We,N as He,O as Be,Q as Ve,R as _e,S as qe,U as Ke,V as Je,W as ze}from"./vendor-1423f33a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function F({open:e,onClose:s,children:n}){return t.jsx(Se,{onClose:s,open:e,children:t.jsxs(m,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"md",display:"flex",flexDirection:"column",rowGap:2,bgcolor:"background.paper",boxShadow:24,borderRadius:2,p:4},children:[t.jsx(Y,{color:"inherit",onClick:s,sx:{position:"absolute",top:1,right:1},children:t.jsx(we,{})}),n]})})}const D=ge,Qe=Te;function C(e){const s=Qe();return l.useCallback(n=>{s(e(n))},[e,s])}const Ye=[{name:"Carl Byström",website:"http://cgbystrom.com/",social:{handle:"@cgbystrom",link:"https://twitter.com/cgbystrom/"}},{name:"Jonatan Heyman",website:"http://heyman.info/",social:{handle:"@jonatanheyman",link:"https://twitter.com/jonatanheyman/"}},{name:"Joakim Hamrén",social:{handle:"@jahaaja",link:"https://twitter.com/Jahaaja/"}},{name:"ESN Social Software",website:"http://esn.me/",social:{handle:"@uprise_ea",link:"https://twitter.com/uprise_ea"}},{name:"Hugo Heyman",social:{handle:"@hugoheyman",link:"https://twitter.com/hugoheyman/"}}];function Ze(){const[e,s]=l.useState(!1),n=D(({swarm:r})=>r.version);return t.jsxs(t.Fragment,{children:[t.jsx(m,{sx:{display:"flex",justifyContent:"flex-end"},children:t.jsx(w,{color:"inherit",onClick:()=>s(!0),variant:"text",children:"About"})}),t.jsxs(F,{onClose:()=>s(!1),open:e,children:[t.jsxs("div",{children:[t.jsx(u,{component:"h2",variant:"h4",children:"About"}),t.jsx(u,{component:"p",variant:"subtitle1",children:"The original idea for Locust was Carl Byström's who made a first proof of concept in June 2010. Jonatan Heyman picked up Locust in January 2011, implemented the current concept of Locust classes and made it work distributed across multiple machines."}),t.jsx(u,{component:"p",sx:{mt:2},variant:"subtitle1",children:"Jonatan, Carl and Joakim Hamrén has continued the development of Locust at their job, ESN Social Software, who have adopted Locust as an inhouse Open Source project."})]}),t.jsxs("div",{children:[t.jsx(u,{component:"h2",variant:"h4",children:"Authors and Copyright"}),t.jsx(m,{sx:{display:"flex",flexDirection:"column",rowGap:.5},children:Ye.map(({name:r,website:a,social:{handle:o,link:i}},c)=>t.jsxs("div",{children:[a?t.jsx(p,{href:a,children:r}):r,t.jsxs(m,{sx:{display:"inline",ml:.5},children:["(",t.jsx(p,{href:i,children:o}),")"]})]},`author-${c}`))})]}),t.jsxs("div",{children:[t.jsx(u,{component:"h2",variant:"h4",children:"License"}),t.jsx(u,{component:"p",variant:"subtitle1",children:"Open source licensed under the MIT license."})]}),t.jsxs("div",{children:[t.jsx(u,{component:"h2",variant:"h4",children:"Version"}),t.jsx(p,{href:`https://github.com/locustio/locust/releases/tag/${n}`,children:n})]}),t.jsxs("div",{children:[t.jsx(u,{component:"h2",variant:"h4",children:"Website"}),t.jsx(p,{href:"https://locust.io/",children:"https://locust.io"})]})]})]})}function Xe(){return t.jsx(m,{component:"nav",sx:{position:"fixed",bottom:0,width:"100%"},children:t.jsx(v,{maxWidth:"xl",sx:{display:"flex",justifyContent:"flex-end"},children:t.jsx(Ze,{})})})}const et={isDarkMode:!1},se=$({name:"theme",initialState:et,reducers:{setIsDarkMode:(e,{payload:s})=>({...e,isDarkMode:s})}}),tt=se.actions,st=se.reducer,k={DARK:"dark",LIGHT:"light"},nt=e=>Ce({palette:{mode:e,primary:{main:"#15803d"},success:{main:"#00C853"}}});function rt(){const e=D(({theme:{isDarkMode:r}})=>r),s=C(tt.setIsDarkMode);l.useEffect(()=>{s(localStorage.theme===k.DARK||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches)},[]);const n=()=>{localStorage.theme=e?k.LIGHT:k.DARK,s(!e)};return t.jsx(Y,{color:"inherit",onClick:n,children:e?t.jsx(ke,{}):t.jsx(ve,{})})}const x={READY:"ready",RUNNING:"running",STOPPED:"stopped",SPAWNING:"spawning",CLEANUP:"cleanup",STOPPING:"stopping",MISSING:"missing"};function at({isDistributed:e,state:s,host:n,totalRps:r,failRatio:a,userCount:o,workerCount:i}){return t.jsxs(m,{sx:{display:"flex",columnGap:2},children:[t.jsxs(m,{sx:{display:"flex",flexDirection:"column"},children:[t.jsx(u,{variant:"button",children:"Host"}),t.jsx(u,{children:n})]}),t.jsx(T,{flexItem:!0,orientation:"vertical"}),t.jsxs(m,{sx:{display:"flex",flexDirection:"column"},children:[t.jsx(u,{variant:"button",children:"Status"}),t.jsx(u,{variant:"button",children:s})]}),s===x.RUNNING&&t.jsxs(t.Fragment,{children:[t.jsx(T,{flexItem:!0,orientation:"vertical"}),t.jsxs(m,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[t.jsx(u,{variant:"button",children:"Users"}),t.jsx(u,{variant:"button",children:o})]})]}),e&&t.jsxs(t.Fragment,{children:[t.jsx(T,{flexItem:!0,orientation:"vertical"}),t.jsxs(m,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[t.jsx(u,{variant:"button",children:"Workers"}),t.jsx(u,{variant:"button",children:i})]})]}),t.jsx(T,{flexItem:!0,orientation:"vertical"}),t.jsxs(m,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[t.jsx(u,{variant:"button",children:"RPS"}),t.jsx(u,{variant:"button",children:r})]}),t.jsx(T,{flexItem:!0,orientation:"vertical"}),t.jsxs(m,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[t.jsx(u,{variant:"button",children:"Failures"}),t.jsx(u,{variant:"button",children:`${a}%`})]})]})}const ot=({swarm:{isDistributed:e,state:s,host:n,workerCount:r},ui:{totalRps:a,failRatio:o,userCount:i}})=>({isDistributed:e,state:s,host:n,totalRps:a,failRatio:o,userCount:i,workerCount:r}),it=h(ot)(at),ct=e=>!Object.keys(e).length;function lt(e,s){return{...e,...s}}const ut=e=>{const s=new URLSearchParams;for(const[n,r]of Object.entries(e))if(Array.isArray(r))for(const a of r)s.append(n,a);else s.append(n,r);return s},O=(e,s)=>Object.entries(s).reduce((n,[r,a])=>({...n,[r]:[...n[r]||[],a]}),e);function ne(e,s,n){return s&&(Array.isArray(s)?s.map(r=>ne(e,r,n)):typeof s=="object"?U(s,n):s)}const U=(e,s)=>Object.entries(e).reduce((n,[r,a])=>({...n,[s(r)]:ne(e,a,s)}),{}),re=e=>e.replace(/_([a-z0-9])/g,(s,n)=>n.toUpperCase()),ae=e=>e[0]===e[0].toUpperCase()?e:e.replace(/([a-z0-9])([A-Z0-9])/g,"$1_$2").toLowerCase(),G=e=>U(e,re),z=e=>U(e,ae),dt=e=>e.replace(/([a-z0-9])([A-Z0-9])/g,"$1 $2").replace(/^./,s=>s.toUpperCase()),mt=(e,{shouldTransformKeys:s=!0}={})=>e?Object.entries(e).reduce((n,[r,a])=>{if(!a)return n;const o=s?ae(r):r,i=encodeURI(String(a).replace("#",""));return n?`${n}&${o}=${i}`:`?${o}=${i}`},""):"",ht=e=>Object.fromEntries(new URLSearchParams(e).entries()),W={GET:"GET",POST:"POST",PUT:"PUT",DELETE:"DELETE"},xt=({body:e,form:s})=>e?s?ut(z(e)):JSON.stringify(z(e)):null,pt=({method:e,body:s,form:n})=>({headers:{"Content-Type":n?"application/x-www-form-urlencoded":"application/json"},method:e,body:xt({body:s,form:n})});async function S(e,{method:s=W.GET,body:n=null,query:r=null,form:a=!1}={}){try{const o=mt(r),i=pt({method:s,body:n,form:a}),c=await fetch(`${e}${o}`,i),d=G(await c.json());if(d.statusCode>=400)throw new Error(`Network Error: Status ${d.statusCode} ${d.message}`);return d}catch(o){return console.error("Network Error:",o),o}}function oe({children:e,onSubmit:s}){const n=l.useCallback(async r=>{r.preventDefault();const a=new FormData(r.target),o={};for(const[i,c]of a.entries())o.hasOwnProperty(i)?(Array.isArray(o[i])||(o[i]=[o[i]]),o[i].push(c)):o[i]=c;s(o)},[s]);return t.jsx("form",{onSubmit:n,children:e})}function ft({onSubmit:e,spawnRate:s,userCount:n}){const r=a=>{e(),S("swarm",{method:W.POST,body:a,form:!0})};return t.jsxs(v,{maxWidth:"md",sx:{my:2},children:[t.jsx(u,{component:"h2",noWrap:!0,variant:"h6",children:"Edit running load test"}),t.jsx(oe,{onSubmit:r,children:t.jsxs(m,{sx:{my:2,display:"flex",flexDirection:"column",rowGap:4},children:[t.jsx(b,{defaultValue:n||1,label:"Number of users (peak concurrency)",name:"userCount"}),t.jsx(b,{defaultValue:s||1,label:"Ramp Up (users started/second)",name:"spawnRate"}),t.jsx(w,{size:"large",type:"submit",variant:"contained",children:"Update Swarm"})]})})]})}const jt=({swarm:{spawnRate:e,userCount:s}})=>({spawnRate:e,userCount:s}),yt=h(jt)(ft);function bt(){const[e,s]=l.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(w,{color:"secondary",onClick:()=>s(!0),type:"button",variant:"contained",children:"Edit"}),t.jsx(F,{onClose:()=>s(!1),open:e,children:t.jsx(yt,{onSubmit:()=>s(!1)})})]})}function L({label:e,name:s,options:n,multiple:r=!1,defaultValue:a,sx:o}){return t.jsxs(Re,{sx:o,children:[t.jsx($e,{htmlFor:s,shrink:!0,children:e}),t.jsx(De,{defaultValue:a||r&&n||n[0],label:e,multiple:r,name:s,native:!0,children:n.map((i,c)=>t.jsx("option",{value:i,children:i},`option-${i}-${c}`))})]})}const Q=e=>e.defaultValue!==null&&typeof e.defaultValue!="boolean";function St({label:e,defaultValue:s,choices:n,helpText:r,isSecret:a}){const o=dt(e),i=r?`${o} (${r})`:o;return n?t.jsx(L,{defaultValue:s,label:i,name:e,options:n,sx:{width:"100%"}}):t.jsx(b,{label:i,name:e,sx:{width:"100%"},type:a?"password":"text",value:s})}function wt({extraOptions:e}){const s=l.useMemo(()=>Object.entries(e).reduce((r,[a,o])=>Q(o)?[...r,{label:a,...o}]:r,[]),[e]),n=l.useMemo(()=>Object.keys(e).reduce((r,a)=>Q(e[a])?r:[...r,a],[]),[e]);return t.jsxs(Z,{children:[t.jsx(X,{expandIcon:t.jsx(ee,{}),children:t.jsx(u,{children:"Custom parameters"})}),t.jsx(te,{children:t.jsxs(m,{sx:{display:"flex",flexDirection:"column",rowGap:4},children:[s.map((r,a)=>t.jsx(St,{...r},`valid-parameter-${a}`)),t.jsx(m,{children:n&&t.jsxs(t.Fragment,{children:[t.jsx(u,{children:"The following custom parameters can't be set in the Web UI, because it is a boolean or None type:"}),t.jsx("ul",{children:n.map((r,a)=>t.jsx("li",{children:t.jsx(u,{children:r})},`invalid-parameter-${a}`))})]})})]})})]})}function H(e,{payload:s}){return lt(e,s)}const gt=G(window.templateArgs),ie=$({name:"swarm",initialState:gt,reducers:{setSwarm:H}}),ce=ie.actions,Tt=ie.reducer;function Ct({availableShapeClasses:e,availableUserClasses:s,host:n,extraOptions:r,isShape:a,numUsers:o,overrideHostWarning:i,runTime:c,setSwarm:d,showUserclassPicker:j,spawnRate:y}){const f=P=>{d({state:x.RUNNING}),S("swarm",{method:W.POST,body:P,form:!0})};return t.jsxs(v,{maxWidth:"md",sx:{my:2},children:[t.jsx(u,{component:"h2",noWrap:!0,variant:"h6",children:"Start new load test"}),t.jsx(oe,{onSubmit:f,children:t.jsxs(m,{sx:{my:2,display:"flex",flexDirection:"column",rowGap:4},children:[j&&t.jsxs(t.Fragment,{children:[t.jsx(L,{label:"User Classes",multiple:!0,name:"userClasses",options:s}),t.jsx(L,{label:"Shape Class",name:"shapeClass",options:e})]}),t.jsx(b,{defaultValue:a&&"-"||o||1,disabled:!!a,label:"Number of users (peak concurrency)",name:"userCount"}),t.jsx(b,{defaultValue:a&&"-"||y||1,disabled:!!a,label:"Ramp Up (users started/second)",name:"spawnRate",title:"Disabled for tests using LoadTestShape class"}),t.jsx(b,{defaultValue:n,label:`Host ${i?"(setting this will override the host for the User classes)":""}`,name:"host",title:"Disabled for tests using LoadTestShape class"}),t.jsxs(Z,{children:[t.jsx(X,{expandIcon:t.jsx(ee,{}),children:t.jsx(u,{children:"Advanced options"})}),t.jsx(te,{children:t.jsx(b,{defaultValue:c,label:"Run time (e.g. 20, 20s, 3m, 2h, 1h20m, 3h30m10s, etc.)",name:"runTime",sx:{width:"100%"}})})]}),!ct(r)&&t.jsx(wt,{extraOptions:r}),t.jsx(w,{size:"large",type:"submit",variant:"contained",children:"Start Swarm"})]})})]})}const kt=({swarm:{availableShapeClasses:e,availableUserClasses:s,extraOptions:n,isShape:r,host:a,numUsers:o,overrideHostWarning:i,runTime:c,spawnRate:d,showUserclassPicker:j}})=>({availableShapeClasses:e,availableUserClasses:s,extraOptions:n,isShape:r,host:a,overrideHostWarning:i,showUserclassPicker:j,numUsers:o,runTime:c,spawnRate:d}),vt={setSwarm:ce.setSwarm},le=h(kt,vt)(Ct);function Rt(){const[e,s]=l.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(w,{color:"success",onClick:()=>s(!0),type:"button",variant:"contained",children:"New"}),t.jsx(F,{onClose:()=>s(!1),open:e,children:t.jsx(le,{})})]})}function $t(){const e=()=>{S("stats/reset")};return t.jsx(w,{color:"warning",onClick:e,type:"button",variant:"contained",children:"Reset"})}function Dt(){const[e,s]=l.useState(!1);l.useEffect(()=>{s(!1)},[]);const n=()=>{S("stop"),s(!0)};return t.jsx(w,{color:"error",disabled:e,onClick:n,type:"button",variant:"contained",children:e?"Loading":"Stop"})}function Pt(){const e=D(({swarm:s})=>s.state);return e===x.READY?null:e===x.STOPPED?t.jsx(Rt,{}):t.jsxs(m,{sx:{display:"flex",columnGap:2},children:[t.jsx(bt,{}),t.jsx(Dt,{}),t.jsx($t,{})]})}function Et(){return t.jsx(Pe,{position:"static",children:t.jsx(v,{maxWidth:"xl",children:t.jsxs(Ee,{sx:{display:"flex",justifyContent:"space-between"},children:[t.jsxs(p,{color:"inherit",href:"#",sx:{display:"flex",alignItems:"center",columnGap:2},underline:"none",children:[t.jsx("img",{height:"52",src:"/assets/logo.png",width:"52"}),t.jsx(u,{component:"h1",noWrap:!0,sx:{fontWeight:700,display:"flex",alignItems:"center"},variant:"h3",children:"Locust"})]}),t.jsxs(m,{sx:{display:"flex",columnGap:6},children:[t.jsx(it,{}),t.jsx(Pt,{}),t.jsx(rt,{})]})]})})})}function At({children:e}){return t.jsxs(t.Fragment,{children:[t.jsx(Et,{}),t.jsx("main",{children:e}),t.jsx(Xe,{})]})}const M=(e,s=0)=>{const n=Math.pow(10,s);return Math.round(e*n)/n};function It({content:e,round:s,markdown:n}){return s?M(e,s):n?t.jsx(Fe,{skipHtml:!1,children:e}):e}function R({rows:e,structure:s}){return t.jsx(Ae,{component:Ie,children:t.jsxs(Le,{children:[t.jsx(Me,{children:t.jsx(K,{children:s.map(({title:n,key:r})=>t.jsx(J,{children:n},`table-head-${r}`))})}),t.jsx(Ne,{children:e.map((n,r)=>t.jsx(K,{children:s.map(({key:a,round:o,markdown:i},c)=>t.jsx(J,{children:t.jsx(It,{content:n[a],markdown:i,round:o})},`table-row=${c}`))},`${n.name}-${r}`))})]})})}function Lt({rows:e,tableStructure:s}){return s?t.jsx(R,{rows:e,structure:s}):null}const Mt=({swarm:{extendedTables:e},ui:{extendedStats:s},url:{query:n}})=>{const r=n&&n.tab&&e&&e.find(({key:o})=>o===n.tab),a=n&&n.tab&&s&&s.find(({key:o})=>o===n.tab);return{tableStructure:r?r.structure.map(({key:o,...i})=>({key:re(o),...i})):null,rows:a?a.data:[]}},Nt=h(Mt)(Lt),Ft=[{key:"count",title:"# occurrences"},{key:"traceback",title:"Traceback"}];function Ot({exceptions:e}){return t.jsx(R,{rows:e,structure:Ft})}const Ut=({ui:{exceptions:e}})=>({exceptions:e}),Gt=h(Ut)(Ot),Wt=[{key:"occurrences",title:"# Failures"},{key:"method",title:"Method"},{key:"name",title:"Name"},{key:"error",title:"Message",markdown:!0}];function Ht({errors:e}){return t.jsx(R,{rows:e,structure:Wt})}const Bt=({ui:{errors:e}})=>({errors:e}),Vt=h(Bt)(Ht);function _t({extendedCsvFiles:e,statsHistoryEnabled:s}){return t.jsxs(Oe,{sx:{display:"flex",flexDirection:"column"},children:[t.jsx(g,{children:t.jsx(p,{href:"/stats/requests/csv",children:"Download requests CSV"})}),s&&t.jsx(g,{children:t.jsx(p,{href:"/stats/requests_full_history/csv",children:"Download full request statistics history CSV"})}),t.jsx(g,{children:t.jsx(p,{href:"/stats/failures/csv",children:"Download failures CSV"})}),t.jsx(g,{children:t.jsx(p,{href:"/exceptions/csv",children:"Download exceptions CSV"})}),t.jsx(g,{children:t.jsx(p,{href:"/stats/report",target:"_blank",children:"Download Report"})}),e&&e.map(({href:n,title:r})=>t.jsx(g,{children:t.jsx(p,{href:n,children:r})}))]})}const qt=({swarm:{extendedCsvFiles:e,statsHistoryEnabled:s}})=>({extendedCsvFiles:e,statsHistoryEnabled:s}),Kt=h(qt)(_t),Jt=[{key:"method",title:"Type"},{key:"name",title:"Name"},{key:"numRequests",title:"# Requests"},{key:"numFailures",title:"# Fails"},{key:"medianResponseTime",title:"Median (ms)",round:2},{key:"ninetiethResponseTime",title:"90%ile (ms)"},{key:"ninetyNinthResponseTime",title:"99%ile (ms)"},{key:"avgResponseTime",title:"Average (ms)",round:2},{key:"minResponseTime",title:"Min (ms)"},{key:"maxResponseTime",title:"Max (ms)"},{key:"avgContentLength",title:"Average size (bytes)",round:2},{key:"currentRps",title:"Current RPS",round:2},{key:"currentFailPerSec",title:"Current Failures/s",round:2}];function zt({stats:e}){return t.jsx(R,{rows:e,structure:Jt})}const Qt=({ui:{stats:e}})=>({stats:e}),Yt=h(Qt)(zt),Zt=({charts:e,title:s,seriesData:n})=>({legend:{icon:"circle",inactiveColor:"#b3c3bc",textStyle:{color:"#b3c3bc"}},title:{text:s,x:10,y:10},tooltip:{trigger:"axis",formatter:r=>r&&Array.isArray(r)&&r.length>0&&r.some(a=>!!a.value)?r.reduce((a,{color:o,seriesName:i,value:c})=>`
          ${a}
          <br>
          <span style="color:${o};">
            ${i}:&nbsp${c}
          </span>
        `,""):"No data",axisPointer:{animation:!0},textStyle:{color:"#b3c3bc",fontSize:13},backgroundColor:"rgba(21,35,28, 0.93)",borderWidth:0,extraCssText:"z-index:1;"},xAxis:{type:"category",splitLine:{show:!1},axisLine:{lineStyle:{color:"#5b6f66"}},data:e.time},yAxis:{type:"value",boundaryGap:[0,"5%"],splitLine:{show:!1},axisLine:{lineStyle:{color:"#5b6f66"}}},series:n,grid:{x:60,y:70,x2:40,y2:40},color:["#00ca5a","#ff6d6d"],toolbox:{feature:{saveAsImage:{name:s.replace(/\s+/g,"_").toLowerCase()+"_"+new Date().getTime()/1e3,title:"Download as PNG",emphasis:{iconStyle:{textPosition:"left"}}}}}}),Xt=({charts:e,lines:s})=>s.map(({key:n,name:r})=>({name:r,type:"line",showSymbol:!0,data:e[n]})),es=e=>({symbol:"none",label:{formatter:s=>`Run #${s.dataIndex+1}`},lineStyle:{color:"#5b6f66"},data:(e.markers||[]).map(s=>({xAxis:s}))});Ue("locust",{backgroundColor:"#27272a",xAxis:{lineColor:"#f00"},textStyle:{color:"#b3c3bc"},title:{textStyle:{color:"#b3c3bc"}}});function ts({charts:e,title:s,lines:n}){const[r,a]=l.useState(null),o=l.useRef(null);return l.useEffect(()=>{if(!o.current)return;const i=Ge(o.current,"locust");return i.setOption(Zt({charts:e,title:s,seriesData:Xt({charts:e,lines:n})})),a(i),()=>{We(i)}},[o]),l.useEffect(()=>{const i=n.every(({key:c})=>!!e[c]);r&&i&&r.setOption({xAxis:{data:e.time},series:n.map(({key:c},d)=>({data:e[c],...d===0?{markLine:es(e)}:{}}))})},[e,r,n]),t.jsx("div",{ref:o,style:{width:"100%",height:"300px"}})}const ss=({ui:{charts:e}})=>({charts:e}),ns=h(ss)(ts),rs=[{title:"Total Requests per Second",lines:[{name:"RPS",key:"currentRps"},{name:"Failures/s",key:"currentFailPerSec"}]},{title:"Response Times (ms)",lines:[{name:"Median Response Time",key:"responseTimePercentile1"},{name:"95% percentile",key:"responseTimePercentile2"}]},{title:"Number of Users",lines:[{name:'"Number of Users"',key:"userCount"}]}];function as(){return t.jsx("div",{children:rs.map((e,s)=>t.jsx(ns,{...e},`swarm-chart-${s}`))})}function os(e){return(e*100).toFixed(1)+"%"}function N({classRatio:e}){return t.jsx("ul",{children:Object.entries(e).map(([s,{ratio:n,tasks:r}])=>t.jsxs("li",{children:[`${os(n)} ${s}`,r&&t.jsx(N,{classRatio:r})]},`nested-ratio-${s}`))})}function is({ratios:{perClass:e,total:s}}){return!e&&!s?null:t.jsxs("div",{children:[e&&t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Ratio Per Class"}),t.jsx(N,{classRatio:e})]}),s&&t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Total Ratio"}),t.jsx(N,{classRatio:s})]})]})}const cs=({ui:{ratios:e}})=>({ratios:e}),ls=h(cs)(is),us=[{key:"id",title:"Worker"},{key:"state",title:"State"},{key:"userCount",title:"# users"},{key:"cpuUsage",title:"CPU usage"},{key:"memoryUsage",title:"Memory usage"}];function ds({workers:e=[]}){return t.jsx(R,{rows:e,structure:us})}const ms=({ui:{workers:e}})=>({workers:e}),hs=h(ms)(ds),xs=[{component:Yt,key:"stats",title:"Statistics"},{component:as,key:"charts",title:"Charts"},{component:Vt,key:"failures",title:"Failures"},{component:Gt,key:"exceptions",title:"Exceptions"},{component:ls,key:"ratios",title:"Current Ratio"},{component:Kt,key:"reports",title:"Download Data"}],ps=[{component:hs,key:"workers",title:"Workers",shouldDisplayTab:e=>e.swarm.isDistributed}],fs=e=>{const s=new URL(window.location.href);for(const[n,r]of Object.entries(e))s.searchParams.set(n,r);window.history.pushState(null,"",s)},js=()=>window.location.search?ht(window.location.search):null,ys={query:js()},ue=$({name:"url",initialState:ys,reducers:{setUrl:H}}),bs=ue.actions,Ss=ue.reducer;function ws({currentTabIndexFromQuery:e,setUrl:s,tabs:n}){const[r,a]=l.useState(e),o=(i,c)=>{const d=n[c].key;fs({tab:d}),s({query:{tab:d}}),a(c)};return t.jsxs(v,{maxWidth:"xl",children:[t.jsx(m,{sx:{mb:2},children:t.jsx(He,{onChange:o,value:r,children:n.map(({title:i},c)=>t.jsx(Be,{label:i},`tab-${c}`))})}),n.map(({component:i=Nt},c)=>r===c&&t.jsx(i,{},`tabpabel-${c}`))]})}const gs=e=>{const{swarm:{extendedTabs:s=[]},url:{query:n}}=e,r=ps.filter(({shouldDisplayTab:o})=>o(e)),a=[...xs,...r,...s];return{tabs:a,currentTabIndexFromQuery:n&&n.tab?a.findIndex(({key:o})=>o===n.tab):0}},Ts={setUrl:bs.setUrl},Cs=h(gs,Ts)(ws);function E(e,{execute:s=!1}={}){const[n,r]=l.useState(!0),[a,o]=l.useState(null),[i,c]=l.useState(null),d=l.useCallback((...j)=>(o(null),c(null),e(...j).then(y=>{o(y),r(!1)}).catch(y=>{c(y),r(!1)})),[e]);return l.useEffect(()=>{s&&d()},[d,s]),{execute:d,isLoading:n,value:a,error:i}}function A(e,s,{shouldRunInterval:n}={shouldRunInterval:!0}){const r=l.useRef(e);l.useEffect(()=>{r.current=e},[e]),l.useEffect(()=>{if(!n)return;const a=setInterval(()=>r.current(),s);return()=>{clearInterval(a)}},[s,n])}const ks={totalRps:0,failRatio:0,stats:[],errors:[],exceptions:[],charts:G(window.templateArgs).history.reduce(O,{}),ratios:{},userCount:0},vs=(e,s)=>O(e,{currentRps:{value:null},currentFailPerSec:{value:null},responseTimePercentile1:{value:null},responseTimePercentile2:{value:null},userCount:{value:null},time:s}),de=$({name:"ui",initialState:ks,reducers:{setUi:H,updateCharts:(e,{payload:s})=>({...e,charts:O(e.charts,s)}),updateChartMarkers:(e,{payload:s})=>({...e,charts:{...vs(e.charts,s.length?s.at(-1):e.charts.time[0]),markers:e.charts.markers?[...e.charts.markers,s]:[e.charts.time[0],s]}})}}),I=de.actions,Rs=de.reducer;function $s(){const e=C(ce.setSwarm),s=C(I.setUi),n=C(I.updateCharts),r=C(I.updateChartMarkers),a=D(({swarm:f})=>f),o=l.useRef(a.state),[i,c]=l.useState(!1),{execute:d}=E(async()=>{const{extendedStats:f,state:P,stats:me,errors:he,totalRps:xe,failRatio:B,workers:pe,currentResponseTimePercentile1:fe,currentResponseTimePercentile2:je,userCount:V}=await S("stats/requests");P===x.STOPPED&&e({state:x.STOPPED});const _=new Date().toLocaleTimeString();i&&(c(!1),r(_));const q=M(xe,2),ye=M(B*100),be={currentRps:q,currentFailPerSec:B,responseTimePercentile1:fe,responseTimePercentile2:je,userCount:V,time:_};s({extendedStats:f,stats:me,errors:he,totalRps:q,failRatio:ye,workers:pe,userCount:V}),n(be)}),{execute:j}=E(async()=>{const f=await S("tasks");s({ratios:f})}),{execute:y}=E(async()=>{const{exceptions:f}=await S("exceptions");s({exceptions:f})});A(d,2e3,{shouldRunInterval:a.state!==x.STOPPED}),A(j,5e3,{shouldRunInterval:a.state!==x.STOPPED}),A(y,5e3,{shouldRunInterval:a.state!==x.STOPPED}),l.useEffect(()=>{a.state===x.RUNNING&&o.current===x.STOPPED&&c(!0),o.current=a.state},[a.state,o]),l.useEffect(()=>{d(),j()},[])}function Ds({isDarkMode:e,swarmState:s}){$s();const n=l.useMemo(()=>nt(e?k.DARK:k.LIGHT),[e]);return t.jsxs(Ve,{theme:n,children:[t.jsx(_e,{}),t.jsx(At,{children:s===x.READY?t.jsx(le,{}):t.jsx(Cs,{})})]})}const Ps=({swarm:{state:e},theme:{isDarkMode:s}})=>({isDarkMode:s,swarmState:e}),Es=h(Ps)(Ds),As=qe({swarm:Tt,theme:st,ui:Rs,url:Ss}),Is=Ke({reducer:As}),Ls=Je.createRoot(document.getElementById("root"));Ls.render(t.jsx(ze,{store:Is,children:t.jsx(Es,{})}));
