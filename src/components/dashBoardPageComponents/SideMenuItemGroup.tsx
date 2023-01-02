import React from "react";
import SideMenuItem from "./SideMenuItem";

const SideMenuItemGroup: React.FC<{
  group: { icon: string; title: string }[];
}> = (props) => {
  return (
    <div>
      <SideMenuItem dataArray={props.group} />
    </div>
  );
};

export default SideMenuItemGroup;
