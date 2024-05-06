import React from 'react'
import "./App.css"
import Exercises01 from './components/Bài1/Exercises01'
import Exercise02 from './components/Bài2/Exercise02'
import Exercise03 from './components/Bài3/Exercise03'
import Parent_Comp from './components/Bài4/Parent_Comp'
import Component_Parent from './components/Bài5/Component_Parent'
import Parent01 from './components/Bài6/Parent01'
import ListPost from './components/Bài7/ListPost'
import ListProduct from './components/Bài8/ListProduct'
import Status from './components/Bài9/Status'

export default function App() {
  return (
    <div className='body'>
      <h1>Bài 1</h1>
      <Exercises01></Exercises01>
      <h1>Bài 2</h1>
      <Exercise02></Exercise02>
      <h1>Bài 3</h1>
      <Exercise03></Exercise03>
      <h1>Bài 4</h1>
      <Parent_Comp></Parent_Comp>
      <h1>Bài 5</h1>
      <Component_Parent></Component_Parent>
      <h1>Bài 6</h1>
      <Parent01></Parent01>
      <h1>Bài 7</h1>
      <ListPost></ListPost>
      <h1>Bài 8</h1>
      <ListProduct></ListProduct>
      <h1>Bài 9</h1>
      <Status></Status>
      <h1>Bài 10</h1>

      <h1>Bài 11</h1>

      <h1>Bài 12</h1>
    </div>
  )
}
