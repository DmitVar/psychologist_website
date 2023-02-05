import './thanksModalWindow.min.css'
import closeIcon from '../../images/icons/close_icon.svg'

const ThanksModalWindow = (props) => {
	return (
		<div className="modalWindow">
			<div className="thanks-modal-window__container">
				<div className='button__container'>
					<button className='closeButton' type='button' onClick={() => {
						props.closeThanksModalWindow()
					}}>
						<img src={closeIcon} alt='close icon' />
					</button>
				</div>
				<p className="window__title">Спасибо за заявку!</p>
				<p className="window__text">Я свяжусь с вами в ближайшее время!</p>
			</div>
		</div>
	)
}
export default ThanksModalWindow