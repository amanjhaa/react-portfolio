import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <BrowserRouter basename="/react-portfolio">
      <Routes>
        <Route path="/react-portfolio" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
