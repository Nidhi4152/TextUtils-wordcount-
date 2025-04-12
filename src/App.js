// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Textform from "./components/Textform";
// import About from "./components/About";

// function App() {
//   const [mode, setMode] = useState("light"); // 'light' or 'dark'

//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#121212";
//       document.body.style.color = "white";
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       document.body.style.color = "black";
//     }
//   };

//   return (
//     <div>
//       <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
//       <div className="container my-3">
//         <Textform heading="Enter the text below" />
//         <About />
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Textform from "./components/Textform";
// import Alerts from "./components/Alerts";
// import { Routes, Route } from 'react-router-dom';

// // index.js ya App.js ke top me
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



// function App() {
//   const [mode, setMode] = useState("light");
//   const [alert, setAlerts] = useState("null");
  
//   const showAlerts = (message, type) =>{
// setAlerts({
//   msg: message,
//   type: type
 
// })
//   }
//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#121212";
//       document.body.style.color = "white";
//       showAlerts("dark mode has been enable", "success");
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       document.body.style.color = "black";
//       showAlerts("light mode has been enable", "success");
//     }
//   };

//   return (
//     <div>
//       <Router>
//       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//       {/* <Alerts alerts="This is alerts"/> */}
//       <Alerts alerts={alert} />
//       <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
         
//           <Route path="/">
//           <Textform showAlerts={showAlerts} heading="Enter the text below" mode={mode} />
           
//           </Route>
//         </Switch>
//       <div className="container my-3">
//         {/* <Textform showAlerts={showAlerts} heading="Enter the text below" mode={mode} /> */}
//         {/* <About /> */}
//       </div>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import Alerts from "./components/Alerts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlerts] = useState(null);

  const showAlerts = (message, type) => {
    setAlerts({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
      showAlerts("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlerts("Light mode has been enabled", "success");
    }
  };

  return (
    <div>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alerts alerts={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact
              path="/"
              element={
                <Textform
                  showAlerts={showAlerts}
                  heading="Enter the text below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

