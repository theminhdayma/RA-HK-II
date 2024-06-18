import React from "react";
import { useSelector } from "react-redux";

export default function ListUser() {
  const statePListUser: any = useSelector((state) => {
    return state;
  });
  console.log(statePListUser);

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4 text-left">Id</th>
          <th className="py-2 px-4 text-left">Tên</th>
          <th className="py-2 px-4 text-left">giới tính</th>
          <th className="py-2 px-4 text-left">Ngày sinh</th>
          <th className="py-2 px-4 text-left">Địa chỉ</th>
          <th className="py-2 px-4 text-left" rowSpan={2}>
            Chức năng
          </th>
        </tr>
      </thead>
      <tbody>
        {statePListUser.reducerListUser.map((item: any) => (
          <tr className="border-b">
            <td className="py-2 px-4">{item.id}</td>
            <td className="py-2 px-4">{item.name}</td>
            <td className="py-2 px-4">{item.sex}</td>
            <td className="py-2 px-4">{item.dateOfBirth}</td>
            <td className="py-2 px-4">{item.address}</td>
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
