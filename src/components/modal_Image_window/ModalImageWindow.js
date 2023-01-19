
import './ModalImageWindow.min.css'

const ModalImageWindow = (props) => {
	return (
		<div className='modalImage__container' onClick={() => { props.closeModalImage() }}>
			<div className='image__box'>
				<img src={props.modalImage} alt={props.modalImage} />
			</div>
		</div>
	)

}
export default ModalImageWindow