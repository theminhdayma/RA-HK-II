import React from "react";
import Table from "react-bootstrap/Table";

export default function Baitap10() {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>Nam</td>
            <td>01/01/1990</td>
            <td>nguyenvana@example.com</td>
            <td>Hà Nội</td>
            <td className="flex gap-3">
                <button className="w-20 h-8 bg-yellow-400">Sửa</button>
                <button className="w-20 h-8 bg-red-400">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Nguyễn Văn B</td>
            <td>Nam</td>
            <td>01/01/1991</td>
            <td>nguyenvanb@example.com</td>
            <td>Đà Nẵng</td>
            <td className="flex gap-3">
                <button className="w-20 h-8 bg-yellow-400">Sửa</button>
                <button className="w-20 h-8 bg-red-400">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nguyễn Văn C</td>
            <td>Nữ</td>
            <td>01/01/1992</td>
            <td>nguyenvanc@example.com</td>
            <td>Hồ Chí Minh</td>
            <td className="flex gap-3">
                <button className="w-20 h-8 bg-yellow-400">Sửa</button>
                <button className="w-20 h-8 bg-red-400">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Nguyễn Văn D</td>
            <td>Nam</td>
            <td>01/01/1993</td>
            <td>nguyenvand@example.com</td>
            <td>Huế</td>
            <td className="flex gap-3">
                <button className="w-20 h-8 bg-yellow-400">Sửa</button>
                <button className="w-20 h-8 bg-red-400">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Nguyễn Văn E</td>
            <td>Nữ</td>
            <td>01/01/1994</td>
            <td>nguyenvane@example.com</td>
            <td>Đà Lạt</td>
            <td className="flex gap-3">
                <button className="w-20 h-8 bg-yellow-400">Sửa</button>
                <button className="w-20 h-8 bg-red-400">Xóa</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
