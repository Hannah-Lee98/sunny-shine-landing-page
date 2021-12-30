import { NextPage } from 'next';
import React from 'react';
import Nav from '../../components/navbar';
import HeadPage from '../../components/head-page ';
import {
  EmptyPageContainer,
  PageContainer,
} from '../../components/page-container-styled';
import Footer from '../../components/footer-section';

const Projects: NextPage = () => {
  return (
    <PageContainer>
      <EmptyPageContainer>
        <Nav />
        <HeadPage title={'About'} />
        <div className={'content'}>Projects</div>
        <Footer />
      </EmptyPageContainer>
    </PageContainer>
  );
};

export default Projects;
