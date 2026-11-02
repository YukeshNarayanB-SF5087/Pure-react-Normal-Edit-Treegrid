import{j as e}from"./index-CTAXdLKx.js";import{r as s}from"./index-D5jfS-9e.js";import{G as o,u as p,d as c,a as h,C as u,e as d}from"./useGridTheme-lrKUE-ln.js";import"./client-Spw3EFno.js";import"./iframe-CIg2I0Z_.js";import"../sb-preview/runtime.js";const m=Array.from({length:1e3},(t,r)=>({id:r+1,parentId:r<4?null:Math.floor((r-4)/3)+1,OrderID:2e4+r,CustomerName:`Customer-${String(r+1).padStart(4,"0")}`,TotalAmount:Number(((r+1)*17.43).toFixed(2)),ShippedDate:new Date(2020,0,r+1)})),i=()=>{p("material");const t=s.useRef(null),r=m;return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h1",{children:"TreeGrid - Parent ID Mapping Mode"}),e.jsx("p",{children:"This test demonstrates tree grid functionality with parent ID field mapping. The flat data array is converted to tree hierarchy using id and parentId fields. Click the chevron icons to expand/collapse parent nodes."}),e.jsx(o,{ref:t,dataSource:r,isTreeMode:!0,treeColumnIndex:0,treeDataIdMapping:"id",treeDataParentIdField:"parentId",height:"600px",style:{marginTop:"20px"},modules:{PagerModule:h,TreeDataModule:c},children:e.jsxs(u,{children:[e.jsx(d,{field:"OrderID",headerText:"Order ID",width:"250",type:"number"}),e.jsx(d,{field:"CustomerName",headerText:"Customer Name",width:"150"}),e.jsx(d,{field:"TotalAmount",headerText:"Total Amount",width:"120",type:"number",format:"C2"}),e.jsx(d,{field:"ShippedDate",headerText:"Shipped Date",width:"130",type:"date",format:"yMd"}),e.jsx(d,{field:"id",headerText:"Node ID",width:"80",type:"number"})]})}),e.jsxs("div",{style:{marginTop:"30px",padding:"15px",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("h3",{children:"Test Checklist:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"✓ Flat data correctly converts to tree hierarchy"}),e.jsx("li",{children:"✓ Root nodes (parentId: null) appear at level 0: VINET, HANAR, HILAA"}),e.jsx("li",{children:"✓ Level 1 nodes indent 20px: TOMSP, SUPRD (under VINET); CHOPS, WELLI (under HANAR)"}),e.jsx("li",{children:"✓ Level 2 nodes indent 40px: HANAR, VICTE (under TOMSP); RICSU (under CHOPS)"}),e.jsx("li",{children:"✓ Toggle buttons appear only on parent nodes"}),e.jsx("li",{children:"✓ Clicking chevron toggles expansion/collapse"}),e.jsx("li",{children:"✓ Node IDs and Parent IDs display correctly"}),e.jsx("li",{children:"✓ Data persists correctly when expanding/collapsing"}),e.jsx("li",{children:"✓ All child nodes hidden initially when parent collapsed"})]})]}),e.jsxs("div",{style:{marginTop:"20px",padding:"15px",backgroundColor:"#fff9e6",borderRadius:"4px",borderLeft:"4px solid #ffc107"},children:[e.jsx("h3",{children:"Data Structure Notes:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Root nodes: id 1, 2, 3 (parentId: null)"}),e.jsx("li",{children:"Level 1: id 4, 5 (children of id 1); id 8, 9 (children of id 2)"}),e.jsx("li",{children:"Level 2: id 6, 7 (children of id 4); id 10 (child of id 8)"})]})]})]})},C={title:"Grid/TreeGrid",component:o};var l,a,n;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  useGridTheme('material');
  const gridRef = useRef<any>(null);
  const dataSource = flatTreeData;
  return <div style={{
    padding: '20px'
  }}>\r
            <h1>TreeGrid - Parent ID Mapping Mode</h1>\r
            <p>\r
                This test demonstrates tree grid functionality with parent ID field mapping.\r
                The flat data array is converted to tree hierarchy using id and parentId fields.\r
                Click the chevron icons to expand/collapse parent nodes.\r
            </p>\r
            \r
            <Grid ref={gridRef} dataSource={dataSource} isTreeMode={true} treeColumnIndex={0} treeDataIdMapping="id" treeDataParentIdField="parentId" height="600px" style={{
      marginTop: '20px'
    }} modules={{
      PagerModule,
      TreeDataModule
    }}>\r
                <Columns>\r
                    <Column field="OrderID" headerText="Order ID" width="250" type="number" />\r
                    <Column field="CustomerName" headerText="Customer Name" width="150" />\r
                    <Column field="TotalAmount" headerText="Total Amount" width="120" type="number" format="C2" />\r
                    <Column field="ShippedDate" headerText="Shipped Date" width="130" type="date" format="yMd" />\r
                    <Column field="id" headerText="Node ID" width="80" type="number" />\r
                 \r
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
                    <li>✓ Flat data correctly converts to tree hierarchy</li>\r
                    <li>✓ Root nodes (parentId: null) appear at level 0: VINET, HANAR, HILAA</li>\r
                    <li>✓ Level 1 nodes indent 20px: TOMSP, SUPRD (under VINET); CHOPS, WELLI (under HANAR)</li>\r
                    <li>✓ Level 2 nodes indent 40px: HANAR, VICTE (under TOMSP); RICSU (under CHOPS)</li>\r
                    <li>✓ Toggle buttons appear only on parent nodes</li>\r
                    <li>✓ Clicking chevron toggles expansion/collapse</li>\r
                    <li>✓ Node IDs and Parent IDs display correctly</li>\r
                    <li>✓ Data persists correctly when expanding/collapsing</li>\r
                    <li>✓ All child nodes hidden initially when parent collapsed</li>\r
                </ul>\r
            </div>\r
\r
            <div style={{
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#fff9e6',
      borderRadius: '4px',
      borderLeft: '4px solid #ffc107'
    }}>\r
                <h3>Data Structure Notes:</h3>\r
                <ul>\r
                    <li>Root nodes: id 1, 2, 3 (parentId: null)</li>\r
                    <li>Level 1: id 4, 5 (children of id 1); id 8, 9 (children of id 2)</li>\r
                    <li>Level 2: id 6, 7 (children of id 4); id 10 (child of id 8)</li>\r
                </ul>\r
            </div>\r
        </div>;
}`,...(n=(a=i.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const D=["TreeGridParentId"];export{i as TreeGridParentId,D as __namedExportsOrder,C as default};
