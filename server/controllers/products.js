import Product from "../models/product.js";
import productService from "../services/products.js";

const getProducts = async (req, res) => {
  const { search } = req.query;
  try {
    const products = await productService.getProducts(search);
    return res.send(products);
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async(req,res) => {
  try {
    const getOne = await productService.oneProduct(req.params)
    res.status(200).send(getOne)
  }
  catch(error){
    console.error(error)
  }
}


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
    console.log(deleteOne);
    res.status(200).json({ msg: `product wih id:${_id} was deleted` });
  } catch (error) {
    console.log(error);
  }
};

export default { getProducts, createProduct, deleteProduct, getProduct };
