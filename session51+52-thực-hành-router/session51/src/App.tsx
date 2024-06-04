import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Bài1+2/Home";
import About from "./components/Bài1+2/About";
import Contact from "./components/Bài1+2/Contact";
import About3 from "./components/Bài3/About3";
import Contact3 from "./components/Bài3/Contact3";
import Elements from "./components/Bài3/Elements";
import Index from "./components/Bài3/Index";
import Services from "./components/Bài3/Services";

export default function App() {
  return (
    <div style={{ marginLeft: "250px" }}>
      <h1>Bài 1 + 2</h1>
      <nav>
        <ul className="w-[300px] h-[50px] bg-purple-200 flex justify-center items-center gap-8 text-red-600">
          <li className="w-[50px] h-[30px] bg-orange-300 flex justify-start items-center transition-transform transform hover:scale-150">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="w-[50px] h-[30px] bg-orange-300 flex justify-start items-center transition-transform transform hover:scale-150">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="w-[60px] h-[30px] bg-orange-300 flex justify-start items-center transition-transform transform hover:scale-150">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <h1>Bài 3</h1>
      <Routes>
        <Route path="/" element={<About3 />}></Route>
        <Route path="/contact" element={<Contact3 />}></Route>
        <Route path="/elements" element={<Elements />}></Route>
        <Route path="/index" element={<Index />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
    </div>
  );
}
