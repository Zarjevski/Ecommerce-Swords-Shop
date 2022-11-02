import Product from "../models/product.js";

const getProducts = async (search) => {
  const queryObject = {};
  if (search) {
    queryObject.title = { $regex: search, $options: "i" };
  }
  let products = await Product.find(queryObject);
  return products;
};

const createProduct = async (body) => {
  try {
    console.log(body)
    const { title, desc, price, category } = body;
    const existing = await Product.findOne({title});
    if (existing) {
      throw new Error("product already exist");
    }
    const newProduct = await Product.create({ title, desc, price, category });
    console.log(newProduct)
    return newProduct;
  } catch (error) {
    console.log(error);
  }
};

// delete product function is at the controllers

export default { getProducts, createProduct };
