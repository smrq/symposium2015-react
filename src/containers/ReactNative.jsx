import React, { Component, PropTypes } from 'react';
import slide from '../decorators/slide';

@slide('light')
export default class ReactNative extends Component {
	render() {
		const { click } = this.state;

		return <div>
			<h1>React Native <em>{"(it's awesome)"}</em></h1>
			<ul>
				<li style={{opacity: click >= 1 ? 1 : 0}}>...</li>
				<li style={{opacity: click >= 2 ? 1 : 0}}>...</li>
				<li style={{opacity: click >= 3 ? 1 : 0}}>...</li>
			</ul>
		</div>;
	}
}
