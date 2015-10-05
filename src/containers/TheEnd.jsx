import React, { Component, PropTypes } from 'react';
import slide from '../decorators/slide';

@slide('dark')
export default class TheEnd extends Component {
	render() {
		const { click } = this.state;

		return <div>
			<h1>Questions?</h1>
		</div>;
	}
}
