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
    links,
    className,
    isInverted,
    setShowModal,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const sliderContainerRef = useRef();

  useEffect(() => {
    toggleSlider(sliderContainerRef.current);
  }, [isOpen]);

  const onClickHandler = (e) => {
    setIsOpen((prev) => !prev);
  };

  const modalHandler = (type) => {
    switch (type) {
      case 'demo video': {
        break;
      }
      case 'code links': {
        break;
      }
      default: {
      }
    }

    const modalContent = {
      heading: 'Pick one to learn more',
      type: type,
      links: [
        {
          txtContent: 'Front End Code',
          url: links.frontEndCode,
          Icon: GitHubSvg,
        },
        ,
        {
          txtContent: 'Back End Code',
          url: links.backEndCode,
          Icon: GitHubSvg,
        },
      ],
      demoVideoLink: links.demo,
    };

    setShowModal({ status: true, data: { ...modalContent } });
  };

  const goToLIve = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className={`${styles.ProjectCard} ${className}`}>
      <div className={styles.ScreenShotWrapper}>
        <img src={images.mobile} alt="mobile" className={styles.PreviewImg} />
      </div>
      <h3 className={styles.TitleHeading}>{title}</h3>
      <div ref={sliderContainerRef} className={`${styles.ExpandableContainer}`}>
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
            onClick={() => modalHandler('code links')}
          />
          <Button
            gradient
            Icon={WorldSvg}
            txtContent={'LIVE'}
            className={styles.Btn}
            onClick={() => {
              goToLIve(links.live);
            }}
          />
          <Button
            gradient
            Icon={DemoSvg}
            txtContent={'DEMO'}
            className={styles.Btn}
            onClick={() => {
              modalHandler('demo video');
            }}
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
