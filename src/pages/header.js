import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export default function Header() {

    const handleClick = () => {
        localStorage.clear();
        window.location.replace("http://localhost:3000/");
    }

    return (
        <div>
            <NavLink to="/start">
                <button className='icons'><BsFillArrowLeftCircleFill size={32} /></button>
            </NavLink>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <NavLink to="/intrastate" className="nav-link p-4 text-black">Intrastate</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/interstate" className="nav-link p-4 text-black">Interstate</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/international" className="nav-link p-4 text-black">International</NavLink>
                </li>
                {/* <li className="nav-item">
                <NavLink to="/registration" className="nav-link p-4">Registration</NavLink>
            </li> */}
                <li>
                    <button onClick={handleClick} style={{ padding: "24px", border: "none", background: "none", color: "red" }}>Logout</button>
                </li>
            </ul>
        </div>
    )
}
