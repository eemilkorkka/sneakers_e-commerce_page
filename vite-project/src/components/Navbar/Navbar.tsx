import logo from "../../images/logo.svg";
import avatar from "../../images/image-avatar.png";
import menu from "../../images/icon-menu.svg";
import "./Navbar.css";
import { useCallback, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import CartIcon from "../CartIcon/CartIcon";
import Cart from "../Cart/Cart";

const Navbar = () => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const [cartOpen, setCartOpen] = useState<boolean>(false);

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
                    <div className="cart-icon-container" onClick={() => setCartOpen(prev => !prev)}>
                        <CartIcon fill="hsl(219, 9%, 45%)" />
                    </div>
                    <div className="avatar-container">
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>
            </nav>
            <Cart cartOpen={cartOpen} />
        </header>
    )
}

export default Navbar;