// import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Navbar.module.css'
import langLogo from '../assets/lang-menu.png'
import icon_lg from '../assets/icon_lg.png'

const Navbar = () => {
    const navlinkheader = ({isActive}) => {
        return isActive ? `${classes.active}` : ""};
  return (
    <div className={classes.navbar}>
        <img src={icon_lg} alt="" className={classes.logoImg}/>
        <ul className={classes.ul}>
            <NavLink to="/homepage" className={navlinkheader}>Home</NavLink>
            <NavLink to="/mylists" className={navlinkheader}>My Lists</NavLink>
            <NavLink to="/create" className={navlinkheader}>Create</NavLink>
        </ul>

        <div className={classes.buttonsWrapper}>
            <div className={classes.menuButtons}>
                <NavLink to="/signup"><button className={classes.signIn}>
                    Sign up
                </button></NavLink>
                
                <NavLink to="/login"><button className={classes.logIn}>
                    Log in 
                </button></NavLink>
                
            </div>
            <img src={langLogo} alt="logo" className={classes.languageImg}/>
        </div>

    </div>
  )
}

export default Navbar


