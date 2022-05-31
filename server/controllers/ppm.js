export async function insertHumo(nivel, ip) {
    try {
      const db = await connect();
      const result = await db.query(`INSERT INTO Niveles ( nivel, ip)
            VALUES( '${nivel}' , '${ip}')`);
      return 1;
    } catch (error) {
      return 0;
    }
}


// export async function getAllAgreements() {
//     const db = await connect()
//     const result = await db.query(`select * from agreements`)
//     return result.recordsets[0]
//  }