import React from "react";
import "../../Styles/dashboard_navbar.css";
function DashboardNavBar() {
  return (
    <div className="dashboard_nav_bar">
      {" "}
      <div className="dashboard_logo">
        <img className="union" src="images/Union.png" alt="logo" />
        <img src="images/lendsqr.png" alt="logotext" />
      </div>
      <div className="search_div">
        <input
          type="text"
          placeholder="Search for anything."
          className="nav_search"
        />
        <button>
          <img src="images/search.png" alt="Search Icon" />
        </button>
      </div>
      <div className="nav_trailing">
        <a href="">Docs</a>
        <img src="images/bell.png" alt="Bell Icon" />
        <img src="images/avatar.png" className="avatar" alt="Profile Pic" />
        <p className="name">Adedeji</p>
        <img src="images/dropdown.png" alt="dropdown icon" />
      </div>
    </div>
  );
}

export default DashboardNavBar;
