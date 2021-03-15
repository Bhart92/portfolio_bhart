import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import PortfolioPage from '../components/PortfolioPage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import { CSSTransition, TransitionGroup} from 'react-transition-group';


const AppRouter = () => {
	return (
		<BrowserRouter>
			<div className='main-container'>
				<Header />
				<Route render={({location}) => (
							  <TransitionGroup>
							  <CSSTransition
								key={location.key}
								timeout={450}
								classNames="fade"
							  >
							<Switch location={location} className='switch'>
							  <Route path="/" component={DashboardPage} exact={true}/>
							  <Route path="/portfolio" component={PortfolioPage} />
							  <Route path="/about" component={AboutPage}/>
							  <Route path="/contact" component={ContactPage}/>
							  <Route component={NotFoundPage}/>
							</Switch>
							</CSSTransition>
							</TransitionGroup>
				 )} />
			</div>
		</BrowserRouter>
	  );
}



export default AppRouter;