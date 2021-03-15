import React from 'react';
import * as emailjs from 'emailjs-com';
import Recaptcha from 'react-recaptcha';

class Form extends React.Component{
	state = {
		name: '',
		email: '',
		message: '',
		buttonText: 'Send',
		success: '',
		error: '',
		disabled: false
	  }
	handleSubmit = (e) => {
		e.preventDefault()
		const {  email, message } = this.state;
		let templateParams = {
		  from_name: email,
		  to_name: 'gmail',
		  message_html: message,
		 };
		 this.setState(() => ({
			buttonText: '...Sending',
		  }))
		  emailjs.send(
			'gmail',
			process.env.REACT_APP_TEMPLATE_ID,
			 templateParams,
			process.env.REACT_APP_USER
		   ).then((response) => {
			this.setState(() => ({
				name: '',
				email: '',
				message: '',
				buttonText: 'Send',
				success: 'Message Sent! I will get back to you as soon as possible.',
				disabled: true
			  }))
		   }, (error) => {
			this.setState(() => ({
				name: '',
				email: '',
				message: '',
				buttonText: 'Send',
				error: 'Something went wrong. Please try again.'
			  }))	
			 })
			 this.resetForm();
	 };

	  handleChange = (param, e) => {
		this.setState({ [param]: e.target.value })
	  }
	  resetForm = () => {
		  this.setState(() => ({
			name: '',
			email: '',
			message: '',
			buttonText: 'Send',
			success: '',
			error: '',
		  }))
	  }
	render(){
		return (
			<div className='contact-container'>
       			 <form className='contact-container--form' onSubmit={this.handleSubmit}>
					<span className='contact-container--status__success'>{this.state.success}</span>
					<span className='contact-container--status__error'>{this.state.error}</span>
					<div className='contact-container--input-group'>
						<div className='contact-container--input-container'>
							<input type='text' 
							value={this.state.name}
							onChange={this.handleChange.bind(this, 'name')}
							autoComplete='off' required name='name'
							className='contact-container--input' />
							<label className='contact-container--label'>
								<span className='contact-container--label--span'>Name</span>
							</label>
						</div>
						<div className='contact-container--input-container'>
						<input type='text' 
								value={this.state.email}
						onChange={this.handleChange.bind(this, 'email')}
						autoComplete='off' required name='email'
						className='contact-container--input'/>
						<label className='contact-container--label'>
							<span className='contact-container--label--span'>Email</span>
						</label>
					</div>
					</div>
					<div className='contact-container--textarea-container'>
						<textarea required 
						className='contact-container--textarea-container--textarea'
						value={this.state.message}
						onChange={this.handleChange.bind(this, 'message')}
						placeholder='Your Message' name='feedback'></textarea>
						<label className='contact-container--textarea-container--label'>
						</label>
					</div>
					<Recaptcha
					className="captcha"
					type="checkbox"
					sitekey='6LelC9gUAAAAAN-JTSd3WcSHErs9eA3GU2Agoz1B'
				/>
					<button disabled={this.state.disabled}
					className='button-outline'>{this.state.buttonText}</button>
				</form>
			</div>		
		);
	}
};


export default Form;