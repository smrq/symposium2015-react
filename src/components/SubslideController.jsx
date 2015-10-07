import React, { Component, PropTypes } from 'react';
import * as Keys from '../constants/Keys';
import { contains } from 'lodash';

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
