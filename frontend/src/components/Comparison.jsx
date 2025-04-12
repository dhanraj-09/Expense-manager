import "./comparison.css"
import {useEffect, useState} from "react";
import {getCurrentMonth, getPreviousMonth} from "../api.js";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function Comparison(){

    const [data,setData] = useState([]);

    useEffect(()=>{
        async function LoadBalances()
        {
            const current=await getCurrentMonth();
            const previous=await getPreviousMonth();

            setData([
                { name : "Current Month", balance : Number(current) },
                { name : "Previous Month", balance : Number(previous) }
            ])

        }
        LoadBalances().then().catch();
    },[])

    const  CustomLabel=(props)=>{
        const {x,y,value}=props;
        return(
            <text x={x-10} y={y+10} fill={"#333"} textAnchor={"end"} fontSize={12}>
                {value}
            </text>
        );
    };


    return(
        <div className={"Comparison"}>
            <ResponsiveContainer width={"80%"} height={100}>
                <BarChart data={data} margin={{top: 0,right:0, left:0,bottom:0}} layout={"vertical"}>
                    <XAxis type={"number"} datakey={"name"} ></XAxis>
                    <YAxis dataKey={"name"} type={"category"}></YAxis>
                    <Tooltip></Tooltip>
                    <Bar fill={"#8d2020"} barSize={20} label={"data"}  dataKey={"balance"}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Comparison;