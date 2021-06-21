import React, {Fragment, useContext, useLayoutEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectContext from '../context/projectContext';


const ProjectPageList = () => {
    const projects = useContext(ProjectContext); 
    const onImagesLoaded = (container, event) =>{
        const images = container.getElementsByTagName("img");
        let loaded = images.length;
        for (let i = 0; i < images.length; i++) {
            if (images[i].complete) {
                loaded--;
            }
            else {
                images[i].addEventListener("load", function() {
                    loaded--;
                    if (loaded === 0) {
                        event();
                    }
                });
            }
            if (loaded === 0) {
                event();
            }
        }
    }      
    useLayoutEffect(() => {      
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
            loadAnimationTl.to('.header--container', {transform: 'translate(0, 0)', delay: .25, duration: .75})
    }      
        const container = document.getElementsByTagName("body")[0];   
       onImagesLoaded(container, () => {
            const imgArray = Array.from(document.getElementsByTagName('img'));
                ScrollTrigger.batch(imgArray, {
                    onEnter: imgArray => gsap.to('img', {opacity: 1, top: 0, stagger: 0.2, overwrite: true})
                });
        });
    }, []);
    return (
       < ProjectContext.Provider>
    <div className="projects">{projects.map((projects) => {
        return (
        <div key={projects.title} className='projects--container'>
            <div className='projects-details'>
                <h1 className='projects--title'><a className='projects--title__link' href={projects.url}>{projects.title}</a></h1>
                <span className='projects--tech'>{projects.tech}</span>
                <p className='projects--description'>{projects.description}.</p>
                {projects.marker && (
                    <Fragment>
                        <span className='projects--platform'>{projects.platform}</span>
                        <span className='projects--marker'>Marker is required for AR projects.</span>
                        <span className='projects--marker'>Please print, or open marker on another device - then open app and point camera at marker.</span>
                        <a className='projects--marker-link' target='_blank' href={projects.marker} download>Open Marker Here</a>

                    </Fragment>
                )}
            </div>
            <div className='projects--image-container'>
                <a href={projects.url}><img className={projects.marker ? 'projects--image ar' : 'projects--image'} src={projects.image} alt={projects.imageAlt}/></a>
            </div>
            <hr />
        </div>
            );
    })}
    </div>
    </ProjectContext.Provider>

    );

};


export default ProjectPageList;