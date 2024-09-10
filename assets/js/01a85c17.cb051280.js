"use strict";(self.webpackChunkfh_burgenland_bswe_3_b_docusaurus=self.webpackChunkfh_burgenland_bswe_3_b_docusaurus||[]).push([[8209],{4096:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>y,Ki:()=>k,kJ:()=>b,x:()=>l,e7:()=>u,J_:()=>f,Gx:()=>A});var s=a(6540),n=a(9532),r=a(6803),i=a(4848);function l(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const r=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,i.jsx)(o.Provider,{value:r,children:t})}function u(){const e=(0,s.useContext)(o);if(null===e)throw new n.dV("BlogPostProvider");return e}var d=a(6025),m=a(4586);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(x);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function b(e){const{siteConfig:t}=(0,m.A)(),{withBaseUrl:a}=(0,d.hH)(),{metadata:{blogDescription:s,blogTitle:n,permalink:r}}=e,i=`${t.url}${r}`;return{"@context":"https://schema.org","@type":"Blog","@id":i,mainEntityOfPage:i,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:s,frontMatter:n,metadata:r}=e,{date:i,title:l,description:o,lastUpdatedAt:c}=r,u=s.image??n.image,d=n.keywords??[],m=`${t.url}${r.permalink}`,b=c?g(c):void 0;return{"@type":"BlogPosting","@id":m,mainEntityOfPage:m,url:m,headline:l,name:l,description:o,datePublished:i,...b?{dateModified:b}:{},...h(r.authors),...p(u,a,l),...d?{keywords:d}:{}}}(e.content,t,a)))}}function f(){const e=l(),{assets:t,metadata:a}=u(),{siteConfig:s}=(0,m.A)(),{withBaseUrl:n}=(0,d.hH)(),{date:r,title:i,description:o,frontMatter:c,lastUpdatedAt:b}=a,f=t.image??c.image,x=c.keywords??[],j=b?g(b):void 0,N=`${s.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":N,mainEntityOfPage:N,url:N,headline:i,name:i,description:o,datePublished:r,...j?{dateModified:j}:{},...h(a.authors),...p(f,n,i),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${s.url}${e.blogBasePath}`,name:e.blogTitle}}}function x(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var N=a(6347),v=a(8774),_=a(1682),C=a(9169);function A(e){const{pathname:t}=(0,N.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,C.ys)(e.permalink,t))}(e,t)))),[e,t])}function k(e){const t=(0,_.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function y(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:r}=e;return(0,i.jsx)("ul",{className:a,children:t.map((e=>(0,i.jsx)("li",{className:s,children:(0,i.jsx)(v.A,{isNavLink:!0,to:e.permalink,className:n,activeClassName:r,children:e.title})},e.permalink)))})}},8027:(e,t,a)=>{a.d(t,{A:()=>O});var s=a(6540),n=a(4164),r=a(781),i=a(4581),l=a(1312),o=a(4096),c=a(6342),u=a(1107),d=a(4848);function m(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,d.jsxs)("div",{role:"group",children:[(0,d.jsx)(u.A,{as:"h3",className:a,children:t}),s]})}function g(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,c.p)().blog.sidebar.groupByYear){const e=(0,o.Ki)(t);return(0,d.jsx)(d.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,d.jsx)(m,{year:t,yearGroupHeadingClassName:a,children:(0,d.jsx)(s,{items:n})},t)}))})}return(0,d.jsx)(s,{items:t})}const h=(0,s.memo)(g),p="sidebar_re4s",b="sidebarItemTitle_pO2u",f="sidebarItemList_Yudw",x="sidebarItem__DBe",j="sidebarItemLink_mo7H",N="sidebarItemLinkActive_I1ZP",v="yearGroupHeading_rMGB",_=e=>{let{items:t}=e;return(0,d.jsx)(o.OU,{items:t,ulClassName:(0,n.A)(f,"clean-list"),liClassName:x,linkClassName:j,linkActiveClassName:N})};function C(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,d.jsx)("aside",{className:"col col--3",children:(0,d.jsxs)("nav",{className:(0,n.A)(p,"thin-scrollbar"),"aria-label":(0,l.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.jsx)("div",{className:(0,n.A)(b,"margin-bottom--md"),children:t.title}),(0,d.jsx)(h,{items:a,ListComponent:_,yearGroupHeadingClassName:v})]})})}const A=(0,s.memo)(C);var k=a(5600);const y={yearGroupHeading:"yearGroupHeading_QT03"},P=e=>{let{items:t}=e;return(0,d.jsx)(o.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function w(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,d.jsx)(h,{items:a,ListComponent:P,yearGroupHeadingClassName:y.yearGroupHeading})}function B(e){return(0,d.jsx)(k.GX,{component:w,props:e})}const G=(0,s.memo)(B);function H(e){let{sidebar:t}=e;const a=(0,i.l)();return t?.items.length?"mobile"===a?(0,d.jsx)(G,{sidebar:t}):(0,d.jsx)(A,{sidebar:t}):null}function O(e){const{sidebar:t,toc:a,children:s,...i}=e,l=t&&t.items.length>0;return(0,d.jsx)(r.A,{...i,children:(0,d.jsx)("div",{className:"container margin-vert--lg",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)(H,{sidebar:t}),(0,d.jsx)("main",{className:(0,n.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:s}),a&&(0,d.jsx)("div",{className:"col col--2",children:a})]})})})}},9140:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});a(6540);var s=a(4164),n=a(6820),r=a(1213),i=a(7559),l=a(8027),o=a(2557),c=a(1463),u=a(1107),d=a(4848);function m(e){let{tags:t,sidebar:a}=e;const m=(0,n.b)();return(0,d.jsxs)(r.e3,{className:(0,s.A)(i.G.wrapper.blogPages,i.G.page.blogTagsListPage),children:[(0,d.jsx)(r.be,{title:m}),(0,d.jsx)(c.A,{tag:"blog_tags_list"}),(0,d.jsxs)(l.A,{sidebar:a,children:[(0,d.jsx)(u.A,{as:"h1",children:m}),(0,d.jsx)(o.A,{tags:t})]})]})}},6133:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4164),n=a(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(4848);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,i.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},2557:(e,t,a)=>{a.d(t,{A:()=>c});a(6540);var s=a(6820),n=a(6133),r=a(1107);const i={tag:"tag_Nnez"};var l=a(4848);function o(e){let{letterEntry:t}=e;return(0,l.jsxs)("article",{children:[(0,l.jsx)(r.A,{as:"h2",id:t.letter,children:t.letter}),(0,l.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(n.A,{...e})},e.permalink)))}),(0,l.jsx)("hr",{})]})}function c(e){let{tags:t}=e;const a=(0,s.Q)(t);return(0,l.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,l.jsx)(o,{letterEntry:e},e.letter)))})}},6820:(e,t,a)=>{a.d(t,{Q:()=>r,b:()=>n});var s=a(1312);const n=()=>(0,s.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);