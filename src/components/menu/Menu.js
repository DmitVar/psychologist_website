import { useState } from 'react'

import './Menu.min.css'
import burger from '../../images/burger.svg'
import closeButtonMenu from '../../images/close_button.svg'

const Menu = (props) => {
	const [tabletMenuVisible, setTabletmenuVisible] = useState(false)
	const showTabletMenu = () => {
		setTabletmenuVisible(tabletMenuVisible => true);
	}
	const hidesTabletMenu = () => {
		setTabletmenuVisible(tabletMenuVisible => false);
	}
	return (
		<div className="menu-container">
			<div className='menu-container__logo'>
				<p className='logo'>мария бурибо</p>
				<p className='logo__profession'>психолог</p>
			</div>
			<div className='navigation__container'>
				<nav className='navigation descktop_visible'>
					<ul>
						<li><a href='#about'>Обо мне</a></li>
						<li><a href='#paymentPage'>Стоимость</a></li>
						<li><a href='#faqPage'>FAQ</a></li>
						<li><a href='#contacts'>Контакты</a></li>
					</ul>
				</nav>
				<p className='navigation__phone'>
					+375 (44) 793-53-68
				</p>
				<nav className="tablet__navigation">
					<button type='button' onClick={showTabletMenu}><img src={burger} alt="burger" /></button>
					<div className={tabletMenuVisible ? "tablet__menu" : "tablet__menu tablet__menu_visible"}>
						<div className="menu-container__tablet">
							<div className='menu-container__logo'>
								<p className='logo'>мария бурибо</p>
								<p className='logo__profession'>психолог</p>
							</div>
							<p className='navigation__phone'>
								+375 (44) 793-53-68
							</p>
							<button type='button' onClick={hidesTabletMenu}><img src={closeButtonMenu} alt="burger" /></button>
						</div>
						<ul>
							<li onClick={hidesTabletMenu}><a href='#about'>Обо мне</a></li>
							<li onClick={hidesTabletMenu}><a href='#paymentPage'>Стоимость</a></li>
							<li onClick={hidesTabletMenu}><a href='#faqPage'>FAQ</a></li>
							<li onClick={hidesTabletMenu}><a href='#contacts'>Контакты</a></li>
						</ul>
						<div className="socialIcon__box">
							<a href='#'><div className="docialIcon instagram"></div></a>
							<div className="docialIcon viber"></div>
							<div className="docialIcon telegram"></div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}
export default Menu