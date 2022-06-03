const { server, io } = require("./app");
const cronJobDefault = require("../utils/cronJob");
const { default: axios } = require("axios");

const startServer = async (port,isTest=false) => {
  //FUNCION DE SIMULACION DATOS

  if (!isTest) {
    var CronJob = require("cron").CronJob;
    var job = new CronJob(
      "*/5 * * * * *",

      function () {
        const randomNumber = Math.floor(Math.random() * 500);

        console.log("Ejecutando Cron: ", randomNumber);

        if (randomNumber > 400) {
          //sendMessage(); //NO DESCOMENTAR
          //insertHumo(randomNumber, '123.123.123.123');
          console.log("ENVIAR MENSAJE ! y GUARDAR EN BD");
          //job.stop(5000)
        }
        io.emit("humo", randomNumber);
      },
      null,
      true,
      "America/Los_Angeles"
    );
  }

  server.listen(port, () => {
    console.log(">> Listening on *:4000");
  });
};

startServer(4000,true);


const urlFetchWs = "https://graph.facebook.com/v13.0/101495809253314/messages";
const body = JSON.stringify({
  messaging_product: "whatsapp",
  to: "593999282767",
  type: "template",
  template: {
    name: "hello_world",
    language: {
      code: "en_US",
    },
  },
});
const configuracion = {
  headers: {
    Authorization:
      "Bearer EAAE5l6I2PG8BAMJ5xBQbNyx6t5IWtAuy5lDMq1MxYMT7g217N7TgqvSxZAvk7QFODxKGDett5RuNsPP7JvsOPbJkBspMimEMw6ZCdD87KehlBqeceexryKiBTZBH1ViahZC9W2A5UvYFzdm0MZBAp4Qprj9TcNPKgYzerxHgnDKDPLHZAZAZBTZBhMwbKR9Du1aNOvfsfuXudaVIdZBIiwhxGo7n1aWahc9R4ZD",
    "Content-Type": "application/json",
  },
};

async function sendMessage() {
  await axios
    .post(urlFetchWs, body, configuracion)
    .then((response) => console.log("Enviando mensaje"))
    .catch((e) => {
      console.log("Error", e);
    });
}

//cronJobDefault

module.exports = { startServer };
