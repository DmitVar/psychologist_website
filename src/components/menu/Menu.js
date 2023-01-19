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
		<div>
			<div className="menu-container descktop__navigtion">
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
				</div>
			</div>
			<div className={tabletMenuVisible ? "menu-container__big tablet__navigation" : "menu-container tablet__navigation"}>
				<div className="tablet__viseble-container">
					<div className='menu-container__logo'>
						<p className='logo'>мария бурибо</p>
						<p className='logo__profession'>психолог</p>
					</div>
					<p className='navigation__phone'>
						+375 (44) 793-53-68
					</p>
					<div className="button__container">
						<button className='menu__button' onClick={tabletMenuVisible ? hidesTabletMenu : showTabletMenu}>
							<img src={tabletMenuVisible ? closeButtonMenu : burger} alt="" />
						</button>
					</div>
				</div>
				<div className='navigation__container'>
					<nav className='navigation descktop_visible'>
						<ul>
							<li><a href='#about' onClick={hidesTabletMenu}>Обо мне</a></li>
							<li><a href='#paymentPage' onClick={hidesTabletMenu}>Стоимость</a></li>
							<li><a href='#faqPage' onClick={hidesTabletMenu}>FAQ</a></li>
							<li><a href='#contacts' onClick={hidesTabletMenu}>Контакты</a></li>
						</ul>
					</nav>
					<div className="navigation__socialIcon__box">
						<a href='#'><div className="docialIcon instagram"></div></a>
						<div className="docialIcon viber"></div>
						<div className="docialIcon telegram"></div>
					</div>
				</div>

			</div>

		</div>
	)
}
export default Menu