import { userData } from "../data/data.users";


function validateUser(user, pass) {

  const dataUser = userData

  let founded =  dataUser.find(x => x.user == user &&  x.pass == pass);
  
  return founded?"TRUE":"FALSE";
}

module.exports = validateUser;
