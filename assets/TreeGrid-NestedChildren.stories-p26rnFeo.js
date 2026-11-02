import{j as e}from"./index-CTAXdLKx.js";import{r as c}from"./index-D5jfS-9e.js";import{G as h,u as p,d as u,C as m,e as d}from"./useGridTheme-lrKUE-ln.js";import{u as g}from"./useFilter-Chk2m66M.js";import"./client-Spw3EFno.js";import"./iframe-CIg2I0Z_.js";import"../sb-preview/runtime.js";const x=(()=>{var n;const r=Array.from({length:1e3},(i,t)=>({OrderID:2e4+t,CustomerName:`Customer-${String(t+1).padStart(4,"0")}`,TotalAmount:Number(((t+1)*17.43).toFixed(2)),ShippedDate:new Date(2020,0,t+1)}));for(let i=4;i<r.length;i++){const t=Math.floor((i-4)/3);(n=r[t]).children??(n.children=[]),r[t].children.push(r[i])}return r.slice(0,4)})(),o=()=>{p("material");const r=c.useRef(null),n=x;return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h1",{children:"TreeGrid - Nested Children Mode"}),e.jsx("p",{children:"This test demonstrates tree grid functionality with nested children. Click the chevron icons to expand/collapse parent nodes."}),e.jsx(h,{ref:r,dataSource:n,rowHeight:50,isTreeMode:!0,treeColumnIndex:1,treeDataChildrenField:"children",height:"600px",style:{marginTop:"20px"},sortSettings:{enabled:!0},filterSettings:{enabled:!0},modules:{TreeDataModule:u,FilterModule:g},excludeChildrenWithFiltering:!0,children:e.jsxs(m,{children:[e.jsx(d,{field:"OrderID",headerText:"Order ID",width:"100",type:"number"}),e.jsx(d,{field:"CustomerName",headerText:"Customer Name",width:"150"}),e.jsx(d,{field:"TotalAmount",headerText:"Total Amount",width:"120",type:"number",format:"C2"}),e.jsx(d,{field:"ShippedDate",headerText:"Shipped Date",width:"130",type:"date",format:"yMd"})]})}),e.jsxs("div",{style:{marginTop:"30px",padding:"15px",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("h3",{children:"Test Checklist:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"✓ Tree hierarchy renders correctly (parents shown, children grouped)"}),e.jsx("li",{children:"✓ Indentation increases with each level (chevron position moves right)"}),e.jsx("li",{children:"✓ Toggle buttons appear only on parent nodes"}),e.jsx("li",{children:"✓ Clicking chevron toggles node expansion/collapse"}),e.jsx("li",{children:"✓ Four generated root nodes have no indentation"}),e.jsx("li",{children:"✓ Generated descendants are indented by tree level"}),e.jsx("li",{children:"✓ The 1,000 generated nodes retain unique order IDs and customer names"}),e.jsx("li",{children:"✓ Data persists correctly when expanding/collapsing"})]})]})]})},S={title:"Grid/TreeGrid",component:h};var s,l,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  useGridTheme('material');
  const gridRef = useRef<any>(null);
  const dataSource = nestedTreeData;
  return <div style={{
    padding: '20px'
  }}>\r
            <h1>TreeGrid - Nested Children Mode</h1>\r
            <p>\r
                This test demonstrates tree grid functionality with nested children.\r
                Click the chevron icons to expand/collapse parent nodes.\r
            </p>\r
            \r
            <Grid ref={gridRef} dataSource={dataSource} rowHeight={50} isTreeMode={true} treeColumnIndex={1} treeDataChildrenField="children" height="600px" style={{
      marginTop: '20px'
    }}
    // pageSettings={{ enabled: true, pageSize: 1, pageSizeMode: PageSizeMode.Root }}
    sortSettings={{
      enabled: true
    }} filterSettings={{
      enabled: true
    }} modules={{
      TreeDataModule,
      FilterModule
    }} excludeChildrenWithFiltering={true}>\r
                <Columns>\r
                    <Column field="OrderID" headerText="Order ID" width="100" type="number"
        //  displayAsCheckBox={true}
        />\r
                    <Column field="CustomerName" headerText="Customer Name" width="150" />\r
                    <Column field="TotalAmount" headerText="Total Amount" width="120" type="number" format="C2" />\r
                    <Column field="ShippedDate" headerText="Shipped Date" width="130" type="date" format="yMd" />\r
                </Columns>\r
            </Grid>\r
\r
            <div style={{
      marginTop: '30px',
      padding: '15px',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
                <h3>Test Checklist:</h3>\r
                <ul>\r
                    <li>✓ Tree hierarchy renders correctly (parents shown, children grouped)</li>\r
                    <li>✓ Indentation increases with each level (chevron position moves right)</li>\r
                    <li>✓ Toggle buttons appear only on parent nodes</li>\r
                    <li>✓ Clicking chevron toggles node expansion/collapse</li>\r
                    <li>✓ Four generated root nodes have no indentation</li>\r
                    <li>✓ Generated descendants are indented by tree level</li>\r
                    <li>✓ The 1,000 generated nodes retain unique order IDs and customer names</li>\r
                    <li>✓ Data persists correctly when expanding/collapsing</li>\r
                </ul>\r
            </div>\r
        </div>;
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const w=["TreeGridNested"];export{o as TreeGridNested,w as __namedExportsOrder,S as default};
