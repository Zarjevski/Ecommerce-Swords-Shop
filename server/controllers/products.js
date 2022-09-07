const express = require("express");

const getProducts = (req, res) => {
  res.status(200).json({ msg: "its works" });
};

module.exports = { getProducts };
