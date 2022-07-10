import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ListContacts from './ListContacts';
import Filter from './Filter';

export const App = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ListContacts />
      </div>
      <ToastContainer />
    </section>
  );
};
