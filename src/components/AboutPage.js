import React, {useEffect} from 'react';
import { gsap } from "gsap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const AboutPage = () => {
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
    const contentStyles ={
        background: '#FFF',
        color: '#000',
        borderRadius: '25px',
        borderBottom: 'none'

    };

    return (
        <div className='about-section section-container'>
            <h1 className='section-container--title'>A bit about Me</h1>
            <div className='about-section-text-container'>
                <div>
                    <p>
                    Hi,<span> I'm Brandon</span> and I'm <span>mostly</span> a front end web developer, but I have some experience working on the backend as well. I started in web development 
                    at the end of 2018 and have been growing my knowledge since. This journey <span>started</span> as a hobby to pass the time. 
                    <span> However,</span> the more I learned about web development the more I found myself spending all of my free time on it. What started off as a hobby was becoming an obsession. Now it is my <span>goal</span> to make a career in the software industry. 
                    </p>
                </div>
            </div>
            <div className='about-section-timeline-container'>
                    <h2>My Dev Journey</h2>
                <VerticalTimeline>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="December 2018 - January 2019"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/udemy.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">The Web Developer Bootcamp(Front End Section) -- Colt Steele</h3>
                            <p>
                            This course was where it all started. I began this course after reading countless reviews on it.
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Feburary 2019"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/udemy.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">Build Responsive Real World Websites with HTML 5 and CSS 3 -- Jonas Schmedtmann</h3>
                            <p>
                               After completing the front end section of the Web Dev Bootcamp I began this course. My intentions were to learn more about the interactions between HTML, CSS, and JS before even considering the backend. After completing this course I spent some time building static websites for friends and family.
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Feburary 2019 - March 2019"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/-.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">Studio Web Foundational Courses -- Stefan Mischook</h3>
                            <p>It was at this time I really discovered web developers on youtube. I began to follow Stefan Mischook and decided I would take his front-end foundational courses. Including: </p>
                            <ul className='vertical-timeline-ul'>
                                <li>Foundations of HTML</li>
                                <li>Foundations of CSS</li>
                                <li>Foundations of Javascript</li>
                                <li>JQuery</li>
                            </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="April 2019 - June 2019"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/codingPhase.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">Coding Phase Course Work -- Joe Santos</h3>
                            <p>I began following Coding Phase and completed the following courses from his collection:</p>
                            <ul className='vertical-timeline-ul'>
                                <li>Learn HTML and CSS by Building a Social Network</li>
                                <li>Git Like a Pro</li>
                                <li>Build a Responsive Web App</li>
                                <li>Sass Like a Pro</li>
                                <li>Future-Proof Javascript</li>
                                <li>JQuery - A Beginners Best Friend</li>
                                <li>OOP with Javascript</li>
                                <li>Node and NPM Basics</li>
                                <li>Gulp - Web Developer Starter Kit</li>
                                <li>ESNext - ES6, ES7, ES8</li>
                            </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="July 2019 - August 2019"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/udemy.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">Javascript Understanding the Weird Parts -- Anthony Alicea</h3>
                            <p>
                               I kept hearing that this course was very beneficial to understanding the way Javascript works under the hood. 
                               After completing this course I felt that I had a deeper understanding of JS and felt more confident moving forward.
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="September 2019"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/-.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">I decided to take a small break from courses....</h3>
                            <p>
                                Feeling burnt out on doing courses, I decided it was time to start building some projects for my portfolio. Just basic static pamphlet style websites for local businesses.
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="October - December 2019"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/udemy.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">Completed the Web Developer Bootcamp -- Colt Steele</h3>
                            <p>
                               At this point I felt that I was only able to create basic static websites. However, I wanted to make more robust web apps. This was when I decided I wanted to dip into the backend. After completing the Web Dev Bootcamp I built a couple of full stack projects using the technologies I learned.
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="December 2019 - Feburary 2020"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/udemy.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">The Complete React Dev Course -- Andrew Mead</h3>
                            <p>
                               Towards the end of 2019 - beginning of 2020 I began a course called The Complete React Dev Course by Andrew Mead. This course was very thourough and I found that I loved working with React. Upon completing this course I built my portfolio website using React.
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="March 2019 - May 2020"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/display.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">Gainz Workout Randomizer</h3>
                            <p>
                               After finishing my React portfolio I decided I wanted to build a web app using React and Hooks. Gainz Workout Randomizer is a tool to prevent repetitive workout routines. The app allows users to create an account and generate random workouts based on muscle groups.
                                <span className='timeline--image--container'>
                               <a href='https://gainzredux.herokuapp.com/'><img src='/images/gainzDesk.PNG' alt='Gainz Workout Randomizer'/></a>
                               </span>
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="June 2020"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/udemy.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">MERN Stack Front to Back: Full Stack React, Redux, and Node.js -- Brad Traversy</h3>
                            <p>
                               I took this course after completing my first React project. Here I learned how to connect react to a backend. This course was essential in completing my basic knowledge of the MERN stack.
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="July 2020 - August 2020"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/display.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">Gainz Workout Randomizer Revisited</h3>
                            <p>
                               After completing the MERN course I decided I would revisit the Gainz Workout Randomizer and build it with the MERN stack. This change enables users to create an account and open their saved workouts across all of their devices - opposed to the previous local storage based solution.
                                <span className='timeline--image--container'>
                               <a href='https://gainzredux.herokuapp.com/'><img src='/images/gainzDesk.PNG' alt='Gainz Workout Randomizer'/></a>
                               </span>
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="October 2020 - November 2020"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/display.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">Fractality Interactive Media</h3>
                            <p>
                                I began working closely with the director at Fractality, an interactive media company. Under their supervision I helped developed the web presence of company.
                                <span className='timeline--image--container'>
                               <a href='https://www.fractality.co/'><img src='/images/fractality.PNG' alt='Fractality Interactive Media'/></a>
                               </span>
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="December 2020"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/unity.png' alt='Unity' />} 
                    >
                            <h3 className="vertical-timeline-element-title">Began to learn Unity</h3>
                            <p>
                                It was suggested that I began to learn Unity by friends and peers. I'm still quite new to the tech, but am fascinated and eager to learn more.
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="January 2021 - Febuary 2021"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/display.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">FUSE</h3>
                            <p>
                                In collaboration with the director of Fractality I developed the product website for the FUSE Unity application framework. This is one of Fractality's main products at the moment.
                                <span className='timeline--image--container'>
                               <a href='https://fuse.fractality.co'><img src='/images/fuse.PNG' alt='Fractality Interactive Media'/></a>
                               </span>
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Febuary 2021 - March 2021"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/display.svg' alt='Air Grades' />} 
                    >
                            <h3 className="vertical-timeline-element-title">Air Grades - Air quality info tool</h3>
                            <p>
                               At this time I wanted to create a web app based around a third party API. I found the AirIQ API and decided to build a simple air quality information tool. This app was
                        built using React, Redux, and SASS.
                                <span className='timeline--image--container'>
                                        <a href='https://airgrades.herokuapp.com'><img src='images/airGradesDesk.PNG' alt='Air Grades'/></a>
                               </span>
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyles}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Currently"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000', fontSize: '3.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    icon={<img src='images/user-tie.svg' alt='Udemy' />} 
                    >
                            <h3 className="vertical-timeline-element-title">Looking for Employment</h3>
                            <p>
                               I'm currently looking for a full time position, or contract work!
                            </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default AboutPage;
