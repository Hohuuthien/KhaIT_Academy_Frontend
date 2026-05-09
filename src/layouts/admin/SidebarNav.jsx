import {
  AppWindow,
  Bell,
  CalendarCheck,
  ChartBarStacked,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  HelpCircle,
  LayoutDashboard,
  MailQuestionMark,
  Package,
  Search,
  Settings,
  ShoppingCart,
  Star,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";
import { Badge, Form, InputGroup, Nav } from "react-bootstrap";
import "../../style/admin/SidebarNav.css";
import { NavLink } from "react-router-dom";
import { ADMIN_PATH } from "../../constants/path";

export default function SidebarNav({ isCollapsed, setIsCollapsed }) {
  const menuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: ADMIN_PATH.HOME_PAGE,
    },
    {
      icon: <UsersRound size={20} />,
      label: "Students",
      path: ADMIN_PATH.STUDENT,
    },

    {
      icon: <ChartBarStacked size={20} />,
      label: "Categories",
      path: ADMIN_PATH.CATEGORY,
    },

    { icon: <Star size={20} />, label: "Reviews", path: ADMIN_PATH.REVIEW },
    {
      icon: <CalendarCheck size={20} />,
      label: "Schedule",
      path: ADMIN_PATH.SCHEDULE,
    },
    {
      icon: <MailQuestionMark size={20} />,
      label: "Question",
      path: ADMIN_PATH.QUESTION,
    },
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
          <NavLink
            to={item.path}
            key={index}
            className={`nav-item-custom ${item.active ? "active" : ""} text-decoration-none`}
          >
            {item.icon}
            {!isCollapsed && <span className="ms-3">{item.label}</span>}
          </NavLink>
        ))}

        <hr className="text-secondary my-4 opacity-25" />

        {bottomItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="nav-item-custom d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              {item.icon}
              {!isCollapsed && <span className="ms-3">{item.label}</span>}
            </div>
          </NavLink>
        ))}
      </Nav>
    </div>
  );
}
