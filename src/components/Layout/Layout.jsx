import { NavLink, Outlet } from 'react-router-dom';
import icon from '../../images/home_icon.svg';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <img src={icon} alt="home" width="50" />
              </NavLink>
            </li>
            <li>
              <NavLink to="login">Log In</NavLink>
            </li>
            <li>
              <NavLink to="join">Sign In</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <aside>
          <ul>
            <li>
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="phonebook">Phonebook</NavLink>
            </li>
          </ul>
        </aside>
        <Outlet />
      </main>
    </>
  );
};
