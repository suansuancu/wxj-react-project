import React from 'react';
import AddUserItem from '../../components/wxj-card/newItems';
import CardItem from '../../components/wxj-card/cardItem';

let data = [
	{
		imgSrc: require('../../assets/images/global/matt.svg'),
		name: 'Matt',
		meta: 'Friends',
		desc: 'Matthew is an interior designer living in New York.',
		joined: 2013,
		likeNum: 75
	},
	{
		imgSrc: require('../../assets/images/global/molly.svg'),
		name: 'Molly',
		meta: 'Coworker',
		desc: 'Molly is a personal assistant living in Paris.',
		joined: 2013,
		likeNum: 35
	},
	{
		imgSrc: require('../../assets/images/global/jane.svg'),
		name: 'Jane',
		meta: 'Coworker',
		desc: 'Elyse is a copywriter working in New York.',
		joined: 2014,
		likeNum: 151
	},
	{
		imgSrc: require('../../assets/images/global/jenny.svg'),
		name: 'Jenny',
		meta: 'Coworker',
		desc: 'Elyse is a copywriter working in New York.',
		joined: 2014,
		likeNum: 151
	},
	{
		imgSrc: require('../../assets/images/global/sally.svg'),
		name: 'sally',
		meta: 'Coworker',
		desc: 'Elyse is a copywriter working in New York.',
		joined: 2014,
		likeNum: 151
	}
];

export default class CardWrap extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let card = data.map(function(value,index){
		return <CardItem key={index} {...value} />
	});
		return (
			<div className="card-content">
				{card}<AddUserItem />
			</div>
		)
	}
}