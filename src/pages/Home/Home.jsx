import { Container, Title, SubTitle, TitleSecondary } from './Home.styled';
// import AnimatedPage from 'components/AnimatedPage';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserName } from 'redux/selectors';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
  const user = useSelector(getUserName);
  return (
    <Container>
      {/* <AnimatedPage> */}
      <Title>
        Welcome to <TitleSecondary>PhoneBook</TitleSecondary> App 🤗
      </Title>
      <SubTitle>
        {isLoggedIn
          ? `${user}, keep calm, and store your data securely`
          : 'To enter, please log in or register'}
      </SubTitle>
      {/* </AnimatedPage> */}
    </Container>
  );
};

export default Home;
