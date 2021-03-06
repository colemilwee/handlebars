const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// all burgers
router.get('/api/burgers', (req, res) => {
    burger.showBurgers();
});

// one burger?
router.get('/api/burgers', (req, res) => {

});

// delete a burger?
router.delete('/api/burgers', (req, res) => {

});

// modify a burger
router.update('/api/burgers')

// create a burger
router.post('/api/burgers', (req, res) => {
    burger.createBurger();
});

module.exports = router;













////////////////////////////////////////////////////////////
//                        EXAMPLE



if (false) {
  const express = require("express");
  const burger = require("../models/burger");
  const router = express.Router();

  //orm.selectAll('burgers_db.burgers');

  //orm.insertOne('burgers_db.burgers','Juicy Burger',false);

  //orm.updateOne('burgers_db.burgers','devoured', true, 2)

  router.get("/", (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      //console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burgers", (req, res) => {
    burger.create(req.body.burgerName, (result) => {
      console.log("made it passes contoller");
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burgers/:id", (req, res) => {
    const id = req.params.id;
    let condition = req.body.devoured;

    console.log(condition);
    if (condition === "true") {
      condition = false;
    } else {
      condition = true;
    }

    burger.update(condition, id, (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    });
  });

  router.delete("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log(req.params.id);
    burger.delete(condition, (result) => {
      if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    });
  });

  module.exports = router;
}