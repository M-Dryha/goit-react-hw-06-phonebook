import { useSelector, useDispatch } from 'react-redux';
import s from './ContactElem.module.css';
import { deleteContacts } from '../../redux/store';

const ContactElem = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const visibleContact = contacts.filter(f =>
    f.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      {visibleContact.map(({ id, name, number }) => (
        <li className={s.itemContact} key={id}>
          <p className={s.contact}>{name}:</p>
          <p className={s.contact}>{number}</p>
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
export default ContactElem;
