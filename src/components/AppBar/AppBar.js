import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { authSelectors } from '../../redux/auth';

import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.Header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(AppBar);
