const Product = require("../models/product.js");

const getProducts  = async () => {
    // const { search } = req.query;
    // const queryObject = {};

    // if (search) {
    //   queryObject.title = { $regex: search, $options: "i" };
    // }

    const products = await Product.find();

    // res.status(200).json({ products });
    return products
}

module.exports = {getProducts}