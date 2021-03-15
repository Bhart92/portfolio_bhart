import React, {useEffect} from 'react';
import { gsap } from "gsap";
import { NavLink } from 'react-router-dom';
const LandingPage = () => {
		useEffect(() => { 

			if(window.innerWidth > 800){
				const navLinkArray = Array.from(document.querySelectorAll('.header--mid-container ul li'));
				let loadAnimationTl = gsap.timeline();
				loadAnimationTl.to('.landing-page--hero-box', {top: 0, opacity: 1})
				loadAnimationTl.to('.header--container', {transform: 'translate(0, 0)'}, '<.5')
				loadAnimationTl.to('.header--image', {transform: 'translate(0, 0)', opacity: 1})
				navLinkArray.map((link, i) => {
					if(i === 0) i++;
					return loadAnimationTl.to(`.header--mid-container ul li:nth-of-type(${i})`, {transform: 'translate(0, 0)', opacity: 1}, '>-.25')
				})
				loadAnimationTl.to(`.header--mid-container ul li:last-of-type`, {transform: 'translate(0, 0)', opacity: 1}, '>-.25')
				loadAnimationTl.to('.header--bottom-container a', {transform: 'translate(0, 0)', opacity: 1}, '>-.25')
			} else{
				let loadAnimationTl = gsap.timeline({ delay: .25 });
				loadAnimationTl.to('.landing-page--hero-box', {top: 0, opacity: 1, delay: .25, duration: 1})
				loadAnimationTl.to('.header--container', {transform: 'translate(0, 0)'}, '<.25')
			}
		});
	return (
		<div className="landing-page">
		<div className="landing-page--container">
			<div className='landing-page--hero-box'>       		
				 <h1 className='landing-page--title'>Hi! <span>I'm Brandon</span></h1>
  				 <h2 className='landing-page--subtitle'>{`< Web Developer />`}</h2>
        		<div className="landing-page--button-box">
					<NavLink className="button-fill" exact={true} to="/portfolio">Portfolio</NavLink>
					<NavLink className="button-outline" to="/contact">Contact</NavLink>
			</div></div>
        	</div>
	</div>
	)
}

export default LandingPage;