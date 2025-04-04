import {pagedata} from "./pagedata.js";
import {Link, useLocation} from "react-router-dom";
import "./navbar.css"
import {useEffect, useState} from "react";



function Navbar()
{
    const [navopen,setNavOpen]=useState(false);

    const toggleNavbar=()=>{
        setNavOpen((prevState)=>!prevState)
    }

    const location = useLocation();
    const [activePage, setActivePage] = useState(location.pathname);

    useEffect(() => {
        setActivePage(location.pathname);
    }, [location]);


    return(
        <div className={"navbar"}>
            {pagedata.map((page)=>{
                    return(
                       <>
                           <Link to={page.path} className={`navitem navitem-${activePage === page.path ? "bold": "normal"}`}>
                               <div className={`nav-text open-sans-text`}>
                                   <div style={{
                                       paddingLeft:"1rem"
                                   }}>{
                                       page.name
                                   }</div>
                               </div>

                           </Link>
                       </>
                    )
                })
            }
        </div>
    )
}


export default Navbar