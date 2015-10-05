import React, { Component, PropTypes } from 'react';
import slide from '../decorators/slide';

@slide('dark')
export default class VirtualDom extends Component {
	render() {
		const { click } = this.state;

		return <div>
			<h1>The Virtual DOM</h1>
			<ul>
				<li style={{opacity: click >= 1 ? 1 : 0}}>Render <strong>everything!</strong></li>
				<li style={{opacity: click >= 2 ? 1 : 0}}>Diff elements in JS, <strong>not the DOM</strong></li>
				<li style={{opacity: click >= 3 ? 1 : 0}}><strong>Fast</strong> & <strong>predictable</strong></li>
			</ul>
		</div>;
	}
}
