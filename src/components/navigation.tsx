import React from 'react';
import {Link} from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/assets">
            Assets
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/files">
            Downloads
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/jobs">
            Internal Crew Vacancies
          </Link>
        </li>
      </ul>
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Other</span>
      </h6>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://adam-rms.com"
            target="_blank"
            rel="noreferrer"
          >
            AdamRMS Login
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
