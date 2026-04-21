

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts/client/ClientLayout'
import Home from './pages/client/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ClientLayout from './layouts/client/ClientLayout'
import AdminLayout from './layouts/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ManageStudent from './pages/admin/Student/ManageStudent'
import { ADMIN_PATH, PATH } from './constants/path'



function App() {


  return (
    <>
      <Routes>
        <Route path={PATH.HOME_PAGE} element={<ClientLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTER} element={<Register />} />
        <Route path={ADMIN_PATH.HOME_PAGE} element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path={ADMIN_PATH.STUDENT} element={<ManageStudent/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
