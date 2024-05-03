import React from 'react'
import "./TodoList.css"
import Search from './Search'
import Render from './Render'

export default function TodoList() {
  return (
    <div className='todoList'>
        <h2>Quản Lí Công Việc</h2>
        <Search></Search>
        <div className='allTodo'>
            <h5 className='h5'>Tất cả công việc</h5>
            <div className='thanhNgang'></div>
        </div>
        <Render></Render>
        <Render></Render>
    </div>
  )
}
