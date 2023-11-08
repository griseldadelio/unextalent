import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Layout } from '../../components/Layout';
import { ImageInner } from '../../components/ImageInner';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import '../../components/CardImage/cardimage.css';

export const Selection = ({ title, bg }) => {
  const [t] = useTranslation('global');
  title = t('search.title');
  bg = 'bg-image-search ';

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <ImageInner title={title} bg={bg} />
      <Container className="p-5">
        <br />
        <Row className="mt-3" data-aos="fade-right" data-aos-duration="1500">
          <Col>
            <div className="text-justify">
              <h2 className="p-3"> {t('search.title1')}</h2>
              <ul>
                <li data-aos="zoom-in-up" data-aos-delay="450">
                  {t('search.item1')}
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="500">
                  {t('search.item2')}
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="550">
                  {t('search.item3')}
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="600">
                  {t('search.item4')}
                </li>
                <li data-aos="zoom-in-up" data-aos-duration="2000">
                  {t('search.item5')}
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="400">
                  {t('search.item6')}
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="text-justify  ">
              <h2 className="py-3"> {t('search.title2')}</h2>
              <ul>
                <li data-aos="zoom-in-up" data-aos-delay="450">
                  {t('search.item7')}
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="500">
                  {t('search.item8')}
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="550">
                  {t('search.item9')}
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="600">
                  {t('search.item10')}
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="text-justify ">
              <h2 className="p-3"> {t('search.title3')}</h2>
              <ul>
                <li data-aos="zoom-in-up" data-aos-delay="400">
                  {t('search.item11')}
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="450">
                  {t('search.item12')}
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="500">
                  {t('search.item13')}
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="550">
                  {t('search.item14')}
                </li>
                <li data-aos="zoom-in-up" data-aos-delay="600">
                  {t('search.item15')}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
