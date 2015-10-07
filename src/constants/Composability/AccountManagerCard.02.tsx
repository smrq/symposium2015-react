import AccountManagerImage from './AccountManagerImage';
import AccountManagerContactInformation from './AccountManagerContactInformation';

...

export default class AccountManagerCard extends
React.Component<IAccountManagerCardProps, {}>
{
	render() {
		const { imageUrl, name, phone, email } = this.props;
		
		return <div className='am-block'>
			<AccountManagerImage
				imageUrl={imageUrl}
				name={name} />
			<AccountManagerContactInformation
				name={name}
				phone={phone}
				email={email} />
		</div>;
	}
}