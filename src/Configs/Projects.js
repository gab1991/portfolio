import MeteoraVideo from '../Assets/Video/Meteora.webm';
import RetroGameVideo from '../Assets/Video/Retro Games Colleсtion.webm';
import resumeRus from '../Assets/Resume/resume_rus.pdf';
import resumeEng from '../Assets/Resume/resume_eng.pdf';

const personalInfo = {
  email: 'gaber32188@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=100009140675554',
  telegram: 'https://t.me/IgorKornilov',
  github: 'https://github.com/gab1991',
  resume_rus: resumeRus,
  resume_eng: resumeEng,
  about_decription: `I’m a tenacious self-taught programmer, I use continuous iteration to
  produce results quickly and continuously improve products. I find my
  passion in learning and overcoming obstacles along the way.`,
};

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    const folderRegex = /\/(.*?)\//;
    const trimExtintionRegex = /(.+?)(\.[^.]*$|$)/;
    const allAfterLastSlashRegex = /([^/]+$)/;

    const folderName = item.match(folderRegex)[1];

    images[folderName] = images[folderName] || {};

    const fileNameWithExtension = item.match(allAfterLastSlashRegex)[0];
    const filenameWithoutExtenstion = fileNameWithExtension.match(
      trimExtintionRegex
    )[1];

    return (images[folderName][filenameWithoutExtenstion] = r(item));
  });
  return images;
}

const projectImgs = importAll(
  require.context(`../Assets/Images/ProjectImages/`, true, /\.(png|jpe?g|svg)$/)
);

const projects = [
  {
    name: 'Meteora-app',
    title: 'METEORA',
    description:
      'This app is built on Socket.io library and supposed to be a Telegram killer. While using this app you should experience an incredible trip to distant planets.',
    technologies: {
      frontEnd: 'React | Socket.io | Redux | SASS',
      backEnd: 'NodeJs | Express | Socket.io | MySql',
    },
    links: {
      frontEndCode: 'https://github.com/gab1991/online-chat',
      backEndCode: 'https://github.com/gab1991/online-chat-server',
      live: 'http://meteora-app.igor-kornilov.com/',
      demo: MeteoraVideo,
    },
  },
  {
    name: 'Retro-game-app',
    title: 'RETRO GAME COLLECTION',
    description:
      'App is focused on helping retro game geeks to find new lots on ebay and maintain their collection. Pure nostalgia included.',
    technologies: {
      frontEnd: 'React | Redux | SASS',
      backEnd: 'NodeJs | Express | MondoDB',
    },
    links: {
      frontEndCode: 'https://github.com/gab1991/retro-game-collection-app',
      backEndCode:
        'https://github.com/gab1991/server-retro-game-collection-app',
      live: 'http://retro-game-app.igor-kornilov.com/',
      demo: RetroGameVideo,
    },
  },
];

projects.forEach((project) => {
  project.images = projectImgs[project.name];
}, []);

export { projects, personalInfo };
