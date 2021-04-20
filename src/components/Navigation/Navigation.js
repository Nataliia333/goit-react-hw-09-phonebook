import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.Link}
        activeclassname={styles.ActiveLink}
      >
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={styles.Link}
          activeclassname={styles.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}
// const mapStateToProps = state => ({
//   isLoggedIn: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps, null)(Navigation);
