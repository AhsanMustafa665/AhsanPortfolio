import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Shared/Navbar";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Details1 from "./Pages/Deatails/Details1";
import Details2 from "./Pages/Deatails/Details2";
import Details3 from "./Pages/Deatails/Details3";
import Details4 from "./Pages/Deatails/Details4";
import Details5 from "./Pages/Deatails/Details5";
import Details6 from "./Pages/Deatails/Details6";
import Contact from "./Pages/Contact";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="details1" element={<Details1></Details1>}></Route>
        <Route path="details2" element={<Details2></Details2>}></Route>
        <Route path="details3" element={<Details3></Details3>}></Route>
        <Route path="details4" element={<Details4></Details4>}></Route>
        <Route path="details5" element={<Details5></Details5>}></Route>
        <Route path="details6" element={<Details6></Details6>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
