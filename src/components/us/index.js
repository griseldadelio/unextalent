import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
  const [t] = useTranslation('global');
  return (
    <div id="nosotros">
      <Container>
        <Row className="p-5">
          <h1 className="m-4">{t('us.title')}</h1>
          <Col>
            <h5>{t('us.text1')}</h5>
          </Col>
          <Col>
            <h5>{t('us.text2')}</h5>
          </Col>
          <Col>
            <h5>{t('us.text3')}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
