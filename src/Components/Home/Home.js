import React from 'react';
import Button from '../../Components/UI/Button/Button';
import sassVars from '../../Configs/Variables.scss';
import useWindowSize from '../../Utils/CutomHooks/useWinowSize';
import styles from './Home.module.scss';

const mobileBreakPointWidth = parseInt(sassVars['breakpoints-mobile']);

export default function Home(props) {
  const { width } = useWindowSize();
  const isMobile = mobileBreakPointWidth >= width;

  const goToPortfolio = () => {
    window.location.href = '#portfolio';
  };

  return (
    <section className={styles.Home}>
      <h1>IGOR KORNILOV</h1>
      <h2>
        {isMobile
          ? 'FRONT END ENGINEER'
          : 'FRONT END FOCUSED WITH FULL STACK EXPERIENCE'}
      </h2>
      <Button
        txtContent={'CHECK MY WORK'}
        className={styles.Btn}
        onClick={goToPortfolio}
      />
    </section>
  );
}
