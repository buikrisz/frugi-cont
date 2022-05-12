import React, { useState } from 'react';
import './Header.css';
import { IoLocationOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

function Header() {
    const [selectedSite, setSelectedSite] = useState("pest");

    return (
        <header>
            <div className='headerLocation'>
                <IoLocationOutline className='locationIcon'/>
                <h4>Dunakeszi, Magyarország</h4>
            </div>
            <div>
                <NavLink to="/" className={({ isActive }) => isActive ? "links selected" : "links"}>
                    <h4 onClick={(e) => {
                        console.log(e.target);
                        setSelectedSite("pest");
                    }}>Rovarírtás</h4>
                </NavLink>
                <span>|</span>
                <NavLink to="/ozone" className={({ isActive }) => isActive ? "links selected" : "links"}>
                    <h4  onClick={(e) => {
                        console.log(e.target);
                        setSelectedSite("ozone");
                    }}>Ózonos fertőtlenítés</h4>
                </NavLink>
            </div>
            <div>
                <h4>+36-70-338-4734</h4>
                <span>|</span>
                <h4>eradicatedpest@gmail.com</h4>
            </div>
        </header>
    )
}

export default Header;