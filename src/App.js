import { Route, Routes } from "react-router-dom";
import Login from "./LoginRegister/Login";
import RequireAuth from "./LoginRegister/RequireAtuh";
import Navbar from "./components/Header/Navbar";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home/Home";
import SignUp from "./LoginRegister/Signup";
import Purchase from "./components/Purchase/Purchase";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrder from "./components/Dashboard/MyOrder";
import AddReview from "./components/Dashboard/AddReview";
import Order from "./components/Pages/Order/Order";
import MyPortfolio from "./components/Pages/MyPortfolio/MyPortfolio";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/myPortfolio" element={<MyPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/tool/:toolId" element={
          <RequireAuth>
            <Order />
          </RequireAuth>}
        />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index path='order' element={<MyOrder />} />
          <Route path='review' element={<AddReview />} />
          {/* <Route path='profile' element={<MyHistory />} /> */}
        </Route>
        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
