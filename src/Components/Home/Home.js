import React from 'react';
import Button from '../../Components/UI/Button/Button';
import styles from './Home.module.scss';

export default function Home(props) {
  return (
    <section className={styles.Home}>
      <h1>IGOR KORNILOV</h1>
      <h2>FRONT END FOCUSED WITH FULL STACK EXPERIENCE</h2>
      <Button txtContent={'CHECK MY WORK'} />
    </section>
  );
}
