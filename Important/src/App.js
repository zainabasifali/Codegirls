import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './Components/Add.jsx'
// import Delete from './Components/Delete.jsx'
import Read from "./Components/Firebase_RealtimeDB/read.jsx";
// import Add from './Components/Firebase_RealtimeDB/add.jsx'
import Get_Token from "./Components/Cloud Messaging/token.js";
import Form from "./Components/Firebase_auth/Register/Register.jsx";
import Login from "./Components/Firebase_auth/Login/Login.jsx";
import Home from "./Components/Firebase_auth/Home/Home.jsx";
import { UserContext } from "./Components/context/Context.jsx";

function App() {
  const [email,setemail] = useState(null)
  return (
    <>
    <UserContext.Provider value={{email,setemail}}>
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<Add/>} />
        <Route path="/read" element={<Read/>} />
        <Route path="/token" element={<Get_Token/>} />
        <Route path="/register" element={<Form/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />

      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;