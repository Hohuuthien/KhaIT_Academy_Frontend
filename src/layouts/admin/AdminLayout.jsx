import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";




export default function AdminLayout() {
    return(
        <>
        <Header/>
        <Nav/>
        <Outlet/>
       
        
        </>
        
    );
}