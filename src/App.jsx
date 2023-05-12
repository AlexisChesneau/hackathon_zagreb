import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import Map from './component/Map'
import Home from './container/Home'
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
