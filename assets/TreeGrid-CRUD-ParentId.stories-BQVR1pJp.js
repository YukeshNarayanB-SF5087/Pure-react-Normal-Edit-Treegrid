import{j as t}from"./index-CTAXdLKx.js";import{r as y}from"./index-D5jfS-9e.js";import{u as j,G as k,a as E,b as A,c as N,d as B,P as U,C as q,e as s,E as T}from"./useGridTheme-lrKUE-ln.js";import{u as G}from"./useFilter-Chk2m66M.js";import{u as _,a as F}from"./useClipboard-C9itDAo5.js";import"./client-Spw3EFno.js";import"./iframe-CIg2I0Z_.js";import"../sb-preview/runtime.js";const l=["Pending","In Progress","Done"],u=["Low","Medium","High"],L=l.map(o=>({status:o})),$=u.map(o=>({priority:o})),c=["Release preparation","API freeze","UI polish","Theme switcher","Tree CRUD demo","Backlog grooming","Triage regressions","Docs refresh","Performance pass","Accessibility audit","Localization sweep","Beta sign-off"],p=["Alice","Bob","Carol","Dan","Erin","Felix","Grace","Henry"],z=()=>{const o=[];let n=1;const h=12;for(let r=0;r<h;r++){const a=n++;o.push({id:a,parentId:null,title:`${c[r%c.length]} ${r+1}`,owner:p[r%p.length],estimate:40+r*5,dueOn:new Date(2024,r%12,1+r%27),status:l[r%l.length],priority:u[r%u.length]});const R=3+r%3;for(let i=0;i<R;i++){const f=n++;o.push({id:f,parentId:a,title:`${c[(r+i)%c.length]} ${i+1}`,owner:p[(r+i)%p.length],estimate:8+i*3,dueOn:new Date(2024,(r+i)%12,1+i%27),status:l[(r+i)%l.length],priority:u[(r+i+1)%u.length]});const m=1+(r+i)%2;for(let e=0;e<m;e++)o.push({id:n++,parentId:f,title:`${c[(r+i+e)%c.length]} sub ${e+1}`,owner:p[(r+i+e)%p.length],estimate:2+e,dueOn:new Date(2024,(r+i+e)%12,1+e%27),status:l[(r+i+e)%l.length],priority:u[(r+i+e)%u.length]})}}return o},Y=o=>{if(!o)return"";const n=o instanceof Date?o:new Date(o),h=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${h}/${r}/${n.getFullYear()}`},w=()=>{j("material");const o=y.useRef(null),n=y.useRef(null);n.current===null&&(n.current=z());const[h,r]=y.useState(0),[a,R]=y.useState("Top"),i={TreeDataModule:B,EditModule:F,ToolbarModule:N,FilterModule:G,ClipboardModule:_,ReorderModule:A,PagerModule:E},f=["Add","Edit","Delete","Update","Cancel","Search"],m=()=>{r(e=>e+1)};return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx("h1",{children:"TreeGrid CRUD - Parent ID Mapping Mode"}),t.jsxs("p",{children:["Flat data with ",t.jsx("code",{children:'treeDataIdMapping="id"'})," and",t.jsx("code",{children:'treeDataParentIdField="parentId"'}),". CRUD operations preserve the flat structure while updating the tree view."]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Editable columns"}),": ",t.jsx("code",{children:"Title"})," is a required string with a minimum length, ",t.jsx("code",{children:"Estimate"})," is a number with a minimum and a maximum, ",t.jsx("code",{children:"Due On"})," is a required date,",t.jsx("code",{children:"Status"})," is a dropdown and ",t.jsx("code",{children:"Priority"})," is a dropdown as well."]}),t.jsxs("div",{style:{marginBottom:"12px"},children:[t.jsx("label",{style:{marginRight:"12px"},children:t.jsx("strong",{children:"Insert position:"})}),["Top","Bottom","Above","Below","Child"].map(e=>t.jsxs("label",{style:{marginRight:"8px"},children:[t.jsx("input",{type:"radio",name:"insertPos",value:e,checked:a===e,onChange:()=>R(e)}),e]},e))]}),t.jsxs("div",{style:{marginBottom:"12px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[t.jsxs("button",{type:"button",onClick:()=>{var d;const e=Math.max(...(n.current??[]).map(g=>g.id),0)+1;(d=o.current)==null||d.addRecord({id:e,parentId:null,title:`New task ${e}`,owner:"You",estimate:5,dueOn:new Date(2024,0,1),status:"Pending",priority:"Medium"},void 0,{position:a}),m()},children:["addRecord (uses ",a,")"]}),t.jsx("button",{type:"button",onClick:()=>{var d;const e=Math.max(...(n.current??[]).map(g=>g.id),0)+1;(d=o.current)==null||d.addRecord({id:e,parentId:1,title:"Subtask of #1",owner:"You",estimate:3,dueOn:new Date(2024,6,1),status:"Pending",priority:"Low"},void 0,{position:"Child",anchorKey:"0"}),m()},children:"Add as child of root #1"}),t.jsx("button",{type:"button",onClick:()=>{var e;return(e=o.current)==null?void 0:e.editRecord()},children:"editRecord (programmatic)"}),t.jsx("button",{type:"button",onClick:()=>{var e;return(e=o.current)==null?void 0:e.deleteRecord()},children:"deleteRecord (selection-based)"}),t.jsx("button",{type:"button",onClick:()=>{var x,I,D,b,C,P,S;const e=((D=(I=(x=o.current)==null?void 0:x.getRowsObject)==null?void 0:I.call(x))==null?void 0:D.length)??0,d=Math.max(e-1,0),g=(P=(C=(b=o.current)==null?void 0:b.getRowsObject)==null?void 0:C.call(b)[d])==null?void 0:P.data;(S=o.current)==null||S.updateRecord(d,{...g??{},title:"Updated by gridRef",estimate:12,status:"In Progress"})},children:"updateRecord (last row)"})]}),t.jsx(k,{ref:o,dataSource:n.current??[],isTreeMode:!0,treeColumnIndex:1,treeDataIdMapping:"id",treeDataParentIdField:"parentId",editSettings:{allowAdd:!0,allowEdit:!0,allowDelete:!0,mode:"Normal",newRowPosition:a},toolbar:f,onDataChangeComplete:m,dragAndDropSettings:{enabled:!0},pageSettings:{enabled:!0,pageSize:10,pageSizeMode:U.All},sortSettings:{enabled:!0},filterSettings:{enabled:!0},selectionSettings:{enabled:!0,mode:"Multiple",type:"Row"},height:"500px",style:{marginTop:"12px"},modules:i,children:t.jsxs(q,{children:[t.jsx(s,{field:"id",headerText:"ID",width:"60",type:"number",isPrimaryKey:!0}),t.jsx(s,{field:"title",headerText:"Title",width:"220",validationRules:{required:!0,minLength:3}}),t.jsx(s,{field:"owner",headerText:"Owner",width:"120"}),t.jsx(s,{field:"estimate",headerText:"Estimate",width:"110",type:"number",validationRules:{required:!0,min:1,max:1e3}}),t.jsx(s,{field:"dueOn",headerText:"Due On",width:"140",type:"date",format:"MM/dd/yyyy",validationRules:{required:!0},edit:{type:T.DatePicker}}),t.jsx(s,{field:"status",headerText:"Status",width:"130",edit:{type:T.DropDownList,params:{dataSource:L,fields:{value:"status",text:"status"}}}}),t.jsx(s,{field:"priority",headerText:"Priority",width:"120",edit:{type:T.DropDownList,params:{dataSource:$,fields:{value:"priority",text:"priority"}}}})]})}),t.jsx("h3",{style:{marginTop:"24px"},children:"Current flat dataSource (source of truth)"}),t.jsx("pre",{"data-testid":"source-preview",style:{background:"#f5f5f5",padding:"12px",borderRadius:"6px",maxHeight:"260px",overflow:"auto",fontSize:"12px"},children:JSON.stringify((n.current??[]).map(e=>({...e,dueOn:Y(e.dueOn)})),null,2)},h)]})},ee={title:"Grid/Tree CRUD/Parent ID",component:w};var v,M,O;w.parameters={...w.parameters,docs:{...(v=w.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  useGridTheme('material');
  const gridRef = useRef<GridRef>(null);
  // The source collection is static for the lifetime of the story instance.
  //
  // A tree CRUD operation mutates the collection it was given, so the grid has
  // to keep seeing the same array reference. The collection is therefore seeded
  // once and never re-created, and the preview panel below the grid is refreshed
  // through a separate counter so the data source prop stays stable.
  const datasourceRef = useRef<TaskNode[] | null>(null);
  if (datasourceRef.current === null) {
    datasourceRef.current = createSeedTasks();
  }
  const [previewVersion, setPreviewVersion] = useState<number>(0);
  const [insertPosition, setInsertPosition] = useState<string>('Top');
  const gridModules = {
    TreeDataModule,
    EditModule,
    ToolbarModule,
    FilterModule,
    ClipboardModule,
    ReorderModule,
    PagerModule
  };
  const toolbar: (string | ToolbarItems)[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];

  // A tree CRUD operation mutates the source collection in place, so the preview
  // panel below the grid is refreshed from the same array reference whenever the
  // grid reports a committed change. The counter only re-renders the preview, the
  // collection handed to the grid is untouched.
  const refreshPreview = (): void => {
    setPreviewVersion((version: number): number => version + 1);
  };
  return <div style={{
    padding: '20px'
  }}>\r
            <h1>TreeGrid CRUD - Parent ID Mapping Mode</h1>\r
            <p>\r
                Flat data with <code>treeDataIdMapping=&quot;id&quot;</code> and\r
                <code>treeDataParentIdField=&quot;parentId&quot;</code>. CRUD operations\r
                preserve the flat structure while updating the tree view.\r
            </p>\r
            <p>\r
                <strong>Editable columns</strong>: <code>Title</code> is a required\r
                string with a minimum length, <code>Estimate</code> is a number with a\r
                minimum and a maximum, <code>Due On</code> is a required date,\r
                <code>Status</code> is a dropdown and <code>Priority</code> is a\r
                dropdown as well.\r
            </p>\r
\r
            <div style={{
      marginBottom: '12px'
    }}>\r
                <label style={{
        marginRight: '12px'
      }}><strong>Insert position:</strong></label>\r
                {(['Top', 'Bottom', 'Above', 'Below', 'Child'] as const).map((p: 'Top' | 'Bottom' | 'Above' | 'Below' | 'Child') => <label key={p} style={{
        marginRight: '8px'
      }}>\r
                        <input type="radio" name="insertPos" value={p} checked={insertPosition === p} onChange={() => setInsertPosition(p)} />\r
                        {p}\r
                    </label>)}\r
            </div>\r
\r
            <div style={{
      marginBottom: '12px',
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>\r
                <button type="button" onClick={() => {
        const newId: number = Math.max(...(datasourceRef.current ?? []).map((t: TaskNode): number => t.id), 0) + 1;
        gridRef.current?.addRecord({
          id: newId,
          parentId: null,
          title: \`New task \${newId}\`,
          owner: 'You',
          estimate: 5,
          dueOn: new Date(2024, 0, 1),
          status: 'Pending',
          priority: 'Medium'
        }, undefined, {
          position: insertPosition as 'Top' | 'Bottom' | 'Above' | 'Below' | 'Child'
        });
        refreshPreview();
      }}>\r
                    addRecord (uses {insertPosition})\r
                </button>\r
                <button type="button" onClick={() => {
        const newId: number = Math.max(...(datasourceRef.current ?? []).map((t: TaskNode): number => t.id), 0) + 1;
        gridRef.current?.addRecord({
          id: newId,
          parentId: 1,
          title: \`Subtask of #1\`,
          owner: 'You',
          estimate: 3,
          dueOn: new Date(2024, 6, 1),
          status: 'Pending',
          priority: 'Low'
        }, undefined, {
          position: 'Child',
          anchorKey: '0'
        });
        refreshPreview();
      }}>\r
                    Add as child of root #1\r
                </button>\r
                <button type="button" onClick={() => gridRef.current?.editRecord()}>\r
                    editRecord (programmatic)\r
                </button>\r
                <button type="button" onClick={() => gridRef.current?.deleteRecord()}>\r
                    deleteRecord (selection-based)\r
                </button>\r
                <button type="button" onClick={() => {
        const rowCount: number = gridRef.current?.getRowsObject?.()?.length ?? 0;
        const index: number = Math.max(rowCount - 1, 0);
        const rowData: TaskNode | undefined = gridRef.current?.getRowsObject?.()[index]?.data as TaskNode;
        gridRef.current?.updateRecord(index, {
          ...(rowData ?? {}),
          title: 'Updated by gridRef',
          estimate: 12,
          status: 'In Progress'
        } as never);
      }}>\r
                    updateRecord (last row)\r
                </button>\r
            </div>\r
\r
            <Grid ref={gridRef} dataSource={datasourceRef.current ?? []} isTreeMode={true} treeColumnIndex={1} treeDataIdMapping="id" treeDataParentIdField="parentId" editSettings={{
      allowAdd: true,
      allowEdit: true,
      allowDelete: true,
      mode: 'Normal',
      newRowPosition: insertPosition as 'Top' | 'Bottom' | 'Above' | 'Below' | 'Child'
    }} toolbar={toolbar} onDataChangeComplete={refreshPreview} dragAndDropSettings={{
      enabled: true
    }} pageSettings={{
      enabled: true,
      pageSize: 10,
      pageSizeMode: PageSizeMode.All
    }} sortSettings={{
      enabled: true
    }} filterSettings={{
      enabled: true
    }} selectionSettings={{
      enabled: true,
      mode: 'Multiple',
      type: 'Row'
    }} height="500px" style={{
      marginTop: '12px'
    }} modules={gridModules}>\r
                <Columns>\r
                    <Column field="id" headerText="ID" width="60" type="number" isPrimaryKey />\r
                    <Column field="title" headerText="Title" width="220" validationRules={{
          required: true,
          minLength: 3
        }} />\r
                    <Column field="owner" headerText="Owner" width="120" />\r
                    <Column field="estimate" headerText="Estimate" width="110" type="number" validationRules={{
          required: true,
          min: 1,
          max: 1000
        }} />\r
                    <Column field="dueOn" headerText="Due On" width="140" type="date" format="MM/dd/yyyy" validationRules={{
          required: true
        }} edit={{
          type: EditType.DatePicker
        }} />\r
                    <Column field="status" headerText="Status" width="130" edit={{
          type: EditType.DropDownList,
          params: {
            dataSource: STATUS_EDITOR_OPTIONS,
            fields: {
              value: 'status',
              text: 'status'
            }
          }
        }} />\r
                    <Column field="priority" headerText="Priority" width="120" edit={{
          type: EditType.DropDownList,
          params: {
            dataSource: PRIORITY_EDITOR_OPTIONS,
            fields: {
              value: 'priority',
              text: 'priority'
            }
          }
        }} />\r
                </Columns>\r
            </Grid>\r
\r
            <h3 style={{
      marginTop: '24px'
    }}>Current flat dataSource (source of truth)</h3>\r
            <pre data-testid="source-preview" key={previewVersion} style={{
      background: '#f5f5f5',
      padding: '12px',
      borderRadius: '6px',
      maxHeight: '260px',
      overflow: 'auto',
      fontSize: '12px'
    }}>\r
                {JSON.stringify((datasourceRef.current ?? []).map((task: TaskNode): Record<string, unknown> => ({
        ...task,
        dueOn: formatDate(task.dueOn)
      })), null, 2)}\r
            </pre>\r
        </div>;
}`,...(O=(M=w.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const te=["TreeGridCrudParentId"];export{w as TreeGridCrudParentId,te as __namedExportsOrder,ee as default};
