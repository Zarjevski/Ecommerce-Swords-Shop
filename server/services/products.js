import Product from "../models/product.js";

const oneProduct = async (params) => {
  try {
    const product = await Product.findById(params.id);
    return product;
  } catch (error) {
    throw Error("not found");
  }
};

const getProducts = async (req) => {
  const { category } = req.params;
  const { search } = req.query;
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
    const { title, description, price, category, img } = body;
    const existing = await Product.findOne({ title });
    if (existing) {
      throw new Error("product already exist");
    }
    const newProduct = await Product.create({
      title,
      description,
      price,
      category,
      img,
    });
    return newProduct;
  } catch (error) {
    console.log(error);
  }
};

const update = async (id, body) => {
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return `no product with id of: ${id}`;
    }
    return product;
  } catch (error) {}
};

// delete product function is at the controllers

export default { getProducts, createProduct, oneProduct, update };
