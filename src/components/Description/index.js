import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

export const Description = ({
  title1,
  text1,
  title2,
  text2,
  title3,
  text3,
}) => {
  return (
    <Container>
      <Row className="p-5">
        <Col>
          <h1 className="m-4">{title1}</h1>
          <h5>{text1}</h5>
        </Col>
        <Col>
          <h1 className="m-4">{title2}</h1>
          <h5>{text2}</h5>
        </Col>
        <Col>
          <h1 className="m-4">{title3}</h1>
          <h5>{text3}</h5>
        </Col>
      </Row>
    </Container>
  );
};
