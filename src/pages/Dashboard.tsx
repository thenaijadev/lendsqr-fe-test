import React from "react";
import DashboardNavBar from "../components/dashBoardPageComponents/DashboardNavBar";
import MuiTable from "../components/dashBoardPageComponents/UserDataTable";
import SideMenu from "../components/dashBoardPageComponents/SideMenu";
import UserDataTable from "../components/dashBoardPageComponents/UserDataTable";
import UserStats from "../components/dashBoardPageComponents/UserStats";
import "../Styles/dashboard.css";
import FilterForm from "../components/dashBoardPageComponents/FilterForm";
function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardNavBar />

      <div className="dash_parent">
        <SideMenu />
        <div>
          {" "}
          <UserStats />
          <UserDataTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
