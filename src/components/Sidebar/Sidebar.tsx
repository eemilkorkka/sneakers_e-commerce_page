import "./Sidebar.css";
import close from "../../images/icon-close.svg";

interface SidebarProps {
    menuIsOpen: boolean;
    toggleMenu: () => void; 
}

const Sidebar = ({ menuIsOpen, toggleMenu }: SidebarProps) => {

    const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

    return (
        <>
            <div
                className={`overlay ${menuIsOpen ? "overlay-visible" : ""}`}
                onClick={toggleMenu}
            ></div>
    
            <ul className="nav-links-container-menu" style={{ left: menuIsOpen ? 0 : "-100%"}}>
                <img src={close} alt="close" className="menu-close" onClick={toggleMenu} />
                {menuItems.map((item) => {
                    return (
                        <li><a href="#">{item}</a></li>
                    )
                })}
            </ul>
        </>
    )
}

export default Sidebar;