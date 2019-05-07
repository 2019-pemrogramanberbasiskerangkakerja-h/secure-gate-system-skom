var mysql = require('mysql');

var db = mysql.createConnection({
    host: "sembarang12",
    user: "sembarang12",
    password: "sembarang12",
    database: "scs_skom"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = db;
