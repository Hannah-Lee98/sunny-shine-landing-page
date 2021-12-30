import { NextPage } from 'next';
import HeadPage from '../../components/head-page ';
import React from 'react';
import Nav from '../../components/navbar';
import {
  EmptyPageContainer,
  PageContainer,
} from '../../components/page-container-styled';

const About: NextPage = () => {
  return (
    <PageContainer>
      <EmptyPageContainer>
        <Nav />
        <HeadPage title={'About'} />
        <div className={'content'}>About</div>
      </EmptyPageContainer>
    </PageContainer>
  );
};

export default About;
