import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const ProductTable = () => {
  const { products } = useSelector((state: RootState) => state.shop);
  const { token } = useSelector((state: RootState) => state.auth);
  const deleteProduct = async (_id: string) => {
    console.log(_id);
    await axios.delete("http://localhost:80/products", {
      data: { _id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>product name</th>
          <th>action</th>
        </tr>
      </thead>
      {products.map((product: any) => {
        const { _id, title } = product;
        return (
          <tbody>
            <td>{title}</td>
            <td className="p-4">
              <button onClick={() => deleteProduct(_id)}>delete</button>
              <button>edit</button>
            </td>
          </tbody>
        );
      })}
    </table>
  );
};

export default ProductTable;
