const express = require("express");
const Product = require("../models/product");

const getProducts = async (req, res) => {
  try {
    const { search } = req.query;
    const queryObject = {};

    if (search) {
      queryObject.title = { $regex: search, $options: "i" };
    }

    const products = await Product.find(queryObject);

    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProducts };
