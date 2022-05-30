import { useEffect, useState } from "react";

const io = require("socket.io-client");

const socket = io("http://localhost:4000");

export default function Socket(){

    useEffect(() => {
    
        socket.on("humo", function (data) {
         console.log(data)
        });
        
      }, [])

    return(
        <>
        <div>
            sdfsdfs
        </div>
        </>
    )
}