import React from "react";
import "./App.css"; 
import {Route, Routes, useLocation} from 'react-router-dom'

import Navbar from './Components/Navbar.js'
import LoginPage from "./Pages/LoginPage";
import Home from './Pages/Home.js'
import MyLists from "./Pages/MyLists.js";
import CreateList from "./Pages/CreateList.js";
import SighUpPage from "./Pages/SignUpPage.js"
import Footer from "./Components/Footer.js"
import ListPage from "./Pages/ListPage.js"

function App() {
  const location = useLocation();
  const pagesWithoutFooter = ["/homepage", "/signup", "/login"];
  return (
<>
    <Navbar/>
    <div>
      <Routes>
        <Route path="/homepage" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SighUpPage/>}/>
        <Route path="/mylists" element={<MyLists/>}/>
        <Route path="/create" element={<CreateList/>}/>
        <Route path="/openlist" element={<ListPage/>}/>
      </Routes>
    </div>
    {!pagesWithoutFooter.includes(location.pathname) && <Footer />}
</>
  );
}

export default App;

