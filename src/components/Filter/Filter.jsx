import { useDispatch, useSelector } from 'react-redux';
import s from './Filter.module.css';
import { onChangeFilter } from '../../redux/myFilterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const changeFilter = e => {
    dispatch(onChangeFilter(e.currentTarget.value));
  };

  return (
    <label className={s.label}>
      <span className={s.filterName}> Find contacts by name</span>
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
};

export default Filter;
