(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{32:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(6),i=n.n(r),c=(n(32),n(12)),s=n(5),p=n(8),l=(n(13),n(11)),b=n.n(l);b.a.defaults.baseURL="https://pixabay.com/api/";var u={fetchImages:function(t){var e=t.searchQuery,n=t.page;try{return b.a.get("?q=".concat(e,"&page=").concat(n,"&key=").concat("21723163-ca21d56557a4a0bebd6e19c52","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.data.hits}))}catch(a){console.log("error")}}},g=n(3);var d=Object(g.a)("button",{target:"eghx9910"})({name:"1aiq0cm",styles:"padding:8px 16px;margin-left:auto;margin-right:auto;margin-top:12px;margin-bottom:12px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;display:block;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;min-width:180px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&Button:hover,Button:focus{background-color:#303f9f;}"}),x=n(1),h=function(t){var e=t.onClick;return Object(x.jsx)(d,{type:"button",onClick:e,children:"Load more"})};var f=Object(g.a)("li",{target:"e87d7311"})({name:"ia8atm",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),m=Object(g.a)("img",{target:"e87d7310"})({name:"1plt1o8",styles:"width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"}),j=function(t){var e=t.alt,n=void 0===e?"":e,a=t.webformatURL,o=t.largeImageURL,r=t.loadLargeImageURL;return Object(x.jsx)(f,{children:Object(x.jsx)(m,{alt:n,src:a,onClick:function(){return r(o)}})})};var O=Object(g.a)("ul",{target:"e1kpc5am0"})({name:"1bhb8yv",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;margin-top:0;margin-bottom:0;padding:0;list-style:none;margin-left:auto;margin-right:auto"}),v=function(t){var e=t.images,n=t.onSelect;return Object(x.jsx)(O,{children:e.map((function(t){var e=t.id,a=t.webformatURL,o=t.tags,r=t.largeImageURL;return Object(x.jsx)(j,{webformatURL:a,largeImageURL:r,alt:o,loadLargeImageURL:n},e)}))})},y=n(23),k=n(24),w=n(27),S=n(26),L=n(25),C=n.n(L);var z=Object(g.a)("div",{target:"e14ie43x0"})({name:"1aslf6p",styles:"position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)"}),R=function(t){Object(w.a)(n,t);var e=Object(S.a)(n);function n(){return Object(y.a)(this,n),e.apply(this,arguments)}return Object(k.a)(n,[{key:"render",value:function(){return Object(x.jsx)(z,{children:Object(x.jsx)(C.a,{type:"Circles",color:"#3f51b5",height:100,width:100,timeout:3e3})})}}]),n}(a.Component);var U=Object(g.a)("div",{target:"e1s79hkd1"})({name:"8i9ttg",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8);z-index:1200"}),I=Object(g.a)("div",{target:"e1s79hkd0"})({name:"sve88p",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"}),E=document.querySelector("#modal-root");function q(t){var e=t.onClose,n=t.largeImageURL;Object(a.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(t){"Escape"===t.code&&e()};return Object(r.createPortal)(Object(x.jsx)(U,{onClick:function(t){t.currentTarget===t.target&&e()},children:Object(x.jsx)(I,{children:Object(x.jsx)("img",{src:n,alt:""})})}),E)}var B=Object(g.a)("header",{target:"e1gkvibk4"})({name:"1ssw7nl",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;min-height:64px;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),F=Object(g.a)("form",{target:"e1gkvibk3"})({name:"kbgsnr",styles:"display:flex;align-items:center;width:100%;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),J=Object(g.a)("button",{target:"e1gkvibk2"})({name:"1a3m8tj",styles:"display:inline-block;width:48px;height:48px;border:0;background-image:url('https://image.flaticon.com/icons/svg/149/149852.svg');background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}"}),Q=Object(g.a)("span",{target:"e1gkvibk1"})({name:"jnnlmv",styles:"position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;clip-path:inset(50%);border:0"}),T=Object(g.a)("input",{target:"e1gkvibk0"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"});function _(t){var e=t.onSubmit,n=Object(a.useState)(""),o=Object(s.a)(n,2),r=o[0],i=o[1];return Object(x.jsx)(B,{children:Object(x.jsxs)(F,{onSubmit:function(t){t.preventDefault(),""!==r.trim()?(e(r),i("")):p.b.warn("no request - no picture=)",{position:"top-right",autoClose:3e3})},children:[Object(x.jsx)(J,{type:"submit",children:Object(x.jsx)(Q,{children:"Search"})}),Object(x.jsx)(T,{autocomplete:"off",autoFocus:!0,onChange:function(t){i(t.target.value)},placeholder:"Search images and photos",type:"text",value:r})]})})}function D(){var t=Object(a.useState)(null),e=Object(s.a)(t,2),n=e[0],o=e[1],r=Object(a.useState)([]),i=Object(s.a)(r,2),l=i[0],b=i[1],g=Object(a.useState)(!1),d=Object(s.a)(g,2),f=d[0],m=d[1],j=Object(a.useState)(""),O=Object(s.a)(j,2),y=O[0],k=O[1],w=Object(a.useState)(1),S=Object(s.a)(w,2),L=S[0],C=S[1],z=Object(a.useState)(""),U=Object(s.a)(z,2),I=U[0],E=U[1],B=Object(a.useState)(!1),F=Object(s.a)(B,2),J=F[0],Q=F[1];Object(a.useEffect)((function(){""!==I&&(m(!0),u.fetchImages({searchQuery:I,page:L}).then((function(t){b((function(e){return[].concat(Object(c.a)(e),Object(c.a)(t))}))})).catch((function(t){return o(t.message)})).finally((function(){return m(!1)})))}),[I,L]),Object(a.useEffect)((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}));var T=function(){Q(!J)};return Object(x.jsxs)(x.Fragment,{children:[n&&p.b.error("there are no such pictures!",{position:"top-right",autoClose:3e3}),Object(x.jsx)(_,{onSubmit:function(t){o(null),b([]),C(1),E(t)}}),f&&Object(x.jsx)(R,{}),Object(x.jsx)(v,{images:l,onSelect:function(t){k(t),T()}}),l.length>11&&Object(x.jsx)(h,{onClick:function(){C((function(t){return t+1}))}}),J&&Object(x.jsx)(q,{onClose:T,largeImageURL:y}),Object(x.jsx)(p.a,{position:"top-right",autoClose:3e3})]})}i.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.44df29df.chunk.js.map