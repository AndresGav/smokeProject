

const  userData = require("../data/data.user.json")

function validateUser(user, pass) {
  console.log("INFORMACION======>",userData)
  const dataUser = userData

  let founded =  dataUser.find(x => x.user == user &&  x.password == pass);
  
  return founded?true:false;
}

module.exports = validateUser;
