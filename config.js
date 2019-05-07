var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "cloudy",
    password: "sembarang12",
    database: "scs_skom"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = db;
