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
    const { title, desc, price } = body;
    const existing = await Product.findOne({title});
    if (existing) {
      throw new Error("product already exist");
    }
    const newProduct = await Product.create({ title, desc, price });
    return newProduct;
  } catch (error) {
    console.log(error);
  }
};

export default { getProducts, createProduct };
