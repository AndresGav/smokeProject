const Http = require("http");
const Express = require("express");

const App = Express();
const servidor = Http.createServer(App);
const io = require("socket.io")(servidor, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

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
      "Bearer EAAE5l6I2PG8BAHuCbudS4Nm0JcFHvBKxEQ2qCnfiJzjuy1UqcDMS3zUSPjOEWKnaWKURXrIhqSC4tq9pe39ZAZAZBHEutXPdQDvdrmJ54MWMs6yQ2J9lIV2TZAHN7zbsLdBOUZCCqR6aaDfNuBHJ2XvW5rNOrHEWpBaefV5U58PdVzXDsCrQ43fyqqpRcY3ugd6QQKRGvN0ZAXX4kTmMZAAWGCYRwzu9ykZD",
    "Content-Type": "application/json",
  },
};

// -H 'Authorization: Bearer EAAE5l6I2PG8BAI5YqOasxS4LlROD8vlzKgBgYuhYunsZBjUZB8AEgE17M7Pw5QMZAK9YZB6iVyeipNDzbZBZAPwH3IpBla0zIxIyCZB1sb7C100lYRHda0oanISKrkicbs2aZBc2OtttrBUt0ty6QjN1PasvvIz2Av3xUZCDWSKKTKk9qN5O5ogmIRu10KIlNutMCEnOwP8tgbqly7MqmPWKjhu0LvdSvN70ZD' `
// -H 'Content-Type: application/json' `
//-d '{ \"messaging_product\": \"whatsapp\", \"to\": \"593999282767\", \"type\": \"template\", \"template\": { \"name\": \"hello_world\", \"language\": { \"code\": \"en_US\" } } }'

App.use(Express.static(__dirname + "/public"));

servidor.listen(4000, function () {
  console.log("El servidor se ha inicializado en el puerto", 4000);
});

const sql = require("mssql");

const dbConfig = {
  server: "serverandres.database.windows.net",
  port: 1433,
  user: "andresadmin",
  password: "p@ssw0rd",
  database: "BDHumo",
};

const connect = async () => {
  try {
    await sql.connect(dbConfig);
    console.log("Connected to database");
    return new sql.Request();
  } catch (err) {
    console.log("Database connection failed!", err);

    return err;
  }
};

const dataTool = {
  id: 102,
  ip: "192.168.129.0",
  nivel: "500",
};

async function insertHumo(nivel, ip, creado) {
  try {
    const db = await connect();
    const result = await db.query(`INSERT INTO Niveles ( nivel, ip)
          VALUES( '${nivel}' , '${ip}')`);
    return 1;
  } catch (error) {
    return 0;
  }
}

module.exports = insertHumo;

var today = new Date();
var date =
  today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time + ".000";

console.log(dateTime);
//2022-05-20 08:30:47.000

//CONEXION DE TIPO SERIAL (SERIAL CONNECTION)
const SerialPort = require("serialport").SerialPort;;
const { data } = require("autoprefixer");
const { emit } = require("process");
const { default: axios } = require("axios");
const {Readline}= require('@serialport/parser-readline');
//SerialPort.close() ;
const puerto = new SerialPort("COM3", {
  baudRate: 9600,
});

const parser = puerto.pipe(new Readline({ delimiter: "\r\n" }));

//Funcion para mostrar una conexion exitosa con el servidor
parser.on("open", function () {
  console.log("La conexion ha sido establecida");
});

io.on("connection", (socket) => {
  //console.log("conectado como usuario...");
});

async function sendMessage() {
  await axios
    .post(urlFetchWs, body, configuracion)
    .then((response) => console.log("Enviando mensaje"))
    .catch((e) => {
      console.log("Error", e);
    });
}

//FUNCION DE SIMULACION DATOS
// var CronJob = require("cron").CronJob;

// var job = new CronJob(
//   "* * * * * *",

//   function () {
//     const randomNumber = Math.floor(Math.random() * 500);

//     console.log("Ejecutando Cron: ", randomNumber);

//     if (randomNumber > 400) {
//       //sendMessage(); //NO DESCOMENTAR
//       insertHumo(randomNumber, dataTool.ip);
//       console.log("ENVIAR MENSAJE ! y GUARDAR EN BD");

//       function sleep(ms) {
//         return new Promise((resolve) => setTimeout(resolve, ms));
//       }

//        function demo() {
//         for (let i = 0; i < 10; i++) {
//           console.log(`Waiting ${i} seconds...`);
//           sleep(i * 4000);
//         }
//         console.log("Done");
//       }

//       demo();
//     }

//     io.emit("humo", randomNumber);
//   },
//   null,
//   true,
//   "America/Los_Angeles"
// );

//Funcion que extrae los datos que se estan capturando desde el
//sensor de arduino
// parser.on("data", function (data) {
//   lista = humoData.split(" ");

//   valorHumo = parseInt(lista[2]); //PPM

//   console.log("soy el valor desde el arduino ", valorHumo);
//   //io.emit("humo", data);
// });

//Funcion que muestra un error en caso de desconexion
//de Arduino y/o servidor
puerto.on("error", function (error) {
  //console.log(error);
});