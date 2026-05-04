import { Button, Form, InputGroup, Row } from "react-bootstrap";
import Nav from "./Nav";
import { GoSearch } from "react-icons/go";
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <header className="bg-primary d-flex justify-content-between align-items-center px-4 py-0">
      <div>
        <InputGroup>
          <InputGroup.Text className="border border-0 bg-white">
            <GoSearch />
          </InputGroup.Text>
          <Form.Control
            className="border-0 shadow-none bg-white px-0"
            placeholder="Tìm kiếm"
          />
        </InputGroup>
      </div>
      <div>
        <Button variant="primary">
          <GoBell />
        </Button>
        <Button>
          <div className="d-flex ">
            <div className="d-flex align-items-center">
              <img
                src="avt-normal.jpg"
                alt=""
                className="rounded-5"
                style={{ width: "40px", height: "40px" }}
              />
            </div>

            <div className="d-flex flex-column">
              <span>Tên người dùng</span>
              <span>Quyền</span>
            </div>
            <div className="d-flex align-items-center">
              <IoIosArrowDown />
            </div>
          </div>
        </Button>
      </div>
    </header>
  );
}
