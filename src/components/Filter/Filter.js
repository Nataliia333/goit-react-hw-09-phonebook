import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contacts/contacts-actions';

export default function Filter() {
  const dispatch = useDispatch();
  const onChange = event => dispatch(updateFilter(event.target.value));
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        id="find"
        placeholder="Enter name for Search"
      ></input>
    </div>
  );
}
