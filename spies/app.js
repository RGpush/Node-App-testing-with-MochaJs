/** --this is app where will test all the scenarios*/

var db = require('./db');
module.exports.handleSignUp = (email,password)=>{
    //this function will be handling these 3 scenarios
    //check if email already exists
    //save the user to the database
    db.saveUsers({
        email:email,
        password:password
    });
    //send the welcome email

// so in test case we have write all the above 3 scenarios in db.js as now there
    //we didn't write any functionality but we will write the test case for that
};