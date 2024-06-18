import { Route, Routes } from "react-router-dom";
import Profile from "./components/Bai1/Profile";
import ListUser from "./components/Bai2/ListUser";
import ListProduct from "./components/Bai3/ListProduct";
import Counter from "./components/Bai4/Counter";
import RandomNumber from "./components/Bai5/RandomNumber";
import ChangeState from "./components/Bai6/ChangeState";
import Checkbox from "./components/Bai7+8/Checkbox";
import Register from "./components/Bai9+10/Register";
import Login from "./components/Bai9+10/Login";

export default function App() {
  return (
    <div style={{ marginLeft: "200px" }}>
      <h1>Bài 1</h1>
      <Profile />
      <br />
      <br />
      <br />
      <h1>Bài 2</h1>
      <ListUser />
      <br />
      <br />
      <br />
      <h1>Bài 3</h1>
      <ListProduct />
      <br />
      <br />
      <br />
      <h1>Bài 4</h1>
      <Counter />
      <br />
      <br />
      <br />
      <h1>Bài 5</h1>
      <RandomNumber />
      <br />
      <br />
      <br />
      <h1>Bài 6</h1>
      <ChangeState />
      <br />
      <br />
      <br />
      <h1>Bài 7 + 8</h1>
      <Checkbox />
      <br />
      <br />
      <br />
      <h1>Bài 9 + 10</h1>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}
