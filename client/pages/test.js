import { useEffect, useState } from "react";
import { getData } from "../controllers/users.controller";
export default function TestPage(){

    const [data, setData] = useState(null);

    useEffect(() => {
        getData().then(async(resp)=>{
            setData(resp.data);
            console.log("RESPUESTA =====", resp.data);
        })
        
    },[]);

    return (
        <>
        <div>
        Hola
        {/* { data?.map((item) =>{
            return (
                <div>{item.attributes.email}</div>
            )
        })} */}
        </div>
        </>
    )
}