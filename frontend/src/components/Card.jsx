import "./card.css"
import styled from "styled-components"
import mastercard from "../assets/master-card.png"

const DIV = styled.div``;
const P=styled.p``;
const BR=styled.br``;
const SPAN=styled.span``;
const IMG=styled.img``;
function Card({ number, status, balance, bgColor,image, })
{
    return (
        <>
            <DIV className={"cards"} style={{ backgroundColor: bgColor }}>
                <P className={"cards-content"}>
                    {number}<BR/>card number
                    <SPAN>{status}<BR/>Status</SPAN>
                </P>
                <P className={"cards-content-lower"}>
                    {balance}<BR/>Balance
                    <SPAN><IMG src={image} alt={"mastercard-img"}></IMG></SPAN>
                </P>
            </DIV>
        </>
    )
}


export default Card;