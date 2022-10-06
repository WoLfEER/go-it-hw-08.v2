import {
  Container,
  Title,
  SubTitle,
  TitleFooter,
} from './PhonebookPage.styled';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';
// import Animation from 'components/AnimatedPage';

const PhonebookPage = () => {
  return (
    <>
      {' '}
      {/* <Animation> */}
      <Container>
        <Title>PhoneBook 🙀</Title>
        <ContactForm />
        <SubTitle>Contacts:</SubTitle>
        <Filter />
        <PhoneBook />
      </Container>
      {/* </Animation> */}
      <TitleFooter>PhoneBook © 😻😻😻 </TitleFooter>
    </>
  );
};

export default PhonebookPage;
