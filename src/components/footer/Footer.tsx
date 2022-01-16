import { ButtonLink } from 'components/ui/buttonLink';
import { SVG } from 'components/ui/svg';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import * as styles from './Footer.module.scss';

export const footerQuery = graphql`
  {
    site {
      siteMetadata {
        personal {
          email
          facebook
          telegram
          github
          linkedIn
        }
      }
    }
  }
`;

interface IPersonal {
  email: string;
  facebook: string;
  telegram: string;
  github: string;
  linkedIn: string;
}

export function Footer() {
  const queryResult = useStaticQuery(footerQuery);
  const personal = queryResult.site.siteMetadata.personal as IPersonal;

  const footerLinks = [
    {
      txtContent: 'LINKEDIN',
      href: personal.linkedIn,
    },
    {
      txtContent: 'TELEGRAM',
      href: personal.telegram,
    },
    {
      txtContent: 'GITHUB',
      href: personal.github,
    },
  ];

  console.log(personal);

  return (
    <footer className={styles.Footer} id={'contacts'}>
      <ButtonLink href="mailto:someone@yoursite.com" className={styles.Btn}>
        <SVG.Email className={styles.emailIcon} />
        GET IN TOUCH
      </ButtonLink>
      <ul className={styles.ContacList}>
        {footerLinks.map((link) => (
          <li key={link.txtContent}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.txtContent}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
