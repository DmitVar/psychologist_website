import { useState } from 'react';
import { Helmet } from 'react-helmet';

import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import About from './components/about/About';
import PaymentPage from './components/paymentPage/PaymentPage';
import FAQPage from './components/FAQ/FAQ';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import ModalImageWindow from './components/modal_Image_window/ModalImageWindow';
import ModalFormWindow from './components/modalFormWindow/ModalFormWindow';
import ThanksModalWindow from './components/thanksModalWindow/ThanksModalWindow'

import './App.min.css';
import imageDiplom1 from './images/Diplom_1.jpg';
import imageDiplom2 from './images/Diplom_2.jpg';
import imageDiplom3 from './images/Diplom_3.jpg';
import imageDiplom4 from './images/Diplom_4.jpg';
import imageDiplom5 from './images/Diplom_5.jpg';
import imageDiplom6 from './images/Diplom_6.jpg';
import imageDiplom7 from './images/Diplom_7.png';
import imageDiplom8 from './images/Diplom_8.png';
import imageDiplom9 from './images/Diplom_9.png';


function App() {
  const [modalImageWindow, setModalImageWindow] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalFormWindow, setModalFormWindow] = useState(false);
  const [thanksModalWindow, setThanksModalWindow] = useState(false)

  const showModalImage = (id) => {
    setModalImageWindow(true);
    if (id === 'iDip1') {
      setModalImage(imageDiplom1);
    } else if (id === 'iDip2') {
      setModalImage(imageDiplom2);
    } else if (id === 'iDip3') {
      setModalImage(imageDiplom3);
    } else if (id === 'iDip4') {
      setModalImage(imageDiplom4);
    } else if (id === 'iDip5') {
      setModalImage(imageDiplom5);
    } else if (id === 'iDip6') {
      setModalImage(imageDiplom6);
    } else if (id === 'iDip7') {
      setModalImage(imageDiplom7);
    } else if (id === 'iDip8') {
      setModalImage(imageDiplom8);
    } else if (id === 'iDip9') {
      setModalImage(imageDiplom9);
    }
  }
  const showModalFormWindow = () => {

    setModalFormWindow(true);
  }
  const showThanksModalWindow = () => {
    setModalFormWindow(false);
    setThanksModalWindow(true);
  }
  const closeModalFormWindow = () => {
    setModalFormWindow(false);
  }
  const closeModalImage = () => {
    setModalImageWindow(false);
  }
  const closeThanksModalWindow = () => {
    setThanksModalWindow(false);
  }
  return (
    <div className='main-container'>
      <Helmet>
        <meta name="description" content="Косультации психолога в Минске и Республике Беларусь. Оказание психологической помощи в вопросах развития детей и детско-родительских отношений. Психолог онлайн консультация. +375 (44) 793-53-68." />
        <meta name='keywords' content='психолог, детский психолог, психолог учащимся, психологичская помощь, высокочувствительный ребенок, детская психология, консультация, консультация психолога, психологическая диагностика, ответы на вопросы, психолог минск, психолог беларусь' />
        <title>Мария Бурибо психолог</title>
      </Helmet>
      <Menu />
      <Header />
      <main>
        <About showModalImage={showModalImage} showModalFormWindow={showModalFormWindow} />
        <PaymentPage />
        <FAQPage showModalFormWindow={showModalFormWindow} />
        <Contacts showThanksModalWindow={showThanksModalWindow} />
      </main>
      <Footer />
      {modalImageWindow ? <ModalImageWindow modalImage={modalImage} closeModalImage={closeModalImage} /> : null}
      {modalFormWindow ? <ModalFormWindow closeModalFormWindow={closeModalFormWindow} showThanksModalWindow={showThanksModalWindow} /> : null}
      {thanksModalWindow ? <ThanksModalWindow closeThanksModalWindow={closeThanksModalWindow} /> : null}
    </div>
  );
}

export default App;
