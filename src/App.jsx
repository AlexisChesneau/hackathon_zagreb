import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import MainBody from "./component/MainBody/MainBody";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <MainBody />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Formulaire />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Footer />
    </>
  );
}

export default App;
