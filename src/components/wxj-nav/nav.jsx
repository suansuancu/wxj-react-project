import React from 'react';
import PropTypes from 'prop-types';

export default class MainNav extends React.Component {
	constructor(props){
		super(props);

	}

	render(){
		return (
			<div className="wxj-main-nav">
				<div className="user-menu common-menu xj-cursor">用户管理</div>
				<div className="todo-menu common-menu xj-cursor">事项管理</div>
				<div className="graph-menu common-menu xj-cursor">图表管理</div>
			</div>
		)
	}
}