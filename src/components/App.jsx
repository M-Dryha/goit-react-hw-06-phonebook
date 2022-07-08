// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ListContacts from './ListContacts';
import Filter from './Filter';
// import useLocalStorage from '../hooks/useLocalStorage';
import { addContacts, onChangeFilter } from '../redux/store';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const forSubmitHandler = ({ name, number }) => {
    const nameContact = contacts.find(
      c => c.name.toLowerCase() === name.toLowerCase()
    );
    if (nameContact) {
      alert(`${name} is already in contact`);

      // const notify = () => toast.error('Lorem ipsum dolor');
      return;
    }
    dispatch(
      addContacts({
        id: nanoid(),
        name,
        number,
      })
    );
  };

  const changeFilter = e => {
    dispatch(onChangeFilter(e.currentTarget.value));
  };

  return (
    <section className="section">
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={forSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ListContacts />
      </div>
      {/* <ToastContainer /> */}
    </section>
  );
};
