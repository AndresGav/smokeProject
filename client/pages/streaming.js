import Chart from 'chart.js/auto';
import "chartjs-adapter-luxon";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import StreamingPlugin from "chartjs-plugin-streaming";
import React, { useEffect, useState} from "react";

Chart.register(DataLabelsPlugin, StreamingPlugin);


import generateRanNumber from '../utils/randomNumber';
import changeBackColor from '../utils/changeBackColor';

const io = require("socket.io-client");

const socket = io("http://localhost:4000");


export default function StreamingChart() {

  //const [valorPPM, setPPM] = useState(0)

  let valorPPM = 0

  useEffect(() => {

    const data = {
        datasets: [
          {
            label: 'PPM',
            backgroundColor: "#1d4ed8",
            borderColor: "#1d4ed8",
            borderDash: [],
            data: []
          }
        ]
      };
      

      socket.on("humo", function (data) {
        //console.log("DEL SERVER",data)
        valorPPM = data
       });

      const onRefresh = chart => {
        //console.log("ON REFRESH",valorPPM)
        const now = Date.now();
        chart.data.datasets.forEach(dataset => {
          dataset.data.push({
            x: now,
            y: valorPPM
          });
        });
      };
    

      const config = {
        type: 'line',
        data: data,
        options: {
          scales: {
            x: {
              type: 'realtime',
              realtime: {
                duration: 20000,
                refresh: 1000,
                delay: 2000,
                onRefresh: onRefresh
              },
            },
            y: {
              title: {
                display: true,
                text: 'Value'
              }
            }
          },
          interaction: {
            intersect: false
          },
          plugins: {
            datalabels: {
              backgroundColor: context => context.dataset.borderColor,
              padding: 4,
              borderRadius: 4,
              clip: true,
              color: 'white',
              font: {
                weight: 'bold'
              },
              formatter: value => value.y
            }
          }
        }
      };

    const myChart = new Chart(document.getElementById("myChart"), config);

    return function cleanup() {
      myChart.destroy();
    };
  },[]);

  return (
    <>
      <div className="w-full text-center " >
        <h1 className='m-10 font-bold'>SISTEMA EN TIEMPO REAL | PPM</h1>
        <div  className='m-10'>
            <canvas id="myChart" height="100" />
        </div>
        <div >
            <a className='bg-gray-200 px-4 py-2 rounded-xl hover:bg-gray-300 shadow' href='/'>Atras</a>
        </div>
      </div>
    </>
  );
}
