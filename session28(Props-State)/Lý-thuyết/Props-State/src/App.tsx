import React from 'react'
import Functional from './components/Functional'
import Class from './components/Class'
import StateFunctional from './components/StateFunctional'
import StateClass from './components/StateClass'

export default function App() {
  const fullName: string = "Nguyễn Thế Minh"
  const students: string[] = ["Minh", "Sâm"]
  const age: number = 18
  const number: number[] = [1,2,3,4,5,6]
  return (
    <div>
      {/* props và state
        1. props - properties
         - Dùng để truyền dữ liệu từ components cha sang components con
        thế nào được gọi là components cha?
        2. state
         - Dùng để quản lí dữ liệu bên trong components */}
      <Functional name={fullName} students = {students}></Functional>
      <Class number={number} age={age}></Class>
      <StateFunctional></StateFunctional>
      <StateClass></StateClass>
    </div>
  )
}
