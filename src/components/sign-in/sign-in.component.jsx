import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.styles.scss';

export default class SignIn extends React.Component {
	constructor(){
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async(e) => {
		e.preventDefault();
		const {email, password} = this.state;
		try {
			await auth.signInWithEmailAndPassword(email,password);
			this.setState({email:"", password:""})
		} catch(err){
			console.error(err);
		}
	}

	handleChange = (e) => {
		const {value, name} = e.target;
		this.setState({[name]:value})
	}

	render(){
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password </span>

				<form onSubmit={this.handleSubmit}>
					<FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="EMAIL" required/>
					<FormInput type="password" name="password" value={this.state.password} required handleChange={this.handleChange} label="PASSWORD"/>
					<div className="buttons">
						<CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}