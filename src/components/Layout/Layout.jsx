import { Container } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectLoginToken } from 'redux/auth/auth.selectors';
import icon from '../../images/logo.png';
import {
  Header,
  HeaderWrapper,
  Item,
  List,
  SideBar,
  StyledLink,
  Wrapper,
} from './Layout.styled';

export const Layout = () => {
  const token = useSelector(selectLoginToken);

  return (
    <>
      <Header>
        <Container>
          <HeaderWrapper>
            <Link to="/">
              <img src={icon} alt="home" width="150" />
            </Link>
            {token ? <UserMenu /> : <Navigation />}
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
                    <StyledLink to="contacts">Contacts</StyledLink>
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
