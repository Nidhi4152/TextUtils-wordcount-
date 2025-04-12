// // import React from "react";
// import React, { useState } from "react"; // ✅ Correct

// import "./Navbar.css"; // Import CSS

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     // <nav className={'navbar-${props.mode} bg-${props.mode} '}>
//     // <nav className={`navbar-${props.mode} bg-${props.mode}`}>
//     <nav className={`navbar-${props.mode} bg-${props.mode}`}>
//       <div className="logo">TexUtils</div>

//       <div className={`menu ${isOpen ? "active" : ""}`}>
//         <a href="#home">Home</a>
//         <a href="#features">Features</a>
//         <a href="#about">About</a>
//         <a href="#contact">Contact</a>
//       </div>

//       <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
//         ☰
//       </button>

//       {isOpen && (
//         <div className="mobile-menu">
//           <a href="#home">Home</a>
//           <a href="#features">Features</a>
//           <a href="#about">About</a>
//           <a href="#contact">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";
// import "./Navbar.css"; // You can define dark/light styles here

// const Navbar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
//       <div className="logo">TexUtils</div>

//       <div className={`menu ${isOpen ? "active" : ""}`}>
//         <a href="#home">Home</a>
//         <a href="#features">Features</a>
//         <a href="#about">About</a>
//         <a href="#contact">Contact</a>
//       </div>

//       <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
//         ☰
//       </button>

//       {/* Optional: Mode Toggle Button */}
//       <div className="mode-toggle">
//         <button onClick={props.toggleMode}>
//           Enable {props.mode === "light" ? "Dark" : "Light"} Mode
//         </button>
//       </div>

//       {isOpen && (
//         <div className="mobile-menu">
//           <a href="#home">Home</a>
//           <a href="#features">Features</a>
//           <a href="#about">About</a>
//           <a href="#contact">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css"; // Optional CSS
// import { Link } from "react-router-dom";

// const Navbar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
//       <div className="logo">TexUtils</div>

//       <div className={`menu ${isOpen ? "active" : ""}`}>
//         <a href="#home">Home</a>
//         <a href="#features">Features</a>
//         <a href="#about">About</a>
//         <a href="#contact">Contact</a>
//       </div>

//       {/* <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
//         ☰
//       </button> */}

//       {isOpen && (
//         <div className="mobile-menu">
//           <a href="#home">Home</a>
//           <a href="#features">Features</a>
//           <a href="#about">About</a>
//           <a href="#contact">Contact</a>
//         </div>
//       )}

//       {/* Toggle button for dark/light mode */}
//       <div className="form-check form-switch mx-3">
//         <input
//           className="form-check-input"
//           onClick={props.toggleMode}
//           type="checkbox"
//           role="switch"
//           id="flexSwitchCheckDefault"
//         />
//         <label
//           className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`}
//           htmlFor="flexSwitchCheckDefault"
//         >
//          Enable {props.mode === 'light' ? 'Dark' : 'Light'} mode
//         </label>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import "./Navbar.css"; // Optional CSS
// import { Link } from "react-router-dom";

// const Navbar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
//       <div className="logo">
//         <Link to="/" style={{ textDecoration: 'none', color: props.mode === 'light' ? 'black' : 'white' }}>
//           TextUtils
//         </Link>
//       </div>

//       <div className={`menu ${isOpen ? "active" : ""}`}>
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/features" className="nav-link">Features</Link>
//         <Link to="/about" className="nav-link">About</Link>
//         <Link to="/contact" className="nav-link">Contact</Link>
//       </div>

//       {isOpen && (
//         <div className="mobile-menu">
//           <Link to="/" className="nav-link">Home</Link>
//           <Link to="/features" className="nav-link">Features</Link>
//           <Link to="/about" className="nav-link">About</Link>
//           <Link to="/contact" className="nav-link">Contact</Link>
//         </div>
//       )}

//       {/* Toggle button for dark/light mode */}
//       <div className="form-check form-switch mx-3">
//         <input
//           className="form-check-input"
//           onClick={props.toggleMode}
//           type="checkbox"
//           role="switch"
//           id="flexSwitchCheckDefault"
//         />
//         <label
//           className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`}
//           htmlFor="flexSwitchCheckDefault"
//         >
//           Enable {props.mode === 'light' ? 'Dark' : 'Light'} mode
//         </label>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "./Navbar.css"; // Tumhara existing CSS
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>TextUtils</Link>
      </div>

      <div className={`menu ${isOpen ? "active" : ""}`}>
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/features" className="menu-item">Features</Link>
        <Link to="/about" className="menu-item">About</Link>
        <Link to="/contact" className="menu-item">Contact</Link>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="menu-item">Home</Link>
          <Link to="/features" className="menu-item">Features</Link>
          <Link to="/about" className="menu-item">About</Link>
          <Link to="/contact" className="menu-item">Contact</Link>
        </div>
      )}

      {/* Toggle button for dark/light mode */}
      <div className="form-check form-switch mx-3">
        <input
          className="form-check-input"
          onClick={props.toggleMode}
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label
          className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`}
          htmlFor="flexSwitchCheckDefault"
        >
          Enable {props.mode === 'light' ? 'Dark' : 'Light'} mode
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
