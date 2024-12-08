import { useState } from "react";
import "./navbar.scss"

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (  
        <nav>
            <div className="nav-left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>Lama Estate</span>
                </a>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
            </div>
            <div className="nav-right">
                <a href="">Sign in</a>
                <a href="" className="sign-up-link">Sign up</a>
                <div className="menu-icon">
                    <img src="/menu.png" alt="" onClick={()=>{setOpen(!open)}}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
                <a href="">Sign in</a>
                <a href="">Sign up</a>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;