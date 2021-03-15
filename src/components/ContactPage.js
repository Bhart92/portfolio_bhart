import React, {useEffect} from 'react';
import { gsap } from "gsap";
const ContactPage = () => {
	useEffect(() => { 
			if(window.innerWidth > 800){
				const navLinkArray = Array.from(document.querySelectorAll('.header--mid-container ul li'));
				let loadAnimationTl = gsap.timeline();
				loadAnimationTl.to('.header--container', {transform: 'translate(0, 0)', duration: .75})
				loadAnimationTl.to('.header--image', {transform: 'translate(0, 0)', opacity: 1}, '>-.05')
				navLinkArray.map((link, i) => {
					if(i === 0) i++;
						return loadAnimationTl.to(`.header--mid-container ul li:nth-of-type(${i})`, {transform: 'translate(0, 0)', opacity: 1}, '>-.25')
				})
				loadAnimationTl.to(`.header--mid-container ul li:last-of-type`, {transform: 'translate(0, 0)', opacity: 1}, '>-.25')
				loadAnimationTl.to('.header--bottom-container a', {transform: 'translate(0, 0)', opacity: 1}, '>-.25')
		} else{
				let loadAnimationTl = gsap.timeline();
				loadAnimationTl.to('.header--container', {transform: 'translate(0, 0)', delay: .35, duration: .75})
			}  
	});
		return (
			<div className='section-container contact-overflow'>
			<div className='section-container--resume'>
			<h1 className='section-container--title contact'>Shoot me an email at <a href ="mailto: hartwebdev92@gmail.com"><span className='contact-form--container--h1__span'>Hartwebdev92@gmail.com</span></a></h1>

				<h2>You can download my <a href="./images/resume2020.pdf" download>Resume Here</a></h2>
				<h3>View my <a href="https://github.com/Bhart92" download>Github Here</a></h3>
				<i className="fas fa-code"></i>
			</div>
			</div>
		);
	};


export default ContactPage;