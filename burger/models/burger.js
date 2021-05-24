const { updateOne, insertOne, selectAll } = require('../config/orm.js');
const orm = require('../config/orm.js');

var burger = {
    showBurgers: function(){
        selectAll();
    },

    createBurger: function(burgName){
        insertOne(burgName);
    },

    devour: function(whichBurg) {
        updateOne(true, whichBurg);
    }
};

module.exports = burger;