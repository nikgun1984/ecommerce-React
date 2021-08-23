import React from "react";

import './sign-in.styles.scss';

export default class SignIn extends React.Component {
	constructor(){
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({email:"", password:""})
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
					<input type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
					<label htmlFor="">EMAIL</label>
					<input type="password" name="password" value={this.state.password} required onChange={this.handleChange}/>
					<label htmlFor="">PASSWORD</label>
					<input type="submit" value="Submit Form"/>
				</form>
			</div>
		)
	}
}