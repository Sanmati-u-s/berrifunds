import TreeSVG from "./TreeSVG";
import logo from "../../assets/logo.svg";

function GardenFrame({ onLogout }) {
  return (
    <div className="garden-frame">
      {/* Decorative Trees */}
      <div className="tree-left"><TreeSVG berries={6} /></div>
      <div className="tree-right"><TreeSVG berries={8} /></div>
      <div className="tree-bottom"><TreeSVG berries={4} /></div>

      {/* Header */}
      <div className="garden-header" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
          <img src={logo} alt="BerriFunds logo" className="logo" style={{width: 40, height: 40}} />
          <div>
            <div className="brand-name" style={{fontWeight: '700', color:'#971549'}}>BerriFunds</div>
            <div className="garden-title">🌿 Your Berry Garden</div>
          </div>
        </div>

        <div>
          <input
  type="month"
  value={new Date().toISOString().slice(0, 7)}
  onChange={(e) => console.log("Selected month:", e.target.value)}
/>

          <button onClick={onLogout}>Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="garden-content">
        {/* LEFT */}
        <div className="side-panel">
  <div className="card clickable" >
    <button className="click" onClick={() => alert("Add Expense clicked")}>Add Expense</button>
  </div>

  <div className="card clickable"><button className="click" onClick={() => alert("Add Income clicked")}>
    Add Income
  </button></div>
</div>


        {/* CENTER */}
        <div className="center-area">
          <div className="chart-row">
            📊 Pie Chart (Coming Soon)
            📈 Bar Chart (Coming Soon)
          </div>

          <div>
            <p style={{ textAlign: "center" }}>category wise spending</p>
            <div className="category-bar">
              <div className="category-box red"></div>
              <div className="category-box pink"></div>
              <div className="category-box yellow"></div>
              <div className="category-box purple"></div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="side-panel">
  <div className="card">total money spent</div>

  <div className="card clickable" onClick={() => alert("Set Budget clicked")}>
    Set Budget
  </div>
</div>

      </div>
    </div>
  );
}

export default GardenFrame;
