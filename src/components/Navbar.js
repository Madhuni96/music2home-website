import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../images/M2H-2.jpg'
import { Button } from './Button';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className='navbar-logo'>
                        Music2Home<img src={logo} alt="logo" className="logo_img" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/event' className='nav-links' onClick={closeMobileMenu}>
                                Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/artists' className='nav-links' onClick={closeMobileMenu}>
                                Artists
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/tickets' className='nav-links' onClick={closeMobileMenu}>
                                Tickets
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-in' className='nav-links-mobile'  onClick={closeMobileMenu}>
                                Sign In
                            </Link>
                        </li>
                    </ul>
                    {button && <Button to='/sign-in' buttonStyle='btn--outline'>SIGN IN</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
