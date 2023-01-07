import React, { ChangeEventHandler, FormEvent, useState } from "react";
import axios from "../../../api/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Section from "../../blocks/Section";
import Box from "../../blocks/Box";
import Half from "../../blocks/Half";
import SMbox from "../../blocks/SMbox";
import Form from "../../blocks/Form";
import UserInput from "../../elements/UserInput";
import Button from "../../buttons/Button";

const CreateProduct = () => {
  const { token } = useSelector((store: RootState) => store.auth);
  const [msg, setMsg] = useState("");
  const [product, setProduct] = useState({
    title: "",
    description: "",
    imgs: [],
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
    if (
      product.category &&
      product.description &&
      product.price &&
      product.title 
    ) {
      try {
        const data = await axios.post("/products", product, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMsg(data.data.msg);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("please fill all the fields");
    }
  };
  return (
    <Section>
      <Box>
        <Half>
          <Form onSubmit={handleSubmit} heading={"add product"}>
            <UserInput
              type="text"
              placeholder="title"
              id="title"
              onChange={handleChanges}
              name="title"
            />
            <UserInput
              type="number"
              placeholder="price"
              id="price"
              onChange={handleChanges}
              name="price"
            />
            <select
              name="category"
              id="category"
              onChange={handleChanges}
              className="w-3/6 
              text-sm 
              p-2 
              rounded-r-sm 
            bg-light-grey/[.05]
              backdrop-blur-xl
            focus:border-sky-500
              focus:outline-none
            focus:ring-sky-500
              border"
            >
              <option value="select">select</option>
              <option value="Swords">Swords</option>
              <option value="Knifes">Knifes</option>
              <option value="Bows">Bows</option>
            </select>
            <textarea className="bg-light-grey/[.3] w-5/6 border mt-4 h-1/4" name="description" onChange={handleChanges}></textarea>
            <Button type={"submit"} onClick={()=>handleSubmit}>CREATE</Button>
          </Form>
        </Half>
        <Half>
          <SMbox>
            <h6>2</h6>
          </SMbox>
          <SMbox>
            <h6>2</h6>
          </SMbox>
        </Half>
      </Box>
    </Section>
  );
};

export default CreateProduct;
