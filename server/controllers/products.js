import Product from "../models/product.js";
import productService from "../services/products.js";

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts(req);
    return res.send(products);
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const getOne = await productService.oneProduct(req.params);
    res.status(200).send(getOne);
  } catch (error) {
    console.error(error);
  }
};

const createProduct = async (req, res) => {
  try {
    const created = await productService.createProduct(req.body);
    res
      .status(200)
      .json({ msg: `product was created the product is: ${created}` });
  } catch (error) {
    console.error(error);
  }
};

const deleteProduct = async (req, res) => {
  const { _id } = req.body;
  try {
    const deleteOne = await Product.deleteOne({ _id });
    res.status(200).json({ msg: deleteOne });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const update = await productService.update(id, req.body);
    res.status(200).json({ status: "success", msg: { update } });
  } catch (error) {
    res.status(500).json(error);
  }
};

export default {
  getProducts,
  createProduct,
  deleteProduct,
  getOneProduct,
  updateProduct,
};
