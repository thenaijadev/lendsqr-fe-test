import React from "react";
import {
  SettingsData,
  Customersdata,
  BusinessesData,
} from "../../sideMenuData/SideMenuData";

const SideMenuItem: React.FC<{
  dataArray: { icon: string; title: string }[];
}> = (props) => {
  return (
    <div>
      {props.dataArray.map((item) => (
        <div className="menu_item">
          <div className="icon_div">
            <img src={item.icon} />
          </div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SideMenuItem;
