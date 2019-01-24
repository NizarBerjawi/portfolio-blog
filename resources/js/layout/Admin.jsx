import React from 'react';
import { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

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
      redirect: '',
      sidebar: {
        visible: true
      },
      user: {},
      loading: true
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    const loading = false;
    // Test if the user has been loaded from the database
    let userLoaded = Object.keys(this.state.user).length !== 0;

    if (userLoaded) {
      this.setState({loading});
      return;
    }

    Auth.fetchUser()
        .then(res => {
          const user = res;
          this.setState({user, loading: false});
        })
        .catch((err) => console.log('Error: ', err.text));
  }

  handleLogout(e) {
      e.preventDefault();

      Auth.logout()
          .then(() => this.setState({ redirect: '/login' }) )
          .catch((err) => console.log('Error: ', err.text) );
  }

  toggleSidebar(e) {
    e.preventDefault();

    const { sidebar } = this.state;

    this.setState({
      sidebar: {
        visible: !sidebar.visible
      }
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const { loading, user, sidebar } = this.state;

    return (
      <LoadingIndicator loading={loading}>
        <Fragment>
          <Header title="Dashobard" toggleSidebar={this.toggleSidebar}>
            <Notifications />
            <UserInfo user={user} logout={this.handleLogout}/>
          </Header>

          <div className="d-flex align-items-stretch">
            <Sidebar visible={sidebar.visible}/>

            <div className="page-holder w-100 d-flex flex-wrap">
              {this.props.children}
              <Footer />
            </div>
          </div>
        </Fragment>
      </LoadingIndicator>
    );
  }
}

export default AdminLayout;
