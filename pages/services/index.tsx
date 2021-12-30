import { NextPage } from 'next';
import Nav from '../../components/navbar';
import HeadPage from '../../components/head-page ';
import React from 'react';
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
        <div className={'content'}>Services</div>
      </EmptyPageContainer>
    </PageContainer>
  );
};

export default About;
