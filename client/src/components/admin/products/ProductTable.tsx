import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useGetProductsQuery } from "../../../features/shop/shopApi";
import Spinner from "../../utility/Spinner";

const ProductTable = () => {
  const { data, isLoading, refetch } = useGetProductsQuery({});
  const { token } = useSelector((state: RootState) => state.auth);
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
      <div className="h-full w-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-5/6 w-5/6 flex justify-center items-center bg-black rounded-xl">
        <table className="h-4/6 w-4/6">
          {/* table head */}
          <thead className="border-b-2 h-4 w-full">
            <tr>
              <th className="h-full">product name</th>
              <th className="h-full">action</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody>
            {data.map(
              (product: { _id: string; title: string }, index: number) => {
                const { _id, title } = product;
                return (
                  <tr className="border-b-2 w-full h-2" key={index}>
                    <td className="w-1/2">{title}</td>
                    <td className="w-full h-full flex items-center justify-end">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        edit
                      </button>
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => {
                          deleteProduct(_id);
                          refetch();
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
