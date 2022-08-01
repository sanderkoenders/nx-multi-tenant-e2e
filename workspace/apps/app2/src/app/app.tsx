import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { Header } from '@workspace/shared/ui';
import brown from '@mui/material/colors/brown';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/products';
import { ContactPage } from './pages/contact-page';

const theme = createTheme({
  palette: {
    primary: brown,
  },
});

export const App = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Header
          applicationName="GoatShop"
          menuItems={[
            {
              title: 'Products',
              path: '/',
            },
            {
              title: 'Contact',
              path: '/contact',
            },
          ]}
        />

        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

export default App;
