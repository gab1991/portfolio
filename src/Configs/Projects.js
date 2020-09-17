function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    const folderRegex = /(?<=\/)[^\/]*(?=\/[^\/]*$)/;
    const trimExtintionRegex = /(.+?)(\.[^.]*$|$)/;
    const allAfterLastSlashRegex = /([^\/]+$)/;

    const folderName = item.match(folderRegex)[0];
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
    name: 'Retro-game-app',
    title: 'RETRO GAME COLLECTION',
    description:
      'App is focused on helping retro game geeks to find new lots on ebay and maintain their collection. Pure nostalgia included.',
    technologies: {
      frontEnd: 'React | Redux | SASS',
      backEnd: 'NodeJs | Express | MondoDB',
    },
    links: {
      frontEndCode: '#',
      backEndCode: '#',
      live: '#',
      demo: '#',
    },
  },
];

projects.forEach((project) => {
  project.images = projectImgs[project.name];
}, []);

export { projects };
