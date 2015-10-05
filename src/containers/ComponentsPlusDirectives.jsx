import React, { Component, PropTypes } from 'react';
import CodeTyper from '../components/CodeTyper';
import slide from '../decorators/slide';

const srcList = [
	require('!!raw!../constants/ComponentsVsDirectives/ComponentAsDirective.01.tsx'),
	require('!!raw!../constants/ComponentsVsDirectives/ComponentAsDirective.02.tsx'),
	require('!!raw!../constants/ComponentsVsDirectives/ComponentAsDirective.02b.tsx'),
	require('!!raw!../constants/ComponentsVsDirectives/ComponentAsDirective.03.tsx')
];

@slide('dark')
export default class ComponentsPlusDirectives extends Component {
	render() {
		const { src, setSrc } = this.props;

		return <div>
			<h1>Components + directives = <strong>{'<3'}</strong></h1>
			<CodeTyper src={this.getSrc()} />
		</div>;
	}

	getSrc() {
		const { click } = this.state;
		return srcList[Math.min(click, srcList.length - 1)];
	}
}
