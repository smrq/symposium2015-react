import React, { Component, PropTypes } from 'react';
import merge from 'lodash/object/merge';

const nbsp = '\xa0';

export default class LightenCodeLines {
	render() {
		const { color, show, lines, style } = this.props;
		
		let blankLines = nbsp;
		for (let i = 0; i < lines - 1; ++i) {
			blankLines += '\n' + nbsp;
		}

		return <pre style={merge(style, { 
			opacity: show ? 0.9 : 0,
			backgroundColor: color
		})}>{blankLines}</pre>;
	}
}