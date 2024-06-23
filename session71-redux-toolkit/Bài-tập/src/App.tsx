import { Route, Routes } from "react-router-dom";
import Count from "./components/Bai1/Count";
import RandomNumber from "./components/Bai2/RandomNumber";
import LightDark from "./components/Bai3/LightDark";
import Mode from "./components/Bai4/Mode";
import BaiTap5 from "./components/Bai5/BaiTap5";
import LanguageSlice from "./components/Bai6/LanguageSlice";
import ListUser from "./components/Bai7/ListUser";
import Login from "./components/Bai8/Login";
import Logined from "./components/Bai8/Logined";

export default function App() {
  return (
    <div className="ml-60 mt-10">
      <h1 className="text-3xl">Bài 1</h1>
      <Count />
      <h1 className="text-3xl">Bài 2</h1>
      <RandomNumber />
      <h1 className="text-3xl">Bài 3</h1>
      <LightDark />
      <h1 className="text-3xl">Bài 4</h1>
      <Mode />
      <h1 className="text-3xl">Bài 5</h1>
      <BaiTap5 />
      <h1 className="text-3xl">Bài 6</h1>
      <LanguageSlice />
      <h1 className="text-3xl">Bài 7</h1>
      <ListUser />
      <h1 className="text-3xl">Bài 8</h1>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/logined" element={<Logined />}></Route>
      </Routes>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
