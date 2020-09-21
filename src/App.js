import React, { useState } from 'react';
// import { ShowModal } from './Context/Context';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Modal from './Components/UI/Modal/Modal';
import styles from './App.module.scss';

function App() {
  const [showModal, setShowModal] = useState({
    status: false,
    data: {},
  });

  console.log(showModal);

  return (
    <div className={styles.App}>
      <Header />
      <main>
        <Home />
        <Portfolio setShowModal={setShowModal} />
        <About />
      </main>
      <Footer />
      {showModal.status && (
        <Modal
          {...showModal}
          closeModal={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
