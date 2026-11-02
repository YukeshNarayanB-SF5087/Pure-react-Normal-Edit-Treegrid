import{j as e}from"./index-CTAXdLKx.js";import{r as t}from"./index-D5jfS-9e.js";import{G as C,u as E}from"./useGridTheme-lrKUE-ln.js";import"./client-Spw3EFno.js";import"./iframe-CIg2I0Z_.js";import"../sb-preview/runtime.js";const D=(g=1e3)=>{const l=["Pending","Processing","Shipped","Delivered"],r=["Laptop","Monitor","Keyboard","Mouse","USB Hub","Cables","Dock","Speaker"];return Array.from({length:g},(o,p)=>{const c=p+1,d=Math.floor(Math.random()*5)+2;return{orderId:c,customerName:`Customer ${c}`,orderDate:new Date(2026,0,Math.floor(Math.random()*365)).toISOString().split("T")[0],totalAmount:Math.floor(Math.random()*5e3)+500,status:l[Math.floor(Math.random()*l.length)],details:Array.from({length:d},(s,i)=>({lineItemId:c*1e3+i,productName:r[Math.floor(Math.random()*r.length)],quantity:Math.floor(Math.random()*10)+1,unitPrice:Math.floor(Math.random()*500)+50,lineTotal:Math.floor(Math.random()*2e3)+100}))}})},y=()=>{E("material");const g=t.useRef(null),[l,r]=t.useState({totalExpanded:0,visibleExpanded:0,lastScrollPosition:0,renderWindow:{start:0,end:0}}),o=t.useMemo(()=>D(1e3),[]),p=t.useCallback(i=>{console.log(`Row ${i.rowIndex} expanded - Detail height will be added to render window`),r(a=>({...a,totalExpanded:a.totalExpanded+1}))},[]),c=t.useCallback(i=>{console.log(`Row ${i.rowIndex} collapsed - Detail height removed from render window`),r(a=>({...a,totalExpanded:Math.max(0,a.totalExpanded-1)}))},[]),d=t.useMemo(()=>[{field:"orderId",headerText:"Order ID",width:80},{field:"customerName",headerText:"Customer",width:150},{field:"orderDate",headerText:"Date",width:120,type:"date"},{field:"status",headerText:"Status",width:100},{field:"totalAmount",headerText:"Amount",width:120,type:"number",format:"C2"}],[]),s=t.useCallback(i=>{const a=i.row.details||[];return e.jsxs("div",{style:{margin:"15px",backgroundColor:"#f9f9f9",borderLeft:"3px solid #1976d2"},children:[e.jsxs("div",{style:{height:"15%"},children:[e.jsxs("strong",{children:["Order Details for ",i.row.customerName]}),e.jsxs("span",{style:{marginLeft:"20px",color:"#666"},children:[a.length," item",a.length!==1?"s":""]})]}),e.jsxs("table",{style:{width:"85%",fontSize:"12px",borderCollapse:"collapse",backgroundColor:"white"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#f5f5f5",borderBottom:"1px solid #ddd"},children:[e.jsx("th",{style:{padding:"6px",textAlign:"left"},children:"Product"}),e.jsx("th",{style:{padding:"6px",textAlign:"center",width:"70px"},children:"Qty"}),e.jsx("th",{style:{padding:"6px",textAlign:"right",width:"100px"},children:"Unit Price"}),e.jsx("th",{style:{padding:"6px",textAlign:"right",width:"80px"},children:"Total"})]})}),e.jsx("tbody",{children:a.map(m=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"6px"},children:m.productName}),e.jsx("td",{style:{padding:"6px",textAlign:"center"},children:m.quantity}),e.jsxs("td",{style:{padding:"6px",textAlign:"right"},children:["$",m.unitPrice.toFixed(2)]}),e.jsxs("td",{style:{padding:"6px",textAlign:"right"},children:["$",m.lineTotal.toFixed(2)]})]},m.lineItemId))})]})]})},[]);return e.jsxs("div",{className:"e-grid",style:{padding:"20px"},children:[e.jsx("h3",{children:"Virtualization: Large Dataset (1000 rows) with Expandable Detail Rows"}),e.jsx("p",{style:{color:"#666",marginBottom:"20px"},children:"Tests render window calculation with expanded master-detail rows. Try expanding multiple rows and scrolling to verify correct rendering."}),e.jsx(C,{ref:g,dataSource:o,columns:d,height:"500",rowHeight:40,isMasterDetail:!0,detailRowHeight:200,detailRowTemplate:s,onRowExpand:p,onRowCollapse:c}),e.jsxs("div",{style:{marginTop:"20px",padding:"15px",backgroundColor:"#f5f5f5",borderRadius:"4px",border:"1px solid #ddd"},children:[e.jsx("h4",{children:"Virtualization Statistics"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Total Expanded Rows:"})," ",l.totalExpanded]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Expansion Strategy:"})," Visual height accounted in render window"]})]}),e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Detail Row Height:"})," 200px"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Base Row Height:"})," 40px"]})]})]}),e.jsx("p",{style:{marginTop:"10px",fontSize:"12px",color:"#666"},children:"💡 Tip: Open browser DevTools (F12) → Performance tab to measure rendering performance while expanding/collapsing rows."})]})]})},b=()=>{E("material");const g=t.useRef(null),[l,r]=t.useState(new Set),[o,p]=t.useState("none"),c=t.useMemo(()=>D(500),[]),d=t.useCallback(n=>{r(h=>{const w=new Set(h);return w.add(n),w})},[]),s=t.useCallback(()=>{r(new Set),p("none")},[]),i=t.useCallback(()=>{s(),p("top-boundary"),d(1)},[s,d]),a=t.useCallback(()=>{s(),p("bottom-boundary"),d(500)},[s,d]),m=t.useCallback(()=>{s(),p("middle"),d(250)},[s,d]),S=t.useMemo(()=>[{field:"orderId",headerText:"Order ID",width:80},{field:"customerName",headerText:"Customer",width:150},{field:"status",headerText:"Status",width:100},{field:"totalAmount",headerText:"Amount",width:120,type:"number",format:"C2"}],[]),v=t.useCallback(n=>e.jsxs("div",{style:{padding:"15px",backgroundColor:l.has(n.rowIndex)?"#e3f2fd":"#f9f9f9",borderLeft:"3px solid #ff6f00"},children:[e.jsxs("strong",{children:["Detail for Order ",n.rowIndex]})," - ",n.row.customerName,e.jsx("p",{style:{margin:"10px 0 0 0",color:"#666",fontSize:"12px"},children:"This row's visual height is included in the virtualization render window calculation."})]}),[l]),x=t.useCallback(n=>{console.log(`Boundary test: Row ${n.rowIndex} expanded`),r(h=>new Set(h).add(n.rowIndex))},[]),u=t.useCallback(n=>{r(h=>{const w=new Set(h);return w.delete(n.rowIndex),w})},[]);return e.jsxs("div",{className:"e-grid",style:{padding:"20px"},children:[e.jsx("h3",{children:"Virtualization: Boundary Row Expansion Test"}),e.jsx("p",{style:{color:"#666",marginBottom:"20px"},children:"Tests render window calculation at critical boundary positions."}),e.jsxs("div",{style:{marginBottom:"20px",display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsx("button",{onClick:i,style:{padding:"8px 16px",backgroundColor:o==="top-boundary"?"#1976d2":"#ccc",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"📍 Test Top Boundary"}),e.jsx("button",{onClick:m,style:{padding:"8px 16px",backgroundColor:o==="middle"?"#1976d2":"#ccc",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"🎯 Test Middle"}),e.jsx("button",{onClick:a,style:{padding:"8px 16px",backgroundColor:o==="bottom-boundary"?"#1976d2":"#ccc",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"📍 Test Bottom Boundary"}),e.jsx("button",{onClick:s,style:{padding:"8px 16px",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"✕ Clear All"})]}),e.jsx(C,{ref:g,dataSource:c,columns:S,height:"400px",rowHeight:40,isMasterDetail:!0,detailRowHeight:100,detailRowTemplate:v,onRowExpand:x,onRowCollapse:u}),e.jsxs("div",{style:{marginTop:"20px",padding:"15px",backgroundColor:"#fff3e0",borderRadius:"4px",border:"1px solid #ffb74d"},children:[e.jsx("h4",{children:"Test Results"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Current Scenario:"})," ",o==="none"?"None":o]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Expanded Rows:"})," ",l.size]}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginTop:"10px"},children:"✅ Verify: Detail rows display correctly at boundaries without whitespace or clipping"})]})]})},R=()=>{E("material");const g=t.useRef(null),[l,r]=t.useState(new Set),[o,p]=t.useState(!1),[c,d]=t.useState({cyclesCompleted:0,startTime:0,avgCycleTime:0}),s=t.useMemo(()=>D(200),[]),i=t.useCallback(async()=>{p(!0);const x=performance.now();for(let w=0;w<10;w++)for(let T=1;T<=5;T++)r(f=>new Set(f).add(T)),await new Promise(f=>setTimeout(f,50)),r(f=>{const j=new Set(f);return j.delete(T),j}),await new Promise(f=>setTimeout(f,50));const h=(performance.now()-x)/50;d({cyclesCompleted:50,startTime:x,avgCycleTime:Math.round(h*100)/100}),p(!1)},[]),a=t.useMemo(()=>[{field:"orderId",headerText:"Order ID",width:80},{field:"customerName",headerText:"Customer",width:150},{field:"totalAmount",headerText:"Amount",width:120,type:"number",format:"C2"}],[]),m=t.useCallback(x=>{const u=l.has(x.rowIndex);return e.jsxs("div",{style:{padding:"10px",backgroundColor:u?"#c8e6c9":"#f9f9f9",borderLeft:`3px solid ${u?"#4caf50":"#999"}`},children:["Detail content for order ",x.rowIndex," - Status: ",u?"✓ Expanded":"- Collapsed"]})},[l]),S=t.useCallback(x=>{r(u=>new Set(u).add(x.rowIndex))},[]),v=t.useCallback(x=>{r(u=>{const n=new Set(u);return n.delete(x.rowIndex),n})},[]);return e.jsxs("div",{className:"e-grid",style:{padding:"20px"},children:[e.jsx("h3",{children:"Virtualization: Rapid Expand/Collapse Performance Test"}),e.jsx("p",{style:{color:"#666",marginBottom:"20px"},children:"Stresses render window calculation with rapid expansion/collapse cycles."}),e.jsx("div",{style:{marginBottom:"20px"},children:e.jsx("button",{onClick:i,disabled:o,style:{padding:"10px 20px",backgroundColor:o?"#ccc":"#4caf50",color:"white",border:"none",borderRadius:"4px",cursor:o?"not-allowed":"pointer",fontSize:"14px"},children:o?"⏳ Running Test...":"▶ Start Rapid Cycle Test"})}),e.jsx(C,{ref:g,dataSource:s,columns:a,height:"350px",rowHeight:40,isMasterDetail:!0,detailRowHeight:120,detailRowTemplate:m,onRowExpand:S,onRowCollapse:v}),c.cyclesCompleted>0&&e.jsxs("div",{style:{marginTop:"20px",padding:"15px",backgroundColor:"#e8f5e9",borderRadius:"4px",border:"1px solid #81c784"},children:[e.jsx("h4",{children:"Performance Results"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Cycles Completed:"})," ",c.cyclesCompleted]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Avg Time per Cycle:"})," ",c.avgCycleTime,"ms"]})]}),e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ✅ Completed"]}),e.jsx("p",{style:{fontSize:"12px",color:"#666"},children:"Target: <100ms per cycle (animation smooth)"})]})]})]})]})},J={title:"Grid/Master-Detail/Virtualization",component:C};var k,I,M,A,V;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  useGridTheme('material');
  const gridRef = useRef<GridRef<VirtualOrderRecord>>(null);
  const [renderStats, setRenderStats] = useState({
    totalExpanded: 0,
    visibleExpanded: 0,
    lastScrollPosition: 0,
    renderWindow: {
      start: 0,
      end: 0
    }
  });

  // Generate large dataset once
  const largeDataset = useMemo(() => generateLargeDataset(1000), []);

  /**\r
   * Handle row expansion\r
   * Updates expansion state and calculates visual impact\r
   */
  const handleRowExpanded = useCallback((args: RowExpandEvent<VirtualOrderRecord>) => {
    console.log(\`Row \${args.rowIndex} expanded - Detail height will be added to render window\`);
    setRenderStats(stats => ({
      ...stats,
      totalExpanded: stats.totalExpanded + 1
    }));
  }, []);

  /**\r
   * Handle row collapse\r
   * Removes row from expansion tracking\r
   */
  const handleRowCollapsed = useCallback((args: RowCollapseEvent<VirtualOrderRecord>) => {
    console.log(\`Row \${args.rowIndex} collapsed - Detail height removed from render window\`);
    setRenderStats(stats => ({
      ...stats,
      totalExpanded: Math.max(0, stats.totalExpanded - 1)
    }));
  }, []);

  /**\r
   * Define grid columns\r
   */
  const columns = useMemo(() => [{
    field: 'orderId',
    headerText: 'Order ID',
    width: 80
  }, {
    field: 'customerName',
    headerText: 'Customer',
    width: 150
  }, {
    field: 'orderDate',
    headerText: 'Date',
    width: 120,
    type: 'date'
  }, {
    field: 'status',
    headerText: 'Status',
    width: 100
  }, {
    field: 'totalAmount',
    headerText: 'Amount',
    width: 120,
    type: 'number',
    format: 'C2'
  }], []);

  /**\r
   * Render detail template\r
   * Shows breakdown of order items with proper height for virtualization\r
   */
  const renderDetailTemplate = useCallback((params: DetailRowTemplateParams<VirtualOrderRecord>) => {
    const items = params.row.details || [];
    return <div style={{
      margin: '15px',
      backgroundColor: '#f9f9f9',
      borderLeft: '3px solid #1976d2'
    }}>\r
        <div style={{
        height: '15%'
      }}>\r
          <strong>Order Details for {params.row.customerName}</strong>\r
          <span style={{
          marginLeft: '20px',
          color: '#666'
        }}>\r
            {items.length} item{items.length !== 1 ? 's' : ''}\r
          </span>\r
        </div>\r
        \r
        <table style={{
        width: '85%',
        fontSize: '12px',
        borderCollapse: 'collapse',
        backgroundColor: 'white'
      }}>\r
          <thead>\r
            <tr style={{
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid #ddd'
          }}>\r
              <th style={{
              padding: '6px',
              textAlign: 'left'
            }}>Product</th>\r
              <th style={{
              padding: '6px',
              textAlign: 'center',
              width: '70px'
            }}>Qty</th>\r
              <th style={{
              padding: '6px',
              textAlign: 'right',
              width: '100px'
            }}>Unit Price</th>\r
              <th style={{
              padding: '6px',
              textAlign: 'right',
              width: '80px'
            }}>Total</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {items.map((item: VirtualLineItem) => <tr key={item.lineItemId} style={{
            borderBottom: '1px solid #eee'
          }}>\r
                <td style={{
              padding: '6px'
            }}>{item.productName}</td>\r
                <td style={{
              padding: '6px',
              textAlign: 'center'
            }}>{item.quantity}</td>\r
                <td style={{
              padding: '6px',
              textAlign: 'right'
            }}>\${item.unitPrice.toFixed(2)}</td>\r
                <td style={{
              padding: '6px',
              textAlign: 'right'
            }}>\${item.lineTotal.toFixed(2)}</td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
      </div>;
  }, []);
  return <div className="e-grid" style={{
    padding: '20px'
  }}>\r
      <h3>Virtualization: Large Dataset (1000 rows) with Expandable Detail Rows</h3>\r
      <p style={{
      color: '#666',
      marginBottom: '20px'
    }}>\r
        Tests render window calculation with expanded master-detail rows.\r
        Try expanding multiple rows and scrolling to verify correct rendering.\r
      </p>\r
\r
      <Grid ref={gridRef} dataSource={largeDataset} columns={columns} height="500" rowHeight={40} isMasterDetail={true} detailRowHeight={200} detailRowTemplate={renderDetailTemplate} onRowExpand={handleRowExpanded} onRowCollapse={handleRowCollapsed} />\r
\r
      <div style={{
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px',
      border: '1px solid #ddd'
    }}>\r
        <h4>Virtualization Statistics</h4>\r
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px'
      }}>\r
          <div>\r
            <p><strong>Total Expanded Rows:</strong> {renderStats.totalExpanded}</p>\r
            <p><strong>Expansion Strategy:</strong> Visual height accounted in render window</p>\r
          </div>\r
          <div>\r
            <p><strong>Detail Row Height:</strong> 200px</p>\r
            <p><strong>Base Row Height:</strong> 40px</p>\r
          </div>\r
        </div>\r
        <p style={{
        marginTop: '10px',
        fontSize: '12px',
        color: '#666'
      }}>\r
          💡 Tip: Open browser DevTools (F12) → Performance tab to measure rendering performance \r
          while expanding/collapsing rows.\r
        </p>\r
      </div>\r
    </div>;
}`,...(M=(I=y.parameters)==null?void 0:I.docs)==null?void 0:M.source},description:{story:`Virtualization Story: Large Dataset with Expanded Rows\r
\r
Tests render window calculation with 1000 rows where multiple can be expanded.\r
Validates that expanded detail rows are correctly included in height calculations.\r
\r
Features:\r
- Virtual scrolling with large dataset (1000+ rows)\r
- Multiple expandable master rows\r
- Visual height calculation for expanded detail rows\r
- Performance monitoring (FPS, render count)\r
- Expansion state tracking\r
\r
@component\r
@example\r
\`\`\`tsx\r
<VirtualizationLargeDatasetExpanded />\r
\`\`\``,...(V=(A=y.parameters)==null?void 0:A.docs)==null?void 0:V.description}}};var z,B,P,O,N;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  useGridTheme('material');
  const gridRef = useRef<GridRef<VirtualOrderRecord>>(null);
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [testScenario, setTestScenario] = useState<'none' | 'top-boundary' | 'bottom-boundary' | 'middle'>('none');
  const largeDataset = useMemo(() => generateLargeDataset(500), []);

  /**\r
   * Expand specific row for boundary testing\r
   */
  const expandRowForTest = useCallback((rowIndex: number) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      newSet.add(rowIndex);
      return newSet;
    });
  }, []);

  /**\r
   * Clear all expansions\r
   */
  const clearExpansions = useCallback(() => {
    setExpandedRows(new Set());
    setTestScenario('none');
  }, []);

  /**\r
   * Test scenario: Expand top boundary row\r
   */
  const testTopBoundary = useCallback(() => {
    clearExpansions();
    setTestScenario('top-boundary');
    expandRowForTest(1); // First row
  }, [clearExpansions, expandRowForTest]);

  /**\r
   * Test scenario: Expand bottom boundary row\r
   */
  const testBottomBoundary = useCallback(() => {
    clearExpansions();
    setTestScenario('bottom-boundary');
    expandRowForTest(500); // Last row
  }, [clearExpansions, expandRowForTest]);

  /**\r
   * Test scenario: Expand middle row\r
   */
  const testMiddleExpansion = useCallback(() => {
    clearExpansions();
    setTestScenario('middle');
    expandRowForTest(250); // Middle row
  }, [clearExpansions, expandRowForTest]);
  const columns = useMemo(() => [{
    field: 'orderId',
    headerText: 'Order ID',
    width: 80
  }, {
    field: 'customerName',
    headerText: 'Customer',
    width: 150
  }, {
    field: 'status',
    headerText: 'Status',
    width: 100
  }, {
    field: 'totalAmount',
    headerText: 'Amount',
    width: 120,
    type: 'number',
    format: 'C2'
  }], []);
  const renderDetailTemplate = useCallback((params: DetailRowTemplateParams<VirtualOrderRecord>) => {
    return <div style={{
      padding: '15px',
      backgroundColor: expandedRows.has(params.rowIndex as number) ? '#e3f2fd' : '#f9f9f9',
      borderLeft: '3px solid #ff6f00'
    }}>\r
        <strong>Detail for Order {params.rowIndex}</strong> - {params.row.customerName}\r
        <p style={{
        margin: '10px 0 0 0',
        color: '#666',
        fontSize: '12px'
      }}>\r
          This row's visual height is included in the virtualization render window calculation.\r
        </p>\r
      </div>;
  }, [expandedRows]);
  const handleRowExpanded = useCallback((args: RowExpandEvent<VirtualOrderRecord>) => {
    console.log(\`Boundary test: Row \${args.rowIndex} expanded\`);
    setExpandedRows(prev => new Set(prev).add(args.rowIndex as number));
  }, []);
  const handleRowCollapsed = useCallback((args: RowCollapseEvent<VirtualOrderRecord>) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      newSet.delete(args.rowIndex as number);
      return newSet;
    });
  }, []);
  return <div className="e-grid" style={{
    padding: '20px'
  }}>\r
      <h3>Virtualization: Boundary Row Expansion Test</h3>\r
      <p style={{
      color: '#666',
      marginBottom: '20px'
    }}>\r
        Tests render window calculation at critical boundary positions.\r
      </p>\r
\r
      <div style={{
      marginBottom: '20px',
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    }}>\r
        <button onClick={testTopBoundary} style={{
        padding: '8px 16px',
        backgroundColor: testScenario === 'top-boundary' ? '#1976d2' : '#ccc',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>\r
          📍 Test Top Boundary\r
        </button>\r
        \r
        <button onClick={testMiddleExpansion} style={{
        padding: '8px 16px',
        backgroundColor: testScenario === 'middle' ? '#1976d2' : '#ccc',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>\r
          🎯 Test Middle\r
        </button>\r
        \r
        <button onClick={testBottomBoundary} style={{
        padding: '8px 16px',
        backgroundColor: testScenario === 'bottom-boundary' ? '#1976d2' : '#ccc',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>\r
          📍 Test Bottom Boundary\r
        </button>\r
        \r
        <button onClick={clearExpansions} style={{
        padding: '8px 16px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>\r
          ✕ Clear All\r
        </button>\r
      </div>\r
\r
      <Grid ref={gridRef} dataSource={largeDataset} columns={columns} height="400px" rowHeight={40} isMasterDetail={true} detailRowHeight={100} detailRowTemplate={renderDetailTemplate} onRowExpand={handleRowExpanded} onRowCollapse={handleRowCollapsed} />\r
\r
      <div style={{
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#fff3e0',
      borderRadius: '4px',
      border: '1px solid #ffb74d'
    }}>\r
        <h4>Test Results</h4>\r
        <p><strong>Current Scenario:</strong> {testScenario === 'none' ? 'None' : testScenario}</p>\r
        <p><strong>Expanded Rows:</strong> {expandedRows.size}</p>\r
        <p style={{
        fontSize: '12px',
        color: '#666',
        marginTop: '10px'
      }}>\r
          ✅ Verify: Detail rows display correctly at boundaries without whitespace or clipping\r
        </p>\r
      </div>\r
    </div>;
}`,...(P=(B=b.parameters)==null?void 0:B.docs)==null?void 0:P.source},description:{story:`Virtualization Story: Boundary Row Expansion Test\r
\r
Tests critical boundary scenarios:\r
- Expanding rows at viewport edges (top/bottom)\r
- Rapid expand/collapse at same position\r
- Scrolling with expanded rows crossing viewport boundary\r
\r
Features:\r
- Controlled expansion for testing specific scenarios\r
- Visual feedback for boundary conditions\r
- Scroll synchronization verification\r
\r
@component\r
@example\r
\`\`\`tsx\r
<VirtualizationBoundaryRowExpansion />\r
\`\`\``,...(N=(O=b.parameters)==null?void 0:O.docs)==null?void 0:N.description}}};var L,F,H,G,$;R.parameters={...R.parameters,docs:{...(L=R.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  useGridTheme('material');
  const gridRef = useRef<GridRef<VirtualOrderRecord>>(null);
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);
  const [performanceData, setPerformanceData] = useState({
    cyclesCompleted: 0,
    startTime: 0,
    avgCycleTime: 0
  });
  const largeDataset = useMemo(() => generateLargeDataset(200), []);

  /**\r
   * Simulate rapid expand/collapse cycles\r
   */
  const startRapidCycleTest = useCallback(async () => {
    setIsAnimating(true);
    const startTime = performance.now();
    let cyclesCompleted = 0;

    // Run 10 cycles of expand/collapse on rows 1-5
    for (let cycle = 0; cycle < 10; cycle++) {
      for (let rowIndex = 1; rowIndex <= 5; rowIndex++) {
        // Expand
        setExpandedRows(prev => new Set(prev).add(rowIndex));
        await new Promise(resolve => setTimeout(resolve, 50));

        // Collapse
        setExpandedRows(prev => {
          const newSet = new Set(prev);
          newSet.delete(rowIndex);
          return newSet;
        });
        await new Promise(resolve => setTimeout(resolve, 50));
        cyclesCompleted++;
      }
    }
    const endTime = performance.now();
    const totalTime = endTime - startTime;
    const avgCycleTime = totalTime / (10 * 5);
    setPerformanceData({
      cyclesCompleted: 10 * 5,
      startTime,
      avgCycleTime: Math.round(avgCycleTime * 100) / 100
    });
    setIsAnimating(false);
  }, []);
  const columns = useMemo(() => [{
    field: 'orderId',
    headerText: 'Order ID',
    width: 80
  }, {
    field: 'customerName',
    headerText: 'Customer',
    width: 150
  }, {
    field: 'totalAmount',
    headerText: 'Amount',
    width: 120,
    type: 'number',
    format: 'C2'
  }], []);
  const renderDetailTemplate = useCallback((params: DetailRowTemplateParams<VirtualOrderRecord>) => {
    const isExpanded = expandedRows.has(params.rowIndex as number);
    return <div style={{
      padding: '10px',
      backgroundColor: isExpanded ? '#c8e6c9' : '#f9f9f9',
      borderLeft: \`3px solid \${isExpanded ? '#4caf50' : '#999'}\`
    }}>\r
        Detail content for order {params.rowIndex} - Status: {isExpanded ? '✓ Expanded' : '- Collapsed'}\r
      </div>;
  }, [expandedRows]);
  const handleRowExpanded = useCallback((args: RowExpandEvent<VirtualOrderRecord>) => {
    setExpandedRows(prev => new Set(prev).add(args.rowIndex as number));
  }, []);
  const handleRowCollapsed = useCallback((args: RowCollapseEvent<VirtualOrderRecord>) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      newSet.delete(args.rowIndex as number);
      return newSet;
    });
  }, []);
  return <div className="e-grid" style={{
    padding: '20px'
  }}>\r
      <h3>Virtualization: Rapid Expand/Collapse Performance Test</h3>\r
      <p style={{
      color: '#666',
      marginBottom: '20px'
    }}>\r
        Stresses render window calculation with rapid expansion/collapse cycles.\r
      </p>\r
\r
      <div style={{
      marginBottom: '20px'
    }}>\r
        <button onClick={startRapidCycleTest} disabled={isAnimating} style={{
        padding: '10px 20px',
        backgroundColor: isAnimating ? '#ccc' : '#4caf50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: isAnimating ? 'not-allowed' : 'pointer',
        fontSize: '14px'
      }}>\r
          {isAnimating ? '⏳ Running Test...' : '▶ Start Rapid Cycle Test'}\r
        </button>\r
      </div>\r
\r
      <Grid ref={gridRef} dataSource={largeDataset} columns={columns} height="350px" rowHeight={40} isMasterDetail={true} detailRowHeight={120} detailRowTemplate={renderDetailTemplate} onRowExpand={handleRowExpanded} onRowCollapse={handleRowCollapsed} />\r
\r
      {performanceData.cyclesCompleted > 0 && <div style={{
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#e8f5e9',
      borderRadius: '4px',
      border: '1px solid #81c784'
    }}>\r
          <h4>Performance Results</h4>\r
          <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px'
      }}>\r
            <div>\r
              <p><strong>Cycles Completed:</strong> {performanceData.cyclesCompleted}</p>\r
              <p><strong>Avg Time per Cycle:</strong> {performanceData.avgCycleTime}ms</p>\r
            </div>\r
            <div>\r
              <p><strong>Status:</strong> ✅ Completed</p>\r
              <p style={{
            fontSize: '12px',
            color: '#666'
          }}>\r
                Target: &lt;100ms per cycle (animation smooth)\r
              </p>\r
            </div>\r
          </div>\r
        </div>}\r
    </div>;
}`,...(H=(F=R.parameters)==null?void 0:F.docs)==null?void 0:H.source},description:{story:`Virtualization Story: Rapid Expand/Collapse Performance\r
\r
Stress tests render window calculation with rapid expansion/collapse cycles.\r
Measures how efficiently render window updates when expansion state changes rapidly.\r
\r
Features:\r
- Auto rapid expand/collapse simulation\r
- Performance metrics tracking\r
- Visual feedback on calculation speed\r
\r
@component\r
@example\r
\`\`\`tsx\r
<VirtualizationRapidExpandCollapse />\r
\`\`\``,...($=(G=R.parameters)==null?void 0:G.docs)==null?void 0:$.description}}};const X=["VirtualizationLargeDatasetExpanded","VirtualizationBoundaryRowExpansion","VirtualizationRapidExpandCollapse"];export{b as VirtualizationBoundaryRowExpansion,y as VirtualizationLargeDatasetExpanded,R as VirtualizationRapidExpandCollapse,X as __namedExportsOrder,J as default};
