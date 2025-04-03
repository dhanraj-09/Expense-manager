import {pagedata} from "./pagedata.js";
import {Link, useLocation} from "react-router-dom";
import "./navbar.css"
import {useEffect, useState} from "react";


function Navbar()
{
    const location = useLocation();
    const [activePage, setActivePage] = useState(location.pathname);

    useEffect(() => {
        setActivePage(location.pathname);
    }, [location]);


    function IsActive(path) {
        return activePage === path ? "bold": "normal" ;
    }

    return(
        <div className={"navbar"}>
            {pagedata.map((page)=>{
                    return(
                       <Link to={page.path} className={`navitem`}>
                           <div className={`nav-text`}>
                               {
                                   page.name
                               }
                           </div>
                       </Link>
                    )
                })
            }
        </div>
    )
}


export default Navbar