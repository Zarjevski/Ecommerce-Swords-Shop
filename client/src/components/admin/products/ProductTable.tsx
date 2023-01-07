import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useGetProductsQuery } from "../../../api/apiSlice";
import { Table, Thead, Tr, Th, Td } from "../../elements/Table";
import Section from "../../blocks/Section";
import Box from "../../blocks/Box";
import Spinner from "../../utility/Spinner";
import Button from "../../buttons/Button";
import H2 from "../../elements/H2";

const ProductTable = () => {
  const { data, isLoading, refetch } = useGetProductsQuery({});
  const { token } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate()
  const deleteProduct = async (_id: string) => {
    await axios.delete("http://localhost:80/products", {
      data: { _id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  if (isLoading) {
    return (
      <Section>
        <Spinner />
      </Section>
    );
  }
  return (
    <Section>
      <Box className="overflow-x-auto flex-col">
        <H2>Manage Products</H2>
        <Table>
          <Thead>
            <Tr>
              <Th>Product name</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <tbody>
            {data.map((product: any, index:number) => {
              return (
                <Tr key={index}>
                  <Td>{product.title}</Td>
                  <Td>{product.category}</Td>
                  <Td>${product.price}</Td>
                  <Td>
                    <Button
                      type={"button"}
                      onClick={() => {deleteProduct(product._id);refetch()}}
                    >
                      delete
                    </Button>
                    <Button
                      type={"button"}
                      onClick={() => navigate(`/dashboard/products/edit/${product._id}`)}
                    >
                      edit
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </Box>
    </Section>
  );
};

export default ProductTable;
