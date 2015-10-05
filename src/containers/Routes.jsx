import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { padLeft } from 'lodash';

import App from './App';
import slides from '../slides';

const history = createBrowserHistory();

function getSlidePath(number) {
	return '/' + padLeft(number, 2, '0');
}

export default class Routes extends Component {
	render() {
		return <Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={slides[0]} />
				{ slides.map((slide, n) => {
					const path = getSlidePath(n);
					return <Route path={path} component={slide} key={path} />;
				}) }
			</Route>
		</Router>;
	}
}
