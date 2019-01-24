import React from 'react';

let UserInfo = ({ user, logout }) => {
    return (
        <li className="nav-item dropdown ml-auto">
          <a id="userInfo" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">
              <img src="img/avatar-6.jpg" alt={user.name} style={{ maxWidth: '2.5rem' }} className="img-fluid rounded-circle shadow" />
          </a>
          <div aria-labelledby="userInfo" className="dropdown-menu"><a href="#" className="dropdown-item"><strong className="d-block text-uppercase headings-font-family">{user.name}</strong><small>{user.email}</small></a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">Settings</a>
            <a href="#" className="dropdown-item">Activity log</a>
            <div className="dropdown-divider"></div>
            <a href="#" onClick={logout} className="dropdown-item">Logout</a>
          </div>
        </li>
    );
}

export default UserInfo;
