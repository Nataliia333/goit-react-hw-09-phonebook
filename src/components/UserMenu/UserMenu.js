import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className={styles.Container}>
      <img src={defaultAvatar} alt="" width="32" className={styles.Avatar} />
      <span className={styles.Name}>Welcome, {name}</span>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };
