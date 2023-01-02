import SideMenuItemGroup from "./SideMenuItemGroup";
import {
  Customersdata,
  BusinessesData,
  SettingsData,
} from "../../sideMenuData/SideMenuData";

const groups = [Customersdata, BusinessesData, SettingsData];

const SideMenuItems = () => {
  return (
    <div>
      <div>
        <div className="side_menu_head">
          <div className="side_menu_head_icon">
            <img
              src="images/sideMenuIcons/briefcase.png"
              alt="Briefcase Icon"
            />
          </div>
          <p>Switch Organization</p>
          <div className="side_menu_head_icon drop_down">
            <img src="images/sideMenuIcons/drop-down.png" />
          </div>
        </div>
        <div className="side_menu_head dashboard_head">
          <div className="side_menu_head_icon">
            <img src="images/sideMenuIcons/home 1.png" />
          </div>

          <p>Dashboard</p>
        </div>
      </div>
      {groups.map((group) => (
        <div>
          <p className="group_heading">{group.heading}</p>
          <SideMenuItemGroup group={group.data} />
        </div>
      ))}
    </div>
  );
};

export default SideMenuItems;
