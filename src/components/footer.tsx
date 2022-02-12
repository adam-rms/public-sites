import React from 'react';
import {Row, Col} from 'react-bootstrap';
const Footer: React.FC = () => {
  return (
    <Row className="footer bg-light">
      <Col className="footer-left" xs={12} sm={12} md={12} lg={6}>
        Fotter TExt OR Proudly powered by{' '}
        <a href="https://adam-rms.com">AdamRMS</a>
      </Col>
      <Col className="footer-right" xs={12} sm={12} md={12} lg={6}>
        {'v' + process.env.REACT_APP_VERSION + '. '}
        <strong>
          &copy;2018-{new Date().getFullYear() + ' '}
          <a href="https://bithell.studio">Bithell Studios Ltd</a>.
        </strong>{' '}
        All rights reserved.
      </Col>
    </Row>
  );
};

export default Footer;
