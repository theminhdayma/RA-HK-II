import { useState } from "react";

import React from 'react'

export default function TodoList() {
    const [todos] = useState([
        {
          id: 1,
          name: "Thiết kế giao diện Header",
          assign: "Nguyễn Văn A",
          status: false,
          created_at: new Date(),
        },
        {
          id: 2,
          name: "Thiết kế giao diện Footer",
          assign: "Nguyễn Văn B",
          status: true,
          created_at: new Date(),
        },
      ]);
    
      const formatDate = (date:Date) => {
        const options = undefined;
    
    
        return date.toLocaleDateString("vi-VN", options);
      };
    
      const renderStatus = (status:boolean) => {
        return status ? (
          <span className="badge bg-success">Hoàn thành</span>
        ) : (
          <span className="badge bg-danger">Chưa hoàn thành</span>
        );
      };
    
      return (
        <>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên công việc</th>
              <th>Người thực hiện</th>
              <th>Trạng thái</th>
              <th>Thời gian tạo</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td>{todo.name}</td>
                <td>{todo.assign}</td>
                <td>{renderStatus(todo.status)}</td>
                <td>{formatDate(todo.created_at)}</td>
                <td>
                  <button className="btn btn-warning me-2">Sửa</button>
                  <button className="btn btn-danger">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
      );
}

