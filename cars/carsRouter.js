const express = require("express");
const router = express.Router();
const carsDB = require("./carsDB");

router.get("/", (req, res) => {
  carsDB
    .get()
    .then(response => {
      res.status(200).json({ success: true, response });
    })
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

module.exports = router;
