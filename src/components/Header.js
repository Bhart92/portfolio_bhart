import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import MobileNav from './MobileNav';

const Header = () => {

	const [isOpen, setIsOpen] = useState(false);

	const toggleMobileNav = () => {
		setIsOpen(!isOpen);
		const nav = document.querySelector('.mobile-nav--dropDown-menu');
		const body = document.querySelector('body');
		body.classList.toggle('overflow');
		nav.classList.toggle('visible');
	};

	return (
		<div className='header--container'>
			<header className='header'>
			<div className="header--image">
			<NavLink to="/" ><h1>B<span>K</span>H</h1></NavLink>
				<h2 className='header--image--h2'>Brandon K. <span>Hart</span><br /><span>Web Developer</span></h2>
			</div>
			<div className="header--mid-container">
				<ul>
					<li>
						<NavLink activeClassName="is-active"  to="/portfolio">Portfolio</NavLink>
					</li>
					<li>
						<NavLink activeClassName="is-active"  to="/about">About</NavLink>
					</li>
					<li>
						<NavLink  activeClassName="is-active" to="/contact">Contact</NavLink>
					</li>
					<li>
						<a href="./images/resume2020.pdf" download>Resume</a>
					</li>
				</ul>
			</div>
			<div className="header--bottom-container">
				<a href="https://github.com/Bhart92">View My Github. <i className="fab fa-github"></i> </a>
			</div>
			<div className="header--bottom-container mobile">
				<NavLink to="/" ><h1>B<span>K</span>H</h1></NavLink>
			</div>
			<div className='header--burger-container'>
			<HamburgerMenu 
                className='mobile-nav--burger'
				isOpen={isOpen}
                menuClicked={toggleMobileNav}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}/>
			</div>
			<MobileNav isOpen={isOpen} setIsOpen={setIsOpen}/>
			</header>
		</div>
	);
}	
export default Header;