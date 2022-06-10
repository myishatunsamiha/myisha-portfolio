import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'animate.css';
import Home from './pages/Home/Home';
import Navbar from "./pages/Shared/Navbar";
import Footer from "./pages/Shared/Footer";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";


function App() {
  return (
    <div className="bg-slate-800">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
