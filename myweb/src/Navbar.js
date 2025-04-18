// import React, { useState, useEffect } from "react";
// import "./navbar.css"; // Import the CSS file

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);


//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className={`navbar ${scrolled ? "scrolled" : "transparent"}`}>
//       <div className="logg">
//         <a href="/">
//           <img
//             src={require("./image/psvadhiya.jpg")}
//             alt="Logo"
//             className="log-img"
//             style={{ width: "200px", height: "80px" }}
//           />
//         </a>
//         <h1 className="log">
//           <a
//             href="/"
//             style={{
//               textDecoration: "none",
//               color: "black",
//               fontFamily: "cursive",
//             }}
//           >
//             P S Vadhiya Contruction
//           </a>
//         </h1>
//       </div>
//       <button className="menu-button" onClick={toggleMenu}>
//         <span>☰</span>
//       </button>
//       <div>
//         <div className={`menu ${isMenuOpen ? "active" : ""}`}>
//           <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li className="dropdown">
//               <a href="about">About▾</a>
//               <div class="dropdown-content">
//                 <a href="/about">Company Profile</a>
//                 <a href="/about">Vision & Mission</a>
//               </div>
//             </li>
//             <li>
//               <a href="contact">Contact</a>
//             </li>
//             <li>
//               <a href="opening">Career</a>
//             </li>
//             {/* <li>
//               <a href="application">Application</a>
//             </li> */}

//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : "transparent"}`}>
      <div className="logg">
        <a href="/">
          <img
            src={require("./image/psvc2.png")}
            alt="Logo"
            className="log-img"
            style={{ width: "200px", height: "80px" }}
          />
        </a>
        <h1 className="log">
        <a
  href="/"
  style={{
    textDecoration: "none",
    fontFamily: "Orbitron",
    background: "linear-gradient(90deg,#2d2b50 , #ea5c1f)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent", // fallback
  }}
>
  P S Vadhiya Construction
</a>

        </h1>
      </div>

      <button className="menu-button" onClick={toggleMenu}>
        <span>☰</span>
      </button>

      <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li className="dropdown">
            <a href="/about">About▾</a>
            <div className="dropdown-content">
              <a href="/about">Company Profile</a>
              <a href="/about">Vision & Mission</a>
            </div>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/opening">Career</a>
          </li>
          {/* <li><a href="/application">Application</a></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
