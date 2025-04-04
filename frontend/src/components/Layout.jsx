import {Outlet} from "react-router-dom";
import Navbar from "./Navbar.jsx";


function Layout()
{
    return(
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    )
}

export default Layout;