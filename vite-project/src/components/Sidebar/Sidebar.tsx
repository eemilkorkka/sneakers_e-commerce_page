import "./Sidebar.css";
import close from "../../images/icon-close.svg";

interface SidebarProps {
    menuIsOpen: boolean;
    toggleMenu: () => void; 
}

const Sidebar = ({ menuIsOpen, toggleMenu }: SidebarProps) => {
    return (
        <>
            <ul className="nav-links-container-menu" style={{ left: menuIsOpen ? 0 : "-100%"}}>
                <img src={close} alt="close" className="menu-close" onClick={toggleMenu} />
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </>
    )
}

export default Sidebar;