//The string must contain at least one special character, 
//but we are escaping reserved RegEx characters to avoid conflict
function validatePassword(pass){

    let re = new RegExp("(?=.*[!@#$%^&*])");

    var result = re.test(pass);

    return result
}

module.exports = validatePassword