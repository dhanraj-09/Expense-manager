import "./landing.css"
import styled from "styled-components";
import image from "../assets/Green-bou.png"
import circles from "../assets/3-circles.jpg"
import triangle from "../assets/Green_equilateral_triangle_point_up.svg.png"

const DIV=styled.div``;
const P=styled.p``;
const BUTTON=styled.button``;
const IMG=styled.img``;
const BR=styled.br``;
const SPAN=styled.span``;
const H2=styled.h2``;
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
                   <P className={"Headline"}>
                       <SPAN className={"shadow-text"}>Control</SPAN> Your
                       <BR/><SPAN className={"shadow-text"}>Financial</SPAN> Future Easily
                       <BR/> With Expense Manager App
                   </P>
                   <P className={"app-description"}>
                       Your all-in-one solution to track spending, set budgets, and build better financial habits.
                       Open your account in just a few clicks.
                   </P>
                   <DIV className={"Open-acc"}>
                       <BUTTON>Open Account</BUTTON>
                       <BUTTON className={"Generate-card"}> Generate Your Card</BUTTON>
                   </DIV>
                   <DIV className={"three-circles"}>
                       <IMG src={circles} alt={"3-faces"}></IMG>
                       <IMG  className={"triangle"} src={triangle} alt={"green-triangle"}></IMG>
                       <P className={"app-status"}><H2>20 Thousand+</H2>
                           <BR/>
                           <SPAN className={"shadow-text"}>Join over 20 thousand + satisfied users
                                                      <BR/>who trust this app for managing
                                                      <BR/>their finance.
                           </SPAN></P>
                   </DIV>
               </DIV>
            </DIV>

        </>
    )
}


export default Landing