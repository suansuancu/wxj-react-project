import React from 'react';

let numStyle = {fontWeight:500,fontWeight:900};
export default class CardItem extends React.Component {
	constructor(props){
		super(props);

	}

	render(){

		let {imgSrc, name, meta, desc, joined, likeNum} = this.props;
		return (<div className="ui card container">
			<div className="cardImg">
				<img src={imgSrc} alt=""/>
			</div>
			<div className="content">
				<div className="header">{name}</div>
				<div className="meta">
					<a href="javascript:void(0)">{meta}</a>
				</div>
				<div className="discription">{desc}</div>
			</div>
			<div className="extra content">
				<span className="right floated">Join in {joined}</span>
				<span className="likeNum heart"><strong style={numStyle}>{likeNum}</strong> likes</span>
			</div>
		</div>)
	}
}