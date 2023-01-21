import Accordion from 'react-bootstrap/Accordion';

import './FAQ.min.css'

const FAQPage = (props) => {
	return (
		<>
			<a name="faqPage"></a>
			<div className="faq__desktop">
				<div className="faqPage__container">
					<div className="faqPage__imageContainer"></div>
					<div className="faqPage__contantContainer">
						<h2>Часто задаваемые вопросы</h2>
						<div className="accordion__box">
							<Accordion className='accordion-flush'>
								<Accordion.Item eventKey="0">
									<Accordion.Header>
										С какими проблемами приходят ко мне на консультацию?
									</Accordion.Header>
									<Accordion.Body>
										Чаще всего ко мне обращаются родители, чьи дети тревожны и
										неуверенны, не могут наладить отношения со сверстниками и
										близкими людьми, капризничают и бывают довольно агрессивны,
										дети, у которых есть игровая и компьютерная зависимости, дети,
										пережившие серьезные травмирующие ситуации
										(например, смерть близкого родственника, развод родителей, рождение второго ребенка в семье)

									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										С кем я работаю?
									</Accordion.Header>
									<Accordion.Body>
										Мои клиенты - дети всех возрастов от рождения до совершеннолетия
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>
										Как проходит первая консультация?
									</Accordion.Header>
									<Accordion.Body>
										Во время первой встречи я знакомлюсь с родителями и ребенком,
										провожу психологическую диагностику, фокусируясь на проблемах,
										в том числе скрытых и неочевидных. Затем мы решаем, сколько
										консультаций понадобится, чтобы помочь ребенку, и какие методики
										подойдут в конкретном случае
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>
										Какие техники я использую в работе?
									</Accordion.Header>
									<Accordion.Body>
										Я использую нарративный подход (позволяет отделить человека
										от его проблемы и посмотреть на события, происходящие с ним, со стороны),
										игровую терапию, арт-терапию, сказкотерапию. Также применяю во время
										работы со своими клиентами метафорические ассоциативные карты -
										действенный инструмент, который помогает установить контакт с клиентом,
										обратиться к подсознательному и найти неочевидные варианты решения проблем.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header>
										Каких результатов стоит ожидать?
									</Accordion.Header>
									<Accordion.Body>
										Моя миссия - помочь справиться с проблемами, которые возникли у ребенка и
										воспитывающих его взрослых, обучить родителей свободно и открыто общаться
										со своим ребенком, а ребенка - слышать и понимать себя, выражать и проживать
										свои эмоции, не бояться говорить о своих чувствах
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="5">
									<Accordion.Header>
										Как проходят терапевтические сессии?
									</Accordion.Header>
									<Accordion.Body>
										Самое важное для меня - сделать так, чтобы во время наших встреч ребенок
										чувствовал себя комфортно. Я очень люблю детей и быстро нахожу общий язык
										с каждым из своих маленьких клиентов. Пожалуй, это моя суперсила! А принципы,
										на которые я опираюсь в своей работе - не оценивать, сохранять беспристрастность,
										и признавать право ребенка и родителей на любые чувства и эмоции.

									</Accordion.Body>
								</Accordion.Item>
							</Accordion>

						</div>
						<button className='faqPage__buttom' onClick={props.showModalFormWindow}>Хочу обсудить свою ситуацию</button>
					</div>
				</div>

			</div>
			<div className="faq__phone">
				<div className="faqPage__container">
					<div className="faqPage__contantContainer">
						<h2>Часто задаваемые вопросы</h2>
						<div className="faqPage__imageContainer"></div>
						<div className="accordion__box">
							<Accordion className='accordion-flush'>
								<Accordion.Item eventKey="0">
									<Accordion.Header>
										С какими проблемами приходят ко мне на консультацию?
									</Accordion.Header>
									<Accordion.Body>
										Чаще всего ко мне обращаются родители, чьи дети тревожны и
										неуверенны, не могут наладить отношения со сверстниками и
										близкими людьми, капризничают и бывают довольно агрессивны,
										дети, у которых есть игровая и компьютерная зависимости, дети,
										пережившие серьезные травмирующие ситуации
										(например, смерть близкого родственника, развод родителей, рождение второго ребенка в семье)

									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										С кем я работаю?
									</Accordion.Header>
									<Accordion.Body>
										Мои клиенты - дети всех возрастов от рождения до совершеннолетия
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>
										Как проходит первая консультация?
									</Accordion.Header>
									<Accordion.Body>
										Во время первой встречи я знакомлюсь с родителями и ребенком,
										провожу психологическую диагностику, фокусируясь на проблемах,
										в том числе скрытых и неочевидных. Затем мы решаем, сколько
										консультаций понадобится, чтобы помочь ребенку, и какие методики
										подойдут в конкретном случае
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>
										Какие техники я использую в работе?
									</Accordion.Header>
									<Accordion.Body>
										Я использую нарративный подход (позволяет отделить человека
										от его проблемы и посмотреть на события, происходящие с ним, со стороны),
										игровую терапию, арт-терапию, сказкотерапию. Также применяю во время
										работы со своими клиентами метафорические ассоциативные карты -
										действенный инструмент, который помогает установить контакт с клиентом,
										обратиться к подсознательному и найти неочевидные варианты решения проблем.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header>
										Каких результатов стоит ожидать?
									</Accordion.Header>
									<Accordion.Body>
										Моя миссия - помочь справиться с проблемами, которые возникли у ребенка и
										воспитывающих его взрослых, обучить родителей свободно и открыто общаться
										со своим ребенком, а ребенка - слышать и понимать себя, выражать и проживать
										свои эмоции, не бояться говорить о своих чувствах
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="5">
									<Accordion.Header>
										Как проходят терапевтические сессии?
									</Accordion.Header>
									<Accordion.Body>
										Самое важное для меня - сделать так, чтобы во время наших встреч ребенок
										чувствовал себя комфортно. Я очень люблю детей и быстро нахожу общий язык
										с каждым из своих маленьких клиентов. Пожалуй, это моя суперсила! А принципы,
										на которые я опираюсь в своей работе - не оценивать, сохранять беспристрастность,
										и признавать право ребенка и родителей на любые чувства и эмоции.

									</Accordion.Body>
								</Accordion.Item>
							</Accordion>

						</div>
						<button className='faqPage__buttom' onClick={props.showModalFormWindow}>Хочу обсудить свою ситуацию</button>
					</div>
				</div>

			</div>

		</>
	)
}
export default FAQPage