import React, { useState } from 'react';
import useWindowSize from './Utils/CutomHooks/useWinowSize';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Modal from './Components/UI/Modal/Modal';
import styles from './App.module.scss';
import sassVars from './Configs/Variables.scss';

const mobileBreakPointWidth = parseInt(sassVars['breakpoints-mobile']);

function App() {
  const { width } = useWindowSize();
  const isMobile = mobileBreakPointWidth >= width;
  const [showModal, setShowModal] = useState({
    status: false,
    data: {},
  });

  return (
    <div className={styles.App}>
      <Header isMobile={isMobile} />
      <main>
        <Home />
        <Portfolio setShowModal={setShowModal} isMobile={isMobile} />
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
