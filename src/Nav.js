import React, { useState, useEffect } from "react";

import navlogo from './navlogo.png'
import profile from './profile.jpg'
import './Nav.css'

const Nav = () => {

    const [show,handleShow]=useState([]);
    useState(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100){
                handleShow(true);
            }else{
                handleShow(false);
            }

        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);
    return (
        <div className={`nav ${show && "nav__black"} `}>
            <img 
            className="nav__logo"
            src={navlogo}
            alt="Netflix Logo" />

            <img className="nav__avatar"
            src={profile}
            alt="Avatar"
            />
        </div>
    )
}

export default Nav
