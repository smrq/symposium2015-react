import React, { Component, PropTypes } from 'react';
import CodeTyper from '../components/CodeTyper';
import slide from '../decorators/slide';

const srcList = [
	require('!!raw!../constants/AccountManagerImageSlide/AccountManagerImage.01.tsx'),
	require('!!raw!../constants/AccountManagerImageSlide/AccountManagerImage.02.tsx'),
	require('!!raw!../constants/AccountManagerImageSlide/AccountManagerImage.03.tsx'),
	require('!!raw!../constants/AccountManagerImageSlide/AccountManagerImage.04.tsx')
];

@slide('dark')
export default class AccountManagerImage_Code01 extends Component {
	render() {
		return <CodeTyper src={this.getSrc()} />;
	}

	getSrc() {
		const { click } = this.state;
		return srcList[Math.min(click, srcList.length - 1)];
	}
}
