import React from 'react';
import { Layout } from '../../components/Layout';
import { ImageInner } from '../../components/ImageInner';
import { Description } from '../../components/Description';
import { useTranslation } from 'react-i18next';

export const Training = ({
  title,
  title1,
  text1,
  title2,
  text2,
  title3,
  text3,
  bg,
}) => {
  const [t] = useTranslation('global');
  title = t('training.title');
  title1 = t('training.title1');
  title2 = t('training.title2');
  title3 = t('training.title3');
  text1 = t('training.text1');
  text2 = t('training.text2');
  text3 = t('training.text3');
  bg = 'bg-image-training ';

  return (
    <Layout>
      <ImageInner title={title} bg={bg} />
      <Description
        title1={title1}
        title2={title2}
        title3={title3}
        text1={text1}
        text2={text2}
        text3={text3}
      />
    </Layout>
  );
};
