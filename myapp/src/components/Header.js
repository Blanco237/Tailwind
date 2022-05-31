import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.css';

const Header = () => {

    const [mobileToggle, setMobileToggle] = useState(false);
    const [innerWidth, setInnerWidth] = useState(0);

    window.addEventListener('resize', () => {
        setInnerWidth(window.innerWidth);
    })

    useEffect(() => {
        innerWidth <= 900 ? setMobileToggle(true) : setMobileToggle(false);
    }, [innerWidth]);

    return (
        <nav className="navbar" role="navigation">
            <div className="logo">
                <h2>React</h2>
            </div>
            {
                !mobileToggle ?
                <ul className={`${!mobileToggle ? 'menu' : 'mobile__menu'}`}>
                    <Link to='/home' className="pad">
                        <h4>Home</h4>
                    </Link>
                    <Link to='/about' className="pad">
                        <h4>About</h4>
                    </Link>         
                </ul> :
                <div className="menuToggler">
                    <h1>MENU</h1>
                    <div className="mobile_menu_container">
                        <ul className='menu'>
                        <Link to='/home' className="pad">
                            <h4>Home</h4>
                        </Link>
                        <Link to='/about' className="pad">
                            <h4>About</h4>
                        </Link>         
                        </ul>
                    </div>
                    
                </div>
            }
        </nav>
    )
}

export default Header;
