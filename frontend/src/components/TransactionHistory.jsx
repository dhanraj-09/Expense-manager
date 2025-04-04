import "./transactionHistory.css"
import {useState,useEffect} from "react";

function TransactionHistory()
{
    const [date,SetDate]=useState("");
    const [payment_id,SetPayment_id]=useState("");
    const [amount,setAmount]=useState(+78);
    return(
        <div className={"bar"}>
            <div>`+{amount}`</div>
        </div>
    )
}


export default TransactionHistory;