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

const createProduct = async (req, res) => {
  const { title, desc, price } = req.body;
  try {
    const created = await productService.createProduct(req.body);
    res
      .status(200)
      .json({ msg: `product was created the product is: ${created}` });
  } catch (error) {
    console.error(error);
  }
};

export default { getProducts, createProduct };
