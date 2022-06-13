import Chart from "chart.js/auto";
import "chartjs-adapter-luxon";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import StreamingPlugin from "chartjs-plugin-streaming";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/localstorage";
import LogInForm from "../components/login";
Chart.register(DataLabelsPlugin, StreamingPlugin);

import generateRanNumber from "../utils/randomNumber";
import changeBackColor from "../utils/changeBackColor";

const io = require("socket.io-client");

const socket = io("http://localhost:4000");

export default function StreamingChart() {
  const [isSession, setisSession] = useLocalStorage("isSession", false);

  let valorPPM = 0;

  useEffect(() => {
    const data = {
      datasets: [
        {
          label: "PPM",
          backgroundColor: "#1d4ed8",
          borderColor: "#1d4ed8",
          borderDash: [],
          data: [],
        },
      ],
    };

    socket.on("humo", function (data) {
      console.log("DEL SERVER", data);
      valorPPM = data;
    });

    const onRefresh = (chart) => {
      console.log("ON REFRESH", valorPPM);
      const now = Date.now();
      chart.data.datasets.forEach((dataset) => {
        dataset.data.push({
          x: now,
          y: valorPPM,
        });
      });
    };

    const config = {
      type: "line",
      data: data,
      options: {
        scales: {
          x: {
            type: "realtime",
            realtime: {
              duration: 30000,
              refresh: 3000,
              delay: 2000,
              onRefresh: onRefresh,
            },
          },
          y: {
            title: {
              display: true,
              text: "Value",
            },
          },
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          datalabels: {
            backgroundColor: (context) => context.dataset.borderColor,
            padding: 4,
            borderRadius: 4,
            clip: true,
            color: "white",
            font: {
              weight: "bold",
            },
            formatter: (value) => value.y,
          },
        },
      },
    };

    const myChart = new Chart(document.getElementById("myChart"), config);

    return function cleanup() {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      <div className="w-full text-center relative">
        {/* <div>
         
          <form className="absolute top-0 right-0 m-4">
            <input
              value={"Cerrar Sesion"}
              type="submit"
              onClick={() => localStorage.setItem("isSession", !isSession)}
              class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            />
          </form>
        </div> */}

        <h1 className="m-10 font-bold">SISTEMA EN TIEMPO REAL | PPM</h1>
        <div className="m-10">
          <canvas id="myChart" height="100" />
        </div>
        <div>
          <a
            className="bg-purple-500 px-4 py-2 rounded-xl hover:bg-purple-600 shadow text-white font-bold"
            href="/"
          >
            Atras
          </a>
        </div>
      </div>
    </>
  );
}

// {!isSession && (
//   <>
//     <LogInForm />
//   </>
// )}
// {isSession && (
//   <main className="w-screen h-screen bg-blue-500  text-center flex flex-col items-center justify-center gap-4 relative">
//     <div className="absolute top-0 right-0 m-4">
//       <form>
//         <input
//           value={"Cerrar Sesion"}
//           type="submit"
//           onClick={() => localStorage.setItem("isSession", !isSession)}
//           class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
//         />
//       </form>
//     </div>

//     <h1 className="m-10 font-bold">SISTEMA EN TIEMPO REAL | PPM</h1>
//     <div className="m-10">
//       <canvas id="myChart" height="100" />
//     </div>
//     <div>
//       <a
//         className="bg-gray-200 px-4 py-2 rounded-xl hover:bg-gray-300 shadow"
//         href="/"
//       >
//         Atras
//       </a>
//     </div>
//   </main>
// )}
