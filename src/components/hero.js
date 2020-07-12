import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 50% center;
  background-size: cover;
  height: 50vh;
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
  width: 100%;
  margin-top: 0;
  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "sourabh-agarwal-R.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100, maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <ImageBackground Tag="div" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Namaste!! This is Nirmal here ❤️</h1>
        <p>
          Glad to see..<Link to="/about/">Learn more about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
