import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/myContactsSlice';
import s from './listContacts.module.css';

const ListContacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const visibleContact = contacts.filter(f =>
    f.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <ul className={s.list}>
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
    </ul>
  );
};

export default ListContacts;
