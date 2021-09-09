import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import DropDown from '../dropdown/dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'
import './header.styles.scss';


const Header = ({currentUser, hidden}) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo"/>
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/shop">CONTACT</OptionLink>
				{
					currentUser?
					<>
						<OptionLink as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>
						<CartIcon />
					</>:
					<OptionLink to="/signin">SIGN IN</OptionLink>
				}
			</OptionsContainer>
			{
				!hidden?<DropDown />:null
			}
		</HeaderContainer>
	)
}

// in order not to pass state to multiple selectors 
// we use createStructuredSelector
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})
// first function connect() allows us access to the state
export default connect(mapStateToProps)(Header);