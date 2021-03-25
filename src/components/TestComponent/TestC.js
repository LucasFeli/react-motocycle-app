import { Button } from '../Navbar/Button.js';
import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import Logout from "../Auth/Logout";


export const TestC = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);
    

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

  useEffect(() => {
    showButton();
  }, []);

      window.addEventListener('resize', showButton);
    return (
        <div>
            <nav className="navbar">
            <div className = "navbar-container">
            <Link  className="navbar-logo">
                MTCF <i className="fas fa-typo3    "/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars "}/>
            </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link  className="nav-links" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/motocycles" className="nav-links" onClick={closeMobileMenu}>List of Motocycles</Link>
                </li>
                <li className="nav-item">
                    <Link to="/motocycles/create" className="nav-links" onClick={closeMobileMenu}>Create your Motocycle</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>Signup</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-links" onClick={closeMobileMenu}>Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-links" onClick={closeMobileMenu}><Logout /></Link>
                </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SING UP</Button>}
             </div>
            </nav>
        </div>
    )
}
