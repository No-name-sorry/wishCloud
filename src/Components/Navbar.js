import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import langLogo from '../assets/lang-menu.png'
import icon_lg from '../assets/icon_lg.png'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
        <img src={icon_lg} alt="" className='logo_img'/>
        <ul>
            <Link to="/homepage"><li onClick={()=>{setMenu("home")}}>
                Home{menu==="home"?<hr/>:<></>}</li></Link>
            <Link to="/mylists"><li onClick={()=>{setMenu("lists")}}>
                My Lists{menu==="lists"?<hr/>:<></>}</li></Link>
            <Link to="/create"><li onClick={()=>{setMenu("create")}}>
                Create{menu==="create"?<hr/>:<></>}</li></Link>
        </ul>

        <div className='buttons-wrapper'>
            <div className="menu-buttons">
                <button id="sign-in">
                    Sign up
                </button>
                <Link to="/login"><button id="log-in">
                    Log in 
                </button></Link>
                
            </div>
            <img src={langLogo} alt="logo" className='language-img'/>
        </div>

    </div>
  )
}

export default Navbar


