import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import FrameBox from '../components/FrameBox';

const CV = styled(FrameBox)`
  width: 80%;
  margin: auto;
  padding: 40px 60px;
`;

const CVTitle = styled.div`
  font-weight: 900;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-weight: 900;
`;

const ContactInfo = styled.div`
  margin-bottom: 15px;
`;

const CVSection = styled.div`
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const CVSectionTitle = styled.div`
  font-weight: 900;
  margin-bottom: 2px;
`;

const CVItem = styled.div`
  margin-bottom: 4px;
  &:last-of-type {
    margin-bottom: 0;
  }
  display: flex;
`;

const CVItemDate = styled.div`
  /* background: blue; */
  margin-right: 60px;
`;

const CVItemContent = styled.div`
  /* background: red; */
  flex-grow: 1;
`;

export default () => (
  <Layout>
    <CV>
      <CVTitle>Golob Art</CVTitle>
      <Name>Alexander Golob</Name>
      <ContactInfo>
        President and Artist
        <br />
        Alexander Golob Art @ gmail.com
        <br />
        www.AlexanderGolob.com
        <br />
        instagram and facebook:
        <br />
        @alexandergolobart
        <br />
        +1 617-755-6522
      </ContactInfo>
      <CVSection>
        <CVSectionTitle>Education:</CVSectionTitle>
        <CVItem>
          <CVItemDate>2016</CVItemDate>
          <CVItemContent>
            BFA, College of Fine Arts, Boston University, Boston, MA
          </CVItemContent>
        </CVItem>
      </CVSection>
      <CVSection>
        <CVSectionTitle>Group Exchibitions:</CVSectionTitle>
        <CVItem>
          <CVItemDate>2018</CVItemDate>
          <CVItemContent>
            <i>Tales from the Gut</i>, Post-Cubicle Gallery, Boston, MA
          </CVItemContent>
        </CVItem>
        <CVItem>
          <CVItemDate>2017</CVItemDate>
          <CVItemContent>
            <i>Throught the Looking Glass</i>, Wellesley, MA
            <br />
            <i>Together Boston Festival</i>, Cambridge, MA
            <br />
            <i>theGallery Event Show</i>, Dorchester, MA
          </CVItemContent>
        </CVItem>
        <CVItem>
          <CVItemDate>2016</CVItemDate>
          <CVItemContent>
            <i>Throught the Looking Glass</i>, Wellesley, MA
            <br />
            <i>Together Boston Festival</i>, Cambridge, MA
            <br />
            <i>theGallery Event Show</i>, Dorchester, MA
          </CVItemContent>
        </CVItem>
        <CVItem>
          <CVItemDate>2015</CVItemDate>
          <CVItemContent>
            <i>Insider's Guide to Venezia</i>, Venice, Italy
          </CVItemContent>
        </CVItem>
      </CVSection>
    </CV>
  </Layout>
);
