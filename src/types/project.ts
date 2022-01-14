import { AvailableTechnologies } from 'constants/tech';

export interface IProject {
  name: string;
  title: string;
  description: string;
  technologies: {
    frontEnd: AvailableTechnologies[];
    backEnd: AvailableTechnologies[];
  };
  links: {
    frontEndCode: string;
    backEndCode: string;
    live: string;
    demo: string;
  };
}
