import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from '../GlobalStyle';
import { Header, Layout, NavList, StyledLink } from './AppLayout.styled';

export const AppLayout = () => {
  return (
    <Layout>
      <Header>
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
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
      <Toaster />
    </Layout>
  );
};