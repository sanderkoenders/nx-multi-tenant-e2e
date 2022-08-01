import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from '@workspace/shared/ui';
import green from '@mui/material/colors/green';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/products';
import { ContactPage } from './pages/contact-page';

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header
          applicationName="YakShop"
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
  );
}

export default App;
