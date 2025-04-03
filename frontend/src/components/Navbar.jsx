import {pagedata} from "./pagedata.js";
import {Link} from "react-router-dom";
import "./navbar.css"

function Navbar()
{
    return(
        <div className={"navbar"}>
            {pagedata.map((page)=>{
                    return(
                       <Link to={page.path} className={"navitem"}>
                           <div className={"nav-text"}>
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