import { useState } from 'react';

import './About.min.css';

import prev from '../../images/icons/Prev.svg';
import next from '../../images/icons/Next.svg';
import imgDiplom1 from '../../images/Diplom_1.jpg';

const About = (props) => {
	const [valueLeft, setValueLeft] = useState(0);
	const [diplom1, setDiplom1] = useState(false);
	const [diplom2, setDiplom2] = useState(false);
	const [diplom3, setDiplom3] = useState(false);
	const [diplom4, setDiplom4] = useState(false);
	const [diplom5, setDiplom5] = useState(false);
	const [diplom6, setDiplom6] = useState(false);
	const [diplom7, setDiplom7] = useState(false);
	const [diplom8, setDiplom8] = useState(false);
	const [diplom9, setDiplom9] = useState(false);
	const [imgDip1, setImgDip1] = useState(false);


	const mooveImage = (i) => {
		setValueLeft(valueLeft => valueLeft + i)
	}
	const onBlind = (id) => {
		if (id === 'diplom1') {
			setDiplom1((diplom1) => true)
		} else if (id === 'diplom2') {
			setDiplom2((diplom2) => true)
		} else if (id === 'diplom3') {
			setDiplom3((diplom3) => true)
		} else if (id === 'diplom4') {
			setDiplom4((diplom4) => true)
		}
		else if (id === 'diplom5') {
			setDiplom5((diplom5) => true)
		}
		else if (id === 'diplom6') {
			setDiplom6((diplom6) => true)
		}
		else if (id === 'diplom7') {
			setDiplom7((diplom7) => true)
		}
		else if (id === 'diplom8') {
			setDiplom8((diplom8) => true)
		}
		else if (id === 'diplom9') {
			setDiplom9((diplom9) => true)
		}
	}



	const offBlind = (id) => {
		if (id !== 'diplom1' || id !== 'diplom2' || id !== 'diplom3' || id !== 'diplom4' || id !== 'diplom5') {
			setDiplom1((diplom1) => false);
			setDiplom2((diplom2) => false);
			setDiplom3((diplom3) => false);
			setDiplom4((diplom4) => false);
			setDiplom5((diplom5) => false);
			setDiplom6((diplom6) => false);
			setDiplom7((diplom7) => false);
			setDiplom8((diplom8) => false);
			setDiplom9((diplom9) => false);
		}
	}
	return (
		<>
			<a name='about'></a>
			<div className="about-container">
				<div className="about-content__container">
					<div className="about__container__text">
						<h2>Обо мне</h2>
						<p>Тема детской психологии заинтересовала меня достаточно давно,
							но всерьез я начала погружаться в нее, когда готовилась стать
							мамой. Первое психологическое образование получила еще до
							рождения сына, а когда появился малыш, решила продолжить учебу.
							Именно благодаря глубоким знаниям в области детской психологии
							я смогла вовремя понять, что мой сын - высокочувствительный
							ребенок, к которому нужен особый подход. Но самое удивительное -
							внезапно я осознала, что тоже была высокочувствительным
							ребенком! Пожалуй именно в этот момент пазл сложился: я, наконец,
							поняла себя и благодаря своей профессии сегодня живу в гармонии
							и согласии с собой и своими близкими.</p>
					</div>
					<div className="about__container__image"></div>
				</div>
				<div className='about-diploma__container'>
					<h3>Мои сертификаты и дипломы</h3>
					<ul>
						<li>Белорусский государственный педагогический университет им.М.Танка</li>
						<li>Институт психологии Sargi (по программе практикующий детский психолог)</li>
					</ul>
					<div className='about-carousel__container'>
						<div id="carouselExampleControls" className="slider" data-bs-ride="carousel">
							<button className="slider-button prevButton_position"
								type='button'
								onClick={() => {
									mooveImage(200)
								}}
							>
								<img src={prev} alt="..." />
							</button>
							<div className='image-box' style={{ transform: `translateX(${valueLeft}px)` }}>
								<div id='diplom1' className="diplom__box diplom1 diplom__image1"
									onMouseEnter={(e) => {
										onBlind(e.target.id)
									}} onMouseLeave={(e) => {
										offBlind(e.target.id)
									}}
									onClick={(e) => {
										props.showModalImage(e.target.id);
									}}>
									{diplom1 ? <div id="iDip1" className='blind'></div> : null}
								</div>
								<div id='diplom2' className="diplom__box diplom__image2 diplom"
									onMouseEnter={(e) => {
										onBlind(e.target.id)
									}} onMouseLeave={(e) => {
										offBlind(e.target.id)
									}}
									onClick={(e) => {
										props.showModalImage(e.target.id);
									}}>
									{diplom2 ? <div id="iDip2" className='blind'></div> : null}
								</div>
								<div id='diplom3' className="diplom__box diplom__image3 diplom"
									onMouseEnter={(e) => {
										onBlind(e.target.id)
									}} onMouseLeave={(e) => {
										offBlind(e.target.id)
									}}
									onClick={(e) => {
										props.showModalImage(e.target.id);
									}}>
									{diplom3 ? <div id="iDip3" className='blind'></div> : null}
								</div>
								<div id='diplom4' className="diplom__box diplom__image4 diplom"
									onMouseEnter={(e) => {
										onBlind(e.target.id)
									}} onMouseLeave={(e) => {
										offBlind(e.target.id)
									}}
									onClick={(e) => {
										props.showModalImage(e.target.id);
									}}>
									{diplom4 ? <div id="iDip4" className='blind'></div> : null}
								</div>
								<div id='diplom5' className="diplom__box diplom__image5 diplom"
									onMouseEnter={(e) => {
										onBlind(e.target.id)
									}} onMouseLeave={(e) => {
										offBlind(e.target.id)
									}}
									onClick={(e) => {
										props.showModalImage(e.target.id);
									}}>
									{diplom5 ? <div id="iDip5" className='blind'></div> : null}
								</div>
								<div id='diplom6' className="diplom__box diplom__image6 diplom1"
									onMouseEnter={(e) => {
										onBlind(e.target.id)
									}} onMouseLeave={(e) => {
										offBlind(e.target.id)
									}}
									onClick={(e) => {
										props.showModalImage(e.target.id);
									}}>
									{diplom6 ? <div id="iDip6" className='blind'></div> : null}
								</div>
								<div id='diplom7' className="diplom__box diplom__image7 diplom"
									onMouseEnter={(e) => {
										onBlind(e.target.id)
									}} onMouseLeave={(e) => {
										offBlind(e.target.id)
									}}
									onClick={(e) => {
										props.showModalImage(e.target.id);
									}}>
									{diplom7 ? <div id="iDip7" className='blind'></div> : null}
								</div>
								<div id='diplom8' className="diplom__box diplom__image8 diplom"
									onMouseEnter={(e) => {
										onBlind(e.target.id)
									}} onMouseLeave={(e) => {
										offBlind(e.target.id)
									}}
									onClick={(e) => {
										props.showModalImage(e.target.id);
									}}>
									{diplom8 ? <div id="iDip8" className='blind'></div> : null}
								</div>
								<div id='diplom9' className="diplom__box diplom__image9 diplom"
									onMouseEnter={(e) => {
										onBlind(e.target.id)
									}} onMouseLeave={(e) => {
										offBlind(e.target.id)
									}}
									onClick={(e) => {
										props.showModalImage(e.target.id);
									}}>
									{diplom9 ? <div id="iDip9" className='blind'></div> : null}
								</div>
							</div>
							<button className="slider-button nextButton_position"
								type='button'
								onClick={() => {
									mooveImage(-200)
								}}>
								<img src={next} alt="..." />
							</button>
						</div>
					</div>
					<button className='about__button' type='button' onClick={props.showModalFormWindow}>Записаться на консультацию</button>
				</div>
			</div>
		</>
	)
}
export default About