import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import InternalLink from '../components/InternalLink';

const Heading = styled.h1`
  margin: 0 auto 1em;
  width: 90%;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 10px;
  text-align: center;
  font-size: 1.5em;

  ${media.tablet`font-size: 1.25em;`}
  ${media.mobile`width: 100%; font-size: 1.15em;`}
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

  ${media.tablet`display: block;`}
`;

const Categories = styled.div`
  grid-area: 1 / 1 / span 1 / span 1;

  justify-self: start;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  display: inline-block;
  padding: 5px 20px;
  font-family: ${props => props.theme.fonts.serif};

  font-size: 0.9em;

  ${media.tablet`
    margin-bottom: 1em;
    width: 100%;
    text-align: center;
    font-size: 1em;
  `}
`;

const Category = styled(InternalLink)`
  font-weight: 600;
`;

const Details = styled.div`
  grid-area: 1 / 2 / span 2 / span 1;

  order: 1;

  /* align-self: start; */
  /* align-self: end; */

  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 10px 20px;
  font-family: ${props => props.theme.fonts.serif};

  ${media.tablet`margin-bottom: 1em;`}
`;

const Detail = styled.div`
  display: flex;
`;

const Attribute = styled.div`
  font-weight: 600;
  width: 100px;
`;

const Value = styled.div`
  flex: 1;
`;

const Description = styled.div`
  grid-column: 2 / span 1;
  grid-row-start: 3;
  grid-row-end: span 1;

  align-self: start;

  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 10px 20px;

  ${media.tablet`margin-bottom: 1em;`}
`;

const DescriptionHeading = styled.h2`
  margin-bottom: 0.5em;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 1em;
`;

const DescriptionContent = styled.div`
  p {
    margin-bottom: 1em;
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const firstImageHeight = 450;

const FirstImage = styled(GatsbyImage)`
  grid-area: 2 / 1 / span 2 / span 1;

  /* height: ${firstImageHeight}px; */
  max-height: ${firstImageHeight}px;

  ${media.tablet`margin-bottom: 1em;`}
  ${media.mobile`height: 250px;`}
`;

const imageHeight = 350;

const Image = styled(GatsbyImage)`
  height: ${imageHeight}px;

  ${media.tablet`margin-bottom: 1em; :last-of-type { margin-bottom: 0; }`}
  ${media.mobile`height: 200px;`}
`;

export const Template = ({
  title,
  details,
  description,
  category,
  subcategories,
  firstImage,
  images
}) => {
  const containerRef = React.useRef();
  const categoriesRef = React.useRef();
  const detailsRef = React.useRef();
  const descriptionRef = React.useRef();

  React.useLayoutEffect(() => {
    const rowGap = Number(
      getComputedStyle(containerRef.current).gridRowGap.slice(0, -2)
    );

    const detailsHeight = detailsRef.current.offsetHeight;
    const descriptionHeight = descriptionRef.current.offsetHeight;
    const categoriesHeight = categoriesRef.current.offsetHeight;

    const availableSpace =
      detailsHeight +
      rowGap +
      descriptionHeight -
      (categoriesHeight + rowGap + firstImageHeight);

    const imagesToSpan = Math.ceil(availableSpace / (imageHeight + rowGap));

    console.log({ imagesToSpan, availableSpace, firstImageHeight });

    // containerRef.current.style.gridTemplateRows = `auto ${detailsRef.current
    //   .offsetHeight -
    //   (categoriesRef.current.offsetHeight + rowGap)}px`;

    // descriptionRef.current.style.gridRowEnd = `span ${imagesToSpan + 1}`;
  });

  return (
    <Layout>
      <Heading>{title}</Heading>
      <Container ref={containerRef}>
        <Categories ref={categoriesRef}>
          <Category>{category}</Category>
          {subcategories.map((subcategory, i) => (
            <>
              {' - '}
              <InternalLink key={i}>{subcategory}</InternalLink>
            </>
          ))}
        </Categories>
        <FirstImage fluid={firstImage} alt='' />
        <Details ref={detailsRef}>
          {details.map(({ attribute, value }, i) => (
            <Detail key={i}>
              <Attribute>{attribute}</Attribute>
              <Value>{value}</Value>
            </Detail>
          ))}
        </Details>

        <Description ref={descriptionRef}>
          <DescriptionHeading>About: </DescriptionHeading>
          <DescriptionContent
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Description>
        {images.map((image, i) => (
          <Image key={i} fluid={image} alt='' />
        ))}
      </Container>
    </Layout>
  );
};

export default ({ data }) => (
  <Template
    {...data.markdownRemark.frontmatter}
    {...data.markdownRemark.fields}
    firstImage={data.markdownRemark.frontmatter.images[0].childImageSharp.fluid}
    images={data.markdownRemark.frontmatter.images
      .slice(1)
      .map(image => image.childImageSharp.fluid)}
  />
);

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        details {
          attribute
          value
        }
        category
        subcategories
        images {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        description
      }
    }
  }
`;
