import{j as a}from"./index-CTAXdLKx.js";import{q as M,r as G,u as kn,s as ne,S,t as Fe,Q as fe,i as Fn,D as qe,v as Ve,w as qn,G as Vn,x as In,y as Pn,z as zn,B as On,H as Ln,I as Nn,c as jn,a as Wn,J as Un,K as Hn,L as Bn,M as O,N as ee,e as ye,C as fn,O as Kn,R as $n,T as Ie,W as Qn,U as _n,V as Jn,X as Xn}from"./useGridTheme-lrKUE-ln.js";import{r as d}from"./index-D5jfS-9e.js";import"./client-Spw3EFno.js";import{m as Yn,a as Zn,u as et,b as nt,c as tt,d as at,e as ot,f as rt,g as it,h as lt}from"./data-BljlTXyg.js";import{u as st}from"./useFilter-Chk2m66M.js";import{a as dt,u as ut}from"./useClipboard-C9itDAo5.js";import"./iframe-CIg2I0Z_.js";import"../sb-preview/runtime.js";const ct=[40,80,120,200],be=r=>{var Re,Ae,Te,Me,Ge,ke;const{enableRtl:y,enableRipple:c,localDataCount:s,isTextWrapData:h,isDialogInsideGrid:f,isStrictMode:E,isMultipleChildren:k,enableDarkMode:T=!1,builtInThemes:te="material",parentContainerHeight:vn="87vh",isCustomBinding:L,isLocalDataManager:Ce,serverPageSize:ae,defaultOpenGroupExpandKeys:F,isConditionalRowSelection:xe,...e}=r;((Te=(Ae=e.columns)==null?void 0:Ae[((Re=e.columns)==null?void 0:Re.length)-1])==null?void 0:Te.headerText)==="Command Actions"&&(e.columns[((Me=e.columns)==null?void 0:Me.length)-1].getCommandItems=()=>[a.jsx(M,{type:G.Edit},"Edit"),a.jsx(M,{type:G.Delete},"Delete"),a.jsx(M,{type:G.Update},"Update"),a.jsx(M,{type:G.Cancel},"Cancel")]);const v=d.useRef(null),ve=d.useRef(null),[Se,Sn]=d.useState(!0),[q,wn]=d.useState(!1);kn(te,e.enableDevMode);const m=d.useMemo(()=>h?Yn(s):Zn(s,e.columns),[s,(Ge=e.columns)==null?void 0:Ge.length]),De=d.useMemo(()=>Ce?new ne(m):null,[m,Ce]),[yn,bn]=d.useState({result:[],count:0,hasMore:((ke=r.virtualizationSettings)==null?void 0:ke.scrollMode)===S.Infinite}),we=d.useCallback(n=>{if(!n.isComplex)return new Fe(n.field,n.operator,n.value,n.ignoreCase,n.ignoreAccent,n.matchCase);let t=null;const o=n.predicates||[],p=n.condition||"and";for(let g=0;g<o.length;g++){const u=we(n.predicates[g]);t===null?t=u:t=p.toLowerCase()==="or"?t.or(u):t.and(u)}return t||new Fe("","","")},[]),Ee=d.useCallback(n=>{var p,g,u,C,R,b,V,N,j,W,U,H,B,K,$,I,Q,P,_,z,J,X,Y;const t=new ne(m),o=new fe;if((p=n.where)!=null&&p.length){const i=n.where[0],l=we(i);o.where(l)}if((g=n.search)!=null&&g.length){const{fields:i,value:l}=n.search[0];o.search(l,i)}if((u=n.sort)!=null&&u.length||(C=n.groups)!=null&&C.length&&n.isInitialLoad)if(n.isInitialLoad&&((R=n.groups)!=null&&R.length)){const i=[];for(let l=n.sort.length-1;l>-1;l--)(i==null?void 0:i.find(w=>w.field===n.sort[l].field))||((b=n.groups)!=null&&b.length&&((V=n.groups)!=null&&V.includes(n.sort[l].field))?i.push({field:n.sort[l].field,direction:n.sort[l].direction}):o.sortBy(n.sort[l].field,n.sort[l].direction));i.length&&i.forEach(l=>{o.sortBy(l.field,l.direction)})}else n.sort.forEach(i=>{o.sortBy(i.field,i.direction)});if((N=n.aggregates)!=null&&N.length||(W=(j=v.current)==null?void 0:j.aggregates)!=null&&W.length){const i=(U=n.aggregates)!=null&&U.length?n.aggregates:(H=v.current)==null?void 0:H.aggregates;for(let l=0;l<(i==null?void 0:i.length);l++)if((B=i[l])!=null&&B.columns)for(let x=0;x<((K=i[l])==null?void 0:K.columns.length);x++){const w=i[l].columns[x];if(Array.isArray(w.type))for(let Z=0;Z<w.type.length;Z++)o.aggregate((Q=(I=($=w.type)==null?void 0:$[Z])==null?void 0:I.toLowerCase)==null?void 0:Q.call(I),w.field);else o.aggregate((_=(P=w.type)==null?void 0:P.toLowerCase)==null?void 0:_.call(P),w.field)}else{const x=i[l];o.aggregate((J=(z=x.type)==null?void 0:z.toLowerCase)==null?void 0:J.call(z),x.field)}}if(n.groups&&((X=n.groups)!=null&&X.length))for(let i=0;i<n.groups.length;i++){const l=n.groups[parseInt(i.toString(),10)];o.group(l)}if(n.take&&n.skip){const i=n.skip/n.take+1,l=n.take;o.page(i,l)}else if(n.skip===0&&n.take)o.page(1,n.take);else if(!Fn(n.skip)&&!n.take&&((Y=r.virtualizationSettings)==null?void 0:Y.scrollMode)===S.Infinite){const i=n.skip/ae+1;o.page(i,ae)}n.requiresCounts&&o.requiresCount(),console.log("onDataRequest => ",n,o),t.executeQuery(o).then(i=>{if(n.requestType==="filterChoiceRequest"){const l={result:qe.distinct(i.result,n.select[0],!0),count:i.count};if(n.distinctCounts){const x=new fe;if(n.distinct){const w=n.distinct[0],Z=we(w);x.where(Z)}n.select&&x.select(n.select),console.log("onDataRequest => ",n,o),t.executeQuery(x).then(w=>{l.distinctCount=qe.distinct(w.result,n.select[0],!0).length,n.dataSource(l)})}else n.dataSource(l)}else bn({...i,hasMore:m.length>(n.skip??0)+i.result.length})})},[]),xn=d.useCallback(n=>{setTimeout(()=>{if(console.log("onDataChangeRequest => ",n),Array.isArray(n.data)){n.data.forEach(t=>{const o=m.findIndex(p=>p.id===t.id);o!==-1&&(m[o]={...m[o],...t})}),n.saveDataChanges();return}if(n.action==="Add"&&m.unshift(n.data),n.action==="Edit"){for(let t=0;t<m.length;t++)if(m[t].id===n.data.id){m[t]=n.data;break}}if(n.action==="Delete"){for(let t=0;t<n.data.length;t++)for(let o=0;o<m.length;o++)if(m[o].id===n.data[t].id){m.splice(o,1);break}}n.saveDataChanges()},0)},[]),Dn=d.useMemo(()=>{var p,g;if(!L)return;const n=((p=e==null?void 0:e.aggregates)==null?void 0:p.reduce((u,C)=>{var R;return(R=C.columns)==null||R.forEach(b=>{Array.isArray(b.type)?b.type.forEach(V=>{u.push({type:V.toLowerCase(),field:b.field})}):u.push({type:b.type.toLowerCase(),field:b.field})}),u},[]))??[],t=((g=e==null?void 0:e.columns)==null?void 0:g.reduce((u,C)=>(C.groupCaptionAggregateType&&u.push(...Array.isArray(C.groupCaptionAggregateType)?C.groupCaptionAggregateType.map(R=>({type:R.toLowerCase(),field:C.field})):[{type:C.groupCaptionAggregateType.toLowerCase(),field:C.field}]),u),[]))??[],o=n==null?void 0:n.concat(t);return o!=null&&o.length?o:void 0},[L,e==null?void 0:e.aggregates,e==null?void 0:e.columns,q]);d.useEffect(()=>{var n,t,o,p,g,u,C,R,b,V,N,j,W,U,H,B,K,$,I,Q,P,_;L&&q&&Ee({skip:((n=e==null?void 0:e.pageSettings)==null?void 0:n.currentPage)*((t=e==null?void 0:e.pageSettings)==null?void 0:t.pageSize)||0,...((o=e.virtualizationSettings)==null?void 0:o.scrollMode)!==S.Infinite||(p=e.pageSettings)!=null&&p.estimatedTotalRecordsCount||((g=e.pageSettings)==null?void 0:g.pageSizeControlledBy)==="client"?{take:ae??((u=e==null?void 0:e.pageSettings)==null?void 0:u.pageSize)??(((C=e.virtualizationSettings)==null?void 0:C.scrollMode)===S.Auto||!((R=e.virtualizationSettings)!=null&&R.scrollMode)?12:50)}:{take:ae},groups:(b=e==null?void 0:e.groupSettings)!=null&&b.enabled?(V=e==null?void 0:e.groupSettings)==null?void 0:V.columns:[],where:[],search:[],sort:(N=e==null?void 0:e.sortSettings)!=null&&N.enabled&&((W=(j=e==null?void 0:e.sortSettings)==null?void 0:j.columns)!=null&&W.length)&&(!((U=e==null?void 0:e.groupSettings)!=null&&U.enabled)||!((H=e==null?void 0:e.groupSettings)!=null&&H.columns))?(B=e==null?void 0:e.sortSettings)==null?void 0:B.columns:(((K=e==null?void 0:e.sortSettings)==null?void 0:K.columns)??[]).concat(($=e==null?void 0:e.groupSettings)!=null&&$.enabled&&((I=e==null?void 0:e.groupSettings)!=null&&I.columns)?(P=(Q=e==null?void 0:e.groupSettings)==null?void 0:Q.columns)==null?void 0:P.map(z=>{var J,X,Y;return{field:z,direction:((Y=(X=(J=e==null?void 0:e.sortSettings)==null?void 0:J.columns)==null?void 0:X.find(i=>i.field===z))==null?void 0:Y.direction)??"Ascending"}}):[]),aggregates:Dn??[],...((_=e.virtualizationSettings)==null?void 0:_.scrollMode)!==S.Infinite?{requiresCounts:!0}:{},isInitialLoad:!0})},[q]),d.useEffect(()=>{T?document.body.classList.add("dark","sf-dark-mode"):document.body.classList.remove("dark","sf-dark-mode")},[T]);const En=d.useCallback(n=>n.id%2===0||n.EmployeeID%2===0||n.RecordId%2===0?{selectable:!1}:!0,[xe]),Rn=d.useCallback(n=>{var t;return(t=F.includes)==null?void 0:t.call(F,n==null?void 0:n.groupKey)},[F]),An=d.useCallback(n=>{console.error("Grid Error: ",n)},[e==null?void 0:e.onError]),Tn=d.useCallback(n=>ct[n.rowIndex%4],[e==null?void 0:e.getRowHeight]),Mn=d.useMemo(()=>e.children?void 0:e.columns,[e==null?void 0:e.columns,e==null?void 0:e.children]),Gn=d.useMemo(()=>e.children?void 0:e.aggregates,[e==null?void 0:e.aggregates,e==null?void 0:e.children]),oe=()=>{var n;return a.jsxs(a.Fragment,{children:[a.jsxs("button",{onClick:()=>{var t,o;q&&window.localStorage.removeItem((o=(t=v==null?void 0:v.current)==null?void 0:t.getDataModule())==null?void 0:o.dataManager.guidId),wn(!q)},children:[q?"Destroy":"Render"," Data Grid"]}),s&&!h&&a.jsxs("button",{onClick:()=>Sn(!Se),children:[Se?"Uniform":"Non Uniform"," Row Height Applied"]}),(n=e==null?void 0:e.groupSettings)!=null&&n.enabled?a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>{var t,o,p;(p=(t=v.current)==null?void 0:t.groupColumn)==null||p.call(t,(o=e==null?void 0:e.groupSettings)==null?void 0:o.columns,!0)},children:"Reset Grouped Columns to Default"}),a.jsx("button",{onClick:()=>{var t,o,p,g,u;(u=(t=v.current)==null?void 0:t.ungroupColumn)==null||u.call(t,[(g=(p=(o=v.current)==null?void 0:o.groupSettings)==null?void 0:p.columns)==null?void 0:g[0]])},children:"Un Group First Grouped Column"}),a.jsx("button",{onClick:()=>{var t,o;(o=(t=v.current)==null?void 0:t.expandAll)==null||o.call(t)},children:"Expand All"}),a.jsx("button",{onClick:()=>{var t,o;(o=(t=v.current)==null?void 0:t.collapseAll)==null||o.call(t)},children:"Collapse All"}),a.jsx("button",{onClick:()=>{var t,o;(o=(t=v.current)==null?void 0:t.clearGrouping)==null||o.call(t)},children:"Clear Grouping"})]}):null,a.jsx("br",{}),a.jsx("br",{}),q&&a.jsx(qn,{dir:y?"rtl":"ltr",ripple:c,locale:e.locale,children:a.jsx(Vn,{ref:v,dataSource:L?yn:Ce&&De?De:s?m:[],onDataRequest:L?Ee:void 0,onDataChangeRequest:L?xn:void 0,shouldExpandGroup:F!=null&&F.length?Rn:void 0,onError:An,...e,isRowSelectable:xe?En:void 0,columns:Mn,aggregates:Gn,getRowHeight:Se?null:Tn,children:k?d.useMemo(()=>e.children.props.children,[e==null?void 0:e.children]):e.children})}),a.jsx("br",{}),a.jsx("button",{onClick:()=>{console.log(v)},children:"dummy navigation checking button with get GridRef"})]})};return a.jsx("div",{ref:ve,style:{height:vn,isolation:"isolate"},className:T?"dark sf-dark-mode":"",children:E?a.jsx(d.StrictMode,{children:f?a.jsx(Ve,{open:!0,fullScreen:!0,target:ve.current,children:oe()}):oe()}):f?a.jsx(Ve,{open:!0,fullScreen:!0,target:ve.current,children:oe()}):oe()})};try{be.displayName="LargeDataGridTest",be.__docgenInfo={description:"",displayName:"LargeDataGridTest",props:{parentContainerHeight:{defaultValue:null,description:"",name:"parentContainerHeight",required:!1,type:{name:"Height<string | number>"}},enableRtl:{defaultValue:null,description:`Enables right-to-left (RTL) direction for the grid.

When set to true, the grid's layout changes to support right-to-left languages like Arabic.
This includes reversing the direction of UI elements, text alignment, and scrollbars.`,name:"enableRtl",required:!1,type:{name:"boolean"}},enableRipple:{defaultValue:null,description:"",name:"enableRipple",required:!1,type:{name:"boolean"}},localDataCount:{defaultValue:null,description:"",name:"localDataCount",required:!1,type:{name:"number"}},isTextWrapData:{defaultValue:null,description:"",name:"isTextWrapData",required:!1,type:{name:"boolean"}},isDialogInsideGrid:{defaultValue:null,description:"",name:"isDialogInsideGrid",required:!1,type:{name:"boolean"}},isStrictMode:{defaultValue:null,description:"",name:"isStrictMode",required:!1,type:{name:"boolean"}},isMultipleChildren:{defaultValue:null,description:"",name:"isMultipleChildren",required:!1,type:{name:"boolean"}},isCustomBinding:{defaultValue:null,description:"",name:"isCustomBinding",required:!1,type:{name:"boolean"}},isLocalDataManager:{defaultValue:null,description:"",name:"isLocalDataManager",required:!1,type:{name:"boolean"}},serverPageSize:{defaultValue:null,description:"",name:"serverPageSize",required:!1,type:{name:"number"}},defaultOpenGroupExpandKeys:{defaultValue:null,description:"",name:"defaultOpenGroupExpandKeys",required:!1,type:{name:"string[]"}},isConditionalRowSelection:{defaultValue:null,description:"",name:"isConditionalRowSelection",required:!1,type:{name:"boolean"}},builtInThemes:{defaultValue:null,description:"",name:"builtInThemes",required:!1,type:{name:"enum",value:[{value:'"bootstrap"'},{value:'"tailwind"'},{value:'"material"'}]}},enableDarkMode:{defaultValue:null,description:"",name:"enableDarkMode",required:!1,type:{name:"boolean"}},children:{defaultValue:{value:"null"},description:`Child components for the grid.

Allows rendering of child elements within the grid component structure.
@private`,name:"children",required:!1,type:{name:"ReactElement<IRowBase<unknown>, string | JSXElementConstructor<any>> | ReactElement<IRowBase<unknown>, string | JSXElementConstructor<any>>[] | ReactNode"}},onError:{defaultValue:null,description:`Fires when grid operations like sorting or filtering fail.
Provides error details for handling and user feedback.
@event onError
@example \`\`\`tsx
const GridComponent = () => {
  const handleActionFailure = (event: Error) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onError={handleActionFailure}
    />
  );
};
\`\`\``,name:"onError",required:!1,type:{name:"(event: Error) => void"}},id:{defaultValue:{value:"React.useId()"},description:`Specifies a unique identifier for the grid component.
Provides a distinct ID for the grid instance, enabling targeted interactions, styling, or accessibility features.
Used to differentiate multiple grid instances within the same application or DOM.
@example \`\`\`tsx
<Grid
  id="employee-grid"
  dataSource={employees}
  columns={columns}
/>
\`\`\``,name:"id",required:!1,type:{name:"string"}},onUndoStart:{defaultValue:null,description:`Fires before a Grid-level undo request is applied.
@event onUndoStart`,name:"onUndoStart",required:!1,type:{name:"(event: UndoStartEvent) => void"}},onUndoComplete:{defaultValue:null,description:`Fires after a Grid-level undo request completes.
@event onUndoComplete`,name:"onUndoComplete",required:!1,type:{name:"(event: UndoCompleteEvent) => void"}},onRedoStart:{defaultValue:null,description:`Fires before a Grid-level redo request is applied.
@event onRedoStart`,name:"onRedoStart",required:!1,type:{name:"(event: RedoStartEvent) => void"}},onRedoComplete:{defaultValue:null,description:`Fires after a Grid-level redo request completes.
@event onRedoComplete`,name:"onRedoComplete",required:!1,type:{name:"(event: RedoCompleteEvent) => void"}},sideBar:{defaultValue:{value:"undefined"},description:"Configures the optional grid sidebar and its tool panels.",name:"sideBar",required:!1,type:{name:"SideBar<unknown>"}},isChildrenGrid:{defaultValue:{value:"false"},description:`Indicates whether the grid is a child grid within a master-detail relationship.
When true, the grid is treated as a detail grid and may inherit certain behaviors or styles from its parent.
@private
@example \`\`\`tsx
<Grid
  isChildrenGrid={true}
  dataSource={detailData}
  columns={detailColumns}
/>
\`\`\``,name:"isChildrenGrid",required:!1,type:{name:"boolean"}},dataSource:{defaultValue:{value:"[]"},description:`Supplies the data to be displayed in the grid.

The data source can be provided as:
* An array of JavaScript objects
* A \`DataManager\` instance for local/remote data operations
* A \`DataResponse\` object with processed data

The grid will automatically bind to this data and render rows based on the provided records.
@example \`\`\`tsx
import React from 'react';
import { Grid } from '@company/react-grid';

const GridExample: React.FC = () => {
  // Local data array
  const employees = [
    { id: 1, name: 'John Doe', role: 'Developer', salary: 75000 },
    { id: 2, name: 'Jane Smith', role: 'Designer', salary: 65000 },
  ];

  return (
    <Grid
      dataSource={employees}
    />
  );
};
\`\`\``,name:"dataSource",required:!1,type:{name:"DataManager | DataResponse | unknown[]"}},columns:{defaultValue:{value:"[]"},description:`Defines the columns to be displayed in the grid.

An array of ColumnProps objects that specify how each column in the grid should be configured.
This includes properties like \`field\`, \`headerText\`, \`width\`, \`format\`, and more.
The order of columns in the array determines their display order in the grid.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={[
    { field: 'id', headerText: 'ID', width: 100, textAlign: 'Right' },
    { field: 'name', headerText: 'Employee Name', width: 200 },
    { field: 'role', headerText: 'Role', width: 150 },
    {
      field: 'salary',
      headerText: 'Salary',
      width: 150,
      format: 'C2',
      textAlign: 'Right'
    }
  ]}
/>
\`\`\``,name:"columns",required:!1,type:{name:"ColumnProps<unknown>[]"}},height:{defaultValue:{value:"'auto'"},description:`Sets the height of the grid component.

Controls the vertical size of the grid. Can be specified as:
* A number (interpreted as pixels).
* A string with CSS units (e.g., '500px', '100%').
* \`auto\` to adjust to content.

When a fixed height is set, scrollbars appear automatically when content exceeds the height.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  height={400}
/>
\`\`\``,name:"height",required:!1,type:{name:"string | number"}},defaultExpandedRows:{defaultValue:{value:"[]"},description:`Specifies row indices that should be expanded by default when the grid loads.
Applies only when the master-detail feature enabled using \`isMasterDetail={true}\` in the grid props.
Rows at these indices automatically display their detail templates on initial render.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  isMasterDetail={true}
  defaultExpandedRows={[2, 4]}
  detailRowTemplate={(params) => (
    <div>Detail content for row {params.rowIndex}</div>
  )}
/>
\`\`\``,name:"defaultExpandedRows",required:!1,type:{name:"number[]"}},width:{defaultValue:{value:"'auto'"},description:`Sets the width of the grid component.

Controls the horizontal size of the grid. Can be specified as:
* A number (interpreted as pixels).
* A string with CSS units (e.g., '800px', '100%').
* \`auto\` to adjust to parent container.

When a fixed width is set, horizontal scrollbars appear automatically when content exceeds the width.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  width={900}
/>
\`\`\``,name:"width",required:!1,type:{name:"string | number"}},gridLines:{defaultValue:{value:"'Default'"},description:'Configures the visibility of grid lines between cells.\n\nDetermines which grid lines are displayed in the grid. Available options are:\n* `Default`: Shows horizontal lines only.\n* `None`: Displays no grid lines.\n* `Both`: Shows both horizontal and vertical grid lines.\n* `Horizontal`: Shows horizontal lines only.\n* `Vertical`: Shows vertical lines only.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  gridLines="Both"\n/>\n```',name:"gridLines",required:!1,type:{name:"string"}},enableAutoSpan:{defaultValue:{value:"false"},description:"Enables automatic row and column span behavior for grid cells.\nWhen set to true, adjacent cells with matching values automatically merge using both row and column spanning.\nWhen set to false, automatic spanning is disabled and only explicit numeric span values are applied.\nCells must have `rowSpan={true}` or `colSpan={true}` to participate in automatic spanning.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  enableAutoSpan={true}\n/>\n```",name:"enableAutoSpan",required:!1,type:{name:"boolean"}},enableHover:{defaultValue:{value:"true"},description:`Controls whether hover effect is applied to grid rows.

By default, rows are visually highlighted on pointer hover.
When set to false, rows retain a static appearance regardless of pointer hover movement.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableHover={true}
/>
\`\`\``,name:"enableHover",required:!1,type:{name:"boolean"}},enableDevMode:{defaultValue:{value:"true"},description:`Enables development-specific diagnostics for the grid component.
When set to true, the grid outputs additional console warnings, validation messages,
and debugging information to assist in identifying configuration issues and improving integration.
When set to false, these development diagnostics are suppressed to reduce console noise
and minimize runtime overhead.
This is a non-reactive property and applies only during initial render.
@example \`\`\`tsx
const isDev: boolean = process.env.NODE_ENV === 'development';
<Grid
  dataSource={data}
  columns={columns}
  enableDevMode={isDev ? true : false}
/>
\`\`\``,name:"enableDevMode",required:!1,type:{name:"boolean"}},rowNumberSettings:{defaultValue:{value:"{ enabled: false }"},description:`Configures the display of sequential row numbers in the grid.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  rowNumberSettings={{ enabled: true }}
/>
\`\`\``,name:"rowNumberSettings",required:!1,type:{name:"RowNumberSettings"}},allowKeyboard:{defaultValue:{value:"true"},description:`Controls whether keyboard navigation is enabled for the Data Grid.

By default, navigation and interaction with grid elements can be performed using keyboard shortcuts and arrow keys.
When set to false, the grid's default focus navigation behavior is disabled.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  allowKeyboard={true}
/>
\`\`\``,name:"allowKeyboard",required:!1,type:{name:"boolean"}},enableCellTextSelection:{defaultValue:{value:"false"},description:`Controls whether native browser text selection is allowed inside grid cells.

By default, text selection inside grid content cells, header cells, summary cells,
and group caption cells is disabled by applying the \`sf-disableuserselect\` utility class.
When set to true, that class is not applied, allowing users to select and copy
partial text directly from grid cells.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableCellTextSelection={true}
/>
\`\`\``,name:"enableCellTextSelection",required:!1,type:{name:"boolean"}},clipMode:{defaultValue:{value:"ClipMode.Ellipsis | 'Ellipsis'"},description:"Defines the cell content's overflow mode. The available modes are:\n* `Clip` -  Truncates the cell content when it overflows its area.\n* `Ellipsis` -  Displays ellipsis when the cell content overflows its area.\n* `EllipsisWithTooltip` - Applies an ellipsis to overflowing cell content and displays a tooltip on hover for enhanced readability.",name:"clipMode",required:!1,type:{name:"string"}},enableGridChart:{defaultValue:{value:"false"},description:"Enables chart options in the context menu.",name:"enableGridChart",required:!1,type:{name:"boolean"}},autoFit:{defaultValue:{value:"null"},description:"Defines the default auto-fit scope applied to columns that omit a per-column `autoFit` value.\nDetermines which cells the auto-fit measurement considers: `AutoFitMode.Header` (header only), `AutoFitMode.Content` (content only), or `AutoFitMode.All` (widest of both).\n@example ```tsx\n<Grid autoFit={AutoFitMode.All} />\n```",name:"autoFit",required:!1,type:{name:"enum",value:[{value:'"All"'},{value:'"Header"'},{value:'"Content"'}]}},enableAltRow:{defaultValue:{value:"true"},description:`Determines whether the \`sf-alt-row\` CSS class is added to alternate rows in the Data Grid.

When set to true, the grid adds the \`sf-alt-row\` class to alternate row elements.
This supports alternating row styles, which can improve readability in data-dense layouts.
The grid does not apply any default styling for this class. Styling must be defined externally.

When set to false, the grid does not add the \`sf-alt-row\` class to any row.
@example \`\`\`tsx
<GridComponent
  dataSource={employees}
  columns={columns}
  enableAltRow={true}
/>

// External CSS
.sf-alt-row {
  background-color: #f5f5f5;
}
\`\`\``,name:"enableAltRow",required:!1,type:{name:"boolean"}},dragAndDropSettings:{defaultValue:{value:"{ enabled: false }"},description:`Configures row drag-and-drop between grid instances.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  dragAndDropSettings={{
    enabled: true,
    targetID: 'destination-grid'
  }}
/>
\`\`\``,name:"dragAndDropSettings",required:!1,type:{name:"DragAndDropSettings"}},selectionSettings:{defaultValue:{value:"{ enabled: true, mode: 'Single', enableToggle: false }"},description:`Configures the grid's selection settings, determines whether \`Single\` or \`Multiple\` selections are allowed.
Used to customize the selection experience for user interactions.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  selectionSettings={{
    enabled: true,
    type: 'Row',
    mode: 'Multiple'
  }}
/>
\`\`\``,name:"selectionSettings",required:!1,type:{name:"SelectionSettings"}},autoFillSettings:{defaultValue:{value:"undefined"},description:`Enables cell fill (autofill) behavior when selection and editing are active.
Allows dragging selected cells to fill adjacent cells with repeated or sequential values.
@example \`\`\`tsx
<Grid
  dataSource={data}
  columns={columns}
  editSettings={{ allowEdit: true }}
  selectionSettings={{ type: 'Cell' }}
  autoFillSettings={{ isEnabled: true }}
/>
\`\`\``,name:"autoFillSettings",required:!1,type:{name:"AutoFillSettings"}},onCellFillStart:{defaultValue:null,description:`Fires when a cell fill operation begins.
@event onCellFillStart
@param args - Fill start event arguments
@returns`,name:"onCellFillStart",required:!1,type:{name:"(args: CellFillStartedEvent) => void"}},onCellFillComplete:{defaultValue:null,description:`Fires when a cell fill operation completes.
@event onCellFillComplete
@param args - Fill complete event arguments
@returns`,name:"onCellFillComplete",required:!1,type:{name:"(args: CellFillCompletedEvent<unknown>) => void"}},clipboardSettings:{defaultValue:{value:"{ enabled: true }"},description:`Configures clipboard copy and paste functionality for the grid.
Enables or disables copy/paste operations on selected cells or rows.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  clipboardSettings={{ enabled: true }}
/>
\`\`\``,name:"clipboardSettings",required:!1,type:{name:"ClipboardSettings"}},modules:{defaultValue:{value:"{}"},description:`Defines the feature modules to be injected into the Grid.
Injecting modules enables optional functionality and improves tree-shaking by
including only the required features in the application bundle.

To enable clipboard operations such as copy, paste, cut, and copy with headers,
inject the \`ClipboardModule\`.
@example \`\`\`tsx
import { Grid, ClipboardModule } from '@syncfusion/react-grid';

<Grid
  dataSource={employees}
  columns={columns}
  modules={{ ClipboardModule }}
/>
\`\`\``,name:"modules",required:!1,type:{name:"GridModules<unknown>"}},statusBarSettings:{defaultValue:{value:"{ enabled: false }"},description:`Configures the optional status bar feature for displaying summary information.
The status bar displays row counts, selection metrics, and custom panels.
When enabled, the status bar is rendered between the aggregate footer and pager.
The feature is disabled by default and requires the \`StatusBarModule\` to be injected through \`modules\`.
@example \`\`\`tsx
import { Grid, StatusBarModule } from '@syncfusion/react-grid';

<Grid
  dataSource={employees}
  columns={columns}
  modules={{ StatusBarModule }}
  statusBarSettings={{
    enabled: true,
    items: [
      { type: 'TotalAndFilteredRowCount', position: 'Left' },
      { type: 'SelectedRowCount', position: 'Center' },
      { type: 'SelectionAggregates', position: 'Right' }
    ]
  }}
/>
\`\`\``,name:"statusBarSettings",required:!1,type:{name:"StatusBarSettings<unknown>"}},formulaSettings:{defaultValue:{value:"{ enabled: false }"},description:"Configures spreadsheet-style formula processing for explicitly enabled columns.",name:"formulaSettings",required:!1,type:{name:"FormulaSettings"}},sortSettings:{defaultValue:{value:"{ columns: [], allowUnsort: true, enabled: false, mode: 'Multiple' }"},description:`Specifies the sorting configuration for the grid, includes options to enable/disable sorting and controlling how data is ordered.
Used to customize sorting behavior for data presentation and user interactions.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  sortSettings={{
    enabled: true,
    columns: [
      { field: 'salary', direction: 'Descending' },
      { field: 'name', direction: 'Ascending' }
    ],
    allowUnsort: true
  }}
/>
\`\`\``,name:"sortSettings",required:!1,type:{name:"SortSettings"}},groupSettings:{defaultValue:{value:"{ enabled: false, columns: [], defaultExpanded: false, captionFormat: 'compact', showDropArea: false, showGroupedColumn: false, showUngroupButton: false }"},description:`Specifies the grouping configuration for the grid, enabling hierarchical data organization by column values.
Controls group expansion, drag-drop UI, caption formatting, and visibility of grouped columns.
Used to organize data into collapsible groups for improved readability and analysis.
@example \`\`\`tsx
<Grid
  dataSource={orders}
  columns={columns}
  groupSettings={{
    enabled: true,
    columns: ['ShipCountry', 'CustomerID'],
    defaultExpanded: true,
    showDropArea: true,
    captionFormat: 'verbose'
  }}
/>
\`\`\``,name:"groupSettings",required:!1,type:{name:"GroupSettings"}},isTreeMode:{defaultValue:{value:"false"},description:`Enable tree mode for hierarchical data display.
When enabled, uses individual tree props for configuration instead of treeDataSettings object.
Provides a simplified root-level API for tree grid functionality.
@example \`\`\`tsx
<Grid
  dataSource={employeeData}
  isTreeMode={true}
  treeColumnIndex={1}
  treeDataIdMapping="id"
  treeDataParentIdField="managerId"
/>
\`\`\``,name:"isTreeMode",required:!1,type:{name:"boolean"}},treeColumnIndex:{defaultValue:{value:"0"},description:"Column index where tree expand/collapse UI should render.\nSpecifies which column displays the expand/collapse buttons and indentation.\nUsed when `isTreeMode` is enabled.\n@example ```tsx\n<Grid isTreeMode={true} treeColumnIndex={1} />\n```",name:"treeColumnIndex",required:!1,type:{name:"number"}},treeDataChildrenField:{defaultValue:{value:"null"},description:'Field name containing children array for nested tree data mode.\nExpects an array field at the specified field name containing child objects.\nUsed when `isTreeMode` is enabled.\n@example ```tsx\n<Grid isTreeMode={true} treeDataChildrenField="teams" />\n```',name:"treeDataChildrenField",required:!1,type:{name:"string"}},treeDataIdMapping:{defaultValue:{value:"null"},description:'Unique identifier field name for parent ID tree mode.\nUsed in conjunction with `treeDataParentIdField` to establish parent-child relationships.\nUsed when `isTreeMode` is enabled.\n@example ```tsx\n<Grid isTreeMode={true} treeDataIdMapping="id" treeDataParentIdField="managerId" />\n```',name:"treeDataIdMapping",required:!1,type:{name:"string"}},treeDataParentIdField:{defaultValue:{value:"null"},description:'Parent identifier field name for parent ID tree mode.\nReferences the parent node using the value from `treeDataIdMapping` field.\nRoot nodes have null or undefined values in this field.\nUsed when `isTreeMode` is enabled.\n@example ```tsx\n<Grid isTreeMode={true} treeDataIdMapping="id" treeDataParentIdField="managerId" />\n```',name:"treeDataParentIdField",required:!1,type:{name:"string"}},excludeChildrenWithFiltering:{defaultValue:{value:"false"},description:`Excludes child nodes from filtered tree results when a parent row matches the active filter.
Useful when filtering a tree should keep only matching parent rows and hide descendant rows unless they individually match.
Used when \`isTreeMode\` is enabled.
@example \`\`\`tsx
<Grid
  isTreeMode={true}
  treeDataChildrenField="children"
  excludeChildrenWithFiltering={true}
/>
\`\`\``,name:"excludeChildrenWithFiltering",required:!1,type:{name:"boolean"}},cascadeDelete:{defaultValue:{value:"true"},description:'Removes every descendant record together with a deleted parent record.\nUsed when `isTreeMode` is enabled.\n@example ```tsx\n<Grid\n  isTreeMode={true}\n  treeDataChildrenField="children"\n  cascadeDelete={false}\n/>\n```',name:"cascadeDelete",required:!1,type:{name:"boolean"}},filterSettings:{defaultValue:{value:"{ enabled: false, columns: [], type: 'FilterBar', mode: 'Immediate', immediateModeDelay: 1500, ignoreAccent: false, operators: null, caseSensitive: false }"},description:`Specifies the filtering configuration for the grid, controlling the filter UI and behavior.
Includes options to enable/disable filtering, set the filter UI type, define custom operators, and configure case or accent sensitivity.
Used to tailor the filtering experience to match application requirements and data types.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  filterSettings={{
    enabled: true,
    type: 'FilterBar',
    ignoreAccent: true,
    caseSensitive: false
  }}
/>
\`\`\``,name:"filterSettings",required:!1,type:{name:"FilterSettings"}},searchSettings:{defaultValue:{value:"{ enabled: false, fields: [], value: undefined, operator: 'contains', caseSensitive: true, ignoreAccent: false }"},description:`Specifies the search configuration for the grid, controlling how data is searched.
Defines settings for enabling the search bar, specifying searchable fields, initial search terms, operators, and case/accent sensitivity.
Used to customize the search experience for filtering grid data.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  searchSettings={{
    enabled: true,
    fields: ['name', 'role'],
    caseSensitive: true,
    operator: 'contains',
    key: 'dev'
  }}
/>
\`\`\``,name:"searchSettings",required:!1,type:{name:"SearchSettings"}},findSettings:{defaultValue:{value:"{ caseSensitive: false, currentPageOnly: false, searchDetail: true }"},description:"Configures Find matching independently of row-filter Search.\n@example ```tsx\n<Grid findSettings={{ caseSensitive: true, currentPageOnly: true }} />\n```",name:"findSettings",required:!1,type:{name:"FindSettings"}},resizeSettings:{defaultValue:{value:"{ enabled: false, mode: ResizeMode.Auto, throttle: 150, resizeKeyboardStep: 10 }"},description:"Configures the column resize feature at grid scope.\nControls the resize handle rendering, drag and keyboard resize interactions, distribution mode, keyboard step, and throttle interval.\n@example ```tsx\n<Grid resizeSettings={{ enabled: false, mode: ResizeMode.Normal }} />\n```",name:"resizeSettings",required:!1,type:{name:"ResizeSettings"}},reorderSettings:{defaultValue:{value:"{ enabled: false }"},description:"Configures the column reorder feature at grid scope.\n@example ```tsx\n<Grid reorderSettings={{ enabled: true }} />\n```",name:"reorderSettings",required:!1,type:{name:"ReorderSettings"}},pageSettings:{defaultValue:{value:"{ enabled: false, currentPage: 1, pageSize: 12, pageCount: 8 }"},description:`Specifies the pagination configuration for the grid, controlling how data is divided and navigated.
Includes options to enable/disable pagination, set the number of records per page, define the number of navigation links, and select the initial page.
Used to tailor the pagination UI and behavior for efficient data handling.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  pageSettings={{
    enabled: true,
    pageSize: 10,
    pageCount: 5,
  }}
/>
\`\`\``,name:"pageSettings",required:!1,type:{name:"PageSettings"}},enableHtmlSanitizer:{defaultValue:{value:"false"},description:`Controls HTML sanitization for grid content.

When set to true, the grid will sanitize any suspected untrusted HTML content before rendering it.
This helps prevent cross-site scripting (XSS) attacks by removing or neutralizing potentially malicious scripts and HTML.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableHtmlSanitizer={true}
/>
\`\`\``,name:"enableHtmlSanitizer",required:!1,type:{name:"boolean"}},enableStickyHeader:{defaultValue:{value:"false"},description:`Makes the grid header remain visible during scrolling.

When enabled, column headers will "sticky" to the top of the viewport and remain visible even when the user scrolls down through the grid data.
This improves usability by keeping column headers in view at all times.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  height={400}
  enableStickyHeader={true}
/>
\`\`\``,name:"enableStickyHeader",required:!1,type:{name:"boolean"}},textWrapSettings:{defaultValue:{value:"{ enabled: false, wrapMode: 'Both' }"},description:`Specifies the text wrapping configuration for the grid, controlling how text is displayed.
Defines the wrap mode to determine which grid sections (header, content, or both) apply text wrapping.
Used to customize text display for readability and layout optimization.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  textWrapSettings={{
    enabled: true,
    wrapMode: 'Content'
  }}
/>
\`\`\``,name:"textWrapSettings",required:!1,type:{name:"TextWrapSettings"}},rowHeight:{defaultValue:{value:"null | 50"},description:"Specifies the height for all rows in the grid.\n\n* When a numeric value is provided, all rows will have a fixed height in pixels.\n* If `rowHeight` is `undefined` and row DOM virtualization is enabled, the height defaults to the `theme` property based value (e.g., `Theme.Material` = 50).\n* When `null` (default), row height is automatically calculated based on content and applied styles for grids without row DOM virtualization.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  rowHeight={40}\n/>\n```",name:"rowHeight",required:!1,type:{name:"number"}},adaptiveSettings:{defaultValue:{value:"undefined"},description:"Configures the adaptive behavior of the grid, such as enabling it and choosing the row rendering mode.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  adaptiveSettings={{ enabled: true, rowRenderingMode: RowRenderingMode.Vertical }}\n/>\n```",name:"adaptiveSettings",required:!1,type:{name:"AdaptiveSettings"}},getRowHeight:{defaultValue:null,description:`Gets the height of a specific row dynamically at runtime.
Accepts a callback function that returns the height in pixels based on row information, allowing row-specific height customization.
This property enables dynamic row sizing based on content, data values, or other custom logic.
@param props - Partial row information used to calculate the row height, including row index, data, and column configuration.
@returns number - Height of the row in pixels.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  getRowHeight={(props) => props.data?.OrderID === 10248 ? 60 : 40}
/>
\`\`\``,name:"getRowHeight",required:!1,type:{name:"(props: Partial<RowInfo<unknown>>) => number"}},theme:{defaultValue:{value:"Theme.Material"},description:`Specifies the theme configuration for the Data Grid component.
Used internally to determine default values for theme-dependent properties (e.g., row height in virtualization).

The theme property defines static default values and calculations used during grid initialization and rendering,
such as the default \`rowHeight\` value when row DOM virtualization is enabled.

Grid styling and visual appearance are controlled by importing the corresponding theme CSS files,
not by the \`theme\` property alone. The \`theme\` property must be coordinated with the appropriate CSS import.
@example \`\`\`tsx
// Import Material theme CSS for styling
import '@syncfusion/react-grids/styles/material.css';

// Specify theme for internal default calculations
<Grid theme={Theme.Material} />
\`\`\``,name:"theme",required:!1,type:{name:"Theme"}},virtualizationSettings:{defaultValue:{value:`{\r
enabled: true,\r
type: VirtualDomType.Both,\r
viewPortBuffer: { rows: 5, columns: 5 },\r
scrollMode: ScrollMode.Auto,\r
preventMaxRenderedRows: false\r
}`},description:`Configures virtualization behavior for grid rendering.
Includes options for enabling virtualization, defining DOM type, and customizing buffer and scroll settings.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  virtualizationSettings={{
    enabled: true,
    type: VirtualDomType.Row,
    viewPortBuffer: { rows: 10, columns: 5 }
  }}
/>
\`\`\``,name:"virtualizationSettings",required:!1,type:{name:"VirtualizationSettings"}},valueFormatterService:{defaultValue:null,description:`Service for value formatting
@private`,name:"valueFormatterService",required:!1,type:{name:"IValueFormatter"}},serviceLocator:{defaultValue:null,description:`Service locator for dependency injection
@private`,name:"serviceLocator",required:!1,type:{name:"ServiceLocator"}},localeObj:{defaultValue:null,description:`Localization object
@private`,name:"localeObj",required:!1,type:{name:"IL10n"}},locale:{defaultValue:{value:"'en-US'"},description:`Sets the localization language for the grid.

Determines the language used for all text in the grid interface, including built-in messages, button labels, and other UI text.
The grid must have the corresponding locale definitions loaded to use a specific locale.
@private`,name:"locale",required:!1,type:{name:"string"}},query:{defaultValue:{value:"new Query()"},description:`Defines a query to execute against the data source.

Allows you to apply a predefined \`Query\` object to the data source, which can include filtering, sorting, paging, and other data operations.
This is especially useful when working with remote data sources or when you need complex data operations.
@example \`\`\`tsx
import { Query } from '@company/data';

const GridExample: React.FC = () => {
  // Create a query to filter and sort data
  const query = new Query()
    .where('salary', 'greaterThan', 50000)
    .sortBy('name', 'ascending');

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      query={query}
    />
  );
};
\`\`\``,name:"query",required:!1,type:{name:"Query"}},emptyRecordTemplate:{defaultValue:{value:"null"},description:`Template for displaying content when the grid has no records.

Customizes what is displayed when the grid has no data to show. This can be provided as a string, React element, or a function that returns content.
It provides better user experience by explaining why the grid is empty or suggesting actions to take.
@example \`\`\`tsx
const GridExample: React.FC = () => {
  // Custom template as a React element
  const emptyTemplate = (
    <div className="empty-grid-message">
      <img src="/assets/empty-state.svg" alt="No data" />
      <h3>No employees found</h3>
      <p>Try adjusting your search or filters, or add a new employee.</p>
      <button className="btn btn-primary">Add Employee</button>
    </div>
  );

  return (
    <Grid
      dataSource={[]}
      columns={columns}
      emptyRecordTemplate={emptyTemplate}
    />
  );
};
\`\`\``,name:"emptyRecordTemplate",required:!1,type:{name:"string | ComponentType<void> | ReactElement<unknown, string | JSXElementConstructor<any>>"}},rowTemplate:{defaultValue:{value:"null"},description:`Specifies a custom template for rendering rows in the grid.

Allows complete customization of row rendering by providing a template that replaces the default row structure.
This can be a string template, React element, or function that returns the row content.
@example \`\`\`tsx
const CustomRowTemplate = (props: Employee) => {
  return (
    <tr>
      <td colSpan={3}>
        <div className="custom-row">
          <h4>{props.name}</h4>
          <p>Role: {props.role} | Salary: {props.salary}</p>
        </div>
      </td>
    </tr>
  );
};

<Grid
  dataSource={employees}
  columns={columns}
  rowTemplate={CustomRowTemplate}
/>
\`\`\``,name:"rowTemplate",required:!1,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentType<unknown>"}},fullWidthRow:{defaultValue:{value:"null"},description:`Defines a callback that renders a content row as a Full Width Row spanning the entire grid width.
Return a ReactNode to render the row full-width; return null to use the default
column-based row rendering for that row. Evaluated only for content (body) rows with data.
@example \`\`\`tsx
<Grid
  dataSource={orders}
  columns={columns}
  fullWidthRow={(args) =>
    (args.data as Order).IsSummary
      ? <OrderSummaryCard data={args.data as Order} />
      : null
  }
/>
\`\`\``,name:"fullWidthRow",required:!1,type:{name:"(args: FullWidthRowArgs<unknown>) => ReactNode"}},aggregates:{defaultValue:{value:"null"},description:`Configures summary rows with aggregate functions.

The aggregates property allows you to add summary rows to the grid, such as totals, averages, or counts.
Each aggregate row can contain multiple aggregations that apply functions like \`sum\`, \`average\`, \`min\`, \`max\`, or \`count\` to specific columns.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  aggregates={[
    {
      columns: [
        {
          field: 'salary',
          type: 'Sum',
          format: 'C2',
          footerTemplate: 'Total Salary: \${Sum}'
        },
        {
          field: 'id',
          type: 'Count',
          footerTemplate: 'Total Employees: \${Count}'
        }
      ]
    }
  ]}
/>
\`\`\``,name:"aggregates",required:!1,type:{name:"AggregateRowProps[]"}},editSettings:{defaultValue:{value:"{ allowAdd: false, allowEdit: false, allowDelete: false, mode: 'Normal', editOnDoubleClick: true, confirmOnEdit: true, confirmOnDelete: false, newRowPosition: 'Top' }"},description:`Configures the editing behavior of the Data Grid.

The editSettings property enables and controls editing functionality.
It defines which editing operations are permitted, such as adding, editing, and deleting rows,
and specifies the editing mode to be used.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  editSettings={{
    allowAdd: true,
    allowEdit: true,
    allowDelete: true,
    mode: 'Inline',
    confirmOnDelete: true
  }}
/>
\`\`\``,name:"editSettings",required:!1,type:{name:"EditSettings<unknown>"}},isMasterDetail:{defaultValue:{value:"false"},description:`Enable master-detail (expandable rows) feature for this grid.
When enabled, all data rows become expandable master rows.
@example \`\`\`tsx
<Grid
  isMasterDetail={true}
  detailRowHeight={400}
  detailRowTemplate={(params) => (
    <div style={{ padding: '20px' }}>
      <h4>Order {params.rowIndex} Details</h4>
      <Grid
        dataSource={getDetailData(params.row.id)}
        columns={detailColumns}
      />
    </div>
  )}
/>
\`\`\``,name:"isMasterDetail",required:!1,type:{name:"boolean"}},detailRowHeight:{defaultValue:{value:"300"},description:'Defines the height of the detail row.\nBy default, the detail row height is set to "300px".\nA custom height can be applied when the master‑detail feature is enabled `isMasterDetail={true}` in the grid props.\n@example ```tsx\n<Grid isMasterDetail detailRowHeight={400} />\n```',name:"detailRowHeight",required:!1,type:{name:"number"}},detailRowTemplate:{defaultValue:null,description:`Template for rendering the content of a detail row.
Invoked for each expanded master row, providing its row data.
Commonly used to render a nested Grid or other custom components.
@example \`\`\`tsx
<Grid
  isMasterDetail
  detailRowTemplate={(params) => (
    <div style={{ padding: '20px' }}>
      <h4>Order {params.rowIndex} Details</h4>
      <Grid
        dataSource={detailData[params.row.id]}
        columns={detailColumns}
      />
    </div>
  )}
/>
\`\`\``,name:"detailRowTemplate",required:!1,type:{name:"{DetailRowTemplate<T>}"}},detailCellRendererParams:{defaultValue:{value:"undefined"},description:`Configuration and callbacks for auto-rendering nested detail grids.
Enables hierarchical data display with callback-driven data binding.
When provided with \`isMasterDetail={true}\`, automatically renders nested grids
for expanded rows based on the specified \`childDataPath\`.
@optional
@template T - The row data type
@example \`\`\`tsx
<Grid
  isMasterDetail={true}
  detailCellRendererParams={{
    detailGridOptions: {
      columns: childColumns,
      height: 250,
    },
    getDetailRowData: (params) => {
      // Provide child data via callback
      params.successCallback(params.data.orderLines);
    },
    onDetailGridCreate: (context) => {
      console.log(\`Detail grid created at depth \${context.nestingDepth}\`);
    },
  }}
  childDataPath="orderLines"
  maxNestingDepth={3}
/>
\`\`\`
@remarks - Requires \`isMasterDetail={true}\` to be enabled
- Works in conjunction with \`childDataPath\` and \`maxNestingDepth\` props
- Supports both synchronous and asynchronous data binding via callback
- Cannot be used simultaneously with \`detailRowTemplate\` (this takes precedence)`,name:"detailCellRendererParams",required:!1,type:{name:"DetailCellRendererParams<unknown, unknown>"}},childDataPath:{defaultValue:{value:"undefined"},description:'Path to child data in the parent row object.\nSpecifies which property contains the array of child rows for nested detail grids.\nUsed in conjunction with `detailCellRendererParams` for auto-rendering.\n@optional\n@example ```tsx\n// String notation (for simple property access)\nchildDataPath="orderLines"\n\n// Dot notation for nested properties\nchildDataPath="metadata.children"\n```\n@remarks - Accepts string notation for property path (e.g., "address.details")\n- If specified without `detailCellRendererParams`, child data is displayed in default format\n- Used by `getDetailRowData` callback to extract and identify child data\n- Ignored if `detailRowTemplate` is specified (uses old API)',name:"childDataPath",required:!1,type:{name:"string"}},maxNestingDepth:{defaultValue:{value:"3"},description:`Maximum nesting depth for recursive detail grids.
Prevents infinite recursion when child grids also have nested children.
Once \`nestingDepth >= maxNestingDepth\`, detail grids cannot have further nested grids.
@optional
@example \`\`\`tsx
// Allow: Master → Level1 → Level2 (3 levels total)
maxNestingDepth={2}

// Allow: Master → Level1 → Level2 → Level3 (4 levels total)
maxNestingDepth={3}
\`\`\`
@remarks - Must be a positive integer (> 0)
- Default is 3, suitable for most hierarchical data structures
- Prevents memory issues with deeply nested data
- Check \`canNestDeeper\` from \`useDetailGrid\` hook to enforce limit
- Depth counting starts at 0 for first-level detail grids`,name:"maxNestingDepth",required:!1,type:{name:"number"}},currentNestingDepth:{defaultValue:{value:"0"},description:`Current nesting level in grid hierarchy (internal use).
Automatically set by recursive DetailCellRenderer rendering.
Used to track depth and enforce maxNestingDepth limit in nested grids.
Level 0 = Master grid, Level 1 = First detail grid, Level 2 = Second detail grid, etc.
@optional
@internal
@remarks - This prop is for internal use only and should not be set by end users
- Automatically incremented by DetailCellRenderer for each nesting level
- Used by DetailCellRenderer to prevent exceeding maxNestingDepth
- Should not be modified directly in user code`,name:"currentNestingDepth",required:!1,type:{name:"number"}},onRowExpand:{defaultValue:null,description:`Fires when a master row is expanded.
@private
@event onRowExpand
\`\`\`tsx
<Grid
isMasterDetail
onRowExpand={(args) => {
console.log('Row expanded:', args.rowIndex);
}}
/>
\`\`\``,name:"onRowExpand",required:!1,type:{name:"(event: RowExpandEvent<unknown>) => void"}},onRowCollapse:{defaultValue:null,description:`Fires when a master row is collapsed.
@private
@event onRowCollapse
\`\`\`tsx
<Grid
isMasterDetail
onRowCollapse={(args) => {
console.log('Row collapsed:', args.rowIndex);
}}
/>
\`\`\``,name:"onRowCollapse",required:!1,type:{name:"(event: RowCollapseEvent<unknown>) => void"}},toolbar:{defaultValue:{value:"null"},description:`Configures the grid toolbar with predefined or custom items.

The toolbar property allows you to add a toolbar to the grid with both predefined actions (add, edit, delete, update, cancel, search)
and custom items. Custom items can include text, template content, and click handlers.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
  editSettings={{
    allowAdd: true,
    allowEdit: true,
    allowDelete: true
  }}
/>
\`\`\``,name:"toolbar",required:!1,type:{name:"(string | ToolbarItemProps)[]"}},showColumnChooser:{defaultValue:{value:"false"},description:`Determines whether the column chooser functionality is enabled.
When set to false (default), the column chooser button will be disabled in the toolbar (but still visible if included in toolbar array).
When set to true, the column chooser button will be enabled and the dialog can be opened.

This property controls the enabled/disabled state of the column chooser feature, not its visibility.
To show the column chooser button, you must include 'ColumnChooser' in the toolbar array.
@example \`\`\`tsx
// Column Chooser button is visible but disabled (default behavior)
<Grid
  dataSource={data}
  toolbar={['Add', 'Edit', 'ColumnChooser']}
/>

// Column Chooser button is visible and enabled
<Grid
  dataSource={data}
  toolbar={['Add', 'Edit', 'ColumnChooser']}
  showColumnChooser={true}
/>
\`\`\``,name:"showColumnChooser",required:!1,type:{name:"boolean"}},columnChooserSettings:{defaultValue:{value:"{ enableSearch: true, operator: 'startsWith', ignoreAccent: false, sortDirection: 'None', selectedColumns: [] }"},description:`Defines the configuration for the Column Chooser dialog,
controlling both its behavior and appearance. Enables customization of:

- Search with customizable operators
- Diacritics‑insensitive search
- Column ordering and sorting
- Custom templates for header, footer, and column items
@example \`\`\`tsx
<Grid
  dataSource={data}
  toolbar={['ColumnChooser']}
  showColumnChooser={true}
  columnChooserSettings={{
    enableSearch: true,
    operator: 'contains',
    ignoreAccent: true,
    sortDirection: 'Ascending',
    selectedColumns: ['OrderID', 'CustomerName']
  }}
/>
\`\`\``,name:"columnChooserSettings",required:!1,type:{name:"ColumnChooserSettings"}},columnMenuSettings:{defaultValue:null,description:"Settings for the inline column menu displayed inside header cells.\nWhen `enabled` is true, a small per-column menu trigger will render in the header cell.",name:"columnMenuSettings",required:!1,type:{name:"ColumnMenuSettings"}},onColumnMenuOpen:{defaultValue:null,description:`Fires when the column menu is opened for a specific header column.
Provides the menu items and the target column for customization or cancellation.
@event onColumnMenuOpen
@param event - Event payload containing the column and available actions.
@returns The updated event or a Promise resolving to it.`,name:"onColumnMenuOpen",required:!1,type:{name:"(event: ColumnMenuOpenEvent) => void | ColumnMenuOpenEvent | Promise<ColumnMenuOpenEvent>"}},onColumnMenuClose:{defaultValue:null,description:`Fires when the column menu is closed.
Useful for resetting UI state after the menu finishes interacting.
@event onColumnMenuClose
@param event - Event payload containing the closed column.
@returns`,name:"onColumnMenuClose",required:!1,type:{name:"(event: ColumnMenuCloseEvent) => void"}},onColumnMenuClick:{defaultValue:null,description:`Fires when a column menu item is selected.
Provides the item identifier and the target column for custom logic.
@event onColumnMenuClick
@param event - Event payload containing the clicked item and column.
@returns`,name:"onColumnMenuClick",required:!1,type:{name:"(event: ColumnMenuClickEvent) => void"}},rowClass:{defaultValue:{value:"-"},description:`Applies a CSS class to each grid row either globally or conditionally.
Accepts a static class name or a callback function that returns a class name based on row context.

The callback receives a \`RowClassProps\` object with the following properties:
* \`rowType\` – Identifies the structural role of the row: \`Header\`, \`Content\`, or \`Aggregate\`. Useful for styling header, data, or summary rows.
* \`rowIndex\` – The zero-based index of the row.
* \`data\` – The full data object for the row, enabling conditional styling based on field values.
@param props - Optional event payload containing row type, row index, and complete row data.
@returns A CSS class name to apply to the row.
@example const GridComponent = () => {
  const handleRowClass = (props?: RowClassProps): string => {
    if (props?.rowType === RowType.Header) return 'Header-row';
    if (props?.rowType === RowType.Aggregate) return 'summary-row';
    return '';
  };

  return (
    <Grid
      dataSource={data}
      rowClass={handleRowClass}
    />
  );
};`,name:"rowClass",required:!1,type:{name:"string | ((props?: RowClassProps<unknown>) => string)"}},loadingIndicatorSettings:{defaultValue:{value:`{\r
  indicatorType: LoadingIndicatorType.Spinner,\r
  params: {\r
    visible: true,\r
    thickness: '3px',\r
    animationDuration: '1s',\r
    overlay: true,\r
    size: '36px',\r
    color: Color.Primary\r
  }\r
}`},description:`Configures loading indicator settings for the Data Grid component.
Applies spinner or skeleton customization during data operations.
@example \`\`\`tsx
<Grid loadingIndicatorSettings={{
  indicatorType: LoadingIndicatorType.Spinner,
  params: { size: '48px', color: '#0078D4' }
}} />
\`\`\``,name:"loadingIndicatorSettings",required:!1,type:{name:"LoadingIndicatorSettings"}},contextMenuSettings:{defaultValue:{value:"{ enabled: false, items: [], menuSettings: {} }"},description:`Configures the context menu settings for the Data Grid component.
Enables and customizes the context menu that appears on right‑click interactions.
Provides options to:

- Enable or disable the context menu
- Define default or custom menu items
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  contextMenuSettings={{
    enabled: true,
    items: ['Edit', 'Delete', 'SortAscending', 'SortDescending']
  }}
/>
\`\`\``,name:"contextMenuSettings",required:!1,type:{name:"ContextMenuSettings"}},onContextMenuOpen:{defaultValue:null,description:`Fires when the context menu is about to be opened or displayed on the grid.
Allows customization, validation, or cancellation of the context menu before it appears.
Provides access to the target element, menu items, and associated row/column data.

Supports both synchronous and asynchronous menu item loading:
- **Synchronous**: Return the modified ContextMenuOpenEvent object.
- **Asynchronous**: Return a Promise that resolves to the modified ContextMenuOpenEvent object.
@event onContextMenuOpen
@param event - Event arguments containing menu configuration, target element, and row/column context.
@returns The modified event object or a Promise resolving to the modified event object.
@example \`\`\`tsx
// Synchronous example
const handleContextMenuOpen = (event: ContextMenuOpenEvent) => {
  // Customize menu items based on context
  if (event.data?.role === 'Admin') {
    // Show additional menu items for admin users
  }
  return event; // Return the modified event
};

// Asynchronous example
const handleContextMenuOpen = (args: ContextMenuOpenEvent) => {
  return new Promise<ContextMenuOpenEvent>((res) => setTimeout(() => res(args), 2000));
}

return (
  <Grid
    dataSource={employees}
    columns={columns}
    contextMenuSettings={{ enabled: true }}
    onContextMenuOpen={handleContextMenuOpen}
  />
);
\`\`\``,name:"onContextMenuOpen",required:!1,type:{name:"(event: ContextMenuOpenEvent<unknown>) => ContextMenuOpenEvent<unknown> | Promise<ContextMenuOpenEvent<unknown>>"}},onContextMenuClose:{defaultValue:null,description:`Fires when the context menu is closed or hidden on the grid.
Suitable for cleanup operations or resetting UI state after the context menu interaction completes.
Triggered when the user dismisses the menu through selection, clicking outside, or pressing Escape.
@event onContextMenuClose
@returns
@example \`\`\`tsx
const GridComponent = () => {
  const handleContextMenuClose = () => {
    // Perform cleanup or reset UI state
    console.log('Context menu closed');
  };

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      contextMenuSettings={{ enabled: true }}
      onContextMenuClose={handleContextMenuClose}
    />
  );
};
\`\`\``,name:"onContextMenuClose",required:!1,type:{name:"() => void"}},onContextMenuClick:{defaultValue:null,description:`Fires when a context menu item is selected or clicked by the user.
Handles the action associated with the selected menu item, such as \`Edit\`, \`Delete\`, \`Sort\`, etc.
Provides context about the selected item, target row/column, and triggering element.
@event onContextMenuClick
@param event - Event arguments containing selected item details and grid context.
@returns
@example \`\`\`tsx
const GridComponent = () => {
  const handleContextMenuClick = (event: ContextMenuClickEvent) => {
    // Handle the selected context menu action
  };

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      contextMenuSettings={{ enabled: true }}
      onContextMenuClick={handleContextMenuClick}
    />
  );
};
\`\`\``,name:"onContextMenuClick",required:!1,type:{name:"(event: ContextMenuClickEvent) => void"}},onGridRenderStart:{defaultValue:null,description:`Fires at the start of grid initialization before data processing. and component mount.
This event is triggered during the React render phase, before the component is mounted to the DOM.
Useful for initial configurations or showing loading indicators.
Do not perform state updates in this callback, as they will trigger React warnings
about updating unmounted components. Use \`onGridRenderComplete\` instead for state updates.
@event onGridRenderStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridRenderStart = () => {
    // Safe: Logging only - no state updates
    console.log('Grid render starting');
  };

  const handleGridRenderComplete = () => {
    // Safe: State updates after mount (use this callback for state updates)
    setGridReady(true);
  };

  return (
    <Grid
      dataSource={data}
      onGridRenderStart={handleGridRenderStart}
      onGridRenderComplete={handleGridRenderComplete}
    />
  );
};
\`\`\``,name:"onGridRenderStart",required:!1,type:{name:"() => void"}},onGridInit:{defaultValue:null,description:`Fires after the grid is fully initialized and rendered in the DOM.
Ideal for DOM-related operations or interacting with the grid.
@private
@event onGridInit`,name:"onGridInit",required:!1,type:{name:"() => void"}},onDataLoadStart:{defaultValue:null,description:`Fires after data is received but before binding to the grid.
Allows data modification or filtering before rendering.
@private
@event onDataLoadStart`,name:"onDataLoadStart",required:!1,type:{name:"(event: DataLoadStartEvent | ReturnType) => void"}},onDataLoad:{defaultValue:null,description:`Fires after data is successfully bound to the grid.
Suitable for actions requiring fully loaded data.
@event onDataLoad
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataLoaded = () => {
    // handle your action here
  };

  return (
    <div>
      <div id="loadingIndicator">Loading...</div>
      <Grid
        dataSource={data}
        onDataLoad={handleDataLoaded}
      />
    </div>
  );
};
\`\`\``,name:"onDataLoad",required:!1,type:{name:"() => void"}},onGridRenderComplete:{defaultValue:null,description:`Fired when the grid is fully loaded and ready for user interaction.
Suitable for actions requiring only on grid initially fully loaded data.
@event onGridRenderComplete
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridReady = () => {
    // handle your action here
  };

  return (
    <div>
      <div id="loadingIndicator">Loading...</div>
      <Grid
        dataSource={data}
        onGridRenderComplete={handleGridReady}
      />
    </div>
  );
};
\`\`\``,name:"onGridRenderComplete",required:!1,type:{name:"() => void"}},onHeaderCellRender:{defaultValue:null,description:`Fires for each header cell during grid rendering.
Enables customization of header cell appearance or content.
@private
@event onHeaderCellRender`,name:"onHeaderCellRender",required:!1,type:{name:"(event: HeaderCellRenderEvent) => void"}},onAggregateCellRender:{defaultValue:null,description:`Fires for each aggregate cell during grid rendering.
Allows customization of aggregate cell appearance or content.
@private
@event onAggregateCellRender`,name:"onAggregateCellRender",required:!1,type:{name:"(event: AggregateCellRenderEvent<unknown>) => void"}},onCellRender:{defaultValue:null,description:`Fires for each data cell during grid rendering.
Enables customization of data cell appearance or content.
@private
@event onCellRender`,name:"onCellRender",required:!1,type:{name:"(event: CellRenderEvent<unknown>) => void"}},onRowRender:{defaultValue:null,description:`Fires for each row when bound with data.
Allows customization of row appearance or behavior.
@private
@event onRowRender`,name:"onRowRender",required:!1,type:{name:"(event: RowRenderEvent<unknown>) => void"}},onAggregateRowRender:{defaultValue:null,description:`Fires for each aggregate row when bound with data.
Enables customization of aggregate row appearance or behavior.
@private
@event onAggregateRowRender`,name:"onAggregateRowRender",required:!1,type:{name:"(event: AggregateRowRenderEvent<unknown>) => void"}},onRefreshStart:{defaultValue:null,description:`Fires when grid refresh.
@private`,name:"onRefreshStart",required:!1,type:{name:"(event: Object) => void"}},onRefresh:{defaultValue:null,description:`Fired when the grid data is refreshed or updated.
@event onRefresh
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridRefresh = () => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onRefresh={handleGridRefresh}
    />
  );
};
\`\`\``,name:"onRefresh",required:!1,type:{name:"() => void"}},onGridDestroy:{defaultValue:null,description:`Fires when the grid component is destroyed.
@private
@event onGridDestroy`,name:"onGridDestroy",required:!1,type:{name:"() => void"}},onFilterStart:{defaultValue:null,description:`Fires when a filtering operation begins on the grid.
Allows customization or cancellation of filter behavior.
@private
@event onFilterStart`,name:"onFilterStart",required:!1,type:{name:"(event: FilterEvent) => void"}},onFilter:{defaultValue:null,description:`Fires after a filtering operation completes on the grid.
Provides filter state details for post-filter actions.
@event onFilter
@example \`\`\`tsx
const GridComponent = () => {
  const handleFilterEnd = (event: FilterEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onFilter={handleFilterEnd}
      filterSettings={{ enabled: true }}
    />
  );
};
\`\`\``,name:"onFilter",required:!1,type:{name:"(event: FilterEvent) => void"}},onFilterDialogBeforeOpen:{defaultValue:null,description:`Fires before the filter Dialog is displayed or opened.
Allows customization or cancellation before the filter interface appears.
@private
@event onFilterDialogBeforeOpen`,name:"onFilterDialogBeforeOpen",required:!1,type:{name:"(event: FilterDialogBeforeOpenEvent) => void"}},onFilterDialogAfterOpen:{defaultValue:null,description:`Fires after the filter Dialog is fully displayed and ready for interaction.
Suitable for initializing custom filter components or DOM manipulation.
@event onFilterDialogAfterOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleFilterDialogOpen = (event: FilterDialogAfterOpenEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onFilterDialogAfterOpen={handleFilterUIOpen}
      filterSettings={{ enabled: true,  }}
    />
  );
};
\`\`\``,name:"onFilterDialogAfterOpen",required:!1,type:{name:"(event: FilterDialogAfterOpenEvent) => void"}},onColumnChooserBeforeOpen:{defaultValue:null,description:`Fires before the Column Chooser dialog is displayed or opened.
Allows customization of column visibility or cancellation before the dialog appears.
@event onColumnChooserBeforeOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnChooserBeforeOpen = (event: ColumnChooserBeforeOpenEvent) => {
    // handle your action here
    if (someCondition) {
      event.cancel = true; // prevent dialog from opening
    }
  };

  return (
    <Grid
      dataSource={employeeData}
      onColumnChooserBeforeOpen={handleColumnChooserBeforeOpen}
      showColumnChooser={true}
    />
  );
};
\`\`\``,name:"onColumnChooserBeforeOpen",required:!1,type:{name:"(event: ColumnChooserBeforeOpenEvent) => void"}},onColumnChooserApply:{defaultValue:null,description:`Fires when column changes are applied in the Column Chooser dialog.
Triggered when the user clicks OK/Apply button with the final column visibility configuration.
Used to track which columns were shown/hidden and perform post-apply actions.
@event onColumnChooserApply
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnChooserApply = (event: ColumnChooserApplyEvent) => {
    // handle column visibility changes
    console.log('Columns:', event.selectedColumns);
    console.log('Visibility:', event.columnVisibility);
  };

  return (
    <Grid
      dataSource={employeeData}
      onColumnChooserApply={handleColumnChooserApply}
      showColumnChooser={true}
    />
  );
};
\`\`\``,name:"onColumnChooserApply",required:!1,type:{name:"(event: ColumnChooserApplyEvent) => void"}},onSortStart:{defaultValue:null,description:`Fires when a sorting operation begins on the grid.
Allows customization or cancellation of sort behavior.
@private
@event onSortStart`,name:"onSortStart",required:!1,type:{name:"(event: SortEvent) => void"}},onSort:{defaultValue:null,description:`Fires after a sorting operation completes on the grid.
Provides sort state details for post-sort actions.
@event onSort
@example \`\`\`tsx
const GridComponent = () => {
  const handleSortEnd = (event: SortEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onSort={handleSortEnd}
      sortSettings={{enabled: true}}
    />
  );
};
\`\`\``,name:"onSort",required:!1,type:{name:"(event: SortEvent) => void"}},onGroupStart:{defaultValue:null,description:`Fires when a grouping operation begins on the grid.
Allows customization or cancellation of group behavior.
@private
@event onGroupStart`,name:"onGroupStart",required:!1,type:{name:"(args: OnGroupArgs<unknown>) => void"}},onGroup:{defaultValue:null,description:`Fires when a grouping operation occurs on the grid.
Triggered by add/remove column, expand/collapse, or reorder group operations.
Provides current grouped columns and operation type for custom handling.
@event onGroup
@example \`\`\`tsx
const GridComponent = () => {
  const handleGroup = (args: OnGroupArgs) => {
    console.log(\`Operation: \${args.operation}, Columns: \${args.columns.join(', ')}\`);
  };
  const [groupSettings] = useState<GroupSettings>({ enabled: true, showDropArea: true });

  return (
    <Grid
      dataSource={orderData}
      onGroup={handleGroup}
      groupSettings={groupSettings}
    />
  );
};
\`\`\``,name:"onGroup",required:!1,type:{name:"(args: OnGroupArgs<unknown>) => void"}},onSearchStart:{defaultValue:null,description:`Fires when a searching operation begins on the grid.
Allows customization or addition of search conditions.
@private
@event onSearchStart`,name:"onSearchStart",required:!1,type:{name:"(event: SearchEvent) => void"}},onSearch:{defaultValue:null,description:`Fires after a searching operation completes on the grid.
Provides search result details for post-search actions.
@event onSearch
@example \`\`\`tsx
const GridComponent = () => {
  const handleSearchEnd = (event: SearchEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={productData}
        onSearch={handleSearchEnd}
        toolbar={['Search']}
        searchSettings={{ enabled: true }}
      />
    </div>
  );
};
\`\`\``,name:"onSearch",required:!1,type:{name:"(event: SearchEvent) => void"}},onColumnResizeStart:{defaultValue:null,description:`Fires when a column resize interaction begins.
Triggered on pointer-down of the resize handle, keyboard focus activation, or the start of a programmatic resize/auto-fit.
@event onColumnResizeStart
@param event - Event arguments containing the target column, current width, and a cancelable flag.
@returns
@example \`\`\`tsx
const handleResizeStart = (event: ColumnResizeStartEvent) => {
  if (event.column.field === 'id') {
    event.cancel = true;
  }
};

return <Grid onColumnResizeStart={handleResizeStart} />;
\`\`\``,name:"onColumnResizeStart",required:!1,type:{name:"(event: ColumnResizeStartEvent) => void"}},onColumnResize:{defaultValue:null,description:`Fires as the column width changes during an active resize interaction.
Triggered continuously while the user drags the resize handle, steps with the keyboard, or when a programmatic resize/auto-fit updates a column.
@event onColumnResize
@param event - Event arguments containing the target column and the new width in pixels.
@returns
@example \`\`\`tsx
const handleResize = (event: ColumnResizeEvent) => {
  console.log(event.column.field, event.width);
};

return <Grid onColumnResize={handleResize} />;
\`\`\``,name:"onColumnResize",required:!1,type:{name:"(event: ColumnResizeEvent) => void"}},onColumnResizeEnd:{defaultValue:null,description:`Fires when a column resize interaction ends.
Triggered on pointer-up of the resize handle, end of a keyboard resize step, or completion of a programmatic resize/auto-fit on each updated column.
@event onColumnResizeEnd
@param event - Event arguments containing the target column and the final width in pixels.
@returns
@example \`\`\`tsx
const handleResizeEnd = (event: ColumnResizeEndEvent) => {
  console.log('Final width:', event.column.field, event.width);
};

return <Grid onColumnResizeEnd={handleResizeEnd} />;
\`\`\``,name:"onColumnResizeEnd",required:!1,type:{name:"(event: ColumnResizeEndEvent) => void"}},onColumnReorderStart:{defaultValue:null,description:`Fires when a column reorder interaction begins.
@event onColumnReorderStart
@param event - Event arguments containing the targeted column, \`fromIndex\`, initial \`toIndex\`, and a cancelable flag.
@returns
@example \`\`\`tsx
const handleReorderStart = (event: ColumnReorderStartEvent) => {
  if (event.column.field === 'OrderID') {
    event.cancel = true;
  }
};

return <Grid onColumnReorderStart={handleReorderStart} />;
\`\`\``,name:"onColumnReorderStart",required:!1,type:{name:"(event: ColumnReorderStartEvent<unknown>) => void"}},onColumnDrag:{defaultValue:null,description:"Fires while a column reorder drag is in progress.\n@event onColumnDrag\n@param event - Event arguments containing the targeted column, `fromIndex`, and current `toIndex`.\n@returns\n@example ```tsx\nconst handleColumnDrag = (event: ColumnReorderEvent) => {\n  console.log('Dragging', event.column.field, 'from', event.fromIndex, 'to', event.toIndex);\n};\n\nreturn <Grid onColumnDrag={handleColumnDrag} />;\n```",name:"onColumnDrag",required:!1,type:{name:"(event: ColumnReorderEvent<unknown>) => void"}},onColumnReorderEnd:{defaultValue:null,description:"Fires when a column reorder interaction ends.\n@event onColumnReorderEnd\n@param event - Event arguments containing the targeted column, `fromIndex`, final `toIndex`, and a cancelable flag.\n@returns\n@example ```tsx\nconst handleReorderEnd = (event: ColumnReorderEndEvent) => {\n  console.log('Reordered', event.column.field, 'from', event.fromIndex, 'to', event.toIndex);\n};\n\nreturn <Grid onColumnReorderEnd={handleReorderEnd} />;\n```",name:"onColumnReorderEnd",required:!1,type:{name:"(event: ColumnReorderEndEvent<unknown>) => void"}},onRowDoubleClick:{defaultValue:null,description:`Fires when a grid row is clicked.
Provides details about the clicked row for custom actions.
@event onRowDoubleClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowDoubleClick = (event: RecordDoubleClickEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={customerData}
        onRowDoubleClick={handleRowDoubleClick}
      />
    </div>
  );
};
\`\`\``,name:"onRowDoubleClick",required:!1,type:{name:"(event: RecordDoubleClickEvent<unknown>) => void"}},onToolbarItemClick:{defaultValue:null,description:`Fires when a toolbar item is clicked.
Enables custom actions for toolbar buttons.
@event onToolbarItemClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleToolbarClick = (event: ClickEventArgs) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onToolbarItemClick={handleToolbarClick}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Print']}
    >
      <Toolbar />
    </Grid>
  );
};
\`\`\``,name:"onToolbarItemClick",required:!1,type:{name:"(event: ToolbarClickEvent) => void"}},onCellFocus:{defaultValue:null,description:`Fires when a grid cell gains focus.
Provides details about the focused cell.
@event onCellFocus
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellFocused = (event: CellFocusEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onCellFocus={handleCellFocused}
    />
  );
};
\`\`\``,name:"onCellFocus",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onCellClick:{defaultValue:null,description:`Fires when a grid cell is clicked.
Provides details about the clicked cell.
@event onCellClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellClick = (event: CellFocusEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={orderData}
        onCellClick={handleCellClick}
      />
    </div>
  );
};
\`\`\``,name:"onCellClick",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onCellFocusStart:{defaultValue:null,description:`Fires before a grid cell gains focus.
Allows validation or modification of focus behavior.
@private
@event onCellFocusStart`,name:"onCellFocusStart",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onRowSelecting:{defaultValue:null,description:`Fires before a row is selected.
Allows validation or cancellation of row selection.
@private
@event onRowSelecting`,name:"onRowSelecting",required:!1,type:{name:"(event: RowSelectingEvent<unknown>) => void"}},onRowSelect:{defaultValue:null,description:`Fires after a row is successfully selected.
Provides details about the selected row.
@event onRowSelect
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowSelected = (event: RowSelectEvent) => {
    // handle your action here
  };

  return (
    <div className="app-container">
      <Grid
        dataSource={customerData}
        onRowSelect={handleRowSelected}
      />
    </div>
  );
};
\`\`\``,name:"onRowSelect",required:!1,type:{name:"(event: RowSelectEvent<unknown>) => void"}},onRowDragStart:{defaultValue:null,description:`Fires when a data row drag operation starts.
@event onRowDragStart
@param args - Dragged rows and source index.
@returns`,name:"onRowDragStart",required:!1,type:{name:"(args: RowDragEventArgs<unknown>) => void"}},onRowDrag:{defaultValue:null,description:`Fires while a data row drag operation is in progress.
@event onRowDrag
@param args - Dragged rows and current target index.
@returns`,name:"onRowDrag",required:!1,type:{name:"(args: RowDragEventArgs<unknown>) => void"}},onRowDrop:{defaultValue:null,description:`Fires when a data row drag operation ends.
@event onRowDrop
@param args - Dragged rows and final target index.
@returns`,name:"onRowDrop",required:!1,type:{name:"(args: RowDragEventArgs<unknown>) => void"}},onRowDeselecting:{defaultValue:null,description:`Fires before a row is deselected.
Allows validation or cancellation of row deselection.
@private
@event onRowDeselecting`,name:"onRowDeselecting",required:!1,type:{name:"(event: RowSelectingEvent<unknown>) => void"}},onRowDeselect:{defaultValue:null,description:`Fires after a row is successfully deselected.
Provides details about the deselected row.
@event onRowDeselect
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowDeselected = (event: RowSelectEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={itemData}
        onRowDeselect={handleRowDeselected}
      />
    </div>
  );
};
\`\`\``,name:"onRowDeselect",required:!1,type:{name:"(event: RowSelectEvent<unknown>) => void"}},onCellSelecting:{defaultValue:null,description:`Fires before cells are selected in the grid.
Allows validation or cancellation of cell selection.
Only fires when selectionSettings.type is \`Cell\`.
@private
@event onCellSelecting
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellSelecting = (event: CellSelectingEvent) => {
    // Prevent selection of specific cells
    if (event.cells.some(cell => cell.rowIndex === 0)) {
      event.cancel = true;
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onCellSelecting={handleCellSelecting}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellSelecting",required:!1,type:{name:"(event: CellSelectingEvent<unknown>) => void"}},onCellSelect:{defaultValue:null,description:`Fires after cells are successfully selected in the grid.
Provides details about the selected cells including data and positions.
Only fires when selectionSettings.type is 'Cell'.
@event onCellSelect
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellSelect = (event: CellSelectEvent) => {
    console.log('Selected cells:', event.cells);
    console.log('Cell data:', event.data);
  };

  return (
    <Grid
      dataSource={orderData}
      onCellSelect={handleCellSelect}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellSelect",required:!1,type:{name:"(event: CellSelectEvent<unknown>) => void"}},onCellDeselecting:{defaultValue:null,description:`Fires before cells are deselected in the grid.
Allows validation or cancellation of cell deselection.
Only fires when selectionSettings.type is \`Cell\`.
@private
@event onCellDeselecting
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellDeselecting = (event: CellDeselectingEvent) => {
    // Prevent deselection of specific cells
    if (event.cells.length > 5) {
      event.cancel = true;
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onCellDeselecting={handleCellDeselecting}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellDeselecting",required:!1,type:{name:"(event: CellDeselectingEvent<unknown>) => void"}},onCellDeselect:{defaultValue:null,description:`Fires after cells are successfully deselected in the grid.
Provides details about the deselected cells.
Only fires when selectionSettings.type is 'Cell'.
@event onCellDeselect
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellDeselect = (event: CellDeselectEvent) => {
    console.log('Deselected cells:', event.cells);
  };

  return (
    <Grid
      dataSource={orderData}
      onCellDeselect={handleCellDeselect}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellDeselect",required:!1,type:{name:"(event: CellDeselectEvent<unknown>) => void"}},onPageChangeStart:{defaultValue:null,description:`Event triggered before the paging operation start.
@private
@event onPageChangeStart`,name:"onPageChangeStart",required:!1,type:{name:"(event: PageEvent) => void"}},onPageChange:{defaultValue:null,description:`Event triggered after a paging operation is completed on the grid.
@event onPageChange
@example \`\`\`tsx
const GridComponent = () => {
  const handlePageChangeEnd = (event: PageEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={itemData}
        onPageChange={handlePageChangeEnd}
      />
    </div>
  );
};
\`\`\``,name:"onPageChange",required:!1,type:{name:"(event: PageEvent) => void"}},onRowEditStart:{defaultValue:null,description:`Fires when editing begins on a grid record.
Allows validation or field modification before editing.
@event onRowEditStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowEdit = (event: EditEventArgs) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onRowEditStart={handleRowEdit}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onRowEditStart",required:!1,type:{name:"(event: RowEditEvent<unknown>) => void"}},onCellEditStart:{defaultValue:null,description:`Fires when cell editing begins in \`Cell\` edit mode.
Provides an opportunity to validate the target cell or cancel the edit
before the editor is presented.
@event onCellEditStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellEdit = (event: CellEditEvent) => {
    // Prevent editing for specific cells
    if (event.field === 'id') {
      event.cancel = true;
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onCellEditStart={handleCellEdit}
      editSettings={{ mode: 'Cell', allowEdit: true }}
    />
  );
};
\`\`\``,name:"onCellEditStart",required:!1,type:{name:"(event: CellEditEvent<unknown>) => void"}},onRowAddStart:{defaultValue:null,description:`Fires when the process of adding a new row starts.
@event onRowAddStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowAdd = (event: RowAddEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onRowEditStart={handleRowadd}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onRowAddStart",required:!1,type:{name:"(event: RowAddEvent<unknown>) => void"}},onFormRender:{defaultValue:null,description:`Fires when the edit or add form is fully loaded and ready for user input.
@event onFormRender
@example \`\`\`tsx
const GridComponent = () => {
  const handleFormReady = (event: FormRenderEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onFormRender={handleFormReady}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onFormRender",required:!1,type:{name:"(event: FormRenderEvent<unknown>) => void"}},onDataChangeStart:{defaultValue:null,description:`Fires when a create, update, or delete operation is started.
@event onDataChangeStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeStart = (event: SaveEvent | DeleteEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeStart={handleDataChangeStart}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeStart",required:!1,type:{name:"(event: SaveEvent<unknown> | DeleteEvent<unknown>) => void"}},onDataChangeComplete:{defaultValue:null,description:`Fires when a create, update, or delete operation is completed.
@event onDataChangeComplete
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeComplete = (event: SaveEvent | DeleteEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeComplete={handleDataChangeComplete}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeComplete",required:!1,type:{name:"(event: SaveEvent<unknown> | DeleteEvent<unknown>) => void"}},onDataChangeCancel:{defaultValue:null,description:`Fires when a CRUD operation is cancelled.
@event onDataChangeCancel
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeCancel = (event: FormCancelEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeCancel={handleDataChangeCancel}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeCancel",required:!1,type:{name:"(event: FormCancelEvent<unknown>) => void"}},onDeleteDialogOpen:{defaultValue:null,description:`Fires when the bulk‑delete confirmation dialog opens with cross‑page selection enabled.
Allows customization of dialog options, such as disabling specific choices or setting the default selection.

Use Cases:
- Disable "Delete Current Page": Prevents partial deletion when records are selected across multiple pages.
- Preselect "Delete All Selected Records": Ensures this option is the default, reducing errors and maintaining consistency.
@event onDeleteDialogOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleDeleteDialogOpen = (eventArgs: DeleteDialogEventArgs) => {
    // Customize dialog options
    if (eventArgs.totalSelectedCount > 100) {
      eventArgs.customizations = {
        pageOptionDisabled: true,
        defaultOption: 'all'
      };
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onDeleteDialogOpen={handleDeleteDialogOpen}
      editSettings={{ allowDelete: true }}
      selectionSettings={{ mode: 'Multiple', persistSelection: true }}
    />
  );
};
\`\`\``,name:"onDeleteDialogOpen",required:!1,type:{name:"(eventArgs: DeleteDialogEventArgs) => void"}},onClipboardCopy:{defaultValue:null,description:`Fires when data is copied to the clipboard from the Grid.
Triggered after the copy operation completes, providing details about the copied content,
selected rows/cells, and allowing cancellation of the operation.

Use Cases:
- Audit copying operations for sensitive data
- Modify clipboard content before writing (via beforeClipboardCopy alternative event if available)
- Track user interactions with grid data
- Prevent copying from specific rows or in certain conditions
@event onClipboardCopy
@param args - Event arguments containing copied data, selection info, and cancellation option
@returns
@example \`\`\`tsx
const handleClipboardCopy = (args: ClipboardCopyEvent) => {
  console.log('Data copied to clipboard');
  console.log('Selection type:', args.selectionType);
  console.log('Selected rows:', args.selectedRowIndexes);
  console.log('Copied text:', args.clipboardText);
};

return (
  <Grid
    dataSource={employees}
    columns={columns}
    selectionSettings={{ mode: 'Multiple', type: 'Row' }}
    clipboardSettings={{ enabled: true }}
    onClipboardCopy={handleClipboardCopy}
  />
);
\`\`\``,name:"onClipboardCopy",required:!1,type:{name:"(args: ClipboardCopyEvent) => void"}},onClipboardCut:{defaultValue:null,description:`Fires when data is cut from the grid using Ctrl+X.
Triggered when cut operation completes, providing details about the cut content,
selected rows/cells, and allowing cancellation of the operation.

Use Cases:
- Audit cutting operations for sensitive data
- Track user interactions with grid data
- Prevent cutting from primary key columns
- Prevent cutting from specific rows in certain conditions
- Log or transform cut operations before data is cleared
@event onClipboardCut
@param args - Event arguments containing cut data, selection info, and cancellation option
@returns
@example \`\`\`tsx
const handleClipboardCut = (args: ClipboardCutEvent) => {
  console.log('Data cut from grid');
  console.log('Selection type:', args.selectionType);
  console.log('Selected rows:', args.selectedRowIndexes);
  console.log('Cut text:', args.clipboardText);

  // Prevent cutting primary key columns
  if (args.selectedCells?.some(cell => cell.fieldName === 'id')) {
    args.cancel = true;
  }
};

return (
  <Grid
    dataSource={employees}
    columns={columns}
    editSettings={{ allowEdit: true }}
    selectionSettings={{ mode: 'Multiple', type: 'Cell' }}
    clipboardSettings={{ enabled: true }}
    onClipboardCut={handleClipboardCut}
  />
);
\`\`\``,name:"onClipboardCut",required:!1,type:{name:"(args: ClipboardCutEvent) => void"}},onClipboardPaste:{defaultValue:null,description:`Fires when data is pasted from the clipboard into the Grid.
Triggered after paste operation completes, providing details about the pasted data,
target location, and allowing cancellation of the operation.

Use Cases:
- Validate pasted data before applying to grid
- Log paste operations for compliance or audit purposes
- Prevent pasting into read-only rows or columns
- Transform or filter pasted content
@event onClipboardPaste
@param args - Event arguments containing pasted data, target location, and cancellation option
@returns
@example \`\`\`tsx
const handleClipboardPaste = (args: ClipboardPasteEvent) => {
  console.log('Data pasted from clipboard');
  console.log('Target row index:', args.startRowIndex);
  console.log('Pasted matrix:', args.pasteMatrix);

  // Prevent pasting into read-only rows
  if (args.startRowIndex >= readOnlyRowStart) {
    args.cancel = true;
  }
};

return (
  <Grid
    dataSource={employees}
    columns={columns}
    editSettings={{ allowEdit: true }}
    clipboardSettings={{ enabled: true }}
    onClipboardPaste={handleClipboardPaste}
  />
);
\`\`\``,name:"onClipboardPaste",required:!1,type:{name:"(args: ClipboardPasteEvent) => void"}},isRowPinned:{defaultValue:{value:"undefined"},description:"Callback that determines whether a row should be pinned and to which position.\n\nInvoked for each data row during rendering to determine its pinning bucket.\nReturning `'top'` places the row in the top-pinned section,\nreturning `'bottom'` places it in the bottom-pinned section,\nand returning `null` or `undefined` places it in the regular scrollable section.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  isRowPinned={(row) => row.isPinned ? 'top' : null}\n/>\n```",name:"isRowPinned",required:!1,type:{name:'(row: unknown) => "top" | "bottom"'}},isRowPinnable:{defaultValue:{value:"undefined"},description:`Callback that determines whether a row is eligible for pinning.

Invoked for each row to determine if pinning actions (such as context menu options)
should be available for that row. Returning \`false\` disables pinning for the row.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  isRowPinnable={(row) => row.allowPin !== false}
/>
\`\`\``,name:"isRowPinnable",required:!1,type:{name:"(row: unknown) => boolean"}},pinningSettings:{defaultValue:{value:"undefined"},description:`Global configuration settings for pinning behavior across both rows and columns.

Controls whether pinning is enabled, which dimensions (\`type\`) are eligible,
and which sides are permitted (top/bottom for rows, left/right for columns).
Follows the same composition pattern as \`virtualizationSettings\`.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  pinningSettings={{ enabled: true, type: PinScope.Both }}
  isRowPinned={(row) => row.isPinned ? 'top' : null}
/>
\`\`\``,name:"pinningSettings",required:!1,type:{name:"PinningSettings"}},onPinnedRowsChanged:{defaultValue:null,description:`Fires when a row changes its pinning state due to user interaction or programmatic update.
Provides the affected row, its previous pin bucket, its current pin bucket, and the action performed.
@event onPinnedRowsChanged
@example \`\`\`tsx
const GridComponent = () => {
  const handlePinnedRowsChanged = (event: RowPinningEvent) => {
    console.log('Row:', event.rowData);
    console.log('Pin bucket:', event.previousPinBucket, '->', event.currentPinBucket);
  };

  return (
    <Grid
      dataSource={employees}
      onPinnedRowsChanged={handlePinnedRowsChanged}
    />
  );
};
\`\`\``,name:"onPinnedRowsChanged",required:!1,type:{name:"(event: RowPinningEvent<unknown>) => void"}},pivotSettings:{defaultValue:{value:"undefined"},description:`Configures client-side relational pivoting for the Grid.
Defines report fields, aggregate values, member filters, result totals,
expansion defaults, generated-column limits and execution behavior.
Requires \`PivotModule\` in the \`modules\` property.
@example \`\`\`tsx
<Grid
  dataSource={salesData}
  modules={{ PivotModule }}
  pivotSettings={{
    enabled: true,
    rows: ['country'],
    columns: ['year'],
    values: [{ field: 'sales', type: 'Sum' }]
  }}
/>
\`\`\``,name:"pivotSettings",required:!1,type:{name:"PivotSettings<unknown>"}},customizePivotColumn:{defaultValue:null,description:`Returns presentation overrides for generated pivot value columns on the UI thread.
Pure callbacks may run repeatedly. User presentation adjustments take precedence.
Templates receive generated pivot rows, not source records. Omitted callbacks preserve defaults.`,name:"customizePivotColumn",required:!1,type:{name:'(context: PivotColumnContext<unknown>) => Partial<Pick<ColumnProps<PivotResultRow>, "width" | "headerText" | "headerTemplate" | "template" | ... 8 more ... | "allowResize">>'}},customizePivotColumnGroup:{defaultValue:null,description:`Returns presentation overrides for generated pivot group headers on the UI thread.
Custom header templates retain the built-in expand/collapse control.
Pure callbacks may run repeatedly; exceptions propagate to the React error boundary.`,name:"customizePivotColumnGroup",required:!1,type:{name:'(context: PivotColumnGroupContext<unknown>) => Partial<Pick<ColumnProps<PivotResultRow>, "headerText" | "headerTemplate" | "headerTextAlign" | "customAttributes">>'}},onPivotChange:{defaultValue:null,description:`Fires after interactive pivot configuration changes are applied.
Triggered when report fields, member filters, sorting, totals or other
pivot settings change through the integrated pivot controls.
@event onPivotChange
@param event - Event arguments containing the applied pivot settings.
@returns
@example \`\`\`tsx
<Grid
  onPivotChange={(event) => {
    console.log('Pivot settings:', event.settings);
  }}
/>
\`\`\``,name:"onPivotChange",required:!1,type:{name:"(event: PivotChangeEvent<unknown>) => void"}},onPivotError:{defaultValue:null,description:`Fires when pivot calculation or configuration validation fails.
Triggered when the pivot report contains invalid fields or settings,
unsupported data-source or scroll-mode combinations, exceeds the column limit,
or encounters a calculation failure.
@event onPivotError
@param event - Event arguments containing the error code and message.
@returns
@example \`\`\`tsx
<Grid
  onPivotError={(event) => {
    console.error(event.code, event.message);
  }}
/>
\`\`\``,name:"onPivotError",required:!1,type:{name:"(event: PivotErrorEvent) => void"}},changeHighlightSettings:{defaultValue:{value:"{ flashDuration: 500, fadeDuration: 1000, allowFilteredChangeHighlight: false }"},description:`Configures shared timing and filtered-result highlighting for cell changes.
Controls background and template animation durations, and whether data updates
that add rows to an unchanged filtered result highlight the active filter fields.`,name:"changeHighlightSettings",required:!1,type:{name:"ChangeHighlightSettings"}},onCellChangeHighlightStart:{defaultValue:null,description:`Fires immediately before a cell change highlight presentation begins.
This event is cancelable; set \`args.cancel = true\` to skip the presentation for that cell.
The underlying data update always occurs; only the visual highlight/animation is affected by cancellation.
@event onCellChangeHighlightStart
@param args - Event arguments with row key, field, row data, and cancelable flag.
@returns
@example \`\`\`tsx
<Grid
  onCellChangeHighlightStart={(args) => {
    if (args.field === 'sensitive_field') {
      args.cancel = true; // Skip highlighting for this cell
    }
  }}
/>
\`\`\``,name:"onCellChangeHighlightStart",required:!1,type:{name:"(args: CellChangeHighlightStartEventArgs<unknown>) => void"}},onCellChangeHighlightComplete:{defaultValue:null,description:"Fires after a cell change highlight presentation completes.\nThis event is informational only and not cancelable, following the Grid's before/complete event pattern.\nIt is not fired if the presentation was canceled via `onCellChangeHighlightStart`.\n@event onCellChangeHighlightComplete\n@param args - Event arguments with row key, field, row data, and previous/current values.\n@returns\n@example ```tsx\n<Grid\n  onCellChangeHighlightComplete={(args) => {\n    console.log(`Cell ${args.field} changed from ${args.previousValue} to ${args.currentValue}`);\n  }}\n/>\n```",name:"onCellChangeHighlightComplete",required:!1,type:{name:"(args: CellChangeHighlightCompleteEventArgs<unknown>) => void"}}}}}catch{}const Cn={ClipboardModule:ut,FilterModule:st,EditModule:dt,PagerModule:Wn,GroupModule:at,ToolbarModule:jn,ContextMenuModule:Nn,ColumnChooserModule:Ln,SearchModule:tt,CommandColumnModule:nt,AggregateModule:On,AutoFillModule:et,ResizeModule:zn,AutoFitModule:Pn,PinningModule:In},xt={title:"Grid/VirtualGridBase",component:be,parameters:{layout:"fullscreen",docs:{description:{component:"A fully configurable Grid component with performance comparison capabilities."}}},argTypes:{localDataCount:{control:"select",options:["0","100","1000","10000","100000"],description:"Grid Local DataSource Count"},builtInThemes:{control:"select",options:["bootstrap","tailwind","material"],description:"Grid Built-in Themes"}}},A=ot(100,!1),pt=[{columns:rt(A.length)}];A.unshift({type:O.Checkbox,width:50,allowFilter:!1});A.push({headerText:"Command Actions",width:200,getCommandItems:()=>[a.jsx(M,{type:G.Edit},"Edit"),a.jsx(M,{type:G.Delete},"Delete"),a.jsx(M,{type:G.Update},"Update"),a.jsx(M,{type:G.Cancel},"Cancel")]});const D=(r={})=>({modules:Cn,...r}),re={args:D({localDataCount:1e5,columns:(()=>{let r=[...A];return r.unshift({type:O.SingleGroup}),r=r.map(y=>({...y,...y.field==="sales"?{groupCaptionAggregateType:ee.Min}:{}})),r})(),aggregates:pt,groupSettings:{enabled:!1,columns:["category","product","region"],showDropArea:!0,type:Kn.SingleColumn,defaultExpanded:!0},onGroupStart:()=>{console.log("onGroupStart Started")},onGroup:r=>{console.log("Group action: ",r)},onSortStart:()=>{console.log("Sort Started")},onSort:r=>{console.log("Sort action: ",r)},defaultOpenGroupExpandKeys:["Camera","Camera-South America","Gaming Chair","Gaming Chair-South Asia","Tires","Tires-East Asia","Air Conditioner","Air Conditioner-North Africa","Game Controller","Game Controller-South Asia","Mouse","Mouse-South America","Accessories","Accessories-Camera","Accessories-Camera-South America","Construction","Construction-Gaming Chair","Construction-Gaming Chair-South Asia","Energy","Energy-Tires","Energy-Tires-East Asia","Healthcare","Healthcare-Air Conditioner","Healthcare-Air Conditioner-North Africa","Logistics","Logistics-Game Controller","Logistics-Game Controller-South Asia","Peripherals","Peripherals-Mouse","Peripherals-Mouse-South America"],contextMenuSettings:{enabled:!0},pinningSettings:{enabled:!0,type:Xn.Both,allowTopPin:!0,allowBottomPin:!0},virtualizationSettings:{scrollMode:S.Virtual,enableCache:!1},editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Add","Edit","Delete","Update","Cancel","Search"],searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel",enableFilterBarOperator:!0},pageSettings:{enabled:!0,pageSize:1e5},height:"100%",onRowSelect:r=>{console.log("Row Selected: ",r)}})},ie={args:D({localDataCount:2e6,isConditionalRowSelection:!0,columns:A.slice(0,11),editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Add","Edit","Delete","Update","Cancel","Search"],searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,enableFilterBarOperator:!0},pageSettings:{enabled:!0,pageSize:2e6},height:"100%"})},le={args:D({dataSource:new ne({url:"https://ej2services.syncfusion.com/js/development/api/UrlDataSource",adaptor:new _n}),query:new fe().addParams("dataCount","100000"),toolbar:["Search"],isConditionalRowSelection:!0,groupSettings:{enabled:!1,showDropArea:!0,type:"GroupRows",defaultExpanded:!0,columns:["Designation","Employees"]},onGroup:r=>{console.log("Group action: ",r)},defaultOpenGroupExpandKeys:["CFO","CFO-Kathryn Fuller","Designer","Designer-Kathryn Fuller","Developer","Developer-Kathryn Fuller","Project Lead","Project Lead-Kathryn Fuller","System Analyst","System Analyst-Kathryn Fuller"],columns:[{type:O.Checkbox,width:50,allowFilter:!1},{field:"EmployeeID",visible:!0,headerText:"Employee ID",isPrimaryKey:!0,width:"150"},{field:"Employees",headerText:"Employee Name",width:"230",clipMode:"EllipsisWithTooltip"},{field:"Designation",headerText:"Designation",width:"170",clipMode:"EllipsisWithTooltip"},{field:"Mail",headerText:"Mail",width:"230"},{field:"Location",headerText:"Location",width:"140"},{field:"Status",headerText:"Status",width:"130"},{field:"Trustworthiness",headerText:"Trustworthiness",width:"160"},{field:"Rating",headerText:"Rating",width:"220"},{field:"Software",headerText:"Software Proficiency",width:"180",format:"C2"},{field:"CurrentSalary",headerText:"Current Salary",width:"200",format:"C2"},{field:"Address",headerText:"Address",width:"240",clipMode:"EllipsisWithTooltip"}],searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},pageSettings:{pageSize:50},virtualizationSettings:{enableCache:!1,scrollMode:S.Virtual},height:"100%"})},se={args:D({dataSource:new ne({url:"https://ej2services.syncfusion.com/react/development/api/GridWebAPIService",adaptor:new Jn}),columns:[{type:O.Checkbox,width:50,allowFilter:!1},{field:"OrderID",headerText:"OrderID",isPrimaryKey:!0,width:"130",allowSearch:!1},{field:"CustomerID",headerText:"CustomerID",width:"230",clipMode:"EllipsisWithTooltip"},{field:"ShipCity",headerText:"ShipCity",width:"230"},{field:"EmployeeID",headerText:"EmployeeID",width:"130",clipMode:"EllipsisWithTooltip",allowSearch:!1},{field:"EmployeeName",headerText:"EmployeeName",width:"230",clipMode:"EllipsisWithTooltip",allowSearch:!1,allowFilter:!1,allowSort:!1},{field:"Designation",headerText:"Designation",width:"230",clipMode:"EllipsisWithTooltip",allowSearch:!1,allowFilter:!1,allowSort:!1},{field:"CurrentSalary",headerText:"CurrentSalary",width:"130",clipMode:"EllipsisWithTooltip",allowSearch:!1,allowFilter:!1,allowSort:!1}],isConditionalRowSelection:!0,sortSettings:{enabled:!0},filterSettings:{enabled:!0},virtualizationSettings:{scrollMode:S.Virtual},height:"100%",query:new fe().addParams("serverpagesize","50")})},de={args:D({dataSource:it,children:a.jsxs(fn,{children:[a.jsx(ye,{headerText:"Employee Image",width:"180",textAlign:Ie.Center,field:"EmployeeID"}),a.jsx(ye,{headerText:"Employee Details",width:"300",textAlign:Ie.Left,field:"FirstName"})]}),className:"row-template",toolbar:["Search"],selectionSettings:{mode:"Single"},searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},height:"100%",rowTemplate:r=>{const y=`https://npmci-react.syncfusion.com/development-react-ui/images/grid/${r.EmployeeID}.png`;return a.jsxs("tr",{className:"templateRow",children:[a.jsx("td",{className:"photo",children:a.jsx("img",{src:y,alt:r.EmployeeID.toString()})}),a.jsx("td",{className:"details",children:a.jsxs("table",{className:"CardTable",cellPadding:3,cellSpacing:2,children:[a.jsxs("colgroup",{children:[a.jsx("col",{style:{width:"30%"}}),a.jsx("col",{style:{width:"10%"}})]}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{className:"CardHeader",children:"First Name"}),a.jsx("td",{children:":"}),a.jsx("td",{children:r.FirstName})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"CardHeader",children:"Last Name"}),a.jsx("td",{children:":"}),a.jsx("td",{children:r.LastName})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"CardHeader",children:"Title"}),a.jsx("td",{children:":"}),a.jsx("td",{children:r.Title})]})]})]})})]})}})},mt=[{field:"id"},{field:"username",width:150},{field:"age",width:80,type:"number"},{field:"bio",width:400}],ue={args:D({localDataCount:1e5,isTextWrapData:!0,columns:mt,height:400,textWrapSettings:{enabled:!0,wrapMode:Qn.Both}})},ce={args:D({localDataCount:1e3,columns:(()=>{let r=[...A.slice(0,11)];return r.unshift({type:O.SingleGroup,format:"C2"}),r=r.map(y=>({...y,...y.field==="sales"?{groupCaptionAggregateType:[ee.Min,ee.Max],valueAccessor:c=>{var s,h,f;return((s=c.column)!=null&&s.groupCaptionAggregateType&&((h=c.data)!=null&&h.key)?"Min & Max: ":"")+((f=c.data)==null?void 0:f[c.field])},template:c=>{var s,h,f,E,k,T;return(s=c.column)!=null&&s.groupCaptionAggregateType&&((h=c.data)!=null&&h.key)?`Min & Max: ${(E=c.data)==null?void 0:E[(f=c.column)==null?void 0:f.field]}`:((T=c.data)==null?void 0:T[(k=c.column)==null?void 0:k.field])??""},width:280,format:"C2"}:{}})),r})(),children:(()=>{let r=[...A.slice(0,11)];r.unshift({type:O.SingleGroup,format:"C2"}),r=r.map(c=>({...c,...c.field==="sales"?{groupCaptionAggregateType:[ee.Min,ee.Max],valueAccessor:s=>{var h,f,E;return((h=s.column)!=null&&h.groupCaptionAggregateType&&((f=s.data)!=null&&f.key)?"Min & Max: ":"")+((E=s.data)==null?void 0:E[s.field])},template:s=>{var h,f,E,k,T,te;return(h=s.column)!=null&&h.groupCaptionAggregateType&&((f=s.data)!=null&&f.key)?`Min & Max: ${(k=s.data)==null?void 0:k[(E=s.column)==null?void 0:E.field]}`:((te=s.data)==null?void 0:te[(T=s.column)==null?void 0:T.field])??""},width:280,format:"C2"}:{}}));const y=r.map(c=>a.jsx(ye,{...c}));return a.jsx(fn,{children:y})})(),gridLines:Bn.Default,rowNumberSettings:{enabled:!0},onDataLoadStart:r=>{console.log("onDataLoadStart: ",r)},onGroupStart:()=>{console.log("onGroupStart Started")},onGroup:r=>{console.log("Group action: ",r)},onSortStart:()=>{console.log("Sort Started")},onSort:r=>{console.log("Sort action: ",r)},clipMode:Hn.EllipsisWithTooltip,groupSettings:{enabled:!0,columns:["category","product","region"],defaultExpanded:!0,showDropArea:!0,type:"SingleColumn",captionFormat:"verbose",groupSummaryPosition:Un.Top},sortSettings:{enabled:!0,columns:[{field:"product",direction:"Descending"}]},isCustomBinding:!0,pageSettings:{enabled:!0,pageSize:2},virtualizationSettings:{scrollMode:S.Virtual},defaultOpenGroupExpandKeys:["Camera","Camera-South America","Medical Scanner","Medical Scanner-East Asia","Gaming Chair","Gaming Chair-South Asia","Laptop","Laptop-North America","Tires","Tires-East Asia","Scanner","Scanner-Western Europe","Air Conditioner","Air Conditioner-North Africa","E-learning Tablet","E-learning Tablet-Nordics","Game Controller","Game Controller-South Asia","Whiteboard","Whiteboard-Middle East","Mouse","Mouse-South America","Microwave","Microwave-Sub-Saharan Africa","Accessories","Accessories-Camera","Accessories-Camera-South America","Agriculture","Agriculture-Medical Scanner","Agriculture-Medical Scanner-East Asia","Construction","Construction-Gaming Chair","Construction-Gaming Chair-South Asia","Electronics","Electronics-Laptop","Electronics-Laptop-North America","Energy","Energy-Tires","Energy-Tires-East Asia","Furniture","Furniture-Scanner","Furniture-Scanner-Western Europe","Healthcare","Healthcare-Air Conditioner","Healthcare-Air Conditioner-North Africa","Insurance","Insurance-E-learning Tablet","Insurance-E-learning Tablet-Nordics","Logistics","Logistics-Game Controller","Logistics-Game Controller-South Asia","Networking","Networking-Whiteboard","Networking-Whiteboard-Middle East","Peripherals","Peripherals-Mouse","Peripherals-Mouse-South America","Retail","Retail-Microwave","Retail-Microwave-Sub-Saharan Africa"],editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Add","Edit","Delete","Update","Cancel","Search"],searchSettings:{enabled:!0},filterSettings:{enabled:!0,enableFilterBarOperator:!0,type:"Excel"},height:"100%"})},pe={args:D({dataSource:new ne({url:"https://ej2services.syncfusion.com/react/development/odata/GridInfiniteODataV4",adaptor:new $n}),columns:[{type:O.Checkbox,width:50,allowFilter:!1},{field:"RecordId",headerText:"Record ID",isPrimaryKey:!0},{field:"AssetGroup",headerText:"Asset Group"},{field:"HourlyCost",headerText:"Hourly Cost"},{field:"EstimatedHours",headerText:"Estimated Hours"},{field:"MaintenanceCost",headerText:"Maintenance Cost"},{field:"RequestedDate",headerText:"Requested Date"},{field:"PlannedDate",headerText:"Planned Date"},{field:"CompletionDate",headerText:"Completion Date"},{field:"Status",headerText:"Status"},{field:"RequestOrigin.Division",headerText:"Request Division"}],isConditionalRowSelection:!0,virtualizationSettings:{scrollMode:S.Infinite,enableCache:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel",mode:"OnEnter"},onFilterStart:()=>{console.log("Filter Started")},onFilter:r=>{console.log("Filter action: ",r)},pageSettings:{enabled:!0},searchSettings:{enabled:!0},toolbar:["Search"],height:"100%"})},me={args:D({serverPageSize:50,localDataCount:5e3,columns:A.slice(1,11),isCustomBinding:!0,virtualizationSettings:{scrollMode:S.Infinite},sortSettings:{enabled:!0},resizeSettings:{enabled:!0},filterSettings:{enabled:!0,enableFilterBarOperator:!0},searchSettings:{enabled:!0},editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Search","Add","Edit","Delete","Update","Cancel"],pageSettings:{enabled:!1,pageSize:50},height:"100%"})},ge={args:D({serverPageSize:50,localDataCount:5e3,columns:A.slice(0,11),isCustomBinding:!0,virtualizationSettings:{scrollMode:S.Virtual},isConditionalRowSelection:!0,sortSettings:{enabled:!0},filterSettings:{enabled:!0,enableFilterBarOperator:!0},searchSettings:{enabled:!0},editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Search","Add","Edit","Delete","Update","Cancel"],height:"100%"})},he={args:D({localDataCount:1e4,isLocalDataManager:!0,columns:A.slice(1,11),virtualizationSettings:{scrollMode:S.Virtual,enableCache:!1},toolbar:["Find"],findSettings:{currentPageOnly:!1,caseSensitive:!1,searchDetail:!0},modules:{...Cn,FindModule:lt},height:550})};var Pe,ze,Oe;re.parameters={...re.parameters,docs:{...(Pe=re.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: createLargeDataArgs({
    localDataCount: 100000,
    columns: (() => {
      let groupingColumns = [...columns];
      groupingColumns.unshift({
        type: ColumnType.SingleGroup
      }); //, headerText: 'Product Group'
      groupingColumns = groupingColumns.map(col => {
        return {
          ...col,
          ...(col.field === 'sales' ? {
            groupCaptionAggregateType: AggregateType.Min
          } : {})
        };
      });
      return groupingColumns;
    })(),
    // for makeData purpose mandatory
    aggregates: aggregates,
    groupSettings: {
      enabled: false,
      columns: ['category', 'product', 'region'],
      // showUngroupButton: false,
      showDropArea: true,
      //type: 'groupRows',
      type: GroupType.SingleColumn,
      defaultExpanded: true
      // type: 'multipleColumns',
      // defaultExpanded: true,
    },
    onGroupStart: () => {
      console.log('onGroupStart Started');
    },
    onGroup: (args: OnGroupArgs) => {
      console.log('Group action: ', args);
    },
    onSortStart: () => {
      console.log('Sort Started');
    },
    onSort: (args: SortEvent) => {
      console.log('Sort action: ', args);
    },
    // defaultOpenGroupExpandKeys: [],
    defaultOpenGroupExpandKeys: ['Camera', 'Camera-South America',
    // 'Medical Scanner', 'Medical Scanner-East Asia',
    'Gaming Chair', 'Gaming Chair-South Asia',
    // 'Laptop', 'Laptop-North America',
    'Tires', 'Tires-East Asia',
    // 'Scanner', 'Scanner-Western Europe',
    'Air Conditioner', 'Air Conditioner-North Africa',
    // 'E-learning Tablet', 'E-learning Tablet-Nordics',
    'Game Controller', 'Game Controller-South Asia',
    // 'Whiteboard', 'Whiteboard-Middle East',
    'Mouse', 'Mouse-South America',
    // 'Microwave', 'Microwave-Sub-Saharan Africa',
    'Accessories', 'Accessories-Camera', 'Accessories-Camera-South America',
    // 'Agriculture', 'Agriculture-Medical Scanner', 'Agriculture-Medical Scanner-East Asia',
    'Construction', 'Construction-Gaming Chair', 'Construction-Gaming Chair-South Asia',
    // 'Electronics', 'Electronics-Laptop', 'Electronics-Laptop-North America',
    'Energy', 'Energy-Tires', 'Energy-Tires-East Asia',
    // 'Furniture', 'Furniture-Scanner',  'Furniture-Scanner-Western Europe',
    'Healthcare', 'Healthcare-Air Conditioner', 'Healthcare-Air Conditioner-North Africa',
    // 'Insurance', 'Insurance-E-learning Tablet', 'Insurance-E-learning Tablet-Nordics',
    'Logistics', 'Logistics-Game Controller', 'Logistics-Game Controller-South Asia',
    // 'Networking', 'Networking-Whiteboard', 'Networking-Whiteboard-Middle East',
    'Peripherals', 'Peripherals-Mouse', 'Peripherals-Mouse-South America'
    // 'Retail', 'Retail-Microwave', 'Retail-Microwave-Sub-Saharan Africa',
    ],
    contextMenuSettings: {
      enabled: true
    },
    pinningSettings: {
      enabled: true,
      type: PinScope.Both,
      allowTopPin: true,
      allowBottomPin: true
    },
    // isConditionalRowSelection: true,
    // isMultipleChildren: true,
    // children: (
    //     <>
    //         <Columns>
    //             {columns.map((col, index) => (
    //                 <Column key={index} {...col} />
    //             ))}
    //         </Columns>
    //         <Aggregates>{aggregates.map((row) => (
    //             <AggregateRow>{row.columns.map((col) => (
    //                 <AggregateColumn {...col} />
    //             ))}</AggregateRow>
    //         ))}</Aggregates>
    //     </>
    // ),
    // virtualizationSettings: { viewPortBuffer: {rows: 0} },
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual,
      enableCache: false
    },
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel',
      enableFilterBarOperator: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 100000
    },
    height: '100%',
    onRowSelect: args => {
      console.log('Row Selected: ', args);
    }
  })
}`,...(Oe=(ze=re.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source}}};var Le,Ne,je;ie.parameters={...ie.parameters,docs:{...(Le=ie.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: createLargeDataArgs({
    localDataCount: 2000000,
    isConditionalRowSelection: true,
    columns: columns.slice(0, 11),
    // for makeData purpose mandatory
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      enableFilterBarOperator: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 2000000
    },
    height: '100%'
  })
}`,...(je=(Ne=ie.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var We,Ue,He;le.parameters={...le.parameters,docs:{...(We=le.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: createLargeDataArgs({
    dataSource: new DataManager({
      // url: 'http://localhost:62869/api/UrlDataSource',
      // url: 'https://services.syncfusion.com/react/production/api/UrlDataSource',
      url: 'https://ej2services.syncfusion.com/js/development/api/UrlDataSource',
      adaptor: new UrlAdaptor()
    }),
    query: new Query().addParams('dataCount', '100000'),
    //.addParams('serverpagesize', '50')
    toolbar: ['Search'],
    isConditionalRowSelection: true,
    groupSettings: {
      enabled: false,
      showDropArea: true,
      type: 'GroupRows',
      defaultExpanded: true,
      // columns: ['Employees'],
      columns: ['Designation', 'Employees']
      // columns: ['EmployeeID']
    },
    onGroup: (args: OnGroupArgs) => {
      console.log('Group action: ', args);
    },
    // defaultOpenGroupExpandKeys: ['10051'],
    defaultOpenGroupExpandKeys: ['CFO', 'CFO-Kathryn Fuller', 'Designer', 'Designer-Kathryn Fuller',
    // 'Manager', 'Manager-Kathryn Fuller',
    'Developer', 'Developer-Kathryn Fuller', 'Project Lead', 'Project Lead-Kathryn Fuller', 'System Analyst', 'System Analyst-Kathryn Fuller'],
    // children: (<><Columns>
    //     <Column field='EmployeeID' visible={true} headerText='Employee ID' isPrimaryKey={true} width='130'></Column>
    //     <Column field='Employees' headerText='Employee Name' width='230' clipMode='EllipsisWithTooltip' />
    //     <Column field='Designation' headerText='Designation' width='170' clipMode='EllipsisWithTooltip' />
    //     <Column field='Mail' headerText='Mail' width='230'></Column>
    //     <Column field='Location' headerText='Location' width='140'></Column>
    //     <Column field='Status' headerText='Status' width='130'></Column>
    //     <Column field='Trustworthiness' headerText='Trustworthiness' width='160'></Column>
    //     <Column field='Rating' headerText='Rating' width='220' />
    //     <Column field='Software' headerText='Software Proficiency' width='180' format='C2' />
    //     <Column field='CurrentSalary' headerText='Current Salary' width='160' format='C2'></Column>
    //     <Column field='Address' headerText='Address' width='240' clipMode="EllipsisWithTooltip" ></Column>
    // </Columns>
    // <Aggregates>
    //     <AggregateRow>
    //         <AggregateColumn field='EmployeeID' type='Count' format='Employee Count: {Count}' />
    //         <AggregateColumn field='CurrentSalary' type='Sum' format='Total Salary: {Sum:C2}' />
    //     </AggregateRow>
    // </Aggregates>
    // </>),

    columns: [{
      type: ColumnType.Checkbox,
      width: 50,
      allowFilter: false
    }, {
      field: 'EmployeeID',
      visible: true,
      headerText: 'Employee ID',
      isPrimaryKey: true,
      width: '150'
    }, {
      field: 'Employees',
      headerText: 'Employee Name',
      width: '230',
      clipMode: 'EllipsisWithTooltip'
    }, {
      field: 'Designation',
      headerText: 'Designation',
      width: '170',
      clipMode: 'EllipsisWithTooltip'
    }, {
      field: 'Mail',
      headerText: 'Mail',
      width: '230'
    }, {
      field: 'Location',
      headerText: 'Location',
      width: '140'
    }, {
      field: 'Status',
      headerText: 'Status',
      width: '130'
    }, {
      field: 'Trustworthiness',
      headerText: 'Trustworthiness',
      width: '160'
    }, {
      field: 'Rating',
      headerText: 'Rating',
      width: '220'
    }, {
      field: 'Software',
      headerText: 'Software Proficiency',
      width: '180',
      format: 'C2'
    }, {
      field: 'CurrentSalary',
      headerText: 'Current Salary',
      width: '200',
      format: 'C2'
    }, {
      field: 'Address',
      headerText: 'Address',
      width: '240',
      clipMode: "EllipsisWithTooltip"
    }],
    // aggregates: [{ columns: [
    //     { field: 'EmployeeID', type: 'Count', footerTemplate: (args) => \`Employee Count: \${args.Count}\` },
    //     { field: 'CurrentSalary', type: 'Sum', format: 'C2', footerTemplate: (args) => \`Total Salary: \${args.Sum}\` }
    // ] }],
    //   selectionSettings: { mode: 'Single' },
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    pageSettings: {
      //enabled: true, 
      pageSize: 50
    },
    virtualizationSettings: {
      enableCache: false,
      scrollMode: ScrollMode.Virtual
    },
    height: '100%'
  })
}`,...(He=(Ue=le.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};var Be,Ke,$e;se.parameters={...se.parameters,docs:{...(Be=se.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: createLargeDataArgs({
    dataSource: new DataManager({
      url: 'https://ej2services.syncfusion.com/react/development/api/GridWebAPIService',
      adaptor: new WebApiAdaptor()
    }),
    columns: [{
      type: ColumnType.Checkbox,
      width: 50,
      allowFilter: false
    }, {
      field: 'OrderID',
      headerText: 'OrderID',
      isPrimaryKey: true,
      width: '130',
      allowSearch: false
    }, {
      field: 'CustomerID',
      headerText: 'CustomerID',
      width: '230',
      clipMode: 'EllipsisWithTooltip'
    }, {
      field: 'ShipCity',
      headerText: 'ShipCity',
      width: '230'
    }, {
      field: 'EmployeeID',
      headerText: 'EmployeeID',
      width: '130',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false
    }, {
      field: 'EmployeeName',
      headerText: 'EmployeeName',
      width: '230',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false,
      allowFilter: false,
      allowSort: false
    }, {
      field: 'Designation',
      headerText: 'Designation',
      width: '230',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false,
      allowFilter: false,
      allowSort: false
    }, {
      field: 'CurrentSalary',
      headerText: 'CurrentSalary',
      width: '130',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false,
      allowFilter: false,
      allowSort: false
    }],
    // selectionSettings: { mode: 'Single' },
    isConditionalRowSelection: true,
    // toolbar: ['Search'],
    // searchSettings: { enabled: true }, //service not handled search substring with or condition only handled and multiple filter.
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
    },
    height: '100%',
    query: new Query().addParams('serverpagesize', '50')
  })
}`,...($e=(Ke=se.parameters)==null?void 0:Ke.docs)==null?void 0:$e.source}}};var Qe,_e,Je;de.parameters={...de.parameters,docs:{...(Qe=de.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: createLargeDataArgs({
    dataSource: employeeData,
    children: <Columns>\r
            <Column headerText='Employee Image' width='180' textAlign={TextAlign.Center} field='EmployeeID' />\r
            <Column headerText='Employee Details' width='300' textAlign={TextAlign.Left} field='FirstName' />\r
        </Columns>,
    className: 'row-template',
    toolbar: ['Search'],
    selectionSettings: {
      mode: 'Single'
    },
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    // virtualizationSettings: { scrollMode: ScrollMode.Virtual }, // server-remote data with dynamic rowheight not supported in competitors as well.
    height: '100%',
    rowTemplate: (props: typeof employeeData[0]) => {
      // Custom row template to display employee image and details.
      const src = \`https://npmci-react.syncfusion.com/development-react-ui/images/grid/\${props['EmployeeID']}.png\`;
      return <tr className="templateRow">\r
                    <td className="photo">\r
                        <img src={src} alt={props['EmployeeID'].toString()} />\r
                    </td>\r
                    <td className="details">\r
                        <table className="CardTable" cellPadding={3} cellSpacing={2}>\r
                            <colgroup>\r
                                <col style={{
                width: "30%"
              }} />\r
                                <col style={{
                width: "10%"
              }} />\r
                            </colgroup>\r
                            <tbody>\r
                                <tr>\r
                                    <td className="CardHeader">First Name</td>\r
                                    <td>:</td>\r
                                    <td>{props.FirstName}</td>\r
                                </tr>\r
                                <tr>\r
                                    <td className="CardHeader">Last Name</td>\r
                                    <td>:</td>\r
                                    <td>{props.LastName}</td>\r
                                </tr>\r
                                <tr>\r
                                    <td className="CardHeader">Title</td>\r
                                    <td>:</td>\r
                                    <td>{props.Title}</td>\r
                                </tr>\r
                            </tbody>\r
                        </table>\r
                    </td>\r
                </tr>;
    }
  })
}`,...(Je=(_e=de.parameters)==null?void 0:_e.docs)==null?void 0:Je.source}}};var Xe,Ye,Ze;ue.parameters={...ue.parameters,docs:{...(Xe=ue.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: createLargeDataArgs({
    localDataCount: 100000,
    isTextWrapData: true,
    columns: muicolumns,
    height: 400,
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    }
  })
}`,...(Ze=(Ye=ue.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var en,nn,tn;ce.parameters={...ce.parameters,docs:{...(en=ce.parameters)==null?void 0:en.docs,source:{originalSource:`{
  args: createLargeDataArgs({
    localDataCount: 1000,
    columns: (() => {
      let groupingColumns = [...columns.slice(0, 11)];
      groupingColumns.unshift({
        type: ColumnType.SingleGroup,
        format: 'C2'
        // width: 180
      }); //, headerText: 'Product Group'
      groupingColumns = groupingColumns.map(col => {
        return {
          ...col,
          ...(col.field === 'sales' ? {
            groupCaptionAggregateType: [AggregateType.Min, AggregateType.Max],
            // groupCaptionAggregateType: AggregateType.Min,
            valueAccessor: (props: ValueAccessorProps) => {
              return (props.column?.groupCaptionAggregateType && (props.data as GroupedData)?.key ? 'Min & Max: ' : '') + props.data?.[props.field as string];
            },
            template: (props: ColumnTemplateProps) => {
              if (props.column?.groupCaptionAggregateType && (props.data as GroupedData)?.key) {
                return \`Min & Max: \${props.data?.[props.column?.field as string]}\`;
              } else {
                return props.data?.[props.column?.field as string] ?? '';
              }
            },
            width: 280,
            // type: ColumnType.Number,
            format: 'C2'
          } : {})
        };
      });
      // groupingColumns.unshift({ type: ColumnType.RowNumber, width: 50 });
      return groupingColumns;
      // return [
      //     { field: 'OrderID', headerText: 'Order ID', width: 100 },
      //     { field: 'CustomerID', headerText: 'Customer', width: 120 },
      //     { field: 'ProductName', headerText: 'Product', width: 120 },
      //     { field: 'Region', headerText: 'Region', width: 100 },
      //     { field: 'Country', headerText: 'Country', width: 100 },
      //     { field: 'Quantity', headerText: 'Qty', width: 80, type: 'number' },
      //     { field: 'Revenue', headerText: 'Revenue', width: 100, format: 'C2' },
      //     { field: 'Status', headerText: 'Status', width: 100 }
      // ];
    })(),
    children: (() => {
      let groupingColumns = [...columns.slice(0, 11)];
      groupingColumns.unshift({
        type: ColumnType.SingleGroup,
        format: 'C2'
        // width: 180
      }); //, headerText: 'Product Group'
      groupingColumns = groupingColumns.map(col => {
        return {
          ...col,
          ...(col.field === 'sales' ? {
            groupCaptionAggregateType: [AggregateType.Min, AggregateType.Max],
            // groupCaptionAggregateType: AggregateType.Min,
            valueAccessor: (props: ValueAccessorProps) => {
              return (props.column?.groupCaptionAggregateType && (props.data as GroupedData)?.key ? 'Min & Max: ' : '') + props.data?.[props.field as string];
            },
            template: (props: ColumnTemplateProps) => {
              if (props.column?.groupCaptionAggregateType && (props.data as GroupedData)?.key) {
                return \`Min & Max: \${props.data?.[props.column?.field as string]}\`;
              } else {
                return props.data?.[props.column?.field as string] ?? '';
              }
            },
            width: 280,
            // type: ColumnType.Number,
            format: 'C2'
          } : {})
        };
      });
      const groupingChildren = groupingColumns.map(col => <Column {...col} />);
      return <Columns>\r
                    {groupingChildren}\r
                </Columns>;
    })(),
    gridLines: GridLine.Default,
    rowNumberSettings: {
      enabled: true
    },
    onDataLoadStart: args => {
      console.log('onDataLoadStart: ', args);
    },
    onGroupStart: () => {
      console.log('onGroupStart Started');
    },
    onGroup: (args: OnGroupArgs) => {
      console.log('Group action: ', args);
    },
    onSortStart: () => {
      console.log('Sort Started');
    },
    onSort: (args: SortEvent) => {
      console.log('Sort action: ', args);
    },
    clipMode: ClipMode.EllipsisWithTooltip,
    groupSettings: {
      enabled: true,
      columns: [
      // 'Region'
      'category', 'product', 'region'],
      // showUngroupButton: false,
      defaultExpanded: true,
      //defaultExpanded: false,
      // defaultExpanded: 1,
      showDropArea: true,
      // allowReorder: true,
      type: 'SingleColumn',
      captionFormat: 'verbose',
      groupSummaryPosition: GroupSummaryPosition.Top
      // type: 'multipleColumns',
      // type: 'groupRows',
    },
    sortSettings: {
      enabled: true,
      columns: [{
        field: 'product',
        direction: 'Descending'
      }]
    },
    // selectionSettings: { autoSelectMode: 'Intermediate' },
    isCustomBinding: true,
    pageSettings: {
      enabled: true,
      pageSize: 2
    },
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
      // enableCache: false
    },
    defaultOpenGroupExpandKeys: ['Camera', 'Camera-South America', 'Medical Scanner', 'Medical Scanner-East Asia', 'Gaming Chair', 'Gaming Chair-South Asia', 'Laptop', 'Laptop-North America', 'Tires', 'Tires-East Asia', 'Scanner', 'Scanner-Western Europe', 'Air Conditioner', 'Air Conditioner-North Africa', 'E-learning Tablet', 'E-learning Tablet-Nordics', 'Game Controller', 'Game Controller-South Asia', 'Whiteboard', 'Whiteboard-Middle East', 'Mouse', 'Mouse-South America', 'Microwave', 'Microwave-Sub-Saharan Africa', 'Accessories', 'Accessories-Camera', 'Accessories-Camera-South America', 'Agriculture', 'Agriculture-Medical Scanner', 'Agriculture-Medical Scanner-East Asia', 'Construction', 'Construction-Gaming Chair', 'Construction-Gaming Chair-South Asia', 'Electronics', 'Electronics-Laptop', 'Electronics-Laptop-North America', 'Energy', 'Energy-Tires', 'Energy-Tires-East Asia', 'Furniture', 'Furniture-Scanner', 'Furniture-Scanner-Western Europe', 'Healthcare', 'Healthcare-Air Conditioner', 'Healthcare-Air Conditioner-North Africa', 'Insurance', 'Insurance-E-learning Tablet', 'Insurance-E-learning Tablet-Nordics', 'Logistics', 'Logistics-Game Controller', 'Logistics-Game Controller-South Asia', 'Networking', 'Networking-Whiteboard', 'Networking-Whiteboard-Middle East', 'Peripherals', 'Peripherals-Mouse', 'Peripherals-Mouse-South America', 'Retail', 'Retail-Microwave', 'Retail-Microwave-Sub-Saharan Africa'],
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    searchSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      enableFilterBarOperator: true,
      type: 'Excel'
    },
    height: '100%'
  })
}`,...(tn=(nn=ce.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var an,on,rn;pe.parameters={...pe.parameters,docs:{...(an=pe.parameters)==null?void 0:an.docs,source:{originalSource:`{
  args: createLargeDataArgs({
    // localDataCount: 100,
    dataSource: new DataManager({
      // url: 'http://localhost:62869/odata/GridInfiniteODataV4',
      url: 'https://ej2services.syncfusion.com/react/development/odata/GridInfiniteODataV4',
      //?dataCount=200',
      // url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
      adaptor: new ODataV4Adaptor()
    }),
    // if more columns included search query not working odata with large query 403 forbidden occurs
    columns: [{
      type: ColumnType.Checkbox,
      width: 50,
      allowFilter: false
    }, {
      field: 'RecordId',
      headerText: 'Record ID',
      isPrimaryKey: true
    },
    // { field: 'AssetTag', headerText: 'Asset Tag' },
    {
      field: 'AssetGroup',
      headerText: 'Asset Group'
    },
    // { field: 'FacilitySection', headerText: 'Facility Section' },
    // { field: 'TechnicianNames', headerText: 'Technician Names' },
    // { field: 'SkillTier', headerText: 'Skill Tier' },
    {
      field: 'HourlyCost',
      headerText: 'Hourly Cost'
    }, {
      field: 'EstimatedHours',
      headerText: 'Estimated Hours'
    }, {
      field: 'MaintenanceCost',
      headerText: 'Maintenance Cost'
    }, {
      field: 'RequestedDate',
      headerText: 'Requested Date'
    }, {
      field: 'PlannedDate',
      headerText: 'Planned Date'
    }, {
      field: 'CompletionDate',
      headerText: 'Completion Date'
    },
    // { field: 'SafetyCheckRequired', headerText: 'Safety Check Required' },
    {
      field: 'Status',
      headerText: 'Status'
    }, {
      field: 'RequestOrigin.Division',
      headerText: 'Request Division'
    }
    // { field: 'RequestOrigin.ReferenceCode', headerText: 'Reference Code' }
    ],
    isConditionalRowSelection: true,
    virtualizationSettings: {
      scrollMode: ScrollMode.Infinite,
      enableCache: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel',
      mode: 'OnEnter'
    },
    onFilterStart: () => {
      console.log('Filter Started');
    },
    onFilter: args => {
      console.log('Filter action: ', args);
    },
    pageSettings: {
      enabled: true
    },
    searchSettings: {
      enabled: true
    },
    toolbar: ['Search'],
    // pageSettings: {
    //     enabled: false,
    //     pageSize: 100,
    //     estimatedTotalRecordsCount: 500,
    //     pageSizeControlledBy: 'server'
    // },
    height: '100%'
    // query: new Query().requiresCount()
  })
}`,...(rn=(on=pe.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var ln,sn,dn;me.parameters={...me.parameters,docs:{...(ln=me.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  args: createLargeDataArgs({
    serverPageSize: 50,
    localDataCount: 5000,
    columns: columns.slice(1, 11),
    isCustomBinding: true,
    virtualizationSettings: {
      scrollMode: ScrollMode.Infinite
      // scrollMode: ScrollMode.Virtual,
      // enableCache: false
    },
    sortSettings: {
      enabled: true
    },
    resizeSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      enableFilterBarOperator: true
    },
    searchSettings: {
      enabled: true
    },
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Search', 'Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    pageSettings: {
      enabled: false,
      pageSize: 50
      // estimatedTotalRecordsCount: 500,
      // pageSizeControlledBy: 'client'
    },
    height: '100%'
    // aggregates: [{columns: aggregates?.[0].columns.slice(0, 10) ?? []}]
  })
}`,...(dn=(sn=me.parameters)==null?void 0:sn.docs)==null?void 0:dn.source}}};var un,cn,pn;ge.parameters={...ge.parameters,docs:{...(un=ge.parameters)==null?void 0:un.docs,source:{originalSource:`{
  args: createLargeDataArgs({
    serverPageSize: 50,
    localDataCount: 5000,
    columns: columns.slice(0, 11),
    isCustomBinding: true,
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
      // scrollMode: ScrollMode.Virtual,
      // enableCache: false
    },
    // selectionSettings: { mode: 'Multiple', autoSelectMode: 'Intermediate' },
    isConditionalRowSelection: true,
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      enableFilterBarOperator: true
    },
    searchSettings: {
      enabled: true
    },
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Search', 'Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    // pageSettings: {
    //     enabled: true,
    //     pageSize: 50,
    //     // estimatedTotalRecordsCount: 500,
    //     // pageSizeControlledBy: 'client'
    // },
    height: '100%'
    // aggregates: [{columns: aggregates?.[0].columns.slice(0, 10) ?? []}]
  })
}`,...(pn=(cn=ge.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};var mn,gn,hn;he.parameters={...he.parameters,docs:{...(mn=he.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  args: createLargeDataArgs({
    localDataCount: 10000,
    isLocalDataManager: true,
    columns: columns.slice(1, 11),
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual,
      enableCache: false
    },
    toolbar: ['Find'],
    findSettings: {
      currentPageOnly: false,
      caseSensitive: false,
      searchDetail: true
    },
    modules: {
      ...largeDataModules,
      FindModule
    },
    height: 550
  })
}`,...(hn=(gn=he.parameters)==null?void 0:gn.docs)==null?void 0:hn.source}}};const Dt=["LocalData","OverComeBrowserLimit","UrlAdaptorData","WebApiAdaptorData","RowTemplate","TextWrapSample","GroupingSample","ODataV4Sample","CustomBindingSample","conditionalRowSelection","FindLargeData"];export{me as CustomBindingSample,he as FindLargeData,ce as GroupingSample,re as LocalData,pe as ODataV4Sample,ie as OverComeBrowserLimit,de as RowTemplate,ue as TextWrapSample,le as UrlAdaptorData,se as WebApiAdaptorData,Dt as __namedExportsOrder,ge as conditionalRowSelection,xt as default};
