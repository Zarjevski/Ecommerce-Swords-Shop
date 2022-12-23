import React, { ChangeEventHandler, FormEvent, useState } from "react";
import axios from "../../../api/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const CreateProduct = () => {
  const { token } = useSelector((store: RootState) => store.auth);
  const [msg,setMsg] = useState('')
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    category: "",
    price: 0,
  });
  // handle form changes
  const handleChanges = (e: React.ChangeEvent<any>) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value });
  };
  // handle form submiting
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (product.category && product.desc && product.price && product.title) {
      try {
        const data = await axios.post("/products", product, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMsg(data.data.msg)
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("please fill all the fields");
    }
  };
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-2/6 h-5/6 bg-black rounded-xl flex flex-col justify-center items-center p-4">
        <h1>new product</h1>
        <form
          className="w-full h-full text-black p-10 flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center">
            <label htmlFor="title">name</label>
            <input
              className="w-5/6"
              type="text"
              name="title"
              onChange={handleChanges}
            />
          </div>
          <div className="flex justify-between mt-4">
            <label htmlFor="text-white price">price:</label>
            <input
              className="w-2/6"
              type="number"
              name="price"
              onChange={handleChanges}
            />
            <label htmlFor="category">category:</label>
            <input
              className="w-2/6"
              list="categories"
              name="category"
              onChange={handleChanges}
            />
          </div>
          <datalist className="w-full" id="categories">
            <option value="swords">swords</option>
            <option value="knifes">knife</option>
            <option value="masks">masks</option>
            <option value="armor">armor</option>
          </datalist>
          <div className="mt-4">
            <textarea
              className="w-full h-20"
              name="desc"
              id="desc"
              onChange={handleChanges}
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-red-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4"
          >
            CREATE
          </button>
          <button
            type="reset"
            className="text-white bg-gradient-to-br from-yellow-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4"
          >
            RESET
          </button>
        </form>
        <div className="w-full h-4">
          {msg? <p>{msg}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
