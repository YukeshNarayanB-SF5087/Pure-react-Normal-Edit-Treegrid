import{j as e}from"./index-CTAXdLKx.js";import{r as n}from"./index-D5jfS-9e.js";import{G as a,u as i,b as p,a as E,d as h,C as u,e as r}from"./useGridTheme-lrKUE-ln.js";import{u as N}from"./useFilter-Chk2m66M.js";import"./client-Spw3EFno.js";import"./iframe-CIg2I0Z_.js";import"../sb-preview/runtime.js";const S=[{id:1,name:"Engineering",role:"Department",children:[{id:11,name:"Frontend",role:"Team",children:[{id:111,name:"Alice",role:"Engineer"},{id:112,name:"Bob",role:"Engineer"}]},{id:12,name:"Backend",role:"Team",children:[{id:121,name:"Carol",role:"Engineer"},{id:122,name:"Dan",role:"Engineer"}]}]},{id:2,name:"Design",role:"Department",children:[{id:21,name:"Product",role:"Team",children:[{id:211,name:"Eve",role:"Designer"},{id:212,name:"Frank",role:"Designer"}]}]},{id:3,name:"Sales",role:"Department",children:[{id:31,name:"Grace",role:"Manager"},{id:32,name:"Heidi",role:"Manager"}]}],v=[{id:1,name:"Engineering",role:"Department",parentId:void 0},{id:11,name:"Frontend",role:"Team",parentId:1},{id:111,name:"Alice",role:"Engineer",parentId:11},{id:112,name:"Bob",role:"Engineer",parentId:11},{id:12,name:"Backend",role:"Team",parentId:1},{id:121,name:"Carol",role:"Engineer",parentId:12},{id:122,name:"Dan",role:"Engineer",parentId:12},{id:2,name:"Design",role:"Department",parentId:void 0},{id:21,name:"Product",role:"Team",parentId:2},{id:211,name:"Eve",role:"Designer",parentId:21},{id:212,name:"Frank",role:"Designer",parentId:21},{id:3,name:"Sales",role:"Department",parentId:void 0},{id:31,name:"Grace",role:"Manager",parentId:3},{id:32,name:"Heidi",role:"Manager",parentId:3}],o=()=>{i("tailwind");const[t]=n.useState(S),d=n.useRef(null);return n.useEffect(()=>{window.__nestedGridRef=d.current}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h2",{children:"TreeGrid — Nested Mode Row Drag and Drop"}),e.jsxs("p",{style:{marginTop:"4px",color:"#555"},children:["Drag a row by the chevron column. Drop on the top 25% for ",e.jsx("b",{children:"Above"}),", the bottom 25% for ",e.jsx("b",{children:"Below"}),", or the middle for ",e.jsx("b",{children:"Child"}),". The complete subtree travels with the dragged record."]}),e.jsx(a,{id:"treegrid-nested",ref:d,dataSource:t,width:"100%",height:"auto",isTreeMode:!0,treeColumnIndex:1,treeDataChildrenField:"children",dragAndDropSettings:{enabled:!0},selectionSettings:{enabled:!0,mode:"Multiple",type:"Row"},modules:{TreeDataModule:h,FilterModule:N,PagerModule:E,ReorderModule:p},children:e.jsxs(u,{children:[e.jsx(r,{field:"id",headerText:"ID",width:"80",type:"number"}),e.jsx(r,{field:"name",headerText:"Name",width:"200"}),e.jsx(r,{field:"role",headerText:"Role",width:"120"})]})})]})},s=()=>{i("tailwind");const[t]=n.useState(v);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h2",{children:"TreeGrid — Self-referential (ParentId) Mode Row Drag and Drop"}),e.jsxs("p",{style:{marginTop:"4px",color:"#555"},children:["Identical hierarchy, but the source uses a flat array with ",e.jsx("code",{children:"parentId"}),"references. Dragging a parent travels with its subtree; descendant parentIds are not rewritten."]}),e.jsx(P,{data:t})]})};function P({data:t}){i("tailwind");const d=n.useRef(null);return n.useEffect(()=>{window.__flatGridRef=d.current}),e.jsx(a,{id:"treegrid-parentid",ref:d,dataSource:t,width:"100%",height:"auto",isTreeMode:!0,treeColumnIndex:1,treeDataIdMapping:"id",treeDataParentIdField:"parentId",dragAndDropSettings:{enabled:!0},selectionSettings:{enabled:!0,mode:"Multiple",type:"Row"},modules:{TreeDataModule:h,ReorderModule:p},children:e.jsxs(u,{children:[e.jsx(r,{field:"id",headerText:"ID",width:"80",type:"number"}),e.jsx(r,{field:"name",headerText:"Name",width:"200"}),e.jsx(r,{field:"parentId",headerText:"Parent ID",width:"120",type:"number"})]})})}const F=[{id:900,name:"Operations",role:"Department",children:[{id:901,name:"Facilities",role:"Team"}]},{id:902,name:"Support",role:"Department"}],B=[{id:900,name:"Operations",role:"Department",parentId:void 0},{id:901,name:"Facilities",role:"Team",parentId:900},{id:902,name:"Support",role:"Department",parentId:void 0}];function M({sourceData:t,destinationData:d,selfReferential:C}){const m=C?{treeDataIdMapping:"id",treeDataParentIdField:"parentId"}:{treeDataChildrenField:"children"};return e.jsxs("div",{style:{display:"flex",gap:"16px",marginTop:"12px"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginBottom:"4px"},children:"Source"}),e.jsx(a,{id:"treegrid-cross-source",dataSource:t,width:"100%",height:"760px",isTreeMode:!0,treeColumnIndex:1,...m,dragAndDropSettings:{enabled:!0,targetID:"treegrid-cross-destination"},selectionSettings:{enabled:!0,mode:"Multiple",type:"Row"},modules:{TreeDataModule:h,ReorderModule:p},children:e.jsxs(u,{children:[e.jsx(r,{field:"id",headerText:"ID",width:"70",type:"number"}),e.jsx(r,{field:"name",headerText:"Name",width:"150"}),e.jsx(r,{field:"role",headerText:"Role",width:"110"})]})})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginBottom:"4px"},children:"Destination"}),e.jsx(a,{id:"treegrid-cross-destination",dataSource:d,width:"100%",height:"760px",isTreeMode:!0,treeColumnIndex:1,...m,selectionSettings:{enabled:!0,mode:"Multiple",type:"Row"},modules:{TreeDataModule:h,ReorderModule:p},children:e.jsxs(u,{children:[e.jsx(r,{field:"id",headerText:"ID",width:"70",type:"number"}),e.jsx(r,{field:"name",headerText:"Name",width:"150"}),e.jsx(r,{field:"role",headerText:"Role",width:"110"})]})})]})]})}const l=()=>{i("tailwind");const[t]=n.useState(S),[d]=n.useState(F);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h2",{children:"TreeGrid — Row Drag and Drop Between Two TreeGrids"}),e.jsxs("p",{style:{marginTop:"4px",color:"#555"},children:["Drag a row from the source TreeGrid onto the destination TreeGrid. The complete subtree travels with the dragged record, and the drop position decides whether it lands ",e.jsx("b",{children:"Above"}),", ",e.jsx("b",{children:"Below"}),", or as a ",e.jsx("b",{children:"Child"})," of the target row. Connect the grids with the ",e.jsx("code",{children:"targetID"})," property."]}),e.jsx(M,{sourceData:t,destinationData:d})]})},c=()=>{i("tailwind");const[t]=n.useState(v),[d]=n.useState(B);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h2",{children:"TreeGrid — Cross-Grid Row Drag and Drop (Self-referential Mode)"}),e.jsxs("p",{style:{marginTop:"4px",color:"#555"},children:["The same cross-grid transfer with a flat datasource that references its parents through ",e.jsx("code",{children:"parentId"}),". Only the moved root's parent id changes — the descendants keep their own parent references."]}),e.jsx(M,{sourceData:t,destinationData:d,selfReferential:!0})]})},J={title:"Grid/TreeGrid Row Drag and Drop",component:a};var g,D,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  useGridTheme('tailwind');
  const [data] = useState<TreeNode[]>(nestedTreeData);
  const nestedRef = useRef<GridRef<TreeNode>>(null);
  useEffect((): void => {
    // Expose the ref on window so the Playwright verification harness can read
    // treeNormalizedData directly and confirm synchronization across all layers.
    (window as unknown as {
      __nestedGridRef?: GridRef<TreeNode>;
    }).__nestedGridRef = nestedRef.current;
  });
  return <div style={{
    padding: '20px'
  }}>\r
            <h2>TreeGrid — Nested Mode Row Drag and Drop</h2>\r
            <p style={{
      marginTop: '4px',
      color: '#555'
    }}>\r
                Drag a row by the chevron column. Drop on the top 25% for <b>Above</b>,\r
                the bottom 25% for <b>Below</b>, or the middle for <b>Child</b>.\r
                The complete subtree travels with the dragged record.\r
            </p>\r
\r
            <Grid<TreeNode> id="treegrid-nested" ref={nestedRef} dataSource={data} width="100%" height="auto" isTreeMode={true} treeColumnIndex={1} treeDataChildrenField="children" dragAndDropSettings={{
      enabled: true
    }} selectionSettings={{
      enabled: true,
      mode: 'Multiple',
      type: 'Row'
    }} modules={{
      TreeDataModule,
      FilterModule,
      PagerModule,
      ReorderModule
    }}>\r
                <Columns>\r
                    <Column field="id" headerText="ID" width="80" type="number" />\r
                    <Column field="name" headerText="Name" width="200" />\r
                    <Column field="role" headerText="Role" width="120" />\r
                </Columns>\r
            </Grid>\r
        </div>;
}`,...(T=(D=o.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var x,w,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  useGridTheme('tailwind');
  const [data] = useState<TreeNode[]>(parentIdTreeData);
  return <div style={{
    padding: '20px'
  }}>\r
            <h2>TreeGrid — Self-referential (ParentId) Mode Row Drag and Drop</h2>\r
            <p style={{
      marginTop: '4px',
      color: '#555'
    }}>\r
                Identical hierarchy, but the source uses a flat array with <code>parentId</code>\r
                references. Dragging a parent travels with its subtree; descendant\r
                parentIds are not rewritten.\r
            </p>\r
            <TreeGridFlatDemo data={data} />\r
        </div>;
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var G,I,b;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  useGridTheme('tailwind');
  const [sourceData] = useState<TreeNode[]>(nestedTreeData);
  const [destinationData] = useState<TreeNode[]>(crossGridDestinationTreeData);
  return <div style={{
    padding: '20px'
  }}>\r
            <h2>TreeGrid — Row Drag and Drop Between Two TreeGrids</h2>\r
            <p style={{
      marginTop: '4px',
      color: '#555'
    }}>\r
                Drag a row from the source TreeGrid onto the destination TreeGrid. The complete\r
                subtree travels with the dragged record, and the drop position decides whether\r
                it lands <b>Above</b>, <b>Below</b>, or as a <b>Child</b> of the target row.\r
                Connect the grids with the <code>targetID</code> property.\r
            </p>\r
            <CrossGridDemo sourceData={sourceData} destinationData={destinationData} />\r
        </div>;
}`,...(b=(I=l.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var j,R,y;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  useGridTheme('tailwind');
  const [sourceData] = useState<TreeNode[]>(parentIdTreeData);
  const [destinationData] = useState<TreeNode[]>(crossGridDestinationParentIdTreeData);
  return <div style={{
    padding: '20px'
  }}>\r
            <h2>TreeGrid — Cross-Grid Row Drag and Drop (Self-referential Mode)</h2>\r
            <p style={{
      marginTop: '4px',
      color: '#555'
    }}>\r
                The same cross-grid transfer with a flat datasource that references its parents\r
                through <code>parentId</code>. Only the moved root&apos;s parent id changes — the\r
                descendants keep their own parent references.\r
            </p>\r
            <CrossGridDemo sourceData={sourceData} destinationData={destinationData} selfReferential={true} />\r
        </div>;
}`,...(y=(R=c.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};const K=["TreeGridNestedRowDrag","TreeGridParentIdRowDrag","TreeGridCrossGridRowDrag","TreeGridCrossGridParentIdRowDrag"];export{c as TreeGridCrossGridParentIdRowDrag,l as TreeGridCrossGridRowDrag,o as TreeGridNestedRowDrag,s as TreeGridParentIdRowDrag,K as __namedExportsOrder,J as default};
