
import './ModalFormWindow.min.css'
import closeIcon from '../../images/icons/close_icon.svg'

const ModalFormWindow = (props) => {
	return (
		<div className="modalWindow">
			<div className="form__container">
				<button className='closeButton' type='button' onClick={props.closeModalFormWindow}><img src={closeIcon} alt='close icon' /></button>
				<p className="form__title">Записаться<br />на консультацию</p>
				<form action="sendModalForm.php" method='POST'>
					<label htmlFor="">Заполните форму и я свяжусь с вами</label>
					<input name='name' type="text" placeholder='Ваше имя' required />
					<input name='phoneOrEmail' type="text" required placeholder='Номер телефона или электронная почта' />
					<button className='form__buttom'>Записаться</button>
				</form>
			</div>
		</div>
	)
}
export default ModalFormWindow