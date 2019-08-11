const express = require("express");
const DB = require("../configDB.js");

module.exports = {
  get
};

function get() {
  return DB("cars");
}
