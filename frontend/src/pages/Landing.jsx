import "./landing.css"
import styled from "styled-components";
import image from "./frontend/public/Green-bou.png"

const DIV=styled.div``;
const P=styled.p``;
const BUTTON=styled.button``;
const IMG=styled.img``;
function Landing()
{
    return(
        <>
            <DIV className={"landing-nav"}>
                <P className={"App-name"}>Expense Manager App</P>
                <DIV className={"login"}>
                    <BUTTON>Login</BUTTON>
                </DIV>
                <DIV className={"Open-acc"}>
                    <BUTTON>Open Account</BUTTON>
                </DIV>
            </DIV>
            <DIV className={"cont"}>
               <DIV className={"half-container"}>
                   <IMG src={image} alt={"green-image"}></IMG>

               </DIV>
               <DIV className={"half-container"}>

               </DIV>
            </DIV>

        </>
    )
}


export default Landing