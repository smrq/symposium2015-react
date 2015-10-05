import React, { Component, PropTypes } from 'react';
import * as Keys from '../constants/Keys';

export default class SubslideController extends Component {
	static defaultProps = {
		prevKey: Keys.UP,
		nextKey: Keys.DOWN
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.keydownListener = this.handleKeyDown.bind(this);
		document.addEventListener('keydown', this.keydownListener);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.keydownListener);
	}

	render() {
		return false;
	}

	handleKeyDown(e) {
		const { prevKey, nextKey, prev, next } = this.props;
		switch (e.which) {
			case prevKey:
				prev();
				break;
			case nextKey:
				next();
				break;
			default:
				return;
		}
		e.preventDefault();
	}
}
