import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import Map from "./component/Map";
import Home from "./container/Home";
import TopFlops from "./component/Topflops/Topflops";
import Recommandation from "./component/Recommandation/Recommandation";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/top-flop" element={<TopFlops />} />
          <Route path="/conseil" element={<Recommandation />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
