import logo from "../../../public/logo.svg";
import cart from "../../../public/icon-cart.svg";
import avatar from "../../../public/image-avatar.png";
import menu from "../../../public/icon-menu.svg";
import "./Navbar.css";
import { useCallback, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    const toggleMenu = useCallback(() => {
        setMenuIsOpen(prev => !prev);
    }, [])

    return (
        <header>
            <nav className="navbar">
                <div className="left-side">
                    <div className="logo-container">
                        <img src={menu} alt="menu" className="menu" onClick={() => setMenuIsOpen(prev => !prev)} />
                        <img src={logo} alt="logo" className="logo" />
                    </div>                 
                    <Sidebar menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
                    <ul className="nav-links-container" >
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="right-side">
                    <div className="cart-container">
                        <img src={cart} alt="cart icon" />
                    </div>
                    <div className="avatar-container">
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;