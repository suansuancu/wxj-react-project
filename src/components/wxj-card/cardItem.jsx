import React from 'react';

let numStyle = {fontWeight:500,fontWeight:900};

class HeartAdd extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			likeNum :this.props.likeNum,
			toggleTag : 0,
			heart :''
		}
	}

	handleClick(event){
		event.preventDefault();

		let thisEle = event.target,
			thisToggle = this.state.toggleTag,
			likeCount =  this.state.likeNum,
			heart = this.state.heart;
		likeCount++;
		thisToggle = ~thisToggle+2;

		if(thisToggle){
			heart = 'heart'
		} else {
			heart = ''
		}

		this.setState({
			likeNum:likeCount,
			toggleTag: thisToggle,
			heart:heart
		});

	}

	render(){
		return (
			<div className="extra content">
				<span className="right floated">Join in {this.props.joined}</span>
				<span className={"likeNum xj-cursor " + this.state.heart} onClick={this.handleClick}><strong style={numStyle}>{this.state.likeNum}</strong> likes</span>
			</div>
		)
	}
}

class UserInfo extends React.Component {
	constructor(props){
		super(props);
		this.handleDoubleClick = this.handleDoubleClick.bind(this);

	}

	handleDoubleClick(e) {
		e.preventDefault();

	}

	render(){

		return (
			<div>
				<div className="cardImg">
					<img src={this.props.userImg} alt=""/>
				</div>
				<div className="content">
					<div className="header">{this.props.userName}</div>
					<div className="meta">
						<a href="javascript:void(0)">{this.props.userMeta}</a>
					</div>
					<input className="discription" onDoubleClick={this.handleDoubleClick} ref={this.props.userDesc} />
				</div>
			</div>
		)
	}
}

export default class CardItem extends React.Component {
	constructor(props){
		super(props);

	}

	render(){

		let {imgSrc, name, meta, desc, joined, likeNum} = this.props;
		return (<div className="ui card container">
			<UserInfo toggletag={1} heart="" userImg={imgSrc} userName={name} userMeta={meta} userDesc={desc} />
			<HeartAdd joined={joined} likeNum={likeNum} />
		</div>)
	}
}