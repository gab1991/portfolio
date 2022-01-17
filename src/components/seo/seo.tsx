import * as React from 'react';

import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const siteMetadataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        keywords
        image
      }
    }
  }
`;

export function Seo() {
  const { site } = useStaticQuery(siteMetadataQuery);
  const { description, title, author, keywords, image } = site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-US',
      }}
      title={title}
      meta={[
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  );
}
