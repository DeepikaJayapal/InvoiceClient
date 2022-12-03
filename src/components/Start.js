import React from 'react';
import { NavLink } from 'react-router-dom';

function Start() {
    
const handleClick = () => {
    localStorage.clear();
    window.location.replace("http://localhost:3000/");
}

    return (
        <div className=" cardss justify-content-center " >
            <div className="innercards rounded d-flex">
                <div style={{ width: "65%" }}>
                    <h1 style={{ color: "#f66700", paddingTop: "8%" }}>LETS START !!!!</h1>
                </div>
                <div className='justify-content-end'>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <NavLink to="/intrastate" className="nav-link fs-2">InvoiceBill</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/payslip" className="nav-link fs-2">PaySlip</NavLink>
                        </li>
                        <li>
                            <button onClick={handleClick} style={{ border: "none", background: "none", color: "#f66700",paddingLeft:"9%" }} className="fs-2">Logout</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Start