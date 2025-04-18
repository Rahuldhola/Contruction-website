import "./App.css";
import Navbar from "./Navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer";
import Carrier from "./carrier";
import Info from "./info";
// import Application1 from "/app1";
import Signup from "./signin";
import Login from "./login";
// import Application1 from "/app1";
import Apppp from "./res";
import JobOpenings from "./opening";

function App() {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />

          {/* Define routes for Home, About, and Contact */}
          {/* <Route path="/" index element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/info" element={<Info/>} />
          {/* <Route path="/signup" element={<Signup/>} /> */}
          {/* Add more routes as needed */}
          {/* <Route path="/login" element={<Login/>} /> */}
          
          <Route path="/application" element={<Apppp/>} />
          <Route path="/application/signup" element={<Signup/>} />
          <Route path="/application/login" element={<Login/>} />
          <Route path="/opening" element={<JobOpenings/>} />
 

        </Routes>{" "}
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;