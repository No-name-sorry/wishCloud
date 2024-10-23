import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import langBl from '../assets/lang-black.png'
import langWh from '../assets/lang-white.png'


const Navbar = () => {
  return (
    <div className="navbar">
        <img src="" alt=""/>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/mylists"><li>My Lists</li></Link>
            <Link to="/create"><li>Create</li></Link>
        </ul>

        <div className="menu-buttons">
            <button id="sign-in">
                Sign up
            </button>
            <Link to="/login"><button id="log-in">
                Log in 
            </button></Link>
        </div>

        <img src={langWh} alt="logo" className='language-img'/>
    </div>
  )
}

export default Navbar


