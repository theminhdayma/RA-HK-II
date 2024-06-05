import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Bài1+2/Home";
import About from "./components/Bài1+2/About";
import Contact from "./components/Bài1+2/Contact";
import About3 from "./components/Bài3/About3";
import Contact3 from "./components/Bài3/Contact3";
import Elements from "./components/Bài3/Elements";
import Index from "./components/Bài3/Index";
import Services from "./components/Bài3/Services";
import About6 from "./components/Bài6/About6";
import Blog from "./components/Bài6/Blog";
import Contact6 from "./components/Bài6/Contact6";
import Index6 from "./components/Bài6/Index6";
import Repair from "./components/Bài6/Repair";
import Index4 from "./components/Bài4/Index4";
import Contact4 from "./components/Bài4/Contact4";
import NotFound from "./components/Bài4/NotFound";
import Open from "./components/Bài4/Open";
import Price from "./components/Bài4/Price";
import Service from "./components/Bài4/Service";
import Team from "./components/Bài4/Team";
import Testimonial from "./components/Bài4/Testimonial";

export default function App() {
  return (
    <div>
      {/* <h1>Bài 1 + 2</h1>
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
        <Route path="/" element={<Index />}></Route>
        <Route path="/about" element={<About3 />}></Route>
        <Route path="/contact" element={<Contact3 />}></Route>
        <Route path="/elements" element={<Elements />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes> */}
      <h1>Bài 4</h1>
      <Routes>
        <Route path="/" element={<Index4 />}></Route>
        <Route path="/about" element={<About6 />}></Route>
        <Route path="/contact" element={<Contact4 />}></Route>
        <Route path="/open" element={<Open />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="/price" element={<Price />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/testimonial" element={<Testimonial />}></Route>
      </Routes>
      {/* <h1>Bài 6</h1>
      <Routes>
        <Route path="/" element={<Index6 />}></Route>
        <Route path="/about6" element={<About6 />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact6" element={<Contact6 />}></Route>
        <Route path="/repair" element={<Repair />}></Route>
      </Routes> */}
    </div>
  );
}
