import  productService from "../services/products.js"

const getProducts = async (req,res) => {
  try {
    const products = await productService.getProducts()
    return res.send(products)

  } catch (error) {
    console.log(error);
  }
};

export default { getProducts };
