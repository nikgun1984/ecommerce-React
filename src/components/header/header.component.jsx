import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import DropDown from '../dropdown/dropdown.component';

import './header.styles.scss';


const Header = ({currentUser, hidden}) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo"/>
			</Link>
			<div className="options">
				<Link className="option" to="/shop">SHOP</Link>
				<Link className="option" to="/shop">CONTACT</Link>
				{
					currentUser?
					<>
						<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
						<CartIcon />
					</>:
					<Link className="option" to="/signin">SIGN IN</Link>
				}
			</div>
			{
				!hidden?<DropDown />:null
			}
		</div>
	)
}

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
	currentUser,
	hidden
})
// first function connect() allows us access to the state
export default connect(mapStateToProps)(Header);