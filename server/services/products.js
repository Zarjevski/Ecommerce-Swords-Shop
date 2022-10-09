import  Product from "../models/product.js";

const getProducts  = async (search) => {
    const queryObject = {};
    if (search) {
      queryObject.title = { $regex: search, $options: "i" };
    }
    let products = await Product.find(queryObject);
    console.log(products);
    return products
}

export default  {getProducts}