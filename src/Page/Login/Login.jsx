import React from 'react';
import './Login.scss';
import { Context } from '../../Context/Anthencetion';
import youtobe from '../../Assets/img/youtobe-logo.svg'
function Login() {
	const { setToken } = React.useContext(Context);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { user_email, user_password } = evt.target.elements;

		fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: user_email.value.trim(),
				password: user_password.value.trim(),
			}),
		})
			.then((response) => response.json())
			.then((data) => setToken(data?.token));
	};
	return (
    <body>

		<div className='container'>
      
			<div className='login'>
        <img className='youtobe-img' src={youtobe} alt="" width={200} height={100}/>
				<h1 className='login__headoing'>Log in to You Tobe</h1>
				<form className='form' onSubmit={handleSubmit}>
					<input
						className='login__input'
						type='email'
						defaultValue='eve.holt@reqres.in'
						name='user_email'
					/>
					<input
						className='login__input'
						type='password'
						defaultValue='cityslicka'
						name='user_password'
					/>

					<button className='login__btn'>Log In</button>
				</form>

				<div className='login__link'>
					<a className='link' href='#'>
						Forgot password?
					</a>
					<a className='link' href='#'>
						Sign up to You Tobe
					</a>
				</div>
			</div>
		</div>
    </body>
	);
}

export default Login;
