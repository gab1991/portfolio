import { SVG } from 'components/ui/svg';

export const tech = {
  webpack: { Icon: SVG.Webpack, IconMono: SVG.WebpackMono },
  sass: { Icon: SVG.Sass, IconMono: SVG.SassMono },
  reudx: { Icon: SVG.Redux, IconMono: SVG.ReduxMono },
  css: { Icon: SVG.CSS, IconMono: SVG.CSSMono },
  react: { Icon: SVG.React, IconMono: SVG.ReactMono },
  js: { Icon: SVG.Js, IconMono: SVG.JsMono },
  ts: { Icon: SVG.Ts, IconMono: SVG.TsMono },
  html: { Icon: SVG.HTMLMono, IconMono: SVG.HTML },
  jest: { Icon: SVG.Jest, IconMono: SVG.JestMono },
  cypress: { Icon: SVG.Cypress, IconMono: SVG.CypressMono },
  vite: { Icon: SVG.Vite, IconMono: SVG.ViteMono },
  mobx: { Icon: SVG.Mobx, IconMono: SVG.MobxMono },
  socketio: { Icon: SVG.SocketIO, IconMono: SVG.SocketIOMono },
  express: { Icon: SVG.Express, IconMono: SVG.ExpressMono },
  nodejs: { Icon: SVG.NodeJs, IconMono: SVG.NodeJsMono },
  docker: { Icon: SVG.Docker, IconMono: SVG.DockerMono },
  nest: { Icon: SVG.Nest, IconMono: SVG.NestMono },
  postgres: { Icon: SVG.Postgres, IconMono: SVG.PostgresMono },
  mongo: { Icon: SVG.Mongo, IconMono: SVG.MongoMono },
} as const;

export type AvailableTechnologies = keyof typeof tech;
