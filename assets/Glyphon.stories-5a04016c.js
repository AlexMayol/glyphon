import{r as o}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var Z={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=o,oe=Symbol.for("react.element"),se=Symbol.for("react.fragment"),le=Object.prototype.hasOwnProperty,ue=ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ce={key:!0,ref:!0,__self:!0,__source:!0};function z(t,r,u){var e,l={},c=null,p=null;u!==void 0&&(c=""+u),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)le.call(r,e)&&!ce.hasOwnProperty(e)&&(l[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)l[e]===void 0&&(l[e]=r[e]);return{$$typeof:oe,type:t,key:c,ref:p,props:l,_owner:ue.current}}x.Fragment=se;x.jsx=z;x.jsxs=z;Z.exports=x;var pe=Z.exports;const ie="ABCDEFGHIJKLMNOPQRSTUVWXYZ",f={iterationsPerGlyph:3,speed:30,glyphs:ie},C=t=>t[Math.floor(Math.random()*t.length)],R=({as:t="span",options:r=f,mode:u="onhover",text:e,...l})=>{const{glyphs:c=f.glyphs,iterationsPerGlyph:p=f.iterationsPerGlyph,speed:I=f.speed}=r,k=o.useRef(`glyph-effect-${e.replace(" ","_")}_${Math.random()}`),i=o.useRef(),E=o.useRef([]),d=o.useRef(!0),a=o.useRef(0),O=[...new Set(c)],[ee,G]=o.useState(e),re=()=>{d.current&&(a.current=0,d.current=!1,i.current=setInterval(()=>{G(n=>n.split("").map((m,s)=>s<a.current?e[s]===" "?" ":e[s]:C(O)).join("")),a.current>=e.length&&M(),a.current+=1/p},I),E.current.push(i.current))},te=()=>{d.current&&(a.current=0,i.current=setInterval(()=>{G(n=>n.split("").map((m,s)=>s<a.current?e[s]===" "?" ":e[s]:C(O)).join("")),a.current>=e.length&&M(),a.current+=1/p},I),E.current.push(i.current))},M=()=>{d.current=!0,E.current.forEach(n=>clearInterval(n))};o.useEffect(()=>{var m;const n=(m=document==null?void 0:document.getElementById)==null?void 0:m.call(document,k.current);n&&(u==="onhover"&&(n.onmouseover=re),u==="onmount"&&(n.onmouseover=te))});const ne=t;return pe.jsx(ne,{id:k.current,...l,children:ee})};try{R.displayName="Glyphon",R.__docgenInfo={description:"",displayName:"Glyphon",props:{as:{defaultValue:{value:"span"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"del"'},{value:'"dfn"'},{value:'"div"'},{value:'"em"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"i"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"mark"'},{value:'"p"'},{value:'"pre"'},{value:'"q"'},{value:'"s"'},{value:'"samp"'},{value:'"small"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"sup"'},{value:'"td"'},{value:'"th"'},{value:'"u"'},{value:'"var"'}]}},options:{defaultValue:{value:`{
    iterationsPerGlyph: 3,
    speed: 30,
    glyphs: defaultAlphabet
}`},description:"",name:"options",required:!1,type:{name:"Options"}},alphabet:{defaultValue:null,description:"",name:"alphabet",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"onhover"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"onhover"'},{value:'"onmount"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const fe={title:"Glyphon React",component:R,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{text:{control:"text"}}},h={args:{text:"Glyphon effect"}},v={args:{text:"Apply any CSS style to the component",style:{color:"#1bec1b",backgroundColor:"black",fontFamily:"monospace",padding:".5rem",borderRadius:".5rem"}}},y={args:{text:"I change slowly",options:{speed:100}}},g={args:{text:"I change reapidly",options:{speed:10}}},_={args:{text:"You can change the number of iterations per character",options:{iterationsPerGlyph:6}}},b={args:{text:"Monospace fonts help to keep the effect aligned",style:{fontFamily:"monospace"}}},S={args:{text:"This is an H1 tag",as:"h1"}};var F,P,w;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    text: 'Glyphon effect'
  }
}`,...(w=(P=h.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var A,L,T;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    text: 'Apply any CSS style to the component',
    style: {
      color: '#1bec1b',
      backgroundColor: 'black',
      fontFamily: 'monospace',
      padding: '.5rem',
      borderRadius: '.5rem'
    }
  }
}`,...(T=(L=v.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var j,q,H;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: 'I change slowly',
    options: {
      speed: 100
    }
  }
}`,...(H=(q=y.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var D,N,V;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: 'I change reapidly',
    options: {
      speed: 10
    }
  }
}`,...(V=(N=g.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var Y,$,B;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    text: 'You can change the number of iterations per character',
    options: {
      iterationsPerGlyph: 6
    }
  }
}`,...(B=($=_.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var U,J,W;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    text: 'Monospace fonts help to keep the effect aligned',
    style: {
      fontFamily: 'monospace'
    }
  }
}`,...(W=(J=b.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var K,Q,X;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    text: 'This is an H1 tag',
    as: 'h1'
  }
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const he=["Default","CustomCSS","LowSpeed","HighSpeed","MoreIterations","MonospaceFont","AsOtherHTMLElements"];export{S as AsOtherHTMLElements,v as CustomCSS,h as Default,g as HighSpeed,y as LowSpeed,b as MonospaceFont,_ as MoreIterations,he as __namedExportsOrder,fe as default};
//# sourceMappingURL=Glyphon.stories-5a04016c.js.map
