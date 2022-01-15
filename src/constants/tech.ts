import { SVG } from 'components/ui/svg';

export const tech = {
  webpack: { Icon: SVG.Webpack, IconMono: SVG.WebpackMono, fullname: 'Webpack' },
  sass: { Icon: SVG.Sass, IconMono: SVG.SassMono, fullname: 'Sass' },
  redux: { Icon: SVG.Redux, IconMono: SVG.ReduxMono, fullname: 'Redux' },
  css: { Icon: SVG.CSS, IconMono: SVG.CSSMono, fullname: 'CSS' },
  react: { Icon: SVG.React, IconMono: SVG.ReactMono, fullname: 'React' },
  js: { Icon: SVG.Js, IconMono: SVG.JsMono, fullname: 'JS' },
  ts: { Icon: SVG.Ts, IconMono: SVG.TsMono, fullname: 'TS' },
  html: { Icon: SVG.HTMLMono, IconMono: SVG.HTML, fullname: 'HTML' },
  jest: { Icon: SVG.Jest, IconMono: SVG.JestMono, fullname: 'Jest' },
  cypress: { Icon: SVG.Cypress, IconMono: SVG.CypressMono, fullname: 'Cypress' },
  vite: { Icon: SVG.Vite, IconMono: SVG.ViteMono, fullname: 'Vite' },
  mobx: { Icon: SVG.Mobx, IconMono: SVG.MobxMono, fullname: 'Mobx' },
  socketio: { Icon: SVG.SocketIO, IconMono: SVG.SocketIOMono, fullname: 'Soket io' },
  express: { Icon: SVG.Express, IconMono: SVG.ExpressMono, fullname: 'Epress' },
  nodejs: { Icon: SVG.NodeJs, IconMono: SVG.NodeJsMono, fullname: 'NodeJs' },
  docker: { Icon: SVG.Docker, IconMono: SVG.DockerMono, fullname: 'Docker' },
  nest: { Icon: SVG.Nest, IconMono: SVG.NestMono, fullname: 'NestJS' },
  postgres: { Icon: SVG.Postgres, IconMono: SVG.PostgresMono, fullname: 'PostgreSQL' },
  mongo: { Icon: SVG.Mongo, IconMono: SVG.MongoMono, fullname: 'Mongo DB' },
} as const;

export type AvailableTechnologies = keyof typeof tech;
