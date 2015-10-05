import React, { Component, PropTypes } from 'react';
import slide from '../decorators/slide';

@slide('light')
export default class ThrowAwayAngular extends Component {
	render() {
		const { click } = this.state;

		return <div>
			<h1>So, rewrite all of our Angular code...?</h1>
			<ul>
				<li style={{opacity: click >= 1 ? 1 : 0}}>No</li>
				<li style={{opacity: click >= 2 ? 1 : 0}}>No</li>
				<li style={{opacity: click >= 3 ? 1 : 0}}><strong>No no no</strong></li>
			</ul>
		</div>;
	}
}
