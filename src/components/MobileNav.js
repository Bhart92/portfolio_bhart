import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MobileNav = ({isOpen, setIsOpen}) => {


const toggleMobileNav = () => {
    setIsOpen(!isOpen);
    const nav = document.querySelector('.mobile-nav--dropDown-menu');
    const body = document.querySelector('body');
    body.classList.toggle('overflow');
    nav.classList.toggle('visible');
};

return (
    <div className='mobile-nav--dropDown-menu'>
        <div className="header--mobile-nav-mid-container">
            <Link onClick={toggleMobileNav} to="/" ><h1>B<span>K</span>H</h1></Link>
        </div>
        <div className="header--mobile-nav-bottom-container">
        <ul>
            <li>
                <NavLink onClick={toggleMobileNav} activeClassName="is-active" to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
                <NavLink onClick={toggleMobileNav} activeClassName="is-active" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink  onClick={toggleMobileNav} activeClassName="is-active" to="/contact">Contact</NavLink>
            </li>
            <li>
                <a href="./images/resume2020.pdf" download>Resume</a>
            </li>
            <li>
            <a href="https://github.com/Bhart92">View My Github. <i className="fab fa-github"></i> </a>
            </li>
        </ul>
    </div>
    </div>
    );
};


  export default MobileNav;