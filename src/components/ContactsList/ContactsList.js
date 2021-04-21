import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import deleteContact from '../../redux/contacts/contacts-operations';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import styles from './ContactsList.module.css';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const value = useSelector(contactsSelectors.getFilter);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const handlerDelete = useCallback(
    e => {
      dispatch(contactsOperations.deleteContact(value));
    },
    [dispatch, value],
  );

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            id={id}
            className={styles.ContactButton}
            type="button"
            onClick={handlerDelete}
          >
            Delete
          </button>
          {isLoadingContacts && <h1>Loading...</h1>}
        </li>
      ))}
    </ul>
  );
}
