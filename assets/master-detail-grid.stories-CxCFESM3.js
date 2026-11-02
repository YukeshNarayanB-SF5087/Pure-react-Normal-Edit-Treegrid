import{j as e}from"./index-CTAXdLKx.js";import{r as n}from"./index-D5jfS-9e.js";import{G as h,u as M}from"./useGridTheme-lrKUE-ln.js";import"./client-Spw3EFno.js";import"./iframe-CIg2I0Z_.js";import"../sb-preview/runtime.js";const u=Array.from({length:100},(i,l)=>{const d=l+1;return{orderId:d,customerName:`Customer ${d}`,orderDate:`2026-05-${d%30+1}`.padStart(10,"0"),totalAmount:0,details:Array.from({length:3},(x,t)=>{const o=d*100+t+1,r=(t+1)*2,s=100+t*50,a=r*s;return{lineItemId:o,productName:`Product ${t+1}`,quantity:r,unitPrice:s,lineTotal:a}})}}).map(i=>(i.totalAmount=i.details.reduce((l,d)=>l+d.lineTotal,0),i)),m=()=>{const[i,l]=n.useState([]),d=n.useRef(null);M("material");const x=n.useCallback(a=>{console.log(`Row expanded: Order ${a.rowIndex}`,{customerName:a.data.customerName}),l(p=>[...new Set([...p,a.rowIndex])])},[]),t=n.useCallback(a=>{console.log(`Row collapsed: Order ${a.rowIndex}`),l(p=>p.filter(I=>I!==a.rowIndex))},[]),o=n.useMemo(()=>[{type:"checkbox",width:50},{field:"orderId",headerText:"Order ID",isPrimaryKey:!0,width:100},{field:"customerName",headerText:"Customer Name",width:200},{field:"orderDate",headerText:"Order Date",width:150,type:"date"},{field:"totalAmount",headerText:"Total Amount",width:150,type:"number",format:"C2"}],[]),r=n.useCallback(()=>e.jsx("div",{style:{marginLeft:"10px",width:"100%"},children:e.jsx(h,{dataSource:u,filterSettings:{enabled:!0,type:"Excel"},columns:o,height:250,width:"90%"})}),[]),s=n.useCallback(a=>{const p=[{field:"lineItemId",headerText:"Item ID",width:80},{field:"productName",headerText:"Product",width:150},{field:"quantity",headerText:"Quantity",width:100,type:"number"},{field:"unitPrice",headerText:"Unit Price",width:100,type:"number",format:"C2"},{field:"lineTotal",headerText:"Line Total",width:100,type:"number",format:"C2"}];return e.jsx("div",{style:{marginLeft:"5px",width:"100%"},children:e.jsx(h,{dataSource:a.row.details||[],columns:p,width:"95%",height:250,filterSettings:{enabled:!0,type:"Excel"},isMasterDetail:!0,detailRowHeight:300,detailRowTemplate:r})})},[]);return e.jsxs("div",{className:"e-grid",children:[e.jsx("h3",{children:"Master-Detail Grid: Detail Grid Template"}),e.jsx(h,{ref:d,dataSource:u,columns:o,height:500,isMasterDetail:!0,detailRowHeight:300,detailRowTemplate:s,onRowExpand:x,onRowCollapse:t,toolbar:["Add","Edit","Delete","Update","Cancel"],editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"}}),e.jsx("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#f0f0f0",borderRadius:"4px"},children:e.jsxs("p",{children:["Expanded Rows: ",i.length>0?i.join(", "):"None"]})})]})},c=()=>{const i=n.useRef(null);M("material");const l=n.useMemo(()=>[{field:"orderId",headerText:"Order ID",isPrimaryKey:!0,width:200},{field:"customerName",headerText:"Customer Name",width:200},{field:"orderDate",headerText:"Order Date",width:200,type:"date"},{field:"totalAmount",headerText:"Total Amount",width:200,type:"number",format:"C2"}],[]),d=n.useCallback(t=>(console.log("rowClass => ",t),""),[]),x=n.useCallback(t=>{const o=t.row.details||[];return e.jsxs("div",{style:{width:"100%",backgroundColor:"#f9f9f9"},children:[e.jsxs("h4",{children:["Order ",t.rowIndex," - ",t.row.customerName]}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginTop:"10px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#f5f5f5",borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"8px",textAlign:"left",borderRight:"1px solid #ddd"},children:"Product"}),e.jsx("th",{style:{padding:"8px",textAlign:"center",borderRight:"1px solid #ddd"},children:"Qty"}),e.jsx("th",{style:{padding:"8px",textAlign:"right",borderRight:"1px solid #ddd"},children:"Unit Price"}),e.jsx("th",{style:{padding:"8px",textAlign:"right"},children:"Line Total"})]})}),e.jsxs("tbody",{children:[o.length>0?o.map(r=>e.jsxs("tr",{style:{borderBottom:"1px solid #ddd",backgroundColor:"white"},children:[e.jsx("td",{style:{padding:"8px",borderRight:"1px solid #ddd"},children:r.productName}),e.jsx("td",{style:{padding:"8px",textAlign:"center",borderRight:"1px solid #ddd"},children:r.quantity}),e.jsxs("td",{style:{padding:"8px",textAlign:"right",borderRight:"1px solid #ddd"},children:["$",r.unitPrice.toFixed(2)]}),e.jsxs("td",{style:{padding:"8px",textAlign:"right",fontWeight:"bold"},children:["$",r.lineTotal.toFixed(2)]})]},r.lineItemId)):e.jsx("tr",{children:e.jsx("td",{colSpan:4,style:{padding:"8px",textAlign:"center",color:"#999"},children:"No items in this order"})}),o.length>0&&e.jsxs("tr",{style:{backgroundColor:"#f5f5f5",fontWeight:"bold",borderTop:"2px solid #ddd"},children:[e.jsx("td",{colSpan:3,style:{padding:"8px",textAlign:"right",borderRight:"1px solid #ddd"},children:"Total:"}),e.jsxs("td",{style:{padding:"8px",textAlign:"right"},children:["$",o.reduce((r,s)=>r+s.lineTotal,0).toFixed(2)]})]})]})]})]})},[]);return e.jsxs("div",{className:"e-grid",children:[e.jsx("h3",{children:"Master-Detail Grid: Custom HTML Detail Template"}),e.jsx(h,{ref:i,dataSource:u,columns:l,height:500,rowClass:d,isMasterDetail:!0,detailRowHeight:300,detailRowTemplate:x})]})},S={title:"Grid/Master-Detail",component:h};var g,w,f,y,T;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const gridRef = useRef<GridRef<OrderRecord>>(null);
  useGridTheme('material');

  /**\r
   * Handle row expansion event\r
   * Tracks expanded rows and logs event details\r
   */
  const handleRowExpanded = useCallback((args: RowExpandEvent<OrderRecord>) => {
    console.log(\`Row expanded: Order \${args.rowIndex}\`, {
      customerName: args.data.customerName
    });
    setExpandedRows(prev => [...new Set([...prev, args.rowIndex as number])]);
  }, []);

  /**\r
   * Handle row collapse event\r
   * Tracks collapsed rows and logs event details\r
   */
  const handleRowCollapsed = useCallback((args: RowCollapseEvent<OrderRecord>) => {
    console.log(\`Row collapsed: Order \${args.rowIndex}\`);
    setExpandedRows(prev => prev.filter(id => id !== args.rowIndex));
  }, []);

  /**\r
   * Define grid columns for master rows\r
   */
  const columns = useMemo(() => [{
    type: 'checkbox',
    width: 50
  }, {
    field: 'orderId',
    headerText: 'Order ID',
    isPrimaryKey: true,
    width: 100
  }, {
    field: 'customerName',
    headerText: 'Customer Name',
    width: 200
  }, {
    field: 'orderDate',
    headerText: 'Order Date',
    width: 150,
    type: 'date'
  }, {
    field: 'totalAmount',
    headerText: 'Total Amount',
    width: 150,
    type: 'number',
    format: 'C2'
  }], []);
  const renderDetailTemplate1 = useCallback(() => {
    return <div style={{
      marginLeft: '10px',
      width: '100%'
    }}
    //   style={{ padding: '20px', backgroundColor: '#f9f9f9' }}
    >\r
        {/* <h4>Order {params.rowIndex} Details - Customer: {params.row.customerName}</h4> */}\r
        <Grid dataSource={ordersWithDetails} filterSettings={{
        enabled: true,
        type: 'Excel'
      }} columns={columns} height={250} width={'90%'} />\r
      </div>;
  }, []);

  /**\r
   * Render detail Grid template\r
   */
  const renderDetailTemplate = useCallback((params: DetailRowTemplateParams<OrderRecord>) => {
    const detailColumns = [{
      field: 'lineItemId',
      headerText: 'Item ID',
      width: 80
    }, {
      field: 'productName',
      headerText: 'Product',
      width: 150
    }, {
      field: 'quantity',
      headerText: 'Quantity',
      width: 100,
      type: 'number'
    }, {
      field: 'unitPrice',
      headerText: 'Unit Price',
      width: 100,
      type: 'number',
      format: 'C2'
    }, {
      field: 'lineTotal',
      headerText: 'Line Total',
      width: 100,
      type: 'number',
      format: 'C2'
    }];
    return <div style={{
      marginLeft: '5px',
      width: '100%'
    }}
    // style={{ padding: '20px', backgroundColor: '#f9f9f9' }}
    >\r
        {/* <h4>Order {params.rowIndex} Details - Customer: {params.row.customerName}</h4> */}\r
       \r
        <Grid dataSource={params.row.details || []} columns={detailColumns} width={'95%'} height={250} filterSettings={{
        enabled: true,
        type: 'Excel'
      }} isMasterDetail={true} detailRowHeight={300} detailRowTemplate={renderDetailTemplate1} />\r
      </div>;
  }, []);
  return <div className="e-grid">\r
      <h3>Master-Detail Grid: Detail Grid Template</h3>\r
      <Grid ref={gridRef} dataSource={ordersWithDetails} columns={columns} height={500} isMasterDetail={true} detailRowHeight={300} detailRowTemplate={renderDetailTemplate} onRowExpand={handleRowExpanded} onRowCollapse={handleRowCollapsed} toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']} editSettings={{
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: "Normal"
    }} />\r
      <div style={{
      marginTop: '20px',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      borderRadius: '4px'
    }}>\r
        <p>Expanded Rows: {expandedRows.length > 0 ? expandedRows.join(', ') : 'None'}</p>\r
      </div>\r
    </div>;
}`,...(f=(w=m.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:`Master-Detail Grid Story: Simple Detail Template\r
\r
Demonstrates expandable master rows with detail content\r
rendered via a detail Grid component.\r
\r
Features:\r
- All rows are expandable master rows\r
- Expansion event tracking\r
- Detail Grid rendering\r
\r
@component\r
@example\r
\`\`\`tsx\r
<MasterDetailGridNestedMode />\r
\`\`\``,...(T=(y=m.parameters)==null?void 0:y.docs)==null?void 0:T.description}}};var R,b,D,C,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const gridRef = useRef<GridRef<OrderRecord>>(null);
  useGridTheme('material');

  /**\r
   * Define grid columns for master rows\r
   */
  const columns = useMemo(() => [{
    field: 'orderId',
    headerText: 'Order ID',
    isPrimaryKey: true,
    width: 200
  }, {
    field: 'customerName',
    headerText: 'Customer Name',
    width: 200
  }, {
    field: 'orderDate',
    headerText: 'Order Date',
    width: 200,
    type: 'date'
  }, {
    field: 'totalAmount',
    headerText: 'Total Amount',
    width: 200,
    type: 'number',
    format: 'C2'
  }], []);
  const rowClass1 = useCallback((props: RowClassProps<OrderRecord>) => {
    console.log('rowClass => ', props);
    return '';
  }, []);

  /**\r
   * Render custom HTML detail template\r
   */
  const renderDetailTemplate = useCallback((params: DetailRowTemplateParams<OrderRecord>) => {
    const items = params.row.details || [];
    return <div style={{
      width: '100%',
      backgroundColor: '#f9f9f9'
    }}>\r
        <h4>Order {params.rowIndex} - {params.row.customerName}</h4>\r
        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px'
      }}>\r
          <thead>\r
            <tr style={{
            backgroundColor: '#f5f5f5',
            borderBottom: '2px solid #ddd'
          }}>\r
              <th style={{
              padding: '8px',
              textAlign: 'left',
              borderRight: '1px solid #ddd'
            }}>Product</th>\r
              <th style={{
              padding: '8px',
              textAlign: 'center',
              borderRight: '1px solid #ddd'
            }}>Qty</th>\r
              <th style={{
              padding: '8px',
              textAlign: 'right',
              borderRight: '1px solid #ddd'
            }}>Unit Price</th>\r
              <th style={{
              padding: '8px',
              textAlign: 'right'
            }}>Line Total</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {items.length > 0 ? items.map((item: LineItem) => <tr key={item.lineItemId} style={{
            borderBottom: '1px solid #ddd',
            backgroundColor: 'white'
          }}>\r
                  <td style={{
              padding: '8px',
              borderRight: '1px solid #ddd'
            }}>{item.productName}</td>\r
                  <td style={{
              padding: '8px',
              textAlign: 'center',
              borderRight: '1px solid #ddd'
            }}>{item.quantity}</td>\r
                  <td style={{
              padding: '8px',
              textAlign: 'right',
              borderRight: '1px solid #ddd'
            }}>\${item.unitPrice.toFixed(2)}</td>\r
                  <td style={{
              padding: '8px',
              textAlign: 'right',
              fontWeight: 'bold'
            }}>\${item.lineTotal.toFixed(2)}</td>\r
                </tr>) : <tr>\r
                <td colSpan={4} style={{
              padding: '8px',
              textAlign: 'center',
              color: '#999'
            }}>\r
                  No items in this order\r
                </td>\r
              </tr>}\r
            {items.length > 0 && <tr style={{
            backgroundColor: '#f5f5f5',
            fontWeight: 'bold',
            borderTop: '2px solid #ddd'
          }}>\r
                <td colSpan={3} style={{
              padding: '8px',
              textAlign: 'right',
              borderRight: '1px solid #ddd'
            }}>\r
                  Total:\r
                </td>\r
                <td style={{
              padding: '8px',
              textAlign: 'right'
            }}>\r
                  \${items.reduce((sum, item) => sum + item.lineTotal, 0).toFixed(2)}\r
                </td>\r
              </tr>}\r
          </tbody>\r
        </table>\r
      </div>;
  }, []);
  return <div className="e-grid">\r
      <h3>Master-Detail Grid: Custom HTML Detail Template</h3>\r
      <Grid ref={gridRef} dataSource={ordersWithDetails} columns={columns} height={500} rowClass={rowClass1} isMasterDetail={true} detailRowHeight={300}
    // width={800}
    // virtualizationSettings={{viewPortBuffer: { rows: 10}}}
    // detailRowTemplate={renderDetailTemplate}
    detailRowTemplate={renderDetailTemplate}
    // onRowExpanded={handleRowExpanded}
    // onRowCollapsed={handleRowCollapsed}
    // defaultExpandedRows={[2,3,4,44,43,45,46,47,48,78,79,80]}
    // { 1000: true }
    />\r
    </div>;
}`,...(D=(b=c.parameters)==null?void 0:b.docs)==null?void 0:D.source},description:{story:`Master-Detail Grid Story: Custom HTML Detail Template\r
\r
Demonstrates expandable master rows with custom HTML\r
detail content using a formatted table display.\r
\r
Features:\r
- All rows are expandable master rows\r
- Custom HTML detail template\r
- Formatted table rendering\r
- Event tracking\r
\r
@component\r
@example\r
\`\`\`tsx\r
<MasterDetailGridMappingMode />\r
\`\`\``,...(A=(C=c.parameters)==null?void 0:C.docs)==null?void 0:A.description}}};const O=["MasterDetailGridNestedMode","MasterDetailGridMappingMode"];export{c as MasterDetailGridMappingMode,m as MasterDetailGridNestedMode,O as __namedExportsOrder,S as default};
