import React, { Component, PropTypes } from 'react';
import slide from '../decorators/slide';

@slide('dark')
export default class Intro extends Component {
	render() {
		return <div>
			<h1><strong>React.js:</strong> front-end development made <em>awesome</em></h1>
			<img src='React.js_logo.svg' style={{display: 'block', margin: '0 auto'}} />
		</div>;
	}
}
