import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./LoginPage";
import Register from "./Register";
import Verification from "./Verification";
import Code from "./Code";
import ForgotPassword from "./ForgotPassword";

export default function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        
        <Route path="/LoginPage" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/Verification" exact element={<Verification />}></Route>
        <Route path="/Code" exact element={<Code />}></Route>
        <Route path="/ForgotPassword" exact element={<ForgotPassword />}></Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

