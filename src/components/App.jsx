import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, Subtitle } from './App.styled';

class App extends React.Component {
  static defaultProps = {
    initialSettings: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  static propTypes = {
    initialSettings: PropTypes.arrayOf(PropTypes.object.isRequired),
  };

  state = {
    contacts: this.props.initialSettings,
    filter: '',
  };

  pushDataToArr = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  formSubmitHandler = data => {
    //  check the same conatct
    const normalizedName = data.name.toLowerCase();
    const isTheSame = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (isTheSame) {
      alert(`${isTheSame.name} is already in contacts`);
      return;
    }

    data.id = nanoid();
    this.pushDataToArr(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = toDeleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== toDeleteId),
    }));
  };
  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={this.formSubmitHandler} />

        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export { App };
