import type { NextPage } from 'next';
import Nav from '../components/navbar';
import React from 'react';
import HeadPage from '../components/head-page ';
import Main from '../components/pages/main';
import { PageContainer } from '../components/page-container-styled';
import Footer from '../components/footer-section';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Nav />
      <HeadPage title={'Home'} />
      <Main />
      <Footer />
    </PageContainer>
  );
};

export default Home;
