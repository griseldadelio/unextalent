import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './image.css';

export const ImageInner = () => {
  const [t] = useTranslation('global');
  return (
    <div className="bg-image-Inner">
      <Container>
        <Card>
          <Card.Body className="d-flex justify-content-center align-items-center">
            <h1 className="text-white text-center mt-5 pb-4">
              <b>{t('search.title')}</b>
            </h1>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
