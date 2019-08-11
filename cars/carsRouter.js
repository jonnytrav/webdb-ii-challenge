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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  carsDB
    .getById(id)
    .then(response => {
      res.status(200).json({ success: true, response });
    })
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

router.post("/", (req, res) => {
  const body = req.body;
  carsDB.insert(body).then(response => {
    res.status(201).json({ success: true, response });
  });
});

module.exports = router;
