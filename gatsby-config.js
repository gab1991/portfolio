module.exports = {
  siteMetadata: {
    title: `Igor Kornilov | Front End Engineer`,
    description: `Professional web developer at your service! Excels at TS, JS. React, Redux, Mobx, SPA. Don't hesitate hit me up!`,
    author: `Igor Kornlov gaber32188@gmail.com`,
    keywords: `frontend, front end, fullstack, js, javascript, ts, typescript, css, html, react, redux, sass, webpack, vite, mobx, jest, cypress, express, nodejs, node, nestjs`,
    image: 'assets/images/social_sharing.jpg',
    aboutPage: {
      description:
        'I’m  a tenacious programmer, who enjoy tackling complex task. I use continuous iteration to produce results quickly and continuously improve products. I find my passion in learning and overcoming obstacles along the way.',
      toolkitList: [
        'js',
        'ts',
        'css',
        'html',
        'react',
        'redux',
        'sass',
        'webpack',
        'vite',
        'mobx',
        'jest',
        'cypress',
        'express',
        'nodejs',
        'docker',
        'nest',
        'postgres',
        'mongo',
        'socketio',
      ],
    },
    personal: {
      email: 'gaber32188@gmail.com',
      facebook: 'https://www.facebook.com/profile.php?id=100009140675554',
      telegram: 'https://t.me/IgorKornilov',
      github: 'https://github.com/gab1991',
      linkedIn: `https://www.linkedin.com/in/igor-kornilov-988711151/`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resumes`,
        path: `${__dirname}/assets/resumes`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
          {
            name: `Oswald`,
            file: `https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap`,
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts-with-attributes`,
    //   options: {
    //     fonts: [
    //       `oswald\:400`,
    //       `open sans\:400,600,700`, // you can also specify font weights and styles
    //     ],
    //     display: 'swap',
    //     attributes: {
    //       rel: 'stylesheet preload prefetch',
    //     },
    //   },
    // },
  ],
};
