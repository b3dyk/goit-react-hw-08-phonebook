import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Heading } from './PhonebookPage.styled';

const PhonebookPage = () => {
  return (
    <Container>
      <Heading>Phonebook</Heading>

      <ContactForm />

      <Heading>Contacts</Heading>

      <Filter />

      <ContactList />
    </Container>
  );
};

export default PhonebookPage;
