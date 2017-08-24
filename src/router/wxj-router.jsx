import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import Header from '../components/wxj-nav/w-header';
import NavMenu from '../components/wxj-nav/w-nav';
import Home from '../components/home';
import Card from '../components/wxj-card/cardWrap';
import Todo from '../components/wxj-todo/todoWrap';
import Graph from '../components/wxj-graph/graphWrap';
import Login from '../components/wxj-login/login';


const MainContent = () => (
	<Router>
		<div>
			<Header/>
			<NavMenu/>
			<div className="main-content">
				<Route exact path="/" component={Home}/>
				<Route path="/graph" component={Graph}/>
				<Route path="/card" component={Card}/>
				<Route path="/todo" component={Todo}/>
				<Route path="/login" component={Login}/>
			</div>
		</div>

	</Router>
);

export default MainContent;

