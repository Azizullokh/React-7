import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Signin from "./pages/Signin";
import Error from "./pages/error";
import Signup from "./pages/signup";
import Blog from "./pages/blog";
import General from "./pages/general";
import MainLoyaut from "./Layout/MainLoyaut";
import Contact from "./pages/contact";
import Loyaut from "./Layout/loyaut";
import Post from './pages/posts'


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/register" element={<MainLoyaut><Signup></Signup></MainLoyaut>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Loyaut><Blog></Blog></Loyaut>}></Route>
        <Route path="/login" element={<MainLoyaut><Signin></Signin></MainLoyaut>}></Route>
        <Route path="/home" element={<Loyaut><Home></Home></Loyaut>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
        <Route path="/posts/:id" element={<Loyaut><Post></Post></Loyaut>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/" element={<MainLoyaut><General></General></MainLoyaut>}></Route>
      </Routes>
    </div>
  );
}

export default App;
