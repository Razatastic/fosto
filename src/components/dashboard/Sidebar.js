import React from "react";
import { Layout, Menu } from "antd";
import Listing from "./Listing";

const { Sider } = Layout;

// leave sider width to 390. It breaks the listing if you decrease the width any further.
function Sidebar() {
  return (
    <div>
      <Sider width={390} height={"100"} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        />
        <Listing />
      </Sider>
    </div>
  );
}

export default Sidebar;
