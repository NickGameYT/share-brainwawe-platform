import{s as oe,e as d,a as A,t as L,c as p,b as m,l as ce,g as S,f as o,d as q,m as r,i as P,h as i,o as fe,p as ue,j as ie}from"../chunks/scheduler.ChSTGxN4.js";import{S as de,i as pe,c as Y,a as Z,m as ee,t as te,b as le,d as ae}from"../chunks/index.zzQGVg1l.js";import{e as me}from"../chunks/forms.CeeC4T9X.js";import{I as se,t as he}from"../chunks/Toaster.svelte_svelte_type_style_lang.BRJiNN0q.js";import{a as _e}from"../chunks/entry.BauIi3_i.js";function ne(c){let e,t=c[1].title[0]+"",l;return{c(){e=d("span"),l=L(t),this.h()},l(a){e=p(a,"SPAN",{class:!0});var s=m(e);l=q(s,t),s.forEach(o),this.h()},h(){r(e,"class","text-red-500 text-xs")},m(a,s){P(a,e,s),i(e,l)},p(a,s){s&2&&t!==(t=a[1].title[0]+"")&&ie(l,t)},d(a){a&&o(e)}}}function re(c){let e,t=c[1].description[0]+"",l;return{c(){e=d("span"),l=L(t),this.h()},l(a){e=p(a,"SPAN",{class:!0});var s=m(e);l=q(s,t),s.forEach(o),this.h()},h(){r(e,"class","text-red-500 text-xs")},m(a,s){P(a,e,s),i(e,l)},p(a,s){s&2&&t!==(t=a[1].description[0]+"")&&ie(l,t)},d(a){a&&o(e)}}}function be(c){let e;return{c(){e=L("Отправить")},l(t){e=q(t,"Отправить")},m(t,l){P(t,e,l)},d(t){t&&o(e)}}}function ge(c){let e,t;return{c(){e=d("span"),t=L(`\r
          Отправка...`),this.h()},l(l){e=p(l,"SPAN",{class:!0}),m(e).forEach(o),t=q(l,`\r
          Отправка...`),this.h()},h(){r(e,"class","loading loading-spinner loading-xs")},m(l,a){P(l,e,a),P(l,t,a)},d(l){l&&(o(e),o(t))}}}function ve(c){let e,t,l,a,s,U="Заголовок",b,h,g,j,x,F,R,_,y,w,V,M,k,X,z,v,B,C,G,J;g=new se({props:{icon:"mdi:lead-pencil"}});let f=c[1].title&&ne(c);w=new se({props:{icon:"mdi:text",class:"mr-2"}});let u=c[1].description&&re(c);function K(n,E){return n[0]?ge:be}let D=K(c),$=D(c);return{c(){e=d("section"),t=d("form"),l=d("fieldset"),a=d("div"),s=d("span"),s.textContent=U,b=A(),h=d("label"),Y(g.$$.fragment),j=A(),x=d("input"),F=A(),f&&f.c(),R=A(),_=d("div"),y=d("label"),Y(w.$$.fragment),V=L("Описание"),M=A(),k=d("textarea"),X=A(),u&&u.c(),z=A(),v=d("button"),$.c(),this.h()},l(n){e=p(n,"SECTION",{class:!0});var E=m(e);t=p(E,"FORM",{method:!0,class:!0});var Q=m(t);l=p(Q,"FIELDSET",{class:!0});var I=m(l);a=p(I,"DIV",{class:!0});var N=m(a);s=p(N,"SPAN",{class:!0,"data-svelte-h":!0}),ce(s)!=="svelte-1qg74ny"&&(s.textContent=U),b=S(N),h=p(N,"LABEL",{class:!0});var O=m(h);Z(g.$$.fragment,O),j=S(O),x=p(O,"INPUT",{type:!0,class:!0,placeholder:!0,name:!0}),O.forEach(o),F=S(N),f&&f.l(N),N.forEach(o),R=S(I),_=p(I,"DIV",{class:!0});var T=m(_);y=p(T,"LABEL",{class:!0,for:!0});var H=m(y);Z(w.$$.fragment,H),V=q(H,"Описание"),H.forEach(o),M=S(T),k=p(T,"TEXTAREA",{id:!0,class:!0,placeholder:!0,name:!0}),m(k).forEach(o),X=S(T),u&&u.l(T),T.forEach(o),z=S(I),v=p(I,"BUTTON",{type:!0,class:!0});var W=m(v);$.l(W),W.forEach(o),I.forEach(o),Q.forEach(o),E.forEach(o),this.h()},h(){r(s,"class","label label-text"),r(x,"type","text"),r(x,"class","grow input border-0"),r(x,"placeholder","Заголовок моей идеи"),r(x,"name","title"),x.required=!0,r(h,"class","input input-bordered flex items-center gap-2"),r(a,"class","form-control w-full"),r(y,"class","label label-text !justify-start"),r(y,"for","description"),r(k,"id","description"),r(k,"class","textarea textarea-bordered w-full min-h-52"),r(k,"placeholder","Описание величайшей идеи"),r(k,"name","description"),r(_,"class","form-control w-full"),r(v,"type","submit"),r(v,"class","btn btn-success text-white disabled:btn-disabled"),v.disabled=c[0],r(l,"class","grid gap-5"),r(t,"method","post"),r(t,"class","shadow-xl p-14 rounded"),r(e,"class","min-h-[50vh] mt-10 max-w-xl mx-auto")},m(n,E){P(n,e,E),i(e,t),i(t,l),i(l,a),i(a,s),i(a,b),i(a,h),ee(g,h,null),i(h,j),i(h,x),i(a,F),f&&f.m(a,null),i(l,R),i(l,_),i(_,y),ee(w,y,null),i(y,V),i(_,M),i(_,k),i(_,X),u&&u.m(_,null),i(l,z),i(l,v),$.m(v,null),C=!0,G||(J=fe(B=me.call(null,t,c[3])),G=!0)},p(n,[E]){n[1].title?f?f.p(n,E):(f=ne(n),f.c(),f.m(a,null)):f&&(f.d(1),f=null),n[1].description?u?u.p(n,E):(u=re(n),u.c(),u.m(_,null)):u&&(u.d(1),u=null),D!==(D=K(n))&&($.d(1),$=D(n),$&&($.c(),$.m(v,null))),(!C||E&1)&&(v.disabled=n[0]),B&&ue(B.update)&&E&1&&B.update.call(null,n[3])},i(n){C||(te(g.$$.fragment,n),te(w.$$.fragment,n),C=!0)},o(n){le(g.$$.fragment,n),le(w.$$.fragment,n),C=!1},d(n){n&&o(e),ae(g),f&&f.d(),ae(w),u&&u.d(),$.d(),G=!1,J()}}}function Ee(c,e,t){let l=!1,a={};const s=b=>{var h,g;b.type==="failure"?(t(1,a=((h=b.data)==null?void 0:h.errors)||{}),he.error(String(((g=b.data)==null?void 0:g.message)||"Unknown error"))):_e(b)};return[l,a,s,()=>(t(0,l=!0),async({result:b})=>{s(b),t(0,l=!1)})]}class Ae extends de{constructor(e){super(),pe(this,e,Ee,ve,oe,{})}}export{Ae as component};
