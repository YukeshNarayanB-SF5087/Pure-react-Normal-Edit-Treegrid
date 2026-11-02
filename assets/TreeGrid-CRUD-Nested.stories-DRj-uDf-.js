import{j as e}from"./index-CTAXdLKx.js";import{r as R}from"./index-D5jfS-9e.js";import{u as E,G as N,a as k,b as I,c as U,d as B,P as G,C as L,e as h,E as M}from"./useGridTheme-lrKUE-ln.js";import{u as F}from"./useFilter-Chk2m66M.js";import{u as $,a as q}from"./useClipboard-C9itDAo5.js";import"./client-Spw3EFno.js";import"./iframe-CIg2I0Z_.js";import"../sb-preview/runtime.js";const u=["Active","On Leave","Inactive"],_=u.map(o=>({status:o})),m=["Alice","Brian","Carla","Devon","Erin","Felix","Grace","Henry","Iris","Jamal","Kara","Liam","Mona","Nolan","Olga","Pavel"],p=["Engineering Manager","Frontend Lead","Backend Lead","QA Lead","QA Engineer","Design Manager","Senior Designer","Designer","Product Manager","Data Analyst"],z=()=>{var a,c;const o=[];let n=1;const l=12;for(let r=0;r<l;r++){const w={id:n++,name:`${m[r%m.length]} Root ${r+1}`,role:p[r%p.length],salary:9e4+r*1500,joinedOn:new Date(2019,r%12,1+r%27),status:u[r%u.length],children:[]},b=4+r%3;for(let i=0;i<b;i++){const t={id:n++,name:`${m[(r+i)%m.length]} Team ${i+1}`,role:p[(r+i+1)%p.length],salary:55e3+i*1200,joinedOn:new Date(2021,(r+i)%12,1+i%27),status:u[(r+i)%u.length],children:[]},s=2+(r+i)%2;for(let d=0;d<s;d++)(a=t.children)==null||a.push({id:n++,name:`${m[(r+i+d)%m.length]} Member ${d+1}`,role:p[(r+i+d+2)%p.length],salary:38e3+d*900,joinedOn:new Date(2022,(r+i+d)%12,1+d%27),status:u[(r+i+d)%u.length]});(c=w.children)==null||c.push(t)}o.push(w)}return o},y=o=>{var l;const n=[];for(const a of o)n.push(a.id),(l=a.children)!=null&&l.length&&n.push(...y(a.children));return n},J=o=>{if(!o)return"";const n=o instanceof Date?o:new Date(o),l=String(n.getMonth()+1).padStart(2,"0"),a=String(n.getDate()).padStart(2,"0");return`${l}/${a}/${n.getFullYear()}`},g=()=>{E("material");const o=R.useRef(null),n=R.useRef(null);n.current===null&&(n.current=z());const[l,a]=R.useState(0),[c,r]=R.useState("Top"),w={TreeDataModule:B,EditModule:q,ToolbarModule:U,FilterModule:F,ClipboardModule:$,ReorderModule:I,PagerModule:k},b=["Add","Edit","Delete","Update","Cancel","Search"],i=()=>{a(t=>t+1)};return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h1",{children:"TreeGrid CRUD - Nested Children Mode"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Toolbar CRUD"}),": Click ",e.jsx("em",{children:"Add"}),", ",e.jsx("em",{children:"Edit"})," or",e.jsx("em",{children:" Delete"})," in the toolbar. For the tree positions",e.jsx("code",{children:"Above"}),", ",e.jsx("code",{children:"Below"})," and ",e.jsx("code",{children:"Child"}),", select a row first to use it as the anchor."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Programmatic CRUD"}),": The buttons below insert records through ",e.jsx("code",{children:"gridRef.addRecord(...)"}),", edit through",e.jsx("code",{children:"gridRef.editRecord()"})," and delete through",e.jsx("code",{children:"gridRef.deleteRecord()"}),". The changes flow back into the source ",e.jsx("code",{children:"dataSource"})," array, which is printed below the grid."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Editable columns"}),": ",e.jsx("code",{children:"Name"})," is a required string with a minimum length, ",e.jsx("code",{children:"Salary"})," is a number with a minimum and a maximum, ",e.jsx("code",{children:"Joined On"})," is a required date and",e.jsx("code",{children:"Status"})," is a dropdown."]}),e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsx("label",{style:{marginRight:"12px"},children:e.jsx("strong",{children:"Insert position:"})}),["Top","Bottom","Above","Below","Child"].map(t=>e.jsxs("label",{style:{marginRight:"8px"},children:[e.jsx("input",{type:"radio",name:"newRowPosition",value:t,checked:c===t,onChange:()=>r(t)}),t]},t))]}),e.jsxs("div",{style:{marginBottom:"12px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",onClick:()=>{var s;const t=Math.max(...y(n.current??[]),0)+1;(s=o.current)==null||s.addRecord({id:t,name:`New Employee ${t}`,role:"New Role",salary:4e4,joinedOn:new Date(2024,0,1),status:"Active"},void 0,{position:c}),i()},children:["Add via gridRef (uses ",c,")"]}),e.jsx("button",{type:"button",onClick:()=>{var t;return(t=o.current)==null?void 0:t.editRecord()},children:"Edit (programmatic)"}),e.jsx("button",{type:"button",onClick:()=>{var t;return(t=o.current)==null?void 0:t.deleteRecord()},children:"Delete selected"}),e.jsx("button",{type:"button",onClick:()=>{var s;const t=Math.max(...y(n.current??[]),0)+1;(s=o.current)==null||s.addRecord({id:t,name:"New Child of Alice",role:"Child Role",salary:35e3,joinedOn:new Date(2024,5,1),status:"On Leave"},void 0,{position:"Child",anchorKey:"0"}),i()},children:"Add as Child of root"}),e.jsx("button",{type:"button",onClick:()=>{var x,C,v,f,T,j,S,D;const t=((v=(C=(x=o.current)==null?void 0:x.getRowsObject)==null?void 0:C.call(x))==null?void 0:v.length)??0,s=Math.max(t-1,0),d=((S=(j=(T=(f=o.current)==null?void 0:f.getRowsObject)==null?void 0:T.call(f)[s])==null?void 0:j.data)==null?void 0:S.id)??0;(D=o.current)==null||D.updateRecord(s,{id:d,name:"Updated by gridRef",salary:42e3,joinedOn:new Date(2024,8,15),status:"Active"})},children:"Update last row via gridRef"})]}),e.jsx(N,{ref:o,dataSource:n.current??[],isTreeMode:!0,treeColumnIndex:1,treeDataChildrenField:"children",editSettings:{allowAdd:!0,allowEdit:!0,allowDelete:!0,mode:"Normal",newRowPosition:c},toolbar:b,onDataChangeComplete:i,dragAndDropSettings:{enabled:!0},pageSettings:{enabled:!0,pageSize:10,pageSizeMode:G.All},sortSettings:{enabled:!0},filterSettings:{enabled:!0},selectionSettings:{enabled:!0,mode:"Multiple",type:"Row"},height:"520px",style:{marginTop:"12px"},modules:w,children:e.jsxs(L,{children:[e.jsx(h,{field:"id",headerText:"ID",width:"80",type:"number",isPrimaryKey:!0}),e.jsx(h,{field:"name",headerText:"Name",width:"200",validationRules:{required:!0,minLength:3}}),e.jsx(h,{field:"role",headerText:"Role",width:"180"}),e.jsx(h,{field:"salary",headerText:"Salary",width:"120",type:"number",validationRules:{required:!0,min:1e3,max:1e6}}),e.jsx(h,{field:"joinedOn",headerText:"Joined On",width:"140",type:"date",format:"MM/dd/yyyy",validationRules:{required:!0},edit:{type:M.DatePicker}}),e.jsx(h,{field:"status",headerText:"Status",width:"140",edit:{type:M.DropDownList,params:{dataSource:_,fields:{value:"status",text:"status"}}}})]})}),e.jsx("h3",{style:{marginTop:"24px"},children:"Current dataSource (source of truth)"}),e.jsx("pre",{"data-testid":"source-preview",style:{background:"#f5f5f5",padding:"12px",borderRadius:"6px",maxHeight:"260px",overflow:"auto",fontSize:"12px"},children:JSON.stringify((n.current??[]).map(t=>({...t,joinedOn:J(t.joinedOn)})),null,2)},l)]})},ee={title:"Grid/Tree CRUD/Nested Children",component:g};var O,A,P;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  useGridTheme('material');
  const gridRef = useRef<GridRef>(null);
  // The source collection is static for the lifetime of the story instance.
  //
  // A tree CRUD operation mutates the collection it was given, so the grid has
  // to keep seeing the same array reference. The collection is therefore seeded
  // once and never re-created, and the preview panel below the grid is refreshed
  // through a separate counter so the data source prop stays stable.
  const datasourceRef = useRef<Employee[] | null>(null);
  if (datasourceRef.current === null) {
    datasourceRef.current = createSeedData();
  }
  const [previewVersion, setPreviewVersion] = useState<number>(0);
  const [newRowPosition, setNewRowPosition] = useState<string>('Top');
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
            <h1>TreeGrid CRUD - Nested Children Mode</h1>\r
            <p>\r
                <strong>Toolbar CRUD</strong>: Click <em>Add</em>, <em>Edit</em> or\r
                <em> Delete</em> in the toolbar. For the tree positions\r
                <code>Above</code>, <code>Below</code> and <code>Child</code>, select a\r
                row first to use it as the anchor.\r
            </p>\r
            <p>\r
                <strong>Programmatic CRUD</strong>: The buttons below insert records\r
                through <code>gridRef.addRecord(...)</code>, edit through\r
                <code>gridRef.editRecord()</code> and delete through\r
                <code>gridRef.deleteRecord()</code>. The changes flow back into the\r
                source <code>dataSource</code> array, which is printed below the grid.\r
            </p>\r
            <p>\r
                <strong>Editable columns</strong>: <code>Name</code> is a required\r
                string with a minimum length, <code>Salary</code> is a number with a\r
                minimum and a maximum, <code>Joined On</code> is a required date and\r
                <code>Status</code> is a dropdown.\r
            </p>\r
\r
            <div style={{
      marginBottom: '12px'
    }}>\r
                <label style={{
        marginRight: '12px'
      }}>\r
                    <strong>Insert position:</strong>\r
                </label>\r
                {(['Top', 'Bottom', 'Above', 'Below', 'Child'] as const).map((p: 'Top' | 'Bottom' | 'Above' | 'Below' | 'Child') => <label key={p} style={{
        marginRight: '8px'
      }}>\r
                        <input type="radio" name="newRowPosition" value={p} checked={newRowPosition === p} onChange={() => setNewRowPosition(p)} />\r
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
        const id: number = Math.max(...collectIds(datasourceRef.current ?? []), 0) + 1;
        gridRef.current?.addRecord({
          id,
          name: \`New Employee \${id}\`,
          role: 'New Role',
          salary: 40000,
          joinedOn: new Date(2024, 0, 1),
          status: 'Active'
        }, undefined, {
          position: newRowPosition as 'Top' | 'Bottom' | 'Above' | 'Below' | 'Child'
        });
        refreshPreview();
      }}>\r
                    Add via gridRef (uses {newRowPosition})\r
                </button>\r
                <button type="button" onClick={() => gridRef.current?.editRecord()}>\r
                    Edit (programmatic)\r
                </button>\r
                <button type="button" onClick={() => gridRef.current?.deleteRecord()}>\r
                    Delete selected\r
                </button>\r
                <button type="button" onClick={() => {
        const id: number = Math.max(...collectIds(datasourceRef.current ?? []), 0) + 1;
        gridRef.current?.addRecord({
          id,
          name: 'New Child of Alice',
          role: 'Child Role',
          salary: 35000,
          joinedOn: new Date(2024, 5, 1),
          status: 'On Leave'
        }, undefined, {
          position: 'Child',
          anchorKey: '0'
        });
        refreshPreview();
      }}>\r
                    Add as Child of root\r
                </button>\r
                <button type="button" onClick={() => {
        const rowCount: number = gridRef.current?.getRowsObject?.()?.length ?? 0;
        const index: number = Math.max(rowCount - 1, 0);
        const existingId: number = (gridRef.current?.getRowsObject?.()[index]?.data as Employee | undefined)?.id ?? 0;
        gridRef.current?.updateRecord(index, {
          id: existingId,
          name: 'Updated by gridRef',
          salary: 42000,
          joinedOn: new Date(2024, 8, 15),
          status: 'Active'
        } as never);
      }}>\r
                    Update last row via gridRef\r
                </button>\r
            </div>\r
\r
            <Grid ref={gridRef} dataSource={datasourceRef.current ?? []} isTreeMode={true} treeColumnIndex={1} treeDataChildrenField="children" editSettings={{
      allowAdd: true,
      allowEdit: true,
      allowDelete: true,
      mode: 'Normal',
      newRowPosition: newRowPosition as 'Top' | 'Bottom' | 'Above' | 'Below' | 'Child'
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
    }} height="520px" style={{
      marginTop: '12px'
    }} modules={gridModules}>\r
                <Columns>\r
                    <Column field="id" headerText="ID" width="80" type="number" isPrimaryKey />\r
                    <Column field="name" headerText="Name" width="200" validationRules={{
          required: true,
          minLength: 3
        }} />\r
                    <Column field="role" headerText="Role" width="180" />\r
                    <Column field="salary" headerText="Salary" width="120" type="number" validationRules={{
          required: true,
          min: 1000,
          max: 1000000
        }} />\r
                    <Column field="joinedOn" headerText="Joined On" width="140" type="date" format="MM/dd/yyyy" validationRules={{
          required: true
        }} edit={{
          type: EditType.DatePicker
        }} />\r
                    <Column field="status" headerText="Status" width="140" edit={{
          type: EditType.DropDownList,
          params: {
            dataSource: STATUS_EDITOR_OPTIONS,
            fields: {
              value: 'status',
              text: 'status'
            }
          }
        }} />\r
                </Columns>\r
            </Grid>\r
\r
            <h3 style={{
      marginTop: '24px'
    }}>Current dataSource (source of truth)</h3>\r
            <pre data-testid="source-preview" key={previewVersion} style={{
      background: '#f5f5f5',
      padding: '12px',
      borderRadius: '6px',
      maxHeight: '260px',
      overflow: 'auto',
      fontSize: '12px'
    }}>\r
                {JSON.stringify((datasourceRef.current ?? []).map((employee: Employee): Record<string, unknown> => ({
        ...employee,
        joinedOn: formatDate(employee.joinedOn)
      })), null, 2)}\r
            </pre>\r
        </div>;
}`,...(P=(A=g.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const te=["TreeGridCrudNested"];export{g as TreeGridCrudNested,te as __namedExportsOrder,ee as default};
