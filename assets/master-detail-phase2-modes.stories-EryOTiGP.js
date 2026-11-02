import{j as n}from"./index-CTAXdLKx.js";import{r as u}from"./index-D5jfS-9e.js";import{u as p,G as f}from"./useGridTheme-lrKUE-ln.js";import"./client-Spw3EFno.js";import{u as C}from"./useDetailGrid-CvjfM9HB.js";import"./iframe-CIg2I0Z_.js";import"../sb-preview/runtime.js";const X={title:"Grid/Master-Detail/Phase 2 - Data Binding Modes",parameters:{docs:{description:{component:`
# Phase 2: Master-Detail Grid with Three Data Binding Modes

Comprehensive examples demonstrating all supported data binding modes for master-detail grids:

1. **Nested Data Mode** - Child data embedded directly in parent row
2. **Mapping Data Mode** - Foreign key filtering with mappingID
3. **Async Mode** - Callback-based dynamic loading from API
4. **Advanced 3-Level Nesting** - Recursive hierarchy with depth control

Each story includes realistic sample data, proper error handling, and console logging for debugging.
        `}}},tags:["autodocs"]},j=[{OrderID:10248,CustomerID:"VINET",OrderDate:"1996-07-04",Freight:32.38,ShipCity:"Reims",ShipCountry:"France",OrderLines:[{OrderID:10248,ProductID:11,ProductName:"Queso Cabrales",UnitPrice:21,Quantity:12,Discount:0,LineAmount:252},{OrderID:10248,ProductID:42,ProductName:"Singaporean Hokkien Fried Mee",UnitPrice:9.8,Quantity:10,Discount:0,LineAmount:98},{OrderID:10248,ProductID:72,ProductName:"Mozzarella di Giovanni",UnitPrice:34.8,Quantity:5,Discount:0,LineAmount:174}]},{OrderID:10249,CustomerID:"TOMSP",OrderDate:"1996-07-05",Freight:11.61,ShipCity:"Münster",ShipCountry:"Germany",OrderLines:[{OrderID:10249,ProductID:14,ProductName:"Tofu",UnitPrice:23.25,Quantity:9,Discount:0,LineAmount:209.25},{OrderID:10249,ProductID:51,ProductName:"Manjimup Dried Apples",UnitPrice:53,Quantity:40,Discount:0,LineAmount:2120}]},{OrderID:10250,CustomerID:"HANAR",OrderDate:"1996-07-08",Freight:65.83,ShipCity:"Rio de Janeiro",ShipCountry:"Brazil",OrderLines:[{OrderID:10250,ProductID:41,ProductName:"Jack's New England Clam Chowder",UnitPrice:9.65,Quantity:10,Discount:0,LineAmount:96.5}]}],g=()=>{const o=u.useRef(null);p("material");const a=[{field:"OrderID",headerText:"Order ID",width:100,textAlign:"Right"},{field:"CustomerID",headerText:"Customer ID",width:120},{field:"OrderDate",headerText:"Order Date",width:130,type:"date",format:"yMd"},{field:"Freight",headerText:"Freight",width:120,textAlign:"Right",format:"C2"},{field:"ShipCity",headerText:"Ship City",width:150}],l={detailGridOptions:{columns:[{field:"ProductName",headerText:"Product Name",width:150},{field:"Quantity",headerText:"Quantity",width:100,textAlign:"Right"},{field:"UnitPrice",headerText:"Unit Price",width:120,textAlign:"Right",format:"C2"},{field:"LineAmount",headerText:"Line Total",width:120,textAlign:"Right",format:"C2"}],rowHeight:32,height:250,sortSettings:{enabled:!0}},getDetailRowData:e=>{console.log(`[Mode 1] Loading detail for Order ${e.data.OrderID}`);const s=e.data.OrderLines||[];e.successCallback(s)},onDetailGridCreated:e=>{console.log(`[Mode 1] Detail grid created for Order ${e.parentData.OrderID}`)},onDetailGridDestroyed:e=>{console.log(`[Mode 1] Detail grid destroyed for Order ${e.parentData.OrderID}`)}};return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h2",{children:"Mode 1: Nested Data Binding"}),n.jsx("p",{children:"Child rows are directly embedded in parent data as OrderLines property."}),n.jsx(f,{ref:o,dataSource:j,columns:a,isMasterDetail:!0,detailRowHeight:300,maxNestingDepth:2,detailCellRendererParams:l,onRowExpand:e=>{console.log(`[Mode 1] Row expanded: Order ID ${e.data.OrderID}`)},onRowCollapse:e=>{console.log(`[Mode 1] Row collapsed: Order ID ${e.data.OrderID}`)},pageSettings:{pageSize:5}})]})},U=[{OrderID:10248,CustomerID:"VINET",OrderDate:"1996-07-04",Freight:32.38,ShipCity:"Reims",ShipCountry:"France"},{OrderID:10249,CustomerID:"TOMSP",OrderDate:"1996-07-05",Freight:11.61,ShipCity:"Münster",ShipCountry:"Germany"},{OrderID:10250,CustomerID:"HANAR",OrderDate:"1996-07-08",Freight:65.83,ShipCity:"Rio de Janeiro",ShipCountry:"Brazil"}],E=[{OrderID:10248,ProductID:11,ProductName:"Queso",UnitPrice:21,Quantity:12,Discount:0},{OrderID:10248,ProductID:42,ProductName:"Singaporean Hokkien Fried Mee",UnitPrice:9.8,Quantity:10,Discount:0},{OrderID:10248,ProductID:72,ProductName:"Mozzarella di Giovanni",UnitPrice:34.8,Quantity:5,Discount:0},{OrderID:10249,ProductID:14,ProductName:"Tofu",UnitPrice:23.25,Quantity:9,Discount:0},{OrderID:10249,ProductID:51,ProductName:"Manjimup Dried Apples",UnitPrice:53,Quantity:40,Discount:0},{OrderID:10250,ProductID:41,ProductName:"Jack's New England Clam Chowder",UnitPrice:9.65,Quantity:10,Discount:0}],h=()=>{const o=u.useRef(null);p("material");const a=[{field:"OrderID",headerText:"Order ID",width:100,textAlign:"Right"},{field:"CustomerID",headerText:"Customer ID",width:120},{field:"OrderDate",headerText:"Order Date",width:130,type:"date",format:"yMd"},{field:"Freight",headerText:"Freight",width:120,textAlign:"Right",format:"C2"}],l={detailGridOptions:{columns:[{field:"ProductName",headerText:"Product Name",width:150},{field:"Quantity",headerText:"Quantity",width:100,textAlign:"Right"},{field:"UnitPrice",headerText:"Unit Price",width:120,textAlign:"Right",format:"C2"}],rowHeight:32,height:250,sortSettings:{enabled:!0}},mappingID:"OrderID",childDataSource:E,getDetailRowData:e=>{console.log(`[Mode 2] Loading detail for Order ${e.data.OrderID}`);const s=e.data[e.mappingID],r=Array.isArray(e.childDataSource)?e.childDataSource.filter(t=>t.OrderID===s):[];console.log(`[Mode 2] Found ${r.length} lines for Order ${s}`),e.successCallback(r)},onDetailGridCreated:e=>{console.log(`[Mode 2] Detail grid created for Order ${e.parentData.OrderID}`)},onDetailGridDestroyed:e=>{console.log(`[Mode 2] Detail grid destroyed for Order ${e.parentData.OrderID}`)}};return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h2",{children:"Mode 2: Mapping Data Binding (Foreign Key)"}),n.jsx("p",{children:"Child rows are filtered from separate dataset using mappingID foreign key."}),n.jsx(f,{ref:o,dataSource:U,columns:a,isMasterDetail:!0,detailRowHeight:300,maxNestingDepth:2,detailCellRendererParams:l,onRowExpand:e=>{console.log(`[Mode 2] Row expanded: Order ID ${e.data.OrderID}`)},onRowCollapse:e=>{console.log(`[Mode 2] Row collapsed: Order ID ${e.data.OrderID}`)},pageSettings:{pageSize:5}})]})},H=1e3,z=o=>new Promise(a=>{setTimeout(()=>{const d=E.filter(l=>l.OrderID===o);a(d)},H)}),D=()=>{const o=u.useRef(null),[a,d]=u.useState(new Set);p("material");const l=[{field:"OrderID",headerText:"Order ID",width:100,textAlign:"Right"},{field:"CustomerID",headerText:"Customer ID",width:120},{field:"OrderDate",headerText:"Order Date",width:130,type:"date",format:"yMd"},{field:"Freight",headerText:"Freight",width:120,textAlign:"Right",format:"C2"}],s={detailGridOptions:{columns:[{field:"ProductName",headerText:"Product Name",width:150},{field:"Quantity",headerText:"Quantity",width:100,textAlign:"Right"},{field:"UnitPrice",headerText:"Unit Price",width:120,textAlign:"Right",format:"C2"}],rowHeight:32,height:250},getDetailRowData:async r=>{const t=r.data.OrderID;console.log(`[Mode 3] Loading detail for Order ${t}...`);try{d(c=>new Set([...c,t]));const i=await z(t);console.log(`[Mode 3] Loaded ${i.length} lines for Order ${t}`),r.successCallback(i)}catch(i){const c=i instanceof Error?i.message:"Unknown error";console.error(`[Mode 3] Failed to load Order ${t}:`,c),r.failCallback(c)}finally{d(i=>{const c=new Set(i);return c.delete(t),c})}},onDetailGridCreated:r=>{console.log(`[Mode 3] Detail grid created for Order ${r.parentData.OrderID}`)},onDetailGridDestroyed:r=>{console.log(`[Mode 3] Detail grid destroyed for Order ${r.parentData.OrderID}`)}};return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h2",{children:"Mode 3: Async Data Binding"}),n.jsx("p",{children:"Child rows are loaded dynamically via callback when detail row is expanded."}),n.jsxs("p",{style:{color:"#666",fontSize:"14px"},children:["Loading orders: ",a.size>0?Array.from(a).join(", "):"None"]}),n.jsx(f,{ref:o,dataSource:U,columns:l,editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0},isMasterDetail:!0,detailRowHeight:300,maxNestingDepth:2,detailCellRendererParams:s,onRowExpand:r=>{console.log(`[Mode 3] Row expanded: Order ID ${r.data.OrderID}`)},onRowCollapse:r=>{console.log(`[Mode 3] Row collapsed: Order ID ${r.data.OrderID}`)},pageSettings:{pageSize:5}})]})},B=Array.from({length:10},(o,a)=>{const d=10248+a;return{OrderID:d,CustomerID:`CUST${String(a+1).padStart(2,"0")}`,OrderDate:`1996-07-${String(4+a).padStart(2,"0")}`,Freight:32.38+a*4,ShipCity:["Reims","Münster","Rio de Janeiro","London"][a%4],ShipCountry:["France","Germany","Brazil","United Kingdom"][a%4],OrderLines:Array.from({length:10},(l,e)=>({OrderID:d,ProductID:11+e,ProductName:`Product ${e+1} for Order ${d}`,UnitPrice:10+e*2.5,Quantity:5+e,Discount:0,Containers:Array.from({length:10},(s,r)=>({ContainerID:d*100+e*10+r,OrderID:d,ShipID:d,ContainerType:`Container ${r+1}`,Weight:10+r,Items:Array.from({length:10},(t,i)=>({ItemID:i+1,ContainerID:d*100+e*10+r,ProductName:`Item ${i+1} for Product ${e+1}`,Quantity:i+1}))}))}))}}),m=()=>{const o=u.useRef(null);p("material");const a=[{type:"checkbox",width:100},{field:"OrderID",headerText:"Order ID",width:100,textAlign:"Right",isPrimaryKey:!0},{field:"CustomerID",headerText:"Customer ID",width:120},{field:"OrderDate",headerText:"Order Date",width:130}],d=[{field:"ProductID",headerText:"Product ID",width:100,textAlign:"Right"},{field:"ProductName",headerText:"Product Name",width:150},{field:"Quantity",headerText:"Quantity",width:100,textAlign:"Right"}],r={detailGridOptions:{columns:d,height:280,sortSettings:{enabled:!0},isMasterDetail:!0,modules:{DetailGridModule:C},maxNestingDepth:3,currentNestingDepth:1,detailCellRendererParams:{detailGridOptions:{columns:d,height:250,maxNestingDepth:3,currentNestingDepth:2,detailCellRendererParams:{detailGridOptions:{columns:[{field:"ContainerID",headerText:"Container ID",width:120},{field:"ContainerType",headerText:"Container Type",width:150},{field:"Weight",headerText:"Weight",width:120}],rowHeight:32,height:200},getDetailRowData:t=>{t.successCallback(t.data.Items||[])}},isMasterDetail:!0,modules:{DetailGridModule:C}},getDetailRowData:t=>{console.log(`[Level 2] Loading containers for Line ${t.data.ProductID}`);const i=t.data.Containers||[];t.successCallback(i)}}},getDetailRowData:t=>{console.log(`[Level 1] Loading lines for Order ${t.data.OrderID}`);const i=t.data.OrderLines||[];t.successCallback(i)},onDetailGridCreated:()=>{console.log("[Level 1] Detail grid created at depth 1")}};return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h2",{children:"Advanced: Three-Level Nesting"}),n.jsx("p",{children:"Master Orders → Detail Lines → Container Items"}),n.jsx("p",{style:{color:"#666",fontSize:"14px"},children:"Expand orders to see lines, then expand lines to see container items."}),n.jsx(f,{ref:o,dataSource:B,columns:a,isMasterDetail:!0,modules:{DetailGridModule:C},detailRowHeight:280,maxNestingDepth:3,currentNestingDepth:0,detailCellRendererParams:r,toolbar:["Add","Edit","Delete","Update","Cancel"]})]})};var O,I,w,y,x;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const gridRef = useRef<GridRef<Order>>(null);
  useGridTheme('material');

  /**\r
   * Master Grid Columns\r
   */
  const masterColumns: ColumnProps[] = [{
    field: 'OrderID',
    headerText: 'Order ID',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: 120
  }, {
    field: 'OrderDate',
    headerText: 'Order Date',
    width: 130,
    type: 'date',
    format: 'yMd'
  }, {
    field: 'Freight',
    headerText: 'Freight',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }, {
    field: 'ShipCity',
    headerText: 'Ship City',
    width: 150
  }];

  /**\r
   * Detail Grid Columns\r
   */
  const detailColumns: ColumnProps[] = [{
    field: 'ProductName',
    headerText: 'Product Name',
    width: 150
  }, {
    field: 'Quantity',
    headerText: 'Quantity',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'UnitPrice',
    headerText: 'Unit Price',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }, {
    field: 'LineAmount',
    headerText: 'Line Total',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }];

  /**\r
   * Detail Cell Renderer Configuration\r
   * Mode 1: Nested Data - Extract from parent.OrderLines\r
   */
  const detailCellRendererParams: DetailCellRendererParams<Order> = {
    detailGridOptions: {
      columns: detailColumns,
      rowHeight: 32,
      height: 250,
      sortSettings: {
        enabled: true
      }
    },
    /**\r
     * Callback to provide child data\r
     * Mode 1: Simply return child array from parent\r
     */
    getDetailRowData: params => {
      console.log(\`[Mode 1] Loading detail for Order \${params.data.OrderID}\`);
      // Extract nested OrderLines from parent
      const childData = params.data.OrderLines || [];
      params.successCallback(childData);
    },
    onDetailGridCreated: gridRef => {
      console.log(\`[Mode 1] Detail grid created for Order \${(gridRef.parentData as Order).OrderID}\`);
    },
    onDetailGridDestroyed: gridRef => {
      console.log(\`[Mode 1] Detail grid destroyed for Order \${(gridRef.parentData as Order).OrderID}\`);
    }
  };
  return <div style={{
    padding: '20px'
  }}>\r
      <h2>Mode 1: Nested Data Binding</h2>\r
      <p>Child rows are directly embedded in parent data as OrderLines property.</p>\r
      <Grid<Order> ref={gridRef} dataSource={ordersWithNestedData} columns={masterColumns} isMasterDetail={true} detailRowHeight={300} maxNestingDepth={2} detailCellRendererParams={detailCellRendererParams} onRowExpand={args => {
      console.log(\`[Mode 1] Row expanded: Order ID \${args.data.OrderID}\`);
    }} onRowCollapse={args => {
      console.log(\`[Mode 1] Row collapsed: Order ID \${args.data.OrderID}\`);
    }} pageSettings={{
      pageSize: 5
    }} />\r
    </div>;
}`,...(w=(I=g.parameters)==null?void 0:I.docs)==null?void 0:w.source},description:{story:`Story: Mode 1 - Nested Data Binding\r
\r
Demonstrates simple nested data mode where child rows are\r
directly embedded in parent row as OrderLines property.\r
\r
Features:\r
- Child data extracted from parent.OrderLines\r
- No external data source required\r
- Simple synchronous binding\r
\r
@component\r
@example\r
\`\`\`tsx\r
<MasterDetailMode1NestedData />\r
\`\`\``,...(x=(y=g.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};var R,P,M,T,S;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const gridRef = useRef<GridRef<Order>>(null);
  useGridTheme('material');

  /**\r
   * Master Grid Columns\r
   */
  const masterColumns: ColumnProps[] = [{
    field: 'OrderID',
    headerText: 'Order ID',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: 120
  }, {
    field: 'OrderDate',
    headerText: 'Order Date',
    width: 130,
    type: 'date',
    format: 'yMd'
  }, {
    field: 'Freight',
    headerText: 'Freight',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }];

  /**\r
   * Detail Grid Columns\r
   */
  const detailColumns: ColumnProps[] = [{
    field: 'ProductName',
    headerText: 'Product Name',
    width: 150
  }, {
    field: 'Quantity',
    headerText: 'Quantity',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'UnitPrice',
    headerText: 'Unit Price',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }];

  /**\r
   * Detail Cell Renderer Configuration\r
   * Mode 2: Mapping Data - Filter childDataSource by mappingID\r
   */
  const detailCellRendererParams: DetailCellRendererParams<Order> = {
    detailGridOptions: {
      columns: detailColumns,
      rowHeight: 32,
      height: 250,
      sortSettings: {
        enabled: true
      }
    },
    /**\r
     * Foreign key field name in parent row\r
     * Used to filter childDataSource\r
     */
    mappingID: 'OrderID',
    /**\r
     * Complete child dataset\r
     * Filtered by mappingID value from each parent row\r
     */
    childDataSource: allOrderLines,
    /**\r
     * Callback to provide child data\r
     * Mode 2: Filter childDataSource by foreign key\r
     */
    getDetailRowData: params => {
      console.log(\`[Mode 2] Loading detail for Order \${params.data.OrderID}\`);
      // Filter child data where OrderID matches parent OrderID
      const parentID = params.data[params.mappingID!];
      const childData = Array.isArray(params.childDataSource) ? (params.childDataSource as OrderLine[]).filter((line: OrderLine) => line.OrderID === parentID) : [];
      console.log(\`[Mode 2] Found \${childData.length} lines for Order \${parentID}\`);
      params.successCallback(childData);
    },
    onDetailGridCreated: gridRef => {
      console.log(\`[Mode 2] Detail grid created for Order \${(gridRef.parentData as Order).OrderID}\`);
    },
    onDetailGridDestroyed: gridRef => {
      console.log(\`[Mode 2] Detail grid destroyed for Order \${(gridRef.parentData as Order).OrderID}\`);
    }
  };
  return <div style={{
    padding: '20px'
  }}>\r
      <h2>Mode 2: Mapping Data Binding (Foreign Key)</h2>\r
      <p>Child rows are filtered from separate dataset using mappingID foreign key.</p>\r
      <Grid<Order> ref={gridRef} dataSource={ordersForMapping} columns={masterColumns} isMasterDetail={true} detailRowHeight={300} maxNestingDepth={2} detailCellRendererParams={detailCellRendererParams} onRowExpand={args => {
      console.log(\`[Mode 2] Row expanded: Order ID \${args.data.OrderID}\`);
    }} onRowCollapse={args => {
      console.log(\`[Mode 2] Row collapsed: Order ID \${args.data.OrderID}\`);
    }} pageSettings={{
      pageSize: 5
    }} />\r
    </div>;
}`,...(M=(P=h.parameters)==null?void 0:P.docs)==null?void 0:M.source},description:{story:`Story: Mode 2 - Mapping Data Binding with mappingID\r
\r
Demonstrates foreign key mapping where child data is filtered\r
from a separate dataset using mappingID (foreign key).\r
\r
Features:\r
- Child data from separate childDataSource\r
- Filtered by mappingID (OrderID)\r
- Supports large child datasets\r
- Single dataset can serve multiple parent rows\r
\r
@component\r
@example\r
\`\`\`tsx\r
<MasterDetailMode2MappingData />\r
\`\`\``,...(S=(T=h.parameters)==null?void 0:T.docs)==null?void 0:S.description}}};var v,A,L,N,G;D.parameters={...D.parameters,docs:{...(v=D.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const gridRef = useRef<GridRef<Order>>(null);
  const [loadingOrderIds, setLoadingOrderIds] = useState<Set<number>>(new Set());
  useGridTheme('material');

  /**\r
   * Master Grid Columns\r
   */
  const masterColumns: ColumnProps[] = [{
    field: 'OrderID',
    headerText: 'Order ID',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: 120
  }, {
    field: 'OrderDate',
    headerText: 'Order Date',
    width: 130,
    type: 'date',
    format: 'yMd'
  }, {
    field: 'Freight',
    headerText: 'Freight',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }];

  /**\r
   * Detail Grid Columns\r
   */
  const detailColumns: ColumnProps[] = [{
    field: 'ProductName',
    headerText: 'Product Name',
    width: 150
  }, {
    field: 'Quantity',
    headerText: 'Quantity',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'UnitPrice',
    headerText: 'Unit Price',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }];

  /**\r
   * Detail Cell Renderer Configuration\r
   * Mode 3: Async - Load data dynamically via callback\r
   */
  const detailCellRendererParams: DetailCellRendererParams<Order> = {
    detailGridOptions: {
      columns: detailColumns,
      rowHeight: 32,
      height: 250
    },
    /**\r
     * Callback to provide child data asynchronously\r
     * Mode 3: Fetch from API and call success/fail callback\r
     */
    getDetailRowData: async params => {
      const orderId = params.data.OrderID;
      console.log(\`[Mode 3] Loading detail for Order \${orderId}...\`);
      try {
        // Track loading state
        setLoadingOrderIds(prev => new Set([...prev, orderId]));

        // Simulate async API call
        const childData = await fetchOrderLinesFromAPI(orderId);
        console.log(\`[Mode 3] Loaded \${childData.length} lines for Order \${orderId}\`);
        params.successCallback(childData);
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        console.error(\`[Mode 3] Failed to load Order \${orderId}:\`, errorMsg);
        params.failCallback(errorMsg);
      } finally {
        // Clear loading state
        setLoadingOrderIds(prev => {
          const next = new Set(prev);
          next.delete(orderId);
          return next;
        });
      }
    },
    onDetailGridCreated: gridRef => {
      console.log(\`[Mode 3] Detail grid created for Order \${(gridRef.parentData as Order).OrderID}\`);
    },
    onDetailGridDestroyed: gridRef => {
      console.log(\`[Mode 3] Detail grid destroyed for Order \${(gridRef.parentData as Order).OrderID}\`);
    }
  };
  return <div style={{
    padding: '20px'
  }}>\r
      <h2>Mode 3: Async Data Binding</h2>\r
      <p>Child rows are loaded dynamically via callback when detail row is expanded.</p>\r
      <p style={{
      color: '#666',
      fontSize: '14px'
    }}>\r
        Loading orders: {loadingOrderIds.size > 0 ? Array.from(loadingOrderIds).join(', ') : 'None'}\r
      </p>\r
      <Grid<Order> ref={gridRef} dataSource={ordersForMapping} columns={masterColumns} editSettings={{
      allowEdit: true,
      allowAdd: true,
      allowDelete: true
    }} isMasterDetail={true} detailRowHeight={300} maxNestingDepth={2} detailCellRendererParams={detailCellRendererParams} onRowExpand={args => {
      console.log(\`[Mode 3] Row expanded: Order ID \${args.data.OrderID}\`);
    }} onRowCollapse={args => {
      console.log(\`[Mode 3] Row collapsed: Order ID \${args.data.OrderID}\`);
    }} pageSettings={{
      pageSize: 5
    }} />\r
    </div>;
}`,...(L=(A=D.parameters)==null?void 0:A.docs)==null?void 0:L.source},description:{story:`Story: Mode 3 - Async Data Binding\r
\r
Demonstrates asynchronous data loading where child data is\r
fetched dynamically via callback when detail row is expanded.\r
\r
Features:\r
- Dynamic data loading on expand\r
- API/Promise support\r
- Loading state management\r
- Error handling with failCallback\r
\r
@component\r
@example\r
\`\`\`tsx\r
<MasterDetailMode3AsyncData />\r
\`\`\``,...(G=(N=D.parameters)==null?void 0:N.docs)==null?void 0:G.description}}};var $,b,F,k,Q;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const gridRef = useRef<GridRef<Order>>(null);
  useGridTheme('material');

  /**\r
   * Level 1: Master Grid Columns\r
   */
  const level1Columns: ColumnProps[] = [{
    type: 'checkbox',
    width: 100
  }, {
    field: 'OrderID',
    headerText: 'Order ID',
    width: 100,
    textAlign: 'Right',
    isPrimaryKey: true
  }, {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: 120
  }, {
    field: 'OrderDate',
    headerText: 'Order Date',
    width: 130
  }];

  /**\r
   * Level 2: Detail Grid Columns\r
   */
  const level2Columns: ColumnProps[] = [{
    field: 'ProductID',
    headerText: 'Product ID',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'ProductName',
    headerText: 'Product Name',
    width: 150
  }, {
    field: 'Quantity',
    headerText: 'Quantity',
    width: 100,
    textAlign: 'Right'
  }];

  /**\r
   * Level 3: Deep Detail Grid Columns\r
   */
  const level3Columns: ColumnProps[] = [{
    field: 'ContainerID',
    headerText: 'Container ID',
    width: 120
  }, {
    field: 'ContainerType',
    headerText: 'Container Type',
    width: 150
  }, {
    field: 'Weight',
    headerText: 'Weight',
    width: 120
  }];

  /**\r
   * Level 3: Configuration for deepest detail grid\r
   */
  const level3Params: DetailCellRendererParams<Container> = {
    detailGridOptions: {
      columns: level3Columns,
      rowHeight: 32,
      height: 200
    },
    getDetailRowData: (params: GetDetailRowDataParams<Container>) => {
      params.successCallback(params.data.Items || []);
    }
  };

  /**\r
   * Level 2: Configuration for middle detail grid\r
   * Includes nested Level 3 params for further expansion\r
   */
  const level2Params: DetailCellRendererParams<OrderLine> = {
    detailGridOptions: {
      columns: level2Columns,
      // rowHeight: 32,
      height: 250,
      // Enable nesting for level 3
      maxNestingDepth: 3,
      currentNestingDepth: 2,
      detailCellRendererParams: level3Params,
      isMasterDetail: true,
      modules: {
        DetailGridModule
      }
    },
    getDetailRowData: (params: GetDetailRowDataParams<OrderLine>) => {
      console.log(\`[Level 2] Loading containers for Line \${params.data.ProductID}\`);
      const childData = params.data.Containers || [];
      params.successCallback(childData);
    }
  };

  /**\r
   * Level 1: Configuration for master grid\r
   * Includes nested Level 2 params\r
   */
  const level1Params: DetailCellRendererParams<Order> = {
    detailGridOptions: {
      columns: level2Columns,
      // rowHeight: 32,
      height: 280,
      sortSettings: {
        enabled: true
      },
      isMasterDetail: true,
      modules: {
        DetailGridModule
      },
      maxNestingDepth: 3,
      currentNestingDepth: 1,
      // Nested configuration for Level 2 details
      detailCellRendererParams: level2Params
    },
    getDetailRowData: (params: GetDetailRowDataParams<Order>) => {
      console.log(\`[Level 1] Loading lines for Order \${params.data.OrderID}\`);
      const childData = params.data.OrderLines || [];
      params.successCallback(childData);
    },
    onDetailGridCreated: () => {
      console.log(\`[Level 1] Detail grid created at depth 1\`);
    }
  };
  return <div style={{
    padding: '20px'
  }}>\r
      <h2>Advanced: Three-Level Nesting</h2>\r
      <p>Master Orders → Detail Lines → Container Items</p>\r
      <p style={{
      color: '#666',
      fontSize: '14px'
    }}>\r
        Expand orders to see lines, then expand lines to see container items.\r
      </p>\r
      <Grid<Order> ref={gridRef} dataSource={ordersForThreeLevelNesting} columns={level1Columns} isMasterDetail={true} modules={{
      DetailGridModule
    }} detailRowHeight={280} maxNestingDepth={3} currentNestingDepth={0} detailCellRendererParams={level1Params} toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']} />\r
    </div>;
}`,...(F=(b=m.parameters)==null?void 0:b.docs)==null?void 0:F.source},description:{story:`Story: Advanced - Three-Level Nesting\r
\r
Demonstrates recursive detail grids with three levels of nesting:\r
Master Orders → Detail Lines → Container Items\r
\r
Features:\r
- Recursive nesting up to 3 levels\r
- maxNestingDepth control\r
- Nested detailCellRendererParams\r
- Deep hierarchy support\r
\r
@component\r
@example\r
\`\`\`tsx\r
<MasterDetailAdvancedThreeLevelNesting />\r
\`\`\``,...(Q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:Q.description}}};const Z=["MasterDetailMode1NestedData","MasterDetailMode2MappingData","MasterDetailMode3AsyncData","MasterDetailAdvancedThreeLevelNesting"];export{m as MasterDetailAdvancedThreeLevelNesting,g as MasterDetailMode1NestedData,h as MasterDetailMode2MappingData,D as MasterDetailMode3AsyncData,Z as __namedExportsOrder,X as default};
