import React, { Component, PropTypes } from 'react';
import CodeTyper from '../components/CodeTyper';
import slide from '../decorators/slide';

const srcList = [
	require('!!raw!../constants/Composability/AccountManagerCard.00.tsx'),
	require('!!raw!../constants/Composability/AccountManagerCard.01.tsx'),
	require('!!raw!../constants/Composability/AccountManagerCard.02.tsx')
];

@slide('light')
export default class Composability extends Component {
	render() {
		return <div>
			<h1>Endlessly composable components</h1>
			<CodeTyper src={this.getSrc()} />
		</div>;
	}

	getSrc() {
		const { click } = this.state;
		return srcList[Math.min(click, srcList.length - 1)];
	}
}
