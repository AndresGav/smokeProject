
const { server, io } = require('./app')
const cronJobDefault = require('../utils/cronJob')


const startServer = async (port) => {
   server.listen(port, () => {
      console.log('>> Listening on *:4000')
   })
}

startServer(4000)

//FUNCION DE SIMULACION DATOS
// var CronJob = require("cron").CronJob;
// var job = new CronJob(
//   "* * * * * *",

//   function () {
//     const randomNumber = Math.floor(Math.random() * 500);

//     console.log("Ejecutando Cron: ", randomNumber);

//     if (randomNumber > 400) {
//       //sendMessage(); //NO DESCOMENTAR
//       //insertHumo(randomNumber, dataTool.ip);
//       console.log("ENVIAR MENSAJE ! y GUARDAR EN BD");
//       //job.stop(5000)
//     }
//     io.emit("humo", randomNumber);
//   },
//   null,
//   true,
//   "America/Los_Angeles"
// );

//cronJobDefault 

module.exports = { startServer }

