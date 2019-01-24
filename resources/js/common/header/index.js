import React from 'react';

let Header = ({ title, toggleSidebar, children }) => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg px-4 py-2 bg-white shadow">
        <a href="#" className="sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead" onClick={toggleSidebar}><i className="fas fa-align-left"></i></a>

        <a href="/" className="navbar-brand font-weight-bold text-uppercase text-base">{ title }</a>

        <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">
          {children}
        </ul>
      </nav>
    </header>
  );
}


export default Header;
