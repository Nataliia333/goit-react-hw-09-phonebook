import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
// import contactsSelectors from '../../redux/contacts/contacts-selectors';

import styles from './ContactForm.module.css';

export default function ContactForm({ onAdd }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = useCallback(e => {
    setName(e.currentTarget.value);
    setNumber(e.currentTarget.value);
  }, []);

  const onSave = useCallback(
    e => {
      e.preventDefault();

      if (name === '') {
        return alert('Заполни');
      }
      if (number === '') {
        return alert('Заполни');
      }

      dispatch(contactsOperations.addContact({ name, number }));
      onAdd();
      setName('');
      setNumber('');
    },
    [dispatch, name, number, onAdd],
  );

  return (
    <form className={styles.ContactForm}>
      <label>Name</label>
      <input type="text" onChange={onInputChange} id="name"></input>
      <label>Number</label>
      <input type="text" onChange={onInputChange} id="number"></input>
      <button className={styles.ContactButton} type="submit" onClick={onSave}>
        AddContact
      </button>
    </form>
  );
}
