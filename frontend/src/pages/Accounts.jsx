import styled from "styled-components";
import Card from "../components/Card.jsx";
import "./accounts.css"
import mastercardImg from "../assets/master-card.png";
import redImg from "../assets/redvisa.png";
import blueImg from "../assets/bluevisa.png";


const DIV=styled.div``;
const H1=styled.h1``;
const P=styled.p``;
const INPUT=styled.input``;

const cards = [
    {
        id: 1,
        number: "4008 **** **** 9464",
        status: "Active",
        balance: "$6600",
        bgColor: "#4d54e1",
        image: mastercardImg,
    },
    {
        id: 2,
        number: "5009 **** **** 8831",
        status: "Inactive",
        balance: "$2400",
        bgColor: "#ff5668",
        image: redImg,
    },
    {
        id: 3,
        number: "6011 **** **** 2190",
        status: "Pending",
        balance: "$9800",
        bgColor: "#41d5e2",
        image: blueImg,
    },
];
function Accounts()
{

    return (
        <DIV className="accounts">
            <DIV className={"accounts-nav"}>
                <H1>Accounts</H1>
            </DIV>
            <DIV className="accounts__cards">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        number={card.number}
                        status={card.status}
                        balance={card.balance}
                        bgColor={card.bgColor}
                        image={card.image}
                    />
                ))}
                <DIV className={"add-acc"}>
                    <P>+</P>
                </DIV>
            </DIV>
            <DIV className={"account-summary"}>
                <DIV className={"acc-graph"}>
                    <DIV className={"half-header"}>
                         <P className={"funds"}>Funds overview</P>
                    </DIV>
                    <DIV className={"graph-shown"}></DIV>
                </DIV>
                <DIV className={"acc-transaction"}>
                    <DIV className={"half-header2"}>
                        <P className={"MY"}>My Transactions</P>
                        <INPUT type={"date"}></INPUT>
                    </DIV>
                    <DIV className={"trans-shown"}></DIV>
                </DIV>
            </DIV>
        </DIV>
    )
}


export default Accounts