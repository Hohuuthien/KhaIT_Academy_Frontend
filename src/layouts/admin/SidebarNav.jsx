import {
  AppWindow,
  Bell,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  HelpCircle,
  LayoutDashboard,
  Package,
  Search,
  Settings,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";
import { Badge, Form, InputGroup, Nav } from "react-bootstrap";
import "../../style/admin/SidebarNav.css";

export default function SidebarNav({ isCollapsed, setIsCollapsed }) {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { icon: <ShoppingCart size={20} />, label: "Orders", active: true },
    { icon: <Package size={20} />, label: "Inventory" },
    { icon: <CreditCard size={20} />, label: "Payments" },
    { icon: <Users size={20} />, label: "Customers" },
  ];
  const bottomItems = [
    { icon: <HelpCircle size={20} />, label: "Help & support" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header d-flex align-items-center justify-content-between p-3">
        {!isCollapsed && (
          <div className="d-flex align-items-center gap-2 text-white fw-bold fs-5">
            <Zap className="text-primary" fill="currentColor" />
          </div>
        )}
        <button
          className="btn-toggle-sidebar"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <AppWindow />
        </button>
      </div>
      <Nav className="flex-column px-2 ">
        {menuItems.map((item, index) => (
          <Nav.Link
            key={index}
            className={`nav-item-custom ${item.active ? "active" : ""}`}
          >
            {item.icon}
            {!isCollapsed && <span className="ms-3">{item.label}</span>}
          </Nav.Link>
        ))}

        <hr className="text-secondary my-4 opacity-25" />

        {bottomItems.map((item, index) => (
          <Nav.Link
            key={index}
            className="nav-item-custom d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              {item.icon}
              {!isCollapsed && <span className="ms-3">{item.label}</span>}
            </div>
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}
