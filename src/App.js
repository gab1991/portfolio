import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Home />
      <Portfolio />
    </div>
  );
}

export default App;
