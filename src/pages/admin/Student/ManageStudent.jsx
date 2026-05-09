import DataTable from "../../../components/admin/DataTable";
import { MoreHorizontal } from "lucide-react";
import "../../../style/admin/table.css";

export default function ManageStudent() {
  const columns = [
    "Họ và tên",
    "Danh mục",
    "ID",
    "Năm sinh",
    "Ngày tạo",
    "Trạng thái",
    "Hành động",
  ];

  const students = [
    {
      name: "Nguyễn Văn An",
      cat: "NodeJS",
      id: "SV-1001",
      year: "2004",
      date: "12 Oct 2025",
      status: "Hoạt động",
      img: "/avt-normal.jpg",
    },
    {
      name: "Trần Thị Bích",
      cat: "PHP",
      id: "SV-1002",
      year: "2003",
      date: "10 Oct 2025",
      status: "Hoạt động",
      img: "https://scontent.fdad3-8.fna.fbcdn.net/v/t1.6435-9/161580252_956588008481012_8375254084702269542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_ohc=HTup03ljsVcQ7kNvwEJd2Zg&_nc_oc=AdqqSeQg_u3hBjGDJmghDWtR435YXlaSZTUGJ1XGokwk218cHyZ-GA99ImRWs5PjNgYbe4qofLO-g_EduzT1qjsD&_nc_zt=23&_nc_ht=scontent.fdad3-8.fna&_nc_gid=JqeRrbw3NrDBjy5WnRyrRA&_nc_ss=7b2a8&oh=00_Af6ZHrTxugy1iUwPOfL23Dhz9V2v65RukTVswqgcEGvBjQ&oe=6A267619",
    },
    {
      name: "Lê Minh Khang",
      cat: "Java",
      id: "SV-1003",
      year: "2005",
      date: "08 Oct 2025",
      status: "Không hoạt động",
      img: "https://scontent.fdad3-8.fna.fbcdn.net/v/t1.6435-9/161580252_956588008481012_8375254084702269542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_ohc=HTup03ljsVcQ7kNvwEJd2Zg&_nc_oc=AdqqSeQg_u3hBjGDJmghDWtR435YXlaSZTUGJ1XGokwk218cHyZ-GA99ImRWs5PjNgYbe4qofLO-g_EduzT1qjsD&_nc_zt=23&_nc_ht=scontent.fdad3-8.fna&_nc_gid=JqeRrbw3NrDBjy5WnRyrRA&_nc_ss=7b2a8&oh=00_Af6ZHrTxugy1iUwPOfL23Dhz9V2v65RukTVswqgcEGvBjQ&oe=6A267619",
    },
    {
      name: "Hồ hữu thiện",
      cat: "React",
      id: "SV-1004",
      year: "1998",
      date: "05 Oct 2025",
      status: "Không hoạt động",
      img: "https://scontent.fdad3-8.fna.fbcdn.net/v/t1.6435-9/161580252_956588008481012_8375254084702269542_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_ohc=HTup03ljsVcQ7kNvwEJd2Zg&_nc_oc=AdqqSeQg_u3hBjGDJmghDWtR435YXlaSZTUGJ1XGokwk218cHyZ-GA99ImRWs5PjNgYbe4qofLO-g_EduzT1qjsD&_nc_zt=23&_nc_ht=scontent.fdad3-8.fna&_nc_gid=JqeRrbw3NrDBjy5WnRyrRA&_nc_ss=7b2a8&oh=00_Af6ZHrTxugy1iUwPOfL23Dhz9V2v65RukTVswqgcEGvBjQ&oe=6A267619",
    },
    {
      name: "Nguyễn Hoàng Yến",
      cat: "Python",
      id: "SV-1005",
      year: "2003",
      date: "01 Oct 2025",
      status: "Hoạt động",
      img: "/avt-normal.jpg",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Hoạt động":
        return "status-published";
      case "Không hoạt động":
        return "status-inactive";
      default:
        return "";
    }
  };
  const renderRow = (item, index) => (
    <tr key={index} className="border-bottom border-light">
      <td style={{ paddingLeft: "1.5rem" }}>
        <div className="d-flex align-items-center gap-3 py-1">
          <img
            src={item.img}
            alt={item.name}
            className="rounded-3"
            style={{ width: "45px", height: "45px", objectFit: "cover" }}
          />
          <div>
            <div
              className="fw-semibold text-dark mb-0"
              style={{ fontSize: "0.95rem" }}
            >
              {item.name}
            </div>
            <small className="text-muted">{item.sub}</small>
          </div>
        </div>
      </td>
      <td className="text-secondary" style={{ fontSize: "0.9rem" }}>
        {item.cat}
      </td>
      <td className="text-secondary" style={{ fontSize: "0.9rem" }}>
        {item.id}
      </td>
      <td className="fw-bold text-dark" style={{ fontSize: "0.95rem" }}>
        {item.price}
      </td>
      <td className="text-secondary" style={{ fontSize: "0.9rem" }}>
        {item.date}
      </td>
      <td>
        <span className={`badge-custom ${getStatusClass(item.status)}`}>
          {item.status}
        </span>
      </td>
      <td>
        <div className="action-btn">
          <MoreHorizontal size={18} className="text-muted" />
        </div>
      </td>
    </tr>
  );
  return (
    <div className="p-4 bg-light" style={{ minHeight: "100vh" }}>
      <DataTable
        title="Quản lý sinh viên"
        columns={columns}
        data={students}
        renderRow={renderRow}
      />
    </div>
  );
}
