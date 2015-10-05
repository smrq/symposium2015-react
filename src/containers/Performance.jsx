import React, { Component, PropTypes } from 'react';
import slide from '../decorators/slide';

@slide('light')
export default class Performance extends Component {
	render() {
		const { click } = this.state;

		return <div>
			<h1>Performance in <strong>Angular</strong></h1>
			<ul>
				<li style={{opacity: click >= 1 ? 1 : 0}}>Watcher limit <em>(~2000 bindings)</em></li>
				<li style={{opacity: click >= 2 ? 1 : 0}}>bindonce <em>{'(or {{::item}} syntax in Angular 1.3)'}</em></li>
				<li style={{opacity: click >= 3 ? 1 : 0}}>Not performant <strong>by default</strong></li>
				<li style={{opacity: click >= 4 ? 1 : 0}}><strong>50ms</strong> is not always fast enough</li>
				<li style={{opacity: click >= 5 ? 1 : 0}}><strong>Virtual DOM</strong> to the rescue!</li>
			</ul>
		</div>;
	}
}
