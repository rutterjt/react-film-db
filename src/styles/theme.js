import { ThemeProvider } from 'styled-components';

// theme properties
import { breakpoints } from './breakpoints';
import { palette, gradients } from './palette';

export const theme = {
  breakpoint: breakpoints,
  color: palette,
  gradient: gradients,
  maxWidth: '1000px',
};

export const GlobalThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
