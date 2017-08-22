import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import Card from '../components/wxj-card/cardWrap';
import Todo from '../components/wxj-todo/todoWrap';
import Graph from '../components/wxj-graph/graphWrap';


const projectRouter = () =>(
	<Router >
		<div className="wxj-main-nav">
			<div className="user-menu common-menu xj-cursor"><Link to="/graph">用户管理</Link></div>
			<div className="todo-menu common-menu xj-cursor"><Link to="/todo">事项管理</Link></div>
			<div className="graph-menu common-menu xj-cursor"><Link to="/card">图表管理</Link></div>


		</div>
	</Router>
);
class MainContent extends React.Component {
	constructor(props){
		super(props);
	}

	render(){

		return (<div>
			<Route path="/" component={Graph}/>
			<Route exact path="/graph" component={Graph}/>
			<Route path="/card" component={Card}/>
			<Route path="/todo" component={Todo}/>
		</div>)

	}
}

export default projectRouter;