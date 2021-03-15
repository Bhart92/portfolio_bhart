import React from 'react';
import ProjectPageList from './ProjectPageList';

class PortfolioPage extends React.Component{
	render(){
		
	return (
		<div className='section-container'>
			<h1 className='section-container--title'>Portfolio</h1>
			<ProjectPageList />
	</div>
    );
	}
}



export default PortfolioPage;