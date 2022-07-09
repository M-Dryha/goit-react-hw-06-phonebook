import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ListContacts from './ListContacts';
import Filter from './Filter';
import { addContacts } from '../redux/myContactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const forSubmitHandler = ({ name, number }) => {
    const nameContact = contacts.find(
      c => c.name.toLowerCase() === name.toLowerCase()
    );
    if (nameContact) {
      toast.error(`${name} is already in contact`);
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

  return (
    <section className="section">
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={forSubmitHandler} />
        <h2>Contacts</h2>
        <Filter />
        <ListContacts />
      </div>
      <ToastContainer />
    </section>
  );
};
