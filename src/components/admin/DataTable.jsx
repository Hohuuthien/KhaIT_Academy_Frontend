import { Table, Card, Pagination } from "react-bootstrap";
import "../../style/admin/table.css";

const DataTable = ({ title, columns, data, renderRow }) => {
  return (
    <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
      <Card.Header className="bg-white border-0 pt-4 px-4">
        <div className="d-flex align-items-center gap-2">
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#6366f1",
              borderRadius: "50%",
            }}
          ></div>
          <h5 className="mb-0 fw-bold" style={{ fontSize: "1.1rem" }}>
            {title}
          </h5>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        <Table hover responsive className="align-middle mb-0">
          <thead className="bg-light">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="text-secondary fw-normal py-3 border-0"
                  style={{
                    fontSize: "0.9rem",
                    backgroundColor: "#fafafa",
                    paddingLeft: index === 0 ? "1.5rem" : "0.5rem",
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{data.map((item, index) => renderRow(item, index))}</tbody>
        </Table>
      </Card.Body>
      <Card.Footer>
        <Pagination>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
        </Pagination>
      </Card.Footer>
    </Card>
  );
};

export default DataTable;
