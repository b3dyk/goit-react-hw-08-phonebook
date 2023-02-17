import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home Page</NavLink>
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
              <NavLink to="phonebook">Phonebook</NavLink>
            </li>
          </ul>
        </aside>
        <Outlet />
      </main>
    </>
  );
};
