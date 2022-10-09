import  productService from "../services/products.js"

const getProducts = async (req,res) => {
  const { search } = req.query;
  try {
    const products = await productService.getProducts(search)
    return res.send(products)

  } catch (error) {
    console.log(error);
  }
};

export default { getProducts };
