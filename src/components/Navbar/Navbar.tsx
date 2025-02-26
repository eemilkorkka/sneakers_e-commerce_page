    import logo from "../../images/logo.svg";
    import avatar from "../../images/image-avatar.png";
    import menu from "../../images/icon-menu.svg";
    import "./Navbar.css";
    import { useCallback, useContext, useState } from "react";
    import Sidebar from "../Sidebar/Sidebar";
    import CartIcon from "../Icons/CartIcon/CartIcon";
    import Cart from "../Cart/Cart";
import { CartContext } from "../../contexts/CartContex";

    const Navbar = () => {

        const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
        const [cartOpen, setCartOpen] = useState<boolean>(false);
        const [fill, setFill] = useState<string>("");

        const context = useContext(CartContext);

        const amount = context?.amount;
        const isCartEmpty = context?.isCartEmpty;

        const navItems: string[] = ["Collections", "Men", "Women", "About", "Contact"];   

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
                            {navItems.map((item) => {
                                return (
                                    <li><a href="#">{item}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="right-side">
                        <div 
                            className="cart-icon-container" 
                            onClick={() => setCartOpen(prev => !prev)} 
                            onMouseEnter={() => setFill("hsl(220, 13%, 13%)")}
                            onMouseLeave={() => setFill("hsl(219, 9%, 45%)")}>
                                {!isCartEmpty && 
                                    <div className="cart-indicator">
                                        <span>{amount}</span>
                                    </div>
                                }
                                <CartIcon fill={fill} />
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