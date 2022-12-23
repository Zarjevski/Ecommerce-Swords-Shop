import Product from "../models/product.js";

const oneProduct = async(params) => {
  try {
    const product = await Product.findById(params.id)
    return product
  } catch (error) {
    throw Error("not found")
  }
}

const getProducts = async (req) => {
  const {category} = req.params
  const {search} = req.query
  const queryObject = {};
  if (search) {
    queryObject.title = { $regex: search, $options: "i" };
  }
  if (category) {
    queryObject.category = category;
  }
  let products = await Product.find(queryObject);
  return products;
};

const createProduct = async (body) => {
  try {
    const { title, desc, price, category } = body;
    const existing = await Product.findOne({title});
    if (existing) {
      throw new Error("product already exist");
    }
    const newProduct = await Product.create({ title, desc, price, category });
    return newProduct;
  } catch (error) {
    console.log(error);
  }
};

// delete product function is at the controllers

export default { getProducts, createProduct, oneProduct };
