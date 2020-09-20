import React, { useState, useRef, useEffect } from 'react';
import WorldSvg from '../../UI/SvgIcons/World';
import DemoSvg from '../../UI/SvgIcons/Demo';
import GitHubSvg from '../../UI/SvgIcons/GitHub';
import toggleSlider from '../../../Utils/expandSection';
import Button from '../../UI/Button/Button';

import styles from './ProjectCardMobile.module.scss';

export default function ProjectCardMobile(props) {
  const {
    images,
    title,
    description,
    technologies,
    className,
    isInverted,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const sliderContainerRef = useRef();

  useEffect(() => {
    toggleSlider(sliderContainerRef.current);
  }, [isOpen]);

  const onClickHandler = (e) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${styles.ProjectCard} ${className}`}>
      <div className={styles.ScreenShotWrapper}>
        <img src={images.mobile} alt="mobile" className={styles.PreviewImg} />
      </div>
      <h3 className={styles.TitleHeading}>{title}</h3>
      <div
        ref={sliderContainerRef}
        className={`${styles.ExpandableContainer}`}
        // data-collapsed="first-render"
      >
        <p className={styles.Description}>{description}</p>
        <h4 className={styles.TechHeading}>TECHNOLOGIES</h4>
        <ul>
          <li>
            <span className={styles.TechAreaName}>{`Front End : `}</span>
            {technologies.frontEnd}
          </li>
          <li>
            <span className={styles.TechAreaName}>{`Back End : `}</span>
            {technologies.backEnd}
          </li>
        </ul>
        <div className={styles.BtnSection}>
          <Button
            gradient
            Icon={GitHubSvg}
            txtContent={'CODE'}
            className={styles.Btn}
          />
          <Button
            gradient
            Icon={WorldSvg}
            txtContent={'LIVE'}
            className={styles.Btn}
          />
          <Button
            gradient
            Icon={DemoSvg}
            txtContent={'DEMO'}
            className={styles.Btn}
          />
        </div>
      </div>
      <Button
        txtContent={isOpen ? 'CLOSE' : 'LEARN MORE'}
        className={styles.MainBtn}
        onClick={onClickHandler}
      />
    </div>
  );
}
