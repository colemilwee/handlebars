const connection = require('./connection.js');

var orm = {
    selectAll: function() {
        const queryVar = 'SELECT * FROM burgers;';
        connection.query(queryVar, (error, result) => {
            if(error) throw error;

            return result;
        });
},

    insertOne: function(burg) {
        const queryVar = 'INSERT INTO burgers';

        queryVar += '(burger_name) VALUES (';
        queryVar += burg.toString();
        queryVar += ');';

        connection.query(queryVar, (error, result) => {
            if(error) throw error;

            return result;
        });
},

    updateOne: function(foodStatus, whichBurg) {
        const queryVar = "UPDATE burgers SET devoured = '";

        queryVar += foodStatus;
        queryVar += "' WHERE burger_name = '";
        queryVar += whichBurg;
        queryVar += "';"

        connection.query(queryVar, (error, result) => {
            if(error) throw error;

            return result;
    });
},
};
module.exports = orm;
