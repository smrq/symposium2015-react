import React, { Component, PropTypes } from 'react';
import CodeTyper from '../components/CodeTyper';
import slide from '../decorators/slide';

const src = `
import React, { Component, StyleSheet, Image, Text, View } from 'react-native';

export default class AccountManagerImage extends Component {
	render() {
		const { image, name } = this.props;
		return <View style={styles.container}>
			{ image
				? <Image style={styles.image} source={image} />
				: <Text style={styles.initials}>{ getInitials(name) }</Text> }
		</View>;
	}
}

const styles = StyleSheet.create({
	/* styles go here */
});
`.trim();

@slide('light')
export default class ReactNative extends Component {
	render() {
		const { click } = this.state;

		return <div>
			<h1>React Native!!!</h1>
			<ul>
				<li style={{opacity: click >= 1 ? 1 : 0, textDecoration: click >= 2 ? 'line-through' : 'none'}}>Write once, run anywhere</li>
				<li style={{opacity: click >= 2 ? 1 : 0}}>Learn once, write anywhere</li>
			</ul>
			<CodeTyper src={click >= 3 ? src : ''} />
		</div>;
	}
}
