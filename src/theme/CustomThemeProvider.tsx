import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useAppSelector } from '../store/hooks';
import { appColours, darkModeColours } from './colours';

const CustomThemeProvider: React.FC = ({ children }) => {
  const darkMode = useAppSelector((state) => state.darkMode);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: appColours.primary,
      },
    },
    background: darkMode ? darkModeColours.background : appColours.background,
    font: darkMode ? darkModeColours.font : appColours.font,
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    background: string;
    font: string;
  }
  interface ThemeOptions {
    background: string;
    font: string;
  }
}
