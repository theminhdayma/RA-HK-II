import React from 'react'
import "./App.css"
import Exercise01 from './components/Bài1/Exercise01'
import Exercise02 from './components/Bài2/Exercise02'
import Exercise03 from './components/Bài3/Exercise03'
import Exercise04 from './components/Bài4/Exercise04'
import Exercise05 from './components/Bài5/Exercise05'
import Exercise06 from './components/Bài6/Exercise06'
import AddElement from './components/Bài7/AddElement'
import Exercise07 from './components/Bài8/Exercise07'
import Form from './components/Bài9/Form'
import RandomGender from './components/Bài10/RandomGender'
import HoverEffect from './components/Bài11/HoverEffect'
import Notification from './components/Bài12/Notification'

export default function App() {
  return (
    <div className='body'>
      <h1>Bài 1</h1>
      <Exercise01></Exercise01>
      <h1>Bài 2</h1>
      <Exercise02></Exercise02>
      <h1>Bài 3</h1>
      <Exercise03></Exercise03>
      <h1>Bài 4</h1>
      <Exercise04></Exercise04>
      <h1>Bài 5</h1>
      <Exercise05></Exercise05>
      <h1>Bài 6</h1>
      <Exercise06></Exercise06>
      <h1>Bài 7</h1>
      <AddElement></AddElement>
      <h1>Bài 8</h1>
      <Exercise07></Exercise07>
      <h1>Bài 9</h1>
      <Form></Form>
      <h1>Bài 10</h1>
      <RandomGender></RandomGender>
      <h1>Bài 11</h1>
      <HoverEffect></HoverEffect>
      <h1>Bài 12</h1>
      <Notification></Notification>
      <br /><br /><br /><br />
      <br /><br /><br /><br />
    </div>
  )
}
