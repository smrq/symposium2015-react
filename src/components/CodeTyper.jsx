import React, { Component, PropTypes } from 'react';
import Highlight from 'react-highlight';
import { diffChars } from 'diff';

function keystrokeTime() {
	return Math.random() * 30;
}

export default class CodeTyper extends Component {
	static defaultProps = {
		language: 'javascript'
	};

	constructor(props) {
		super(props);
		this.state = { typedSrc: '', diff: [], cursor: 0 };
	}

	componentWillMount() {
		this.setState({ typedSrc: this.props.src });
	}

	componentDidMount() {
		this.queueTyping();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			typedSrc: this.props.src,
			diff: diffChars(this.props.src, nextProps.src),
			cursor: 0
		});
		this.queueTyping();
	}

	componentWillUnmount() {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
	}

	render() {
		const { typedSrc } = this.state;
		const { language } = this.props;

		return <Highlight className={language}>
			{ typedSrc }
		</Highlight>;
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.src !== this.props.src ||
			nextState.typedSrc !== this.state.typedSrc;
	}

	queueTyping() {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		this.timeout = setTimeout(
			this.typeCharacter.bind(this),
			keystrokeTime());
	}

	typeCharacter() {
		const { typedSrc, diff, cursor } = this.state;

		if (!diff.length) return;

		const [diffObj, ...rest] = diff;

		if (diffObj.added && diffObj.count) {
			this.setState({
				typedSrc: typedSrc.slice(0, cursor) + diffObj.value[0] + typedSrc.slice(cursor),
				diff: [{
					value: diffObj.value.slice(1),
					count: diffObj.count - 1,
					added: true
				}].concat(rest),
				cursor: cursor + 1
			});
		} else if (diffObj.removed && diffObj.count) {
			this.setState({
				typedSrc: typedSrc.slice(0, cursor) + typedSrc.slice(cursor + diffObj.count),
				diff: rest,
				cursor: cursor
			});
		} else {
			this.setState({
				typedSrc,
				diff: rest,
				cursor: cursor + diffObj.count
			});
		}
		this.queueTyping();
	}
}
