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


async function insertHumo(nivel, ip) {
  try {
    const db = await connect();
    const result = await db.query(`INSERT INTO Niveles ( nivel, ip)
          VALUES( '${nivel}' , '${ip}')`);
    return 1;
  } catch (error) {
    return 0;
  }
}


function insertarDato(valor, ip) {
 
  if(valor>0 && ip != ' ' || ip>0){
    insertHumo(valor, ip);
    return 1;
  } else {
    return 0;
  };
};

module.exports = insertarDato;