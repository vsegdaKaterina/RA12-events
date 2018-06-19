'use strict';

const FeedbackForm = ({data, onSubmit}) => {
	function sendForm(event) {
		event.preventDefault();
		let formData = event.currentTarget.elements;
		
		let form = {
			name: formData.name.value,
			email: formData.email.value,
			salutation: formData.salutation.value,
			subject: formData.subject.value,
			message: formData.message.value,
			snacks: Array.from(formData.snacks).filter(snack => snack.checked).map(snack => snack.value)
		}
		onSubmit(JSON.stringify(form));
	}
	
	return (
		<form className="content__form contact-form" onSubmit={sendForm}>
			<div className="testing">
				<p>Чем мы можем помочь?</p>
			</div>
			<div className="contact-form__input-group">
				<input defaultChecked={data.salutation === 'Мистер'} className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер"/>
				<label className="contact-form__label contact-form__label--radio" for="salutation-mr">Мистер</label>
				<input defaultChecked={data.salutation === 'Мисис'} className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис"/>
				<label className="contact-form__label contact-form__label--radio" for="salutation-mrs">Мисис</label>
				<input defaultChecked={data.salutation === 'Мис'} className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис"/>
				<label className="contact-form__label contact-form__label--radio" for="salutation-ms">Мис</label>
			</div>
			<div className="contact-form__input-group">
				<label className="contact-form__label" htmlFor="name">Имя</label>
				<input defaultValue={data.name} className="contact-form__input contact-form__input--text" id="name" name="name" type="text"/>
			</div>
			<div className="contact-form__input-group">
				<label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
				<input defaultValue={data.email} className="contact-form__input contact-form__input--email" id="email" name="email" type="email"/>
			</div>
			<div className="contact-form__input-group">
				<label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
				<select defaultValue={data.subject} className="contact-form__input contact-form__input--select" id="subject" name="subject">
					<option>У меня проблема</option>
					<option>У меня важный вопрос</option>
				</select>
			</div>
			<div className="contact-form__input-group">
				<label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
				<textarea defaultValue={data.message} className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65"></textarea>
			</div>
			<div className="contact-form__input-group">
				<p className="contact-form__label--checkbox-group">Хочу получить:</p>
				<input defaultChecked={data.snacks.includes('пицца')} className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца"/>
				<label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
				<input defaultChecked={data.snacks.includes('пирог')} className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог"/>
				<label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
			</div>
			<button className="contact-form__button" type="submit">Отправить сообщение!</button>
			<output id="result" />
	</form>
	);
};

FeedbackForm.defaultProps = {
	data: {
			salutation: 'Мисис',
			name: 'Алевтина',
			subject: 'У меня важный вопрос',
			message: 'Как оформить доставку?',
			email: 'mis@test.co',
			snacks: ['пирог']
	}
};

