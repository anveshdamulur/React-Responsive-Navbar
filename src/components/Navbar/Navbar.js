import React, { useState } from 'react'
import { menuList } from './Menu-List';
import {NavLink} from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    const [clicked, setClicked] =useState(false)
    const menu = menuList.map(({url, title}, index) =>(
        <li key={index}>
            <NavLink to={url} exact activeClassName="active">{title}</NavLink>
        </li>
    ))

    const handleClick = () =>{
        setClicked(!clicked)
    }

    return (
        <nav>
            <div className="logo">
                VPN <font>Lab</font>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                    <i className= {clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <div className={clicked ? "menu-list" : "menu-list close"}>
                {menu}
            </div>
        </nav>
    )
}

export default Navbar
