import React from 'react';
import "./TodoList.css";
import Render from './Render';
import Search from './Search';

export default function TodoList() {
  return (
    <form className='todoList'>
      <h2>Quản Lí Công Việc</h2>
      <Search />
      <div className='allTodo'>
        <h5 className='h5'>Tất cả công việc</h5>
        <div className='thanhNgang'></div>
      </div>
      <Render />
    </form>
  );
}
