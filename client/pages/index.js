import Head from "next/head";
import { useEffect, useState } from "react";
import changeBackColor from "../utils/changeBackColor";
import generateRanNumber from "../utils/randomNumber";

import React from "react";
import Chart from "chart.js";
import CardInfoPpm from "../components/CardInfoPpm";

const io = require("socket.io-client");
const socket = io("http://localhost:4000");

export default function Home() {
  useEffect(() => {
    var CronJob = require("cron").CronJob;
    var job = new CronJob(
      "* * * * * *",
      function () {
        console.log("Mensaje Cada segundo");
        changeBackColor(generateRanNumber());
        socket.emit("sendPPM", 34);
      },
      null,
      true,
      "America/Los_Angeles"
    );
  });

  return (
    <div>
      <Head>
        <title>DETECCION HUMO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="cambiarBack" className="w-screen h-screen bg-blue-500 text-center flex flex-col items-center justify-center gap-4">

        <CardInfoPpm/>

        <div >
          <a
            className=" bg-gray-200 px-4 py-2 rounded-xl hover:bg-gray-300 shadow"
            href="/streaming"
          >
            Grafico en Tiempo Real
          </a>
        </div>
      </main>
    </div>
  );
}
