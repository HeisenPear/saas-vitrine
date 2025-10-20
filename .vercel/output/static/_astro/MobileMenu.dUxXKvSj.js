import{j as e,m as i}from"./proxy.CWcLdRko.js";import{r as p}from"./index.Be8AcK8B.js";import{c as o}from"./createLucideIcon.BO8IHSU3.js";import{A as x}from"./index.CHQbkhPm.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],b=o("menu",h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],n=o("x",j);function k({links:c}){const[s,r]=p.useState(!1),a=()=>r(!s),l={closed:{opacity:0,x:"100%"},open:{opacity:1,x:0}},d={closed:{opacity:0,x:20},open:t=>({opacity:1,x:0,transition:{delay:t*.1}})};return e.jsxs("div",{className:"md:hidden",children:[e.jsx("button",{onClick:a,className:"p-2 text-gray-100 hover:text-accent transition-colors","aria-label":"Toggle menu",children:s?e.jsx(n,{size:28}):e.jsx(b,{size:28})}),e.jsx(x,{children:s&&e.jsxs(e.Fragment,{children:[e.jsx(i.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:a,className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-40"}),e.jsxs(i.nav,{variants:l,initial:"closed",animate:"open",exit:"closed",transition:{type:"spring",damping:25,stiffness:200},className:"fixed top-0 right-0 bottom-0 w-[280px] bg-dark-800 border-l border-white/10 z-50 p-8",children:[e.jsx("div",{className:"flex justify-end mb-12",children:e.jsx("button",{onClick:a,className:"p-2 text-gray-100 hover:text-accent transition-colors","aria-label":"Close menu",children:e.jsx(n,{size:28})})}),e.jsx("ul",{className:"space-y-6",children:c.map((t,m)=>e.jsx(i.li,{custom:m,variants:d,initial:"closed",animate:"open",children:e.jsx("a",{href:t.href,onClick:a,className:"block text-xl font-semibold text-gray-100 hover:text-accent transition-colors",children:t.label})},t.href))})]})]})})]})}export{k as default};
