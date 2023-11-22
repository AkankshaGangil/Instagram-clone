import React  from "react";
//import Login from "./components/Login";
 import Register from "./components/Register";
//import Home from "./components/home/Home";
// import Profile from "./components/profile/Profile";
import  "./styles/app.css";

function App() {
  return (
    <div className="App">
      <div style={{display:'flex',alignItem:'center',height:"100vh"}}> 
      {/* <Login/> */}
      <Register/>
      </div>
      {/* <Home/> */}
      {/* <Profile/> */}
    </div>
  );
}

export default App;
