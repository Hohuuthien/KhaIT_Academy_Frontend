import {
  Button,
  Container,
  Form,
  FormCheck,
  InputGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import Nav from "./SidebarNav";
import { Bell, Command, Moon, Search, Sun } from "lucide-react";
import "../../style/admin/Header.css";
import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <header>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="border-bottom border-white border-opacity-10 py-2 shadow-sm"
      >
        <Container fluid className="px-4">
          <div className="d-flex align-items-center flex-grow-1">
            <InputGroup
              className="bg-white bg-opacity-10 border-white border-opacity-25 rounded-pill"
              style={{ maxWidth: "350px" }}
            >
              <InputGroup.Text className="bg-transparent border-0 pe-1">
                <Search size={18} className="text-white-50" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search anything"
                className="bg-transparent border-0 shadow-none text-white placeholder-white-50"
                style={{ fontSize: "0.9rem" }}
              />
            </InputGroup>
          </div>

          <div className="d-flex align-items-center gap-4">
            <div
              onClick={toggleTheme}
              className="d-flex align-items-center justify-content-center border border-white border-opacity-25 rounded-3 bg-white bg-opacity-10 cursor-pointer hover-white-op-20"
              style={{ width: "40px", height: "40px", transition: "all 0.2s" }}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Moon size={20} className="text-white" />
              ) : (
                <Sun size={20} className="text-white" />
              )}
            </div>

            <div
              className="vr bg-white opacity-25"
              style={{ height: "40px" }}
            ></div>

            <div className="position-relative p-2 border border-white border-opacity-25 rounded-3 bg-white bg-opacity-10 cursor-pointer hover-white-op-20">
              <Bell size={20} className="text-white" />
              <span
                className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-primary rounded-circle"
                style={{ marginTop: "8px", marginLeft: "-8px" }}
              ></span>
            </div>

            <div
              className="vr bg-white opacity-25"
              style={{ height: "40px" }}
            ></div>

            <div className="avatar-container">
              <img
                src="avt-normal.jpg"
                alt="User"
                className="rounded-3 border border-white border-opacity-50"
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
