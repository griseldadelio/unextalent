import React from 'react';
import { Layout, Main, VideoInner, CardImage, AboutUs } from '../../components';
import './home.css';

export const Home = () => {
  return (
    <>
      <Layout>
        <div style={{ overflowY: 'scroll' }} id="home"></div>
        <VideoInner />
        <Main>
          <CardImage />
          <AboutUs />
        </Main>
      </Layout>
    </>
  );
};
