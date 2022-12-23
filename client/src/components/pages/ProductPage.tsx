import React, { useState } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import { addItem } from "../../features/shop/cartSlice";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { ArrowUturnRightIcon } from "@heroicons/react/24/outline";
import { useGetProductQuery } from "../../features/shop/shopApi";

const ProductPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const [bigPicture, setBigPicture] = useState(0);
  const [amount, setAmount] = useState<number>(1);
  const exmArry = [1, 2, 3, 4, 5, 6];
  const { id } = useParams();
  const { data } = useGetProductQuery(id);
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="bg-black h-5/6 w-4/6 flex rounded-lg">
        <div className="w-1/2 p-10 flex flex-col items-center">
          <div className="h-4/6 w-5/6 bg-white justify-center">
            <img src="" alt="" className="h-full w-full" />
          </div>
          <div className="w-5/6 grid grid-cols-3 grid-rows-2 h-1/4 gap-2 item">
            {exmArry.map((picture, index) => {
              return (
                <div key={index} className="h-full w-full bg-white mt-4">
                  <img src="" alt="" className="h-full w-full bg-white" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2 p-10 flex flex-col">
          <div className="flex justify-end w-full mb-5 h-fit">
            <Link to={'/shop'} className="flex text-xl">
              BACK TO SHOP
              <ArrowUturnRightIcon className="h-6 w-6 ml-1" />
            </Link>
          </div>
          <div>
            <h1 className="text-4xl mb-4">
              {data ? data.title : "product title"}
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quaerat sint, eum autem dignissimos ipsam illo doloremque rerum
              necessitatibus veritatis?
            </p>
            <div className="flex items-center">
              <h1 className="text-xl mr-4">price: ${data ? data.price : 0}</h1>
              <input
                className="text-black p-1 w-10"
                type="number"
                name="amount"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
              <button
                className="rounded-md bg-red-600 p-2 m-4"
                onClick={() => dispatch(addItem({ ...data, amount }))}
              >
                add to cart
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Description:</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
