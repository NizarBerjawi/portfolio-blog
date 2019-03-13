import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, toggleSidebar, children }) => (
  <header className="header">
    <nav className="navbar navbar-expand-lg px-4 py-2 bg-white shadow">

      <button
        className="btn btn-link sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead"
        onClick={toggleSidebar}
      >
        <i className="fas fa-align-left" />
      </button>

      <a href="/" className="navbar-brand font-weight-bold text-uppercase text-base">{ title }</a>

      <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">
        {children}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

Header.defaultProps = {
  children: [],
};

export default Header;
