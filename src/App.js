import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
