import { useState } from 'react';

import phone from './../../images/icons/phone_icon.svg'
import './Contacts.min.css';

const Contacts = (props) => {
	const [formFieldName, setFormFieldName] = useState('');
	const [formFieldPhoneOrEmail, setFormFieldPhoneOrEmail] = useState('');
	const [formFieldText, setFormFieldText] = useState('');
	const sendForm = async (e) => {
		e.preventDefault()
		let formFieldValues = new FormData()
		formFieldValues.append('name', formFieldName);
		formFieldValues.append('phoneOrEmail', formFieldPhoneOrEmail);
		formFieldValues.append('text', formFieldText);

		setFormFieldName('');
		setFormFieldPhoneOrEmail('');
		setFormFieldText('');
		let respons = await fetch('sendForm.php', {
			method: 'POST',
			body: formFieldValues
		});
		console.log(respons);
		if (respons.ok) {
			props.showThanksModalWindow();
		} else {
			console.log("Error fetch");
		}

	}
	return (
		<>
			<a name="contacts"></a>
			<div className="contacts__container">
				<h2>Готовы встретиться или появились вопросы?</h2>
				<p>Позвоните или напишите мне, я с радостью разъясню любые вопросы,
					или заполните форму и я свяжусь с вами в течение рабочего дня.
				</p>
				<div className="contactsInformation__box">
					<div className="information__box">
						<p className='contactsText'>Мария Бурибо</p>
						<img className='phone__icone' src={phone} alt="phone number" /><p className='phone__text'>+375 (44) 793-53-68 </p>
						<p className='text__email'>buribo.maria@mail.ru</p>
						<div className="socialIcon__box">
							<a href='https://www.instagram.com/buribo.maria/' target="_blanck"><div className="docialIcon instagram" ></div></a>
							<a href='viber://chat?number=+375447935368'><div className="docialIcon viber"></div></a>
							<a href='https://t.me/UserName' target="_blank"><div className="docialIcon telegram"></div></a>
						</div>
					</div>
					<div className="contactForm__box">
						<form action="sendForm.php"
							method='POST'
							className='contactsForm'
							onSubmit={(e) => { sendForm(e) }}>
							<input type="text"
								name='name'
								placeholder='Ваше имя'
								value={formFieldName}
								onChange={(e) => {
									setFormFieldName(e.target.value)
								}} required />
							<input type="text"
								name="phoneOrEmail"
								placeholder='Номер телефона или электронная почта'
								value={formFieldPhoneOrEmail}
								onChange={(e) => {
									setFormFieldPhoneOrEmail(e.target.value)
								}}
								required
							/>
							<input type="text"
								name='text'
								placeholder='Ваш вопрос'
								value={formFieldText}
								onChange={(e) => {
									setFormFieldText(e.target.value)
								}}
								required
							/>
							<button type='submit'>Отправить</button>
						</form>
					</div>
				</div>
			</div>

		</>
	)
}

export default Contacts