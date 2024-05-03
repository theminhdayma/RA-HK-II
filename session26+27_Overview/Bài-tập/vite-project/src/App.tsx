import "./App.css"
import ListCourse from './components/Bài1/ListCourse'
import TodoList from "./components/Bài10/TodoList"
import Admin from "./components/Bài12/Admin"
import Calculation from './components/Bài2/Calculation'
import UserInfo from "./components/Bài3/UserInfo"
import ColorBox from "./components/Bài4/ColorBox"
import ColorBox1 from "./components/Bài5/ColorBox1"
import FormatName from "./components/Bài6/FormatName"
import AdminIndex from "./components/Bài7/AdminIndex"
import UserLayout from "./components/Bài8/UserLayout"
import TableInfo from "./components/Bài9/TableInfo"

export default function App() {
  return (
    <>
      <div className='body'>
        <h1>Bài 1</h1>
        <ListCourse></ListCourse>
        <h1>Bài 2</h1>
        <Calculation></Calculation>
        <h1>Bài 3</h1>
        <UserInfo></UserInfo>
        <h1>Bài 4</h1>
        <ColorBox></ColorBox>
        <h1>Bài 5</h1>
        <ColorBox1></ColorBox1>
        <h1>Bài 6</h1>
        <FormatName></FormatName>
        <h1>Bài 7</h1>
        <AdminIndex></AdminIndex>
        <h1>Bài 8</h1>
        <UserLayout></UserLayout>
        <h1>Bài 9</h1>
        <TableInfo></TableInfo>
        <h1>Bài 10</h1>
        <TodoList></TodoList>
        <h1>Bài 11</h1>

        <h1>Bài 12</h1>
        <Admin></Admin>
      </div>
      <br /><br /><br /><br />
      <br /><br /><br /><br />
    </>
  )
}
