import React from 'react';
import { Layout } from '../../components/Layout';
import { ImageInner } from '../../components/ImageInner';
import { AboutUs } from '../../components/us';
import { Description } from '../../components/Description';
import { useTranslation } from 'react-i18next';

export const Selection = ({ title1, text1, title2, text2, title3, text3 }) => {
  const [t] = useTranslation('global');
  title1 = t('desc.title1');
  title2 = t('desc.title2');
  title3 = t('desc.title3');
  text1 = t('desc.text1');
  text2 = t('desc.text2');
  text3 = t('desc.text3');

  return (
    <Layout>
      <ImageInner />
      <AboutUs />
      <Description
        title2={title1}
        title3={title2}
        title1={title3}
        text1={text1}
        text2={text2}
        text3={text3}
      />
    </Layout>
  );
};
