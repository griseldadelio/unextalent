import React from 'react';
import { Layout } from '../../components/Layout';
import { ImageInner } from '../../components/ImageInner';
import { Description } from '../../components/Description';
import { useTranslation } from 'react-i18next';

export const Evaluation = ({
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
  title = t('evaluation.title');
  title1 = t('evaluation.title1');
  title2 = t('evaluation.title2');
  title3 = t('evaluation.title3');
  text1 = t('evaluation.text1');
  text2 = t('evaluation.text2');
  text3 = t('evaluation.text3');
  bg = 'bg-image-evaluation ';

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
