import React, { Component, PropTypes } from 'react';
import slide from '../decorators/slide';

@slide('dark')
export default class Intro extends Component {
	render() {
		return <div>
			<h1><strong>React.js:</strong> front-end development made <em>awesome</em></h1>
			<img src='React.js_logo.svg' style={{display: 'block', margin: '0 auto'}} />
			<p className='key-hint key-hint-left'>Press <em>Left</em> and <em>Right</em> to move between slides</p>
			<p className='key-hint key-hint-right'>Press <em>Up</em> and <em>Down</em> to advance within a slide</p>
		</div>;
	}
}
