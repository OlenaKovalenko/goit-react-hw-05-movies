import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Layout, NavList, StyledLink } from './AppLayout.styled';

export const AppLayout = () => {
  return (
    <Layout>
      <header>
        <nav>
          <NavList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </NavList>
        </nav>
      </header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
      <Toaster />
    </Layout>
  );
};