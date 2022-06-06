//const data = require('../data/data.users')

function validateUser(user, pass) {
//   var customer_suburb;
//   var customer_name = "Viktoria Tiedemann";
//   for (var i = 0; i < data.feeds.customer.length; i++) {
//     if (data.feeds.customer.name[i] == customer_name) {
//       customer_suburb = data.feeds.customer.address.suburb;
//     }
//   }

  return user == "admin" ? true : false;
}

module.exports = validateUser;
