// import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import Api from "./component/Api.jsx";
import Test from './page/test.jsx'
function App() {
  return (
    <>
     
      <Test />
      <Api />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Formulaire />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
     
    </>
  );
}

export default App;
