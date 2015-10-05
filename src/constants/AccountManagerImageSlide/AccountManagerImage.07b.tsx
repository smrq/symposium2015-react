import * as React from 'react';

export default class AccountManagerImage extends React.Component<IAccountManagerImageProps, {}> {
	render() {
		const { imageUrl, name } = this.props;

		return <div className='am-image'>
			{ imageUrl
				? <img src={imageUrl} alt={name} />
				: getInitials(name) }
		</div>;
	}

	renderImageOrInitials() {
		const { imageUrl, name } = this.props;


	}
}

export interface IAccountManagerImageProps {
	imageUrl?: string;
	name: string;
}

function getInitials(name: string) {
	return name.split(' ').map(word => word[0]).join('');
}