import React from 'react';
import { Card, Container } from 'react-bootstrap';

export const ImageInner = ({ title, bg }) => {
  return (
    <div className={bg}>
      <Container>
        <Card>
          <Card.Body className="d-flex justify-content-center align-items-center">
            <h1 className="text-white text-center mt-5 pb-4">
              <b>{title}</b>
            </h1>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
