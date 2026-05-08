import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/client/ClientLayout";
import Home from "./pages/client/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientLayout from "./layouts/client/ClientLayout";
import AdminLayout from "./layouts/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ManageStudent from "./pages/admin/Student/ManageStudent";
import { ADMIN_PATH, PATH } from "./constants/path";
import ManageCategory from "./pages/admin/Category/ManageCategory";
import ManageReviews from "./pages/admin/Reviews/ManageReviews";
import ManageSchedule from "./pages/admin/Schedule/ManageSchedule";
import ManageQuestion from "./pages/admin/Question/ManageQuestion";

function App() {
  return (
    <>
      <Routes>
        {/* Client */}
        <Route path={PATH.HOME_PAGE} element={<ClientLayout />}>
          <Route index element={<Home />} />
        </Route>
        {/* Login & Register */}
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTER} element={<Register />} />
        {/* Admin */}
        <Route path={ADMIN_PATH.HOME_PAGE} element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={ADMIN_PATH.STUDENT} element={<ManageStudent />} />
          <Route path={ADMIN_PATH.CATEGORY} element={<ManageCategory />} />
          <Route path={ADMIN_PATH.REVIEW} element={<ManageReviews />} />
          <Route path={ADMIN_PATH.SCHEDULE} element={<ManageSchedule />} />
          <Route path={ADMIN_PATH.QUESTION} element={<ManageQuestion />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
