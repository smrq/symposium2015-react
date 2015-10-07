import React, { Component, PropTypes } from 'react';
import contains from 'lodash/collection/includes';
import * as Keys from '../constants/Keys';

export default class SubslideController extends Component {
	static defaultProps = {
		prevKeys: [Keys.UP],
		nextKeys: [Keys.DOWN]
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
		const { prevKeys, nextKeys, prev, next } = this.props;

		if (contains(prevKeys, e.which)) {
			prev();
		}
		else if (contains(nextKeys, e.which)) {
			next();
		}
		else {
			return;
		}

		e.preventDefault();
	}
}
