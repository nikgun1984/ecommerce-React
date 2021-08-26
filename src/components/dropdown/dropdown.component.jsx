import CustomButton from '../custom-button/custom-button.component';

import './dropdown.styles.scss';

const DropDown = () => {
	return(
		<div className="cart-dropdown">
			<div className="cart-items"></div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	)

}

export default DropDown;