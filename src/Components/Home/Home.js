import React, { useState, useEffect } from 'react';
import Button from '../../Components/UI/Button/Button';
import sassVars from '../../Configs/Variables.scss';
import useWindowSize from '../../Utils/CutomHooks/useWinowSize';
import styles from './Home.module.scss';

const mobileBreakPointWidth = parseInt(sassVars['breakpoints-mobile']);

export default function Home(props) {
  const [offset, setOffSet] = useState(0);
  const { width } = useWindowSize();
  const isMobile = mobileBreakPointWidth >= width;

  const goToPortfolio = () => {
    window.location.href = '#portfolio';
  };

  const parralaxShift = () => {
    setOffSet(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', parralaxShift);

    return () => {
      window.removeEventListener('scroll', parralaxShift);
    };
  }, []);

  return (
    <section
      className={styles.Home}
      style={{ backgroundPositionY: offset * 0.5 }}>
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
