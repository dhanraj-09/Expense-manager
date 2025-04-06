import axios from "axios"

const URL="http://localhost:3000";

export async function getBalance()
{
    try
    {
        const response=await axios.get(`${URL}/balance`);
        return response.data;
    }
    catch(e)
    {
        console.error(`X Error Type ${e.name} \n ${e.message}`);
    }
}

export async function getSpending()
{
    try
    {
        const response=await axios.get(`${URL}/spending`);
        return response.data;
    }
    catch(e)
    {
        console.error(`X Error Type ${e.name} \n ${e.message}`);
    }
}

export async function getRecieved()
{
    try
    {
        const response=await axios.get(`${URL}/recieved`);
        return response.data;
    }
    catch(e)
    {
        console.error(`X Error Type ${e.name} \n ${e.message}`);
    }
}


















