import React from "react";
import "./App.css";
import Counter from "./components/Bài1/Counter";
import UserList from "./components/Bài2/UserList";
import ColorPicker from "./components/Bài3/ColorPicker";
import RandomNumberGenerator from "./components/Bài4/RandomNumberGenerator";
import TodoList from "./components/Bài5/TodoList";
import LoginForm from "./components/Bài6/LoginForm";
import ProductList from "./components/Bài7+8/ProductList ";

export default function App() {
  return (
    <div className="content">
      <h1>Bài 1</h1>
      <Counter />
      <h1>Bài 2</h1>
      <UserList/>
      <h1>Bài 3</h1>
      <ColorPicker/>
      <h1>Bài 4</h1>
      <RandomNumberGenerator/>
      <h1>Bài 5</h1>
      <TodoList/>
      <h1>Bài 6</h1>
      <LoginForm/>
      <h1>Bài 7 + 8</h1>
      <ProductList/>
      <h1>Bài 9</h1>

      <h1>Bài 10</h1>
    </div>
  );
}
