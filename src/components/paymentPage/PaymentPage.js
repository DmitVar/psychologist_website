import './PaymentPage.min.css';

const PaymentPage = (props) => {
	return (
		<>
			<a name='paymentPage'></a>
			<div className='paymentPage__container'>
				<h2>Стоимость услуг и оплата</h2>
				<div className="paymentCard__container">
					<div className="paymentCard__box">
						<div className="paymentCard">
							<p className="card__title card__title_fontSize">Первичная диагностика детско-родительских отношений с рекомендациями</p>
							<p className="card__text_time">45-60 минут</p>
							<p className="card__text_payment">70 рублей</p>
							<button className="paymentCard__button">Оплатить</button>
						</div>
						<div className="paymentCard">
							<p className="card__title card__title_fontSize2">Консультация родителей</p>
							<p className="card__text_time">45-60 минут</p>
							<p className="card__text_payment">60 рублей</p>
							<button className="paymentCard__button">Оплатить</button>
						</div>
					</div>
					<div className="paymentCard__box">
						<div className="paymentCard">
							<p className="card__title card__title_fontSize2">Индивидуальное терапевтическое занятие</p>
							<p className="card__text_time"><span className='normal__font_size'>30 минут -</span><span className='bold__font_size'> 25 рублей</span></p>
							<p className="card__text_payment"><span className='normal__font_size'>60 минут -</span><span className='bold__font_size'> 50 рублей</span></p>
							<button className="paymentCard__button">Оплатить</button>
						</div>
						<div className="paymentCard">
							<p className="card__title card__title_fontSize2">Экспресс консультация</p>
							<p className="card__text_time">20-30 минут</p>
							<p className="card__text_payment">35 рублей</p>
							<button className="paymentCard__button">Оплатить</button>
						</div>

					</div>
				</div>
			</div>

		</>
	)
}
export default PaymentPage