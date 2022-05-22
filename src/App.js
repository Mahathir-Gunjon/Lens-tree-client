import { Route, Routes } from "react-router-dom";
import Login from "./LoginRegister/Login";
import RequireAuth from "./LoginRegister/RequireAtuh";
import Navbar from "./components/Header/Navbar";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home/Home";
import SignUp from "./LoginRegister/Signup";
import Purchase from "./components/Purchase/Purchase";
import Dashboard from "./components/Dashboard/Dashboard";
import MyHistory from "./components/Dashboard/MyHistory";

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route path='history' element={<MyHistory />} />
        </Route>
        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
