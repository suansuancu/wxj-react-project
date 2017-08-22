import React from 'react';
import addUserIcon from '../../../src/assets/images/global/add-usr.svg';

export default class AddUserItem extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (<div className="ui card container xj-cursor">
				<img id="addUserBtn" src={addUserIcon} alt=""/>

			</div>
		)
	}
}