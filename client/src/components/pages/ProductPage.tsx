import React, { useState } from "react";
import Section from "../blocks/Section";
import Box from "../blocks/Box";
import Half from "../blocks/Half";
import H2 from "../elements/H2";
import Button from "../buttons/Button";
import { useParams, Link } from "react-router-dom";
import { addItem } from "../../features/shop/cartSlice";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { ArrowUturnRightIcon } from "@heroicons/react/24/outline";
import { useGetProductQuery } from "../../api/apiSlice";

const ProductPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const [amount, setAmount] = useState<number>(1);
  const [imgIndex,setImgIndex] = useState(0)
  const { id } = useParams();
  const { data } = useGetProductQuery(id);
  return (
    <Section>
      <Box>
        <Half>
          {data ? (
            <img src={data.img[imgIndex]} alt={data.title} className="h-full w-full" />
          ) : (
            <img src="" alt="" />
          )}
        </Half>
        <Half>
          <div className="flex justify-end w-full mb-5 h-fit">
            <Link to={"/shop"} className="flex text-xl">
              BACK TO SHOP
              <ArrowUturnRightIcon className="h-6 w-6 ml-1" />
            </Link>
          </div>
          <div>
            <H2 className="text-4xl mb-4">
              {data ? data.title : "product title"}
            </H2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quaerat sint, eum autem dignissimos ipsam illo doloremque rerum
              necessitatibus veritatis?
            </p>
            <div className="flex items-center">
              <h1 className="text-xl mr-4">price: ${data ? data.price : 0}</h1>
              <input
                className="text-red-500 m-4 p-1 w-8 rounded-lg bg-light-grey"
                type="number"
                name="amount"
                id="amount"
                min={1}
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
              <Button
                type={"buttom"}
                onClick={() => dispatch(addItem({ ...data, amount }))}
              >
                ADD TO CART
              </Button>
            </div>
          </div>
          <H2>Description:</H2>
          {data?<p>{data.desc}</p>:<p></p>}
        </Half>
      </Box>
    </Section>
  );
};

export default ProductPage;
