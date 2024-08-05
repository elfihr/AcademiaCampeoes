import React, { useRef, useState,useEffect } from "react";
import '../style/Navbar.css'
import logo from '../assets/logo.webp'
import { menuLink } from "../helper/Helper";
import Hamburger from "hamburger-react";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const btnRef = useRef()
    
    useEffect(() => {
        const closeDropdown = e => {
            if (!btnRef.current.contains(e.target)) {
                setIsMobile(false);
            }
        }
        document.body.addEventListener('click', closeDropdown)
        return () => document.body.removeEventListener('click', closeDropdown)
    }, [])
    return (
        <nav className="navbar">
            <div className="logo_Container">
            <img src={logo} alt="logo"/>
                <h3>Academia<br/>DosCampeões</h3>
            </div>        
            <div className={isMobile ? "navlink_mobile" : "navlink"}>
            {menuLink.map((item, index) => {
                return (
                    <ul key={index}>
                        <li>
                            <a className={item.class} href={item.href}>{item.label} </a>
                        </li>
                    </ul>
                )
            })}
            </div> 
              
            <div className="menuIcon"  onClick={() => setIsMobile(!isMobile)} ref={btnRef}>
                { <Hamburger size={50} toggled={isMobile} toggle={setIsMobile}/> }
            </div>
        </nav>
    )
}
export default Navbar