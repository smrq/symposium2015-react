import React, { Component, PropTypes } from 'react';
import CodeTyper from '../components/CodeTyper';
import slide from '../decorators/slide';

const src = `
<div class="am-block">
	<div class="am-image"><img src="ncat.png" alt="Nyan Cat" /></div>
	<div class="am-contact">
		<div class="am-name">Nyan Cat</div>
		<div class="am-phone">
			<i class="fa fa-phone"></i>
			555-692-6118
		</div>
		<div class="am-email">
			<i class="fa fa-envelope-o"></i>
			<a href="mailto:ncat@directsupply.com">
				ncat@directsupply.com
			</a>
		</div>
	</div>
</div>
`.trim();

@slide('light')
export default class BuildingAComponent extends Component {
	render() {
		const { click } = this.state;

		return <div>
			<h1>Building a component</h1>
			<img src='component.png' style={{opacity: click >= 1 ? 1 : 0}} />
			<div style={{ 
				position: 'absolute',
				width: 500,
				height: 200,
				left: 300,
				top: 150,
				opacity: click >= 3 ? 0.9 : 0,
				backgroundColor: 'white',
				transition: 'opacity 0.5s ease'
			}} />
			<div style={{fontSize: '0.9em', position: 'relative'}}>
				<CodeTyper src={click >= 2 ? src : ''} />
				<div style={{ 
					position: 'absolute',
					left: 0,
					right: 0,
					top: 0,
					height: '1.75em',
					opacity: click >= 3 ? 0.9 : 0,
					backgroundColor: 'white',
					transition: 'opacity 0.5s ease'
				}} />
				<div style={{ 
					position: 'absolute',
					left: 0,
					right: 0,
					top: '3em',
					bottom: 0,
					opacity: click >= 3 ? 0.9 : 0,
					backgroundColor: 'white',
					transition: 'opacity 0.5s ease'
				}} />
			</div>
		</div>;
	}
}
