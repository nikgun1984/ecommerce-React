import StripeCheckout  from 'react-stripe-checkout';
import {publishableKey} from '../../keys';

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price*100;

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='ecommerce'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton;