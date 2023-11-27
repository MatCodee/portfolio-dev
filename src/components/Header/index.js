import { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import "./index.css";

const Header = () => {
    const [clicked,setClicked] = useState(false)
    const [activeLink, setActiveLink] = useState("");
    const location = useLocation()

    useEffect(() => {
        setActiveLink(location.pathname)
        setClicked(false)
    },[location.pathname])

    const handlerClick = () => {
        setClicked(!clicked)
        setActiveLink("")
    }
    return (
        <div className="header">
            <div className="header__logo">
                <span>Mat Alt</span>
            </div>
            <ul className="header__link">
                <li><Link className="button-secundary" to='/'>Home</Link></li>
                <li><Link className="button-secundary" to='/project'>Project</Link></li>
             </ul>
            <HiMenuAlt3 onClick={handlerClick} className={`menu-button`} />
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