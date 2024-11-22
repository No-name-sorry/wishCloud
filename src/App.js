import React from "react";
import "./App.css"; 
import {Route, Routes} from 'react-router-dom'

import Navbar from './Components/Navbar.js'
import LoginPage from "./Pages/LoginPage";
import Home from './Pages/Home.js'
import MyLists from "./Pages/MyLists.js";
import Create from "./Pages/Create.js";

function App() {
  return (
<>
    <Navbar/>
    <div>
      <Routes>
        <Route path="/homepage" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/mylists" element={<MyLists/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </div>
</>
  );
}

export default App;

