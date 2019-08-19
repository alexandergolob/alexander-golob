import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { kebabCase, map, groupBy, filter } from 'lodash';

import { media } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import InternalLink from '../components/InternalLink';

const Heading = styled.h1`
  margin: 0 auto 1em;
  width: 90%;
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 6px;
  text-align: center;
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 2.5em;

  ${media.tablet`font-size: 2em;`}
  ${media.mobile`font-size: 1.5em;`}
`;

const TagsContainer = styled.div`
  border: ${props => props.theme.misc.frameBorder};
  background: ${props => props.theme.colors.offLight};
  padding: 15px 20px 60px;
  font-family: ${props => props.theme.fonts.serif};
  font-size: 2em;

  ${media.tablet`font-size: 1.5em;`}
  ${media.mobile`font-size: 1.25em;`}
`;

const FilterInput = styled.input`
  margin: auto;
  width: 100%;
  max-width: 225px;
  padding: 5px 10px;
  border: 2px solid #888;
  display: block;
  text-align: center;
  font: inherit;
  font-size: 0.8em;
`;

const Tags = styled.ul`
  list-style-type: none;
`;

const Category = styled.li`
  margin-bottom: 0.25em;
  :last-of-type {
    margin-bottom: 0;
  }
  display: flex;
  flex-wrap: wrap;
`;

const Letter = styled.div`
  position: relative;
  margin-bottom: 5px;
  width: 100%;
  font-weight: 600;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    bottom: -5px;
    height: 3px;
    border-radius: 4px;
    background: ${props => props.theme.colors.dark};
  }
`;

const Tag = styled(InternalLink)`
  margin: 0.5em 1em 0 0;
  border: 2px solid #888;
  background: ${props => props.theme.colors.inputBackground};
  padding: 4px 8px;
  font-size: 0.8em;
`;

export const Template = ({ title, description, ogImage, tags }) => {
  const [filterValue, setFilterValue] = React.useState('');

  const filteredTags =
    filterValue === ''
      ? tags
      : filter(tags, tag =>
          tag.fieldValue.toLowerCase().includes(filterValue.toLowerCase())
        );

  const tagsByBeginningLetter = map(
    groupBy(filteredTags, ({ fieldValue }) => fieldValue[0].toLowerCase()),
    tags => ({ beginningLetter: tags[0].fieldValue[0].toUpperCase(), tags })
  );

  return (
    <Layout head={{ title, description, ogImage }}>
      <Heading>Tags</Heading>
      <TagsContainer>
        <FilterInput
          value={filterValue}
          onChange={e => setFilterValue(e.target.value)}
          placeholder='type to filter...'
        />

        <Tags>
          {map(tagsByBeginningLetter, ({ beginningLetter, tags }) => (
            <Category key={beginningLetter}>
              <Letter>{beginningLetter}</Letter>
              {map(tags, ({ fieldValue, totalCount }) => (
                <Tag key={fieldValue} to={`/tags/${kebabCase(fieldValue)}`}>
                  {fieldValue} ({totalCount})
                </Tag>
              ))}
            </Category>
          ))}
        </Tags>
      </TagsContainer>
    </Layout>
  );
};

export default ({ data: { seo, tags } }) => (
  <Template
    {...seo.frontmatter}
    ogImage={
      seo.frontmatter.ogImage &&
      seo.frontmatter.ogImage.childImageSharp.fluid.src
    }
    tags={tags.group}
  />
);

export const query = graphql`
  query($id: String!) {
    seo: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        ogImage {
          childImageSharp {
            fluid(maxWidth: 250, maxHeight: 250) {
              src
            }
          }
        }
      }
    }
    tags: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
