import { Link } from "react-router-dom";
import "./index.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
    const [clicked,setClicked] = useState(false)
    const handlerClick = () => {
        setClicked(!clicked)
    }
    return (
        <div className="header">
            <div className="header__logo">
                <span>MatCode</span>
            </div>
            <ul className="header__link">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/project'>Project</Link></li>
             </ul>
            <Link className="button-secundary">Contact me</Link>
            <HiMenuAlt3 onClick={() => handlerClick()} className={`menu-button`} />
            <div className={`show-menu-button ${clicked ? 'active' : ''}`}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/project'>Project</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header