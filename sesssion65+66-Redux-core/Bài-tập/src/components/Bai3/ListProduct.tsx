import React from "react";
import { useSelector } from "react-redux";

export default function ListProduct() {
    const statePListProduct: any = useSelector((state) => {
        return state;
      });
      console.log(statePListProduct);
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4 text-left">Id</th>
          <th className="py-2 px-4 text-left">Tên sản phẩm</th>
          <th className="py-2 px-4 text-left">gía</th>
          <th className="py-2 px-4 text-left">Số lượng (kg)</th>
          <th className="py-2 px-4 text-left" rowSpan={2}>
            Chức năng
          </th>
        </tr>
      </thead>
      <tbody>
        {statePListProduct.reducerListProduct.map((item: any) => (
          <tr className="border-b">
            <td className="py-2 px-4">{item.id}</td>
            <td className="py-2 px-4">{item.productName}</td>
            <td className="py-2 px-4">{item.price}</td>
            <td className="py-2 px-4">{item.quantity}</td>
            <td className="py-2 px-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Sửa
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
