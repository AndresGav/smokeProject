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
      "Bearer EAAE5l6I2PG8BADp3PYfiDttUc6f6ZCjARhtXeBiMpEOJ1dc3MEJ1WZBlWWRhzo48kXiMpSTyRurLZBGlQuiev8pEJyKw3ErAklkK1aZCvvdMSdXHpwJT8qIsdk8trZAdullumOcaX0csO0criTHH1QcZCnijdXKO7oTXyv5JWspZAw1S9m8H7C1F8teZBp606hJMPsWCHf9iRZCFUIG1f7T8bVDzTDW6hWP4ZD",
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



//CONEXION DE TIPO SERIAL (SERIAL CONNECTION)
const SerialPort = require("serialport");
const { data } = require("autoprefixer");
const { emit } = require("process");
const { default: axios } = require("axios");
const Readline = SerialPort.parsers.Readline;
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
var CronJob = require("cron").CronJob;

var job = new CronJob(  
  "* * * * * *",

  function () {
    const randomNumber = Math.floor(Math.random() * 500);

    console.log("Ejecutando Cron: ", randomNumber);

    if (randomNumber > 400) {
      //sendMessage(); //NO DESCOMENTAR
      //insertHumo(randomNumber, dataTool.ip);
      console.log("ENVIAR MENSAJE ! y GUARDAR EN BD");
    }

    io.emit("humo", randomNumber);
  },
  null,
  true,
  "America/Los_Angeles"
);

//Funcion que extrae los datos que se estan capturando desde el
//sensor de arduino
parser.on("data", function (data) {
  lista = humoData.split(" ");

  valorHumo = parseInt(lista[2]); //PPM

  console.log("soy el valor desde el arduino ", valorHumo);
  //io.emit("humo", data);
});

//Funcion que muestra un error en caso de desconexion
//de Arduino y/o servidor
puerto.on("error", function (error) {
  //console.log(error);
});
