import { useState } from 'react';

import './ModalFormWindow.min.css'
import closeIcon from '../../images/icons/close_icon.svg'

const ModalFormWindow = (props) => {
	const [modalFormFieldName, setModalFormFieldName] = useState('');
	const [modalFormFieldPhoneOrEmail, setModalFormFieldPhoneOrEmail] = useState('');
	const sendModalForm = async (e) => {
		e.preventDefault()
		props.showLoadingModalWindow();
		let formFieldValues = new FormData()
		formFieldValues.append('name', modalFormFieldName);
		formFieldValues.append('phoneOrEmail', modalFormFieldPhoneOrEmail);

		setModalFormFieldName('');
		setModalFormFieldPhoneOrEmail('');

		let respons = await fetch('sendForm.php', {
			method: 'POST',
			body: formFieldValues
		});
		console.log(respons);
		if (respons.ok) {
			props.closeModalFormWindow();
			props.closeLoadingModalWindow();
			props.showThanksModalWindow();
		} else {
			console.log("Error fetch");
		}
	}
	return (
		<div className="modalWindow">
			<div className="form__container">
				<button className='closeButton' type='button' onClick={props.closeModalFormWindow}><img src={closeIcon} alt='close icon' /></button>
				<p className="form__title">Записаться<br />на консультацию</p>
				<form action="sendForm.php" method='POST' onSubmit={(e) => { sendModalForm(e) }}>
					<label htmlFor="">Заполните форму и я свяжусь с вами</label>
					<input name='name'
						type="text"
						placeholder='Ваше имя'
						required
						value={modalFormFieldName}
						onChange={(e) => {
							setModalFormFieldName(e.target.value);
						}} />
					<input name='phoneOrEmail'
						type="text"
						required
						placeholder='Номер телефона или электронная почта'
						value={modalFormFieldPhoneOrEmail}
						onChange={(e) => {
							setModalFormFieldPhoneOrEmail(e.target.value)
						}} />
					<button className='form__buttom' type='submint'>Записаться</button>
				</form>
			</div>
		</div>
	)
}
export default ModalFormWindow