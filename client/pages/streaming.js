import Chart from 'chart.js/auto';
import "chartjs-adapter-luxon";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import StreamingPlugin from "chartjs-plugin-streaming";
import React, { useEffect} from "react";

Chart.register(DataLabelsPlugin, StreamingPlugin);


import generateRanNumber from '../utils/randomNumber';
import changeBackColor from '../utils/changeBackColor';

export default function StreamingChart() {
  

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
      
      const onRefresh = chart => {
        const now = Date.now();
        chart.data.datasets.forEach(dataset => {
          dataset.data.push({
            x: now,
            y: generateRanNumber()
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
  });

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
