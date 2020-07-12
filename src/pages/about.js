import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/layout';

export default () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nirmaljain.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 200, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Image
        css={css`
          * {
            margin: 0 auto;
            display: block;
          }
        `}
        fluid={image.sharp.fluid}
        alt="Nirmal Jain"
      ></Image>
      <h1>About me</h1>
      <p>This is my personal website</p>
      <Link to="/">&larr; Lets go back</Link>
    </Layout>
  );
};
