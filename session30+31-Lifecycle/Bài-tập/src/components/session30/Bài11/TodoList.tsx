import React, { useState } from 'react';
import "./TodoList.css";
import Render from './Render';
import Search from './Search';

export default function TodoList() {
  const [todoList, setTodoList] = useState<string[]>([]);

  // Hàm này sẽ được truyền xuống Search để cập nhật todoList
  const updateTodoList = (newTodoList: string[]) => {
    setTodoList(newTodoList);
  };

  return (
    <div className='todoList'>
      <h2>Quản Lí Công Việc</h2>
      <Search updateTodoList={updateTodoList} />
      <div className='allTodo'>
        <h5 className='h5'>Tất cả công việc</h5>
        <div className='thanhNgang'></div>
      </div>
      <Render />
    </div>
  );
}
