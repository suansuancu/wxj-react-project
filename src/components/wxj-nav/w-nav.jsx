import React from 'react'
import {
	Link
} from 'react-router-dom'

export default class NavMenu extends React.Component {
	constructor(props){
		super(props);

	}

	render() {
		return (
			<div className="wxj-main-nav">
				<div className="user-menu common-menu xj-cursor"><Link to="/card">用户管理</Link></div>
				<div className="todo-menu common-menu xj-cursor"><Link to="/todo">事项管理</Link></div>
				<div className="graph-menu common-menu xj-cursor"><Link to="/graph">图表管理</Link></div>
			</div>
		)
	}
}