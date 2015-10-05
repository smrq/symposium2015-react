import React, { Component, PropTypes } from 'react';
import slide from '../decorators/slide';

@slide('light')
export default class WhatIsReact extends Component {
	render() {
		const { click } = this.state;

		return <div>
			<h1>What is <strong>React?</strong></h1>
			<ul>
				<li style={{opacity: click >= 1 ? 1 : 0}}>A JavaScript library for <strong>building user interfaces</strong></li>
				<li style={{opacity: click >= 2 ? 1 : 0}}>Just the <strong>UI</strong> <em>(the V in MVC)</em></li>
				<li style={{opacity: click >= 3 ? 1 : 0}}><strong>Reusable</strong>, <strong>composable</strong> components</li>
				<li style={{opacity: click >= 4 ? 1 : 0}}><strong>Performant</strong> by default</li>
				<li style={{opacity: click >= 5 ? 1 : 0}}><strong>Understandable</strong> data flow</li>
			</ul>
		</div>;
	}
}
