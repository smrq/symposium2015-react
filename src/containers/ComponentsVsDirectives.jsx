import React, { Component, PropTypes } from 'react';
import CodeTyper from '../components/CodeTyper';
import LightenCodeLines from '../components/LightenCodeLines';
import slide from '../decorators/slide';

const componentSrc = require('!!raw!../constants/ComponentsVsDirectives/Component.tsx');
const directiveSrc = require('!!raw!../constants/ComponentsVsDirectives/Directive.ts');

@slide('dark')
export default class ComponentsVsDirectives extends Component {
	render() {
		const { click } = this.state;

		return <div>
			<h1>Components? You mean directives?</h1>
			<div style={{float: 'left', width: '50%', fontSize: '0.8em', position: 'relative', opacity: click >= 1 ? 1 : 0}}>
				<CodeTyper src={ componentSrc } />
				<LightenCodeLines lines={5} color='#23241f' show={click >= 3} style={{
					position: 'absolute', left: 0, right: 0, top: 0, margin: '0.5em 0'
				}} />
				<LightenCodeLines lines={10} color='#23241f' show={click >= 3} style={{
					position: 'absolute', left: 0, right: 0, bottom: 0, margin: '0.5em 0'
				}} />
			</div>
			<div style={{float: 'left', width: '50%', fontSize: '0.5em', position: 'relative', opacity: click >= 2 ? 1 : 0}}>
				<CodeTyper src={ directiveSrc } />
				<LightenCodeLines lines={15} color='#23241f' show={click >= 3} style={{
					position: 'absolute', left: 0, right: 0, top: 0, margin: '0.5em 0'
				}} />
				<LightenCodeLines lines={24} color='#23241f' show={click >= 3} style={{
					position: 'absolute', left: 0, right: 0, bottom: 0, margin: '0.5em 0'
				}} />
			</div>
		</div>;
	}
}
