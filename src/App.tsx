import React from 'react';
import './App.scss';

import {Container, Row, Col} from 'react-bootstrap';
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HeaderImage from './components/headerImage';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Assets from './components/assets/assets';
import Jobs from './components/jobs/jobs';
import Files from './components/files/files';

function App() {
  console.log(location.hostname);
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={2} className="sidebar bg-light">
            <div className="sidebar-sticky">
              <div>
                <Link to="/" className="nav-link">
                  <img src="kitten.jpg" alt="Logo" />
                  <h3>test instance name</h3>
                </Link>
              </div>
              <hr />
              <Navigation></Navigation>
            </div>
          </Col>
          <Col className="content">
            <HeaderImage></HeaderImage>
            <div className="content-wrapper">
              <Routes>
                <Route path="/assets" element={<Assets />} />
                <Route path="/assets.php" element={<Navigate to="/assets" />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/jobs.php" element={<Navigate to="/jobs" />} />
                <Route path="/files" element={<Files />} />
                <Route path="/files.php" element={<Navigate to="/files" />} />
                <Route path="/"></Route>
                <Route>404</Route>
              </Routes>
            </div>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    </Router>
  );
}

export default App;
