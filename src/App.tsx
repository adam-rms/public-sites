import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Row} from 'react-bootstrap';
import {Link, BrowserRouter as Router} from 'react-router-dom';

import './template.css';

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Nav className="col-sm-12 col-md-12 col-lg-2 col-xl-2 bg-light sidebar">
            <div className="sidebar-sticky">
              <div className="logo">
                <Link to="/" className="nav-link">
                  <img src="" className="logo" alt="Logo" />
                  <h3>test instance name</h3>
                </Link>
              </div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/assets.php">
                    Assets
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/files.php">
                    Downloads
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/jobs.php">
                    Internal Crew Vacancies
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/p.php?p={{ page.cmsPages_id }}"
                  >
                    test
                  </a>
                </li>
              </ul>
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Other</span>
                <a className="d-flex align-items-center text-muted" href="#">
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="{{ CONFIG.ROOTURL }}"
                    target="_blank"
                  >
                    AdamRMS Login
                  </a>
                </li>
              </ul>
            </div>
          </Nav>
          <div
            role="main"
            className="col-sm-12 col-md-12 col-lg-10 col-xl-10 p-0"
          >
            <div className="headerImage"></div>
            <div className="px-3 py-0 h-100"></div>
          </div>
          <div className="footer">
            <div className="row">
              <div className="col-sm-12 col-md-6 text-muted" id="footer-left">
                Fotter TExt OR Proudly powered by{' '}
                <a href="https://adam-rms.com">AdamRMS</a>
              </div>
              <div className="col-sm-12 col-md-6 text-muted" id="footer-right">
                <strong>
                  &copy;2018-2022{' '}
                  <a href="https://bithell.studio">Bithell Studios Ltd</a>.
                </strong>{' '}
                All rights reserved.
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
