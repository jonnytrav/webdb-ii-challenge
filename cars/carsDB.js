const express = require("express");
const DB = require("../configDB.js");

module.exports = {
  get,
  getById,
  insert
};

function get() {
  return DB("cars");
}

function getById(id) {
  return DB("cars")
    .where({ id })
    .first();
}

function insert(body) {
  return DB("cars")
    .insert(body)
    .then(ids => {
      getById(ids[0]);
    });
}
