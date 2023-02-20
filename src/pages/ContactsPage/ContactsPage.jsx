import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <Container>
      <ContactForm />

      <Filter />

      <ContactList />
    </Container>
  );
};

export default ContactsPage;
