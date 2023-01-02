import React from "react";
import { UserStatsData } from "../../sideMenuData/SideMenuData";
import "../../Styles/dashboard.scss";
function UserStats() {
  return (
    <div className="the_container">
      <p className="users_label">Users</p>
      <div className="stats_container">
        {UserStatsData.map((item) => {
          return (
            <div>
              <div className="stats_div">
                <img src={item.icon} alt="" />
                <p>{item.title}</p>
                <h3>{item.ammount}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserStats;
