

import './Footer.min.css'

const Footer = (props) => {
	return (
		<div className="footer">
			<div className="footer__contactInformation">
				<p className='contactsText'><span><a href='#'>Мария Бурибо</a></span><br />Профессиональный психолог</p>
				<p className='phone__text'>+375 (44) 793-53-68 </p>
				<p className='text__email'>buribo.maria@mail.ru</p>
			</div>
			<div className="footer__menu">
				<div className="footer__menu__navigation">
					<nav className='footer__navigation'>
						<ul>
							<li><a href='#about'>Обо мне</a></li>
							<li><a href='#paymentPage'>Стоимость</a></li>
							<li><a href='#faqPage'>FAQ</a></li>
							<li><a href='#contacts'>Контакты</a></li>
						</ul>
					</nav>
				</div>
				<div className="footer__menu__social">
					<div className="socialIcon__box">
						<a href='https://www.instagram.com/buribo.maria/' target="_blanck"><div className="docialIcon instagram"></div></a>
						<a href='viber://chat?number=+375447935368' target='_blanck'><div className="docialIcon viber"></div></a>
						<a href='https://t.me/Maria_Buribo' target="_blank"><div className="docialIcon telegram"></div></a>
					</div>
				</div>
			</div>
			<div className="footer__legalInformation">
				<p>ИП Бурибо Мария Сергеевна <br />
					<br />
					Свидетельство о государственной
					регистрации номер 791283472 выдано
					Горецким районным исполнительным
					комитетом 06.10.2022г. Адрес: Могилевская обл.,
					Горецкий район, г. Горки, ул. Строителей, д. 15, кв. 8.
				</p>
				<p className='developer'>
					Дизайн сайта - Алина Мороз<br />
					Front-end - Дмитрий Варчак
				</p>
			</div>
		</div>
	)
}
export default Footer