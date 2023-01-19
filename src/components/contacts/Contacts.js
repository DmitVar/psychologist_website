import phone from './../../images/icons/phone_icon.svg'
import './Contacts.min.css';

const Contacts = (props) => {
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
							<a href='#'><div className="docialIcon instagram"></div></a>
							<div className="docialIcon viber"></div>
							<div className="docialIcon telegram"></div>
						</div>
					</div>
					<div className="contactForm__box">
						<form action="sendForm.php" method='POST' className='contactsForm'>
							<input type="text" name='name' placeholder='Ваше имя' />
							<input type="text" name="phoneOrEmail" id="" placeholder='Номер телефона или электронная почта' />
							<input type="text" name='text' placeholder='Ваш вопрос' />
							<button type='submit'>Отправить</button>
						</form>
					</div>
				</div>
			</div>

		</>
	)
}

export default Contacts