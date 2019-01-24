import React from 'react';

let Notifications = () => {
    return (
        <li className="nav-item dropdown mr-3">
          <a id="notifications" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle text-gray-400 px-1"><i className="fa fa-bell"></i><span className="notification-icon"></span></a>
          <div aria-labelledby="notifications" className="dropdown-menu"><a href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter"></i></div>
                <div className="text ml-2">
                  <p className="mb-0">You have 2 followers</p>
                </div>
              </div></a><a href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <div className="icon icon-sm bg-green text-white"><i className="fas fa-envelope"></i></div>
                <div className="text ml-2">
                  <p className="mb-0">You have 6 new messages</p>
                </div>
              </div></a><a href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <div className="icon icon-sm bg-blue text-white"><i className="fas fa-upload"></i></div>
                <div className="text ml-2">
                  <p className="mb-0">Server rebooted</p>
                </div>
              </div></a><a href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter"></i></div>
                <div className="text ml-2">
                  <p className="mb-0">You have 2 followers</p>
                </div>
              </div></a>
            <div className="dropdown-divider"></div><a href="#" className="dropdown-item text-center"><small className="font-weight-bold headings-font-family text-uppercase">View all notifications</small></a>
          </div>
        </li>
    );
}

export default Notifications;
