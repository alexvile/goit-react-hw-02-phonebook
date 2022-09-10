import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </List>
  );
};
export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onDeleteContact: PropTypes.func.isRequired,
};
