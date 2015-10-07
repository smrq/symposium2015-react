import * as React from 'react';

export default class AccountManagerImage extends
React.Component<IAccountManagerImageProps, {}> {
	render() {
		const imageOrInitials = this.renderImageOrInitials();
		return <div className='am-image'>
			{ imageOrInitials }
		</div>;
	}

	renderImageOrInitials() {
		const { imageUrl, name } = this.props;

		if (imageUrl)
			return <img src={imageUrl} alt={name} />;
			
		return getInitials(name);
	}
}

export interface IAccountManagerImageProps {
	imageUrl?: string;
	name: string;
}

function getInitials(name: string) {
	return name.split(' ').map(word => word[0]).join('');
}