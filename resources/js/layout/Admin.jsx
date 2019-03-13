import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingIndicator from '../common/loader';
import Notifications from '../common/header/notifications';
import UserInfo from '../common/header/userInfo';
import Header from '../common/header';
import Footer from '../common/footer';
import Sidebar from '../common/sidebar';

import * as Auth from '../modules/auth/service';

class AdminLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: { visible: true },
      loading: true,
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    const loading = false;
    const user = Auth.user();

    if (user) {
      this.setState({ loading, user });
      return;
    }

    Auth.fetchUser()
      .then(res => this.setState({ user: res, loading: false }))
      .catch(
        // handle errors
      );
  }

  handleLogout(e) {
    e.preventDefault();

    Auth.logout()
      .then(() => this.setState({ redirect: '/login' }))
      .catch(
        // handle errors
      );
  }

  toggleSidebar(e) {
    e.preventDefault();

    const { sidebar } = this.state;

    this.setState({
      sidebar: { visible: !sidebar.visible },
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={redirect} />;
    }

    const { loading, user, sidebar } = this.state;
    const { children } = this.props;

    return (
      <LoadingIndicator loading={loading}>
        <Fragment>
          <Header title="Dashobard" toggleSidebar={this.toggleSidebar}>
            <Notifications />
            <UserInfo user={user} logout={this.handleLogout} />
          </Header>

          <div className="d-flex align-items-stretch">
            <Sidebar visible={sidebar.visible} />

            <div className="page-holder w-100 d-flex flex-wrap">
              {children}
              <Footer />
            </div>
          </div>
        </Fragment>
      </LoadingIndicator>
    );
  }
}

AdminLayout.propTypes = {
  children: PropTypes.shape({}),
};

AdminLayout.defaultProps = {
  children: {},
};

export default AdminLayout;
