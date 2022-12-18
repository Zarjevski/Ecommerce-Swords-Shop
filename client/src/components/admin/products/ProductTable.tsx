import React, {useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useGetProductsQuery } from "../../../features/shop/shopApi";

const ProductTable = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const { token } = useSelector((state: RootState) => state.auth);
  const deleteProduct = async (_id: string) => {
    await axios.delete("http://localhost:80/products", {
      data: { _id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  return (
    <table className="h-4/6 w-5/6">
      {/* table head */}
      <thead className="border-b-2 h-4 w-full">
        <tr>
          <th className="h-full">product name</th>
          <th className="h-full">action</th>
        </tr>
      </thead>
      {/* table body */}
      <tbody>
        {isLoading
          ? null
          : data.map(
              (product: { _id: string; title: string }, index: number) => {
                const { _id, title } = product;
                return (
                  <tr className="border-b-2 w-full h-4">
                    <td className="w-1/2">{title}</td>
                    <td className="w-full h-full flex items-center justify-end">
                      <button className="bg-red-500 mr-2">edit</button>
                      <button className="bg-red-500" onClick={()=> deleteProduct(_id)}>delete</button>
                    </td>
                  </tr>
                );
              }
            )}
      </tbody>
    </table>
  );
};

export default ProductTable;
