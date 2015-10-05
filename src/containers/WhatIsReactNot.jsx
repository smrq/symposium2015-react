import React, { Component, PropTypes } from 'react';
import CodeTyper from '../components/CodeTyper';
import slide from '../decorators/slide';

@slide('dark')
export default class WhatIsReactNot extends Component {
	render() {
		const { click } = this.state;

		return <div>
			<h1>What is React <em>not?</em></h1>
			<ul>
				<li style={{opacity: click >= 1 ? 1 : 0}}>
					A complete <strong>MVC</strong> or <strong>MVVM</strong> framework <em style={{opacity: click >= 2 ? 1 : 0}}>(Angular, Knockout)</em>
				</li>
				<li style={{opacity: click >= 3 ? 1 : 0}}>Complicated!</li>
			</ul>
		</div>;
	}
}
