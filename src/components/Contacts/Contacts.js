import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export default function Contacts({ contacts }) {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: <span>{number}</span>
            </p>

            <button onClick={() => dispatch(deleteContact(id))} type="button">
              delete contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
