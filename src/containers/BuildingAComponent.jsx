import React, { Component, PropTypes } from 'react';
import CodeTyper from '../components/CodeTyper';
import LightenCodeLines from '../components/LightenCodeLines';
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
			<div style={{position: 'relative'}}>
				<img src='component.png' style={{opacity: click >= 1 ? 1 : 0}} />
				<div style={{ 
					position: 'absolute',
					width: '100%',
					height: '100%',
					left: 280,
					top: 0,
					opacity: click >= 3 ? 0.9 : 0,
					backgroundColor: 'white'
				}} />
			</div>
			<div style={{fontSize: '0.9em', position: 'relative'}}>
				<CodeTyper src={click >= 2 ? src : ''} />
				<LightenCodeLines lines={1} color='white' show={click >= 3} style={{
					position: 'absolute', left: 0, right: 0, top: 0, margin: '0.5em'
				}}/>
				<LightenCodeLines lines={14} color='white' show={click >= 3} style={{
					position: 'absolute', left: 0, right: 0, bottom: 0, margin: '0.5em'
				}}/>
			</div>
		</div>;
	}
}
