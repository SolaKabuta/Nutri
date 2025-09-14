// import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/home";
import About from "./pages/about";
// import Team from "./pages/team";
// import Process from "./pages/process";
// import Pricing from "./pages/pricing";
// import Blog from "./pages/blog";

function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/team" element={<Team />} />*/}
        {/*<Route path="/process" element={<Process />} />*/}
        {/*<Route path="/pricing" element={<Pricing />} />*/}
        {/*<Route path="/blog" element={<Blog />} />*/}
      </Routes>
      <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
