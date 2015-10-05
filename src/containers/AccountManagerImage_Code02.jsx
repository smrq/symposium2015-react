import React, { Component, PropTypes } from 'react';
import CodeTyper from '../components/CodeTyper';
import slide from '../decorators/slide';

const srcList = [
	require('!!raw!../constants/AccountManagerImageSlide/AccountManagerImage.04.tsx'),
	require('!!raw!../constants/AccountManagerImageSlide/AccountManagerImage.05.tsx'),
	require('!!raw!../constants/AccountManagerImageSlide/AccountManagerImage.06.tsx'),
	require('!!raw!../constants/AccountManagerImageSlide/AccountManagerImage.07.tsx'),
	require('!!raw!../constants/AccountManagerImageSlide/AccountManagerImage.07b.tsx'),
	require('!!raw!../constants/AccountManagerImageSlide/AccountManagerImage.07c.tsx'),
	require('!!raw!../constants/AccountManagerImageSlide/AccountManagerImage.08.tsx'),
	require('!!raw!../constants/AccountManagerImageSlide/AccountManagerImage.09.tsx')
];

@slide('dark')
export default class AccountManagerImage_Code02 extends Component {
	render() {
		return <CodeTyper src={this.getSrc()} />;
	}

	getSrc() {
		const { click } = this.state;
		return srcList[Math.min(click, srcList.length - 1)];
	}
}
