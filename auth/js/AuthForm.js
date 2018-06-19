'use strict';

const AuthForm = ({onAuth}) => {
	function authForm(event) {
		if ((!onAuth) || (typeof onAuth !== 'function')) return null;

		let formData = event.currentTarget.elements;
		
		let user = {
			name: formData.name.value,
			email: formData.email.value,
			password: formData.password.value
		};

		onAuth(user);
	}

	function checkEmail(event) {
		event.currentTarget.value = event.currentTarget.value.replace(/[^\w@\.-]+/gi, "");
	}

	function checkPassword(event) {
		event.currentTarget.value = event.currentTarget.value.replace(/[^\w]+/gi, "");
	}

	return (
		<form className="ModalForm" action="/404/auth/" method="POST" onSubmit={authForm}>
			<div className="Input">
				<input required type="text" placeholder="Имя" name ="name"/>
				<label></label>
			</div>
			<div className="Input">
				<input onChange={checkEmail} type="email" placeholder="Электронная почта" name ="email" />
				<label></label>
			</div>
			<div className="Input">
				<input onChange={checkPassword} required type="password" placeholder="Пароль" name ="password" />
				<label></label>
			</div>
			<button type="submit">
				<span>Войти</span>
				<i className="fa fa-fw fa-chevron-right"></i>
			</button>
		</form>
	);
};