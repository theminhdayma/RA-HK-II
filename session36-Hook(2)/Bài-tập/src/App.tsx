import React from "react";
import "./App.css";
import ChangeTitle from "./components/Bài1/ChangeTitle";
import CountClick from "./components/Bài2/CountClick";
import Navbar from "./components/Bài3/Navbar";
import FocusInput from "./components/Bài4/FocusInput";
import Clock from "./components/Bài5/Clock";
import Scroll from "./components/Bài6/Scroll";
import Counter from "./components/Bài7/Counter";
import Season from "./components/Bài8/Season";
import CountTimeRender from "./components/Bài9/CountTimeRender";
import KeyPress from "./components/Bài10/KeyPress";
import ImagePreview from "./components/Bài11/ImagePreview";

export default function App() {
  return (
    <div className="content">
      <h1>Bài 1</h1>
      <ChangeTitle />
      <h1>Bài 2</h1>
      <CountClick />
      <h1>Bài 3</h1>
      <Navbar />
      <h1>Bài 4</h1>
      <FocusInput />
      <h1>Bài 5</h1>
      <Clock />
      <h1>Bài 6</h1>
      <Scroll />
      <h1>Bài 7</h1>
      <Counter />
      <h1>Bài 8</h1>
      <Season />
      <h1>Bài 9</h1>
      <CountTimeRender />
      <h1>Bài 10</h1>
      <KeyPress />
      <h1>Bài 11</h1>
      <ImagePreview />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
