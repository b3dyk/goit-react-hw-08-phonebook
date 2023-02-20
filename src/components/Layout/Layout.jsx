import { Button, Container } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { authLogout } from 'redux/auth/auth.operations';
import { selectLoginToken } from 'redux/auth/auth.selectors';
import icon from '../../images/logo.png';
import {
  Header,
  HeaderWrapper,
  Item,
  List,
  SideBar,
  StyledLink,
  Thumb,
  UserInfo,
  Wrapper,
} from './Layout.styled';

export const Layout = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectLoginToken);

  const handleLogout = () => {
    dispatch(authLogout());
  };
  return (
    <>
      <Header>
        <Container>
          <HeaderWrapper>
            <Link to="/">
              <img src={icon} alt="home" width="150" />
            </Link>
            {token ? (
              <Thumb>
                <UserInfo>
                  <p>Hello, {token.user.name}</p>
                  <p>{token.user.email}</p>
                </UserInfo>
                <Button
                  variant="outlined"
                  color="error"
                  type="button"
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </Thumb>
            ) : (
              <Navigation />
            )}
          </HeaderWrapper>
        </Container>
      </Header>
      <main>
        <Container>
          <Wrapper>
            <SideBar>
              <List>
                <Item>
                  <StyledLink to="/">Home Page</StyledLink>
                </Item>
                {token && (
                  <Item>
                    <StyledLink to="contacts">Phonebook</StyledLink>
                  </Item>
                )}
              </List>
            </SideBar>

            <Outlet />
          </Wrapper>
        </Container>
      </main>
    </>
  );
};
