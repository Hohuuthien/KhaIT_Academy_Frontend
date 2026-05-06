import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./SidebarNav";
import { useState } from "react";
import SidebarNav from "./SidebarNav";

export default function AdminLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <div
        className="d-flex"
        style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
      >
        <SidebarNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <div className="flex-grow-1 d-flex flex-column transition-all">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}
