import{a as w,b as F,c as I,d as M,f as P}from"./chunk-SNGOFOAI.js";import{d as R}from"./chunk-QF4LVD63.js";import{Ca as g,Ea as f,Ga as y,Ia as v,Ja as C,R as d,S as p,Y as h,Za as A,ba as c,ea as m,nb as b,va as u}from"./chunk-UPCMCC5M.js";var D=[{path:"pagina-web",loadComponent:()=>import("./chunk-RXEEL3RG.js"),children:[{path:"inicio",title:"Inicio",loadComponent:()=>import("./chunk-DBDO4QSQ.js")},{path:"grupos",title:"Grupos",loadComponent:()=>import("./chunk-YHDDXEI7.js")},{path:"horarios",title:"Horarios",loadComponent:()=>import("./chunk-WJN3YZZV.js")},{path:"parroquia",title:"Parroquia",loadComponent:()=>import("./chunk-TVL5C5HQ.js")},{path:"sacramentos",title:"Sacramentos",loadComponent:()=>import("./chunk-JRHZFZ6K.js")},{path:"",redirectTo:"inicio",pathMatch:"full"}]},{path:"",redirectTo:"pagina-web",pathMatch:"full"}];var O="@",_=(()=>{let e=class e{constructor(r,o,n,a,s){this.doc=r,this.delegate=o,this.zone=n,this.animationType=a,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=h(f,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-QW3XGI2P.js")).catch(o=>{throw new d(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc,this.scheduler);let a=new n(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(r,o){let n=this.delegate.createRenderer(r,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new l(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let E=s.createRenderer(r,o);a.use(E)}).catch(s=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){g()},e.\u0275prov=p({token:e,factory:e.\u0275fac});let i=e;return i})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(O)}};function N(i="animations"){return v("NgAsyncAnimations"),m([{provide:y,useFactory:(e,t,r)=>new _(e,t,r,i),deps:[R,F,C]},{provide:u,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var S={providers:[P(D),N()]};var x=(()=>{let e=class e{constructor(){this.title="pagina-catedral"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["app-root"]],standalone:!0,features:[b],decls:1,vars:0,template:function(o,n){o&1&&A(0,"router-outlet")},dependencies:[M,w]});let i=e;return i})();I(x,S).catch(i=>console.error(i));
