import { NextPage } from 'next';
import HeadPage from '../../components/head-page ';
import React from 'react';
import Nav from '../../components/navbar';
import {
  EmptyPageContainer,
  PageContainer,
} from '../../components/page-container-styled';
import Footer from '../../components/footer-section';

const About: NextPage = () => {
  return (
    <PageContainer>
      <EmptyPageContainer>
        <Nav />
        <HeadPage title={'About'} />
        <div className={'content'}>About</div>
        <Footer />
      </EmptyPageContainer>
    </PageContainer>
  );
};

export default About;
