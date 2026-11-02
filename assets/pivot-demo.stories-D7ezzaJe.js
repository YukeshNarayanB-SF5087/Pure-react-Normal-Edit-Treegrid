import{j as t}from"./index-CTAXdLKx.js";import{u as ue,G as ie,C as de,e as i}from"./useGridTheme-lrKUE-ln.js";import"./index-D5jfS-9e.js";import"./client-Spw3EFno.js";import{P as ce}from"./usePivotModule-BfYWq6-n.js";import"./iframe-CIg2I0Z_.js";import"../sb-preview/runtime.js";const le=[{name:"North",multiplier:1.12},{name:"South",multiplier:.94},{name:"East",multiplier:1.05},{name:"West",multiplier:1.18}],me=[{name:"Laptop",quarterlyRevenue:54e3},{name:"Phone",quarterlyRevenue:39e3},{name:"Tablet",quarterlyRevenue:31e3},{name:"Accessories",quarterlyRevenue:18e3}],pe=[{name:"Q1",multiplier:.92},{name:"Q2",multiplier:1},{name:"Q3",multiplier:1.08},{name:"Q4",multiplier:1.24}],ne=[];[2024,2025].forEach((r,e)=>{le.forEach((s,n)=>{me.forEach((a,o)=>{pe.forEach((u,y)=>{const C=1+e*.09,b=1+((n*7+o*3+y)%5-2)*.015;ne.push({region:s.name,product:a.name,year:r,quarter:u.name,revenue:Math.round(a.quarterlyRevenue*s.multiplier*u.multiplier*C*b/100)*100})})})})});const ge={enabled:!0,rows:["region","product"],columns:["year","quarter"],values:[{field:"revenue",type:"Sum"}],showPanel:!0,deferLayoutUpdate:!1,showSubTotals:!0,showGrandTotals:!0,defaultExpanded:!0,showTooltip:!1},fe=r=>({width:180,format:"C2",headerText:"Revenue",template:({data:e,column:s})=>{const a=e.cells[s.field.slice(6)];return t.jsx("strong",{className:"sf-pivot-demo-revenue",children:Number(a??0).toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2})})},cellClass:r.path.some(e=>e.field==="year"&&e.value===2025)?"sf-pivot-demo-current-year":""}),he=r=>r.field==="year"?{headerText:`FY ${r.value}`,headerTemplate:t.jsxs("span",{children:["FY ",String(r.value)]})}:void 0,ve=[{name:"Median",label:"Median",aggregate:r=>{const e=[...r].sort((n,a)=>n-a),s=Math.floor(e.length/2);return e.length?e.length%2?e[s]:(e[s-1]+e[s])/2:void 0}}];function xe({deferred:r=!1,rtl:e=!1,grouped:s=!1,showTooltip:n=!1,menuEnabled:a=!0,menuFeatures:o=!0,customized:u=!1,worker:y=!1,paged:C=!1,customAggregation:b=!1}){return ue("material"),t.jsx("div",{className:"sf-pivot-demo",children:t.jsx(ie,{dataSource:ne,customizePivotColumn:u?fe:void 0,customizePivotColumnGroup:u?he:void 0,modules:{PivotModule:ce},columnMenuSettings:{enabled:a,showFilter:o},sortSettings:{enabled:o},filterSettings:{enabled:o},resizeSettings:{enabled:o},pinningSettings:{enabled:o},showColumnChooser:o,pivotSettings:{...ge,deferLayoutUpdate:r,showTooltip:n,customAggregates:b?ve:void 0,execution:y?"worker":"sync",useEnginePaging:C},enableRtl:e,columns:s?[{headerText:"Sales",columns:[{field:"region",headerText:"Region"},{field:"product",headerText:"Product"}]},{headerText:"Period",columns:[{field:"year",headerText:"Year",type:"number"},{field:"quarter",headerText:"Quarter"}]},{field:"revenue",headerText:"Revenue",type:"number",format:"C0",textAlign:"Right"}]:void 0,width:"100%",height:"100vh",children:t.jsxs(de,{children:[t.jsx(i,{field:"region",headerText:"Region"}),t.jsx(i,{field:"product",headerText:"Product"}),t.jsx(i,{field:"year",headerText:"Year",type:"number"}),t.jsx(i,{field:"quarter",headerText:"Quarter"}),t.jsx(i,{field:"revenue",headerText:"Revenue",type:"number",format:"C0",textAlign:"Right"})]})})})}const we={title:"Grid/Pivot/Simple Demo",component:xe,parameters:{layout:"fullscreen"}},d={},c={args:{deferred:!0}},l={args:{grouped:!0}},m={args:{rtl:!0}},p={args:{showTooltip:!0}},g={args:{menuEnabled:!1}},f={args:{menuFeatures:!1}},h={args:{customized:!0}},v={args:{customized:!0,worker:!0}},x={args:{customized:!0,paged:!0}},S={args:{customized:!0,deferred:!0}},T={args:{customAggregation:!0}};var z,R,w;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(w=(R=d.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var P,j,D;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    deferred: true
  }
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var E,G,M;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    grouped: true
  }
}`,...(M=(G=l.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var q,A,k;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    rtl: true
  }
}`,...(k=(A=m.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var L,Q,Y;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    showTooltip: true
  }
}`,...(Y=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var N,U,W;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    menuEnabled: false
  }
}`,...(W=(U=g.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var _,F,O;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    menuFeatures: false
  }
}`,...(O=(F=f.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var V,$,B;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    customized: true
  }
}`,...(B=($=h.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var H,I,J;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    customized: true,
    worker: true
  }
}`,...(J=(I=v.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,X,Z;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    customized: true,
    paged: true
  }
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,se;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    customized: true,
    deferred: true
  }
}`,...(se=(re=S.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ae,oe;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    customAggregation: true
  }
}`,...(oe=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const Pe=["Default","Deferred","Grouped","RTL","Tooltips","MenusDisabled","RestrictedMenus","Customized","CustomizedWorker","CustomizedPaged","CustomizedDeferred","CustomAggregation"];export{T as CustomAggregation,h as Customized,S as CustomizedDeferred,x as CustomizedPaged,v as CustomizedWorker,d as Default,c as Deferred,l as Grouped,g as MenusDisabled,m as RTL,f as RestrictedMenus,p as Tooltips,Pe as __namedExportsOrder,we as default};
