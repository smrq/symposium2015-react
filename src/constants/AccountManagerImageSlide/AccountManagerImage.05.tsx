import * as React from 'react';

export default class AccountManagerImage extends React.Component<IAccountManagerImageProps, {}> {
	render() {
		const { imageUrl, name } = this.props;

		return <div className='am-image'>
			<img src={imageUrl} alt={name} />
		</div>;
	}
}

export interface IAccountManagerImageProps {
	imageUrl?: string;
	name: string;
}