import React from 'react'
import {
	Link
} from 'react-router-dom'

export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		return (<div className="wxj-header">
			<img className="left-icon" src={require('../../assets/images/global/company-icon.svg')} />
			<Link to="/login" ><img className="logout-icon xj-cursor" src={require('../../assets/images/global/exit-icon.svg')} /></Link>
		</div>)
	}
}