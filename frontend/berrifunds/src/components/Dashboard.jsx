import GardenFrame from "./garden/GardenFrame";
import "./Dashboard.css";

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-page">
      <GardenFrame onLogout={onLogout} />
    </div>
  );
}

export default Dashboard;
