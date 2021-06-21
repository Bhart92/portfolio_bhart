import React from 'react';
const projects = [
	{
		title: 'Gainz Workout Randomizer',
		description: 'Gainz Workout Randomizer is a tool to prevent repetitive workout routines. The app allows users to create an account and generate random workouts based on muscle groups. The user can then save their own workout list and open it up when needed',
		image: '/images/gainzDesk.PNG',
		imageStatus: false,
		imageAlt: 'Gainz Workout Randomizer App',
		url: 'https://gainz-redux.herokuapp.com/#/',
		tech: 'MERN stack | Redux | SASS'
	},
	{
		title: 'Air Grades',
		description: 'Air Grades is a tool used to learn about the air quality in your area. The user inputs, or retrieves their location and the AirIQ API provides real time air quality information',
		image: '/images/airGradesDesk.PNG',
		imageStatus: false,
		imageAlt: 'Air Grades',
		url: 'https://airgrades.herokuapp.com/',
		tech: 'React | Redux | SASS | AirIQ API'
	},
	{
		title: 'AR Buddy',
		description: 'An AR buddy to keep users company! Built with PlayCanvas and currently being improved upon. Current iteration allows users to interact with desktop buddy via swipe input. Features to come include voice input, motivational dialog, and variety of animations between swipe inputs',
		image: '/images/buddy.PNG',
		imageStatus: false,
		imageAlt: 'Desktop Buddy AR',
		url: 'https://playcanv.as/p/rBBxLXxj/',
		tech: 'PlayCanvas',
		platform: 'Mobile Only',
		marker: 'https://lh3.googleusercontent.com/proxy/EbI2qC6E1sHqIGoAPoOBpno4RpRP9cwBf5C560b5vvtrXJyuT1IzQEpSkNffqDP5cICKwZdkG7pObyG6qZOmU4tm7cmtx8PhzqzKA10Xqz-SP_JcNW2vlMMTfY9SnMg',
	},
	{
		title: 'Fractality',
		description: 'A single page style application built for Fractality, an interactive media company. Working on this project gave me better insight to creating a solid cross browser / platform experience',
		image: '/images/fractality.PNG',
		imageStatus: false,
		imageAlt: 'Fractality Interactive Media',
		url: 'https://www.fractality.co/',
		tech: 'React | SASS | GSAP'
	},
	{
		title: 'FUSE',
		description: 'FUSE is a lightweight, robust and extendable application framework for Unity',
		image: '/images/fuse.PNG',
		imageStatus: false,
		imageAlt: 'FUSE',
		url: 'https://fuse.fractality.co',
		tech: 'React | SASS'
	}
];

const ProjectContext = React.createContext(projects);

export { ProjectContext as default}

