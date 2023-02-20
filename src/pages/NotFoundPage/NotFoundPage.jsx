import animation404 from '../../images/404.gif';
import {
  Container,
  HomeLink,
  Image,
  Text,
  Wrapper,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={animation404} alt="page not found" />
      </Wrapper>
      <Text>This page doesn't exist</Text>
      <HomeLink to="/">Go to Home Page</HomeLink>
    </Container>
  );
};

export default NotFoundPage;
