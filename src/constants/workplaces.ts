import { SVG } from 'components/ui/svg';

export const workplaces = [
  {
    name: 'Giosg',
    svg: SVG.Giosg,
    title: 'Software Engineer',
    period: 'April 2022 - Present',
    bulletPoints: [
      'Lead fronted developer across three different projects.',
      'Company-wide design system architect and maintainer.',
      'Working on completely green field projects as well as developing and maintaining legacy projects.',
      'Launched e2e testing as well as component testing.',
    ],
  },
  {
    name: 'Oprosso',
    svg: SVG.Oprosso,
    title: 'Software Engineer',
    period: 'October 2020 - March 2022',
    bulletPoints: [
      'Working on one of the biggest customer experience platform in Russia.',
      'Wrote a few new modules to the platform',
      'Introduced async routing and async library loading  to improve the  speed of the app.',
      'Migrated the main oprosso app to a new bundler which improved greatly the speed of development',
      'Performed code reviews and defined vision and directions of the project.',
    ],
  },
  {
    name: 'Selft-employed',
    svg: SVG.SelfEmployed,
    title: 'Software Engineer',
    period: 'February 2020 - September 2020',
    bulletPoints: [
      'Got invited to work in a small freelance studio.',
      'Working on various projects mainly on React, JQuery, CSS, HTML, JS.',
      'Did most of the markup and landing pages.',
    ],
  },
  {
    name: 'Rostelecom',
    svg: SVG.Rostelecom,
    title: 'QA Automation Engineer',
    period: 'February 2018 - February 2020',
    bulletPoints: [
      'Performed automation testing on using TestComplete, Selenium, SQL.',
      'Achieved over 90% test coverage.',
      'Wrote test plans, managed regression lists and acceptance testing.',
      'Participated in writing a custom framework for TestComplete',
    ],
  },
  {
    name: 'Ulmart',
    svg: SVG.Ulmart,
    title: 'SAP ERP Support Technician',
    period: 'September 2013 - December 2017',
    bulletPoints: [
      'Working as a second line support technician for the company’s main ERP system.',
      'Tested new features and supported new releases along with developers.',
      'Gathered data and created reports about most common problems.',
      'For the most part worked the crucial warehouse module and transaction.',
    ],
  },
] as const satisfies Workplace[];

export interface Workplace {
  name: string;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  period: string;
  bulletPoints: string[];
}
