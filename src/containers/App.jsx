import React, { Children, Component, PropTypes } from 'react';
import 'react/addons';
import padLeft from 'lodash/string/padLeft';
import * as Keys from '../constants/Keys';
import slides from '../slides';
import SubslideController from '../components/SubslideController';

const { CSSTransitionGroup } = React.addons;

function getSlideNumber(location) {
	const { pathname } = location;
	return +/\d*$/.exec(pathname)[0];
}

function getSlidePath(number) {
	return '/' + padLeft(number, 2, '0');
}

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { slideTransition: '' };
	}

	componentWillReceiveProps(nextProps) {
		const slideNumber = getSlideNumber(this.props.location);
		const nextSlideNumber = getSlideNumber(nextProps.location);
		this.setState({ slideTransition: slideNumber > nextSlideNumber ? 'slide-left' : 'slide-right' });
	}
	
	render() {
		const { slideTransition } = this.state;
		return <div>
			<CSSTransitionGroup component='div' transitionName={ slideTransition }>
				{ this.renderChildren() }
			</CSSTransitionGroup>
			<SubslideController
				prevKeys={[Keys.LEFT]}
				nextKeys={[Keys.RIGHT]}
				prev={this.prev.bind(this)}
				next={this.next.bind(this)} />
		</div>;
	}

	renderChildren() {
		const { children } = this.props;
		const { pathname } = this.props.location;

		return Children.map(children, child =>
			React.cloneElement(child, { key: pathname }));
	}

	prev() {
		const { history } = this.props;
		const slideNumber = getSlideNumber(this.props.location);
		if (slideNumber > 0) {
			history.pushState(null, getSlidePath(slideNumber - 1));
		}
	}

	next() {
		const { history } = this.props;
		const slideNumber = getSlideNumber(this.props.location);
		if (slideNumber < slides.length - 1) {
			history.pushState(null, getSlidePath(slideNumber + 1));
		}
	}
}
