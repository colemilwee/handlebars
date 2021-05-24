var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function(error) {
    if (error) throw error;
    console.log("Connection Successful!");
});

module.exports = connection;