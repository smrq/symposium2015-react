import React, { Component, PropTypes } from 'react';
import CodeTyper from '../components/CodeTyper';
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
				<div style={{opacity: click >= 3 ? 1 : 0}}>
					<div style={{opacity: 0.9, backgroundColor: '#23241f', position: 'absolute', left: 0, right: 0, top: 0, height: '6.25em'}} />
					<div style={{opacity: 0.9, backgroundColor: '#23241f', position: 'absolute', left: 0, right: 0, top: '15.5em', bottom: 0}} />
				</div>
			</div>
			<div style={{float: 'left', width: '50%', fontSize: '0.5em', position: 'relative', opacity: click >= 2 ? 1 : 0}}>
				<CodeTyper src={ directiveSrc } />
				<div style={{opacity: click >= 3 ? 1 : 0}}>
					<div style={{opacity: 0.9, backgroundColor: '#23241f', position: 'absolute', left: 0, right: 0, top: 0, height: '18em'}} />
					<div style={{opacity: 0.9, backgroundColor: '#23241f', position: 'absolute', left: 0, right: 0, top: '25em', bottom: 0}} />
				</div>
			</div>
		</div>;
	}
}
