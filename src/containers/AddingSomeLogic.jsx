import React, { Component, PropTypes } from 'react';
import slide from '../decorators/slide';

@slide('light')
export default class AddingSomeLogic extends Component {
	render() {
		const { click } = this.state;

		return <div>
			<h1>Adding some logic</h1>
			<div>
				<img src='component.png' />
				<img src='component2.png' style={{ opacity: click >= 1 ? 1 : 0 }} />
			</div>
		</div>;
	}
}
