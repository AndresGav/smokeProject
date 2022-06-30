const { server, io } = require("./app");
const cronJobDefault = require("../utils/cronJob");
const { default: axios } = require("axios");

const startServer = async (port, isTest) => {
  
  //FUNCION DE SIMULACION DATOS
  const urlFetchWs =
    "https://graph.facebook.com/v13.0/101495809253314/messages";
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
        "Bearer EAAE5l6I2PG8BALlMWbjZAZCKA7uMEVTqCYNXURSlyhbJa4Sm2dTkPdxpB1g7xsoxB2L92isgcHvER9Ls8qODRwEa55gl5q3b7JLZAHDK8Yqaq2Y0F50nPTaVrYh61Bz9A8vaiBK5yZAlCgd8SVG6HE7JDBPBxUKO0VzCmlVo5Ay4ZCVLZAxhZCH2G2IAenmzUpu8puFS23KOQ3CsX4EOLWu6Cq9WWohUNkZD",
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

  if (!isTest) {
    var CronJob = require("cron").CronJob;
    var job = new CronJob(
      "*/3 * * * * *",

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

//startServer(4000, false); //PARA LOCAL
startServer(4000, true); //PARA PUSH


module.exports = { startServer };
