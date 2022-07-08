// import { useSelector } from 'react-redux';
import ContactElem from '../ContactElem';
import s from './listContacts.module.css';

const ListContacts = () => {
  return (
    <ul className={s.list}>
      <ContactElem />
    </ul>
  );
};

export default ListContacts;
