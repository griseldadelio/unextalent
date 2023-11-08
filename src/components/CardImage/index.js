import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import './cardimage.css';

export const CardImage = () => {
  const [t] = useTranslation('global');

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container id="servicios" className="p-5">
      <br />
      <Row className="mt-3" data-aos="fade-right" data-aos-duration="1500">
        <Col className="imgcard2 col col-sm-4" sm={4} />
        <Col className="col-sm-8 p-2" sm={8}>
          <h1 className="text-center">{t('cardImg.title')}</h1>
          <br />
          <Row>
            <Col>
              <div className="text-justify px-3 lista-azul">
                <ul>
                  <li data-aos="zoom-in-up" data-aos-delay="400">
                    {t('cardImg.item11')}
                  </li>
                  <li data-aos="zoom-in-up" data-aos-delay="450">
                    {t('cardImg.item1')}
                  </li>
                  <li data-aos="zoom-in-up" data-aos-delay="500">
                    {t('cardImg.item2')}
                  </li>
                  <li data-aos="zoom-in-up" data-aos-delay="550">
                    {t('cardImg.item3')}
                  </li>
                  <li data-aos="zoom-in-up" data-aos-delay="600">
                    {t('cardImg.item4')}
                  </li>
                  <li data-aos="zoom-in-up" data-aos-duration="2000">
                    {t('cardImg.item5')}
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="text-justify px-3 lista-azul">
                <ul>
                  <li data-aos="zoom-in-up" data-aos-delay="400">
                    {t('cardImg.item6')}
                  </li>
                  <li data-aos="zoom-in-up" data-aos-delay="450">
                    {t('cardImg.item7')}
                  </li>
                  <li data-aos="zoom-in-up" data-aos-delay="500">
                    {t('cardImg.item8')}
                  </li>
                  <li data-aos="zoom-in-up" data-aos-delay="550">
                    {t('cardImg.item9')}
                  </li>
                  <li data-aos="zoom-in-up" data-aos-delay="600">
                    {t('cardImg.item10')}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
