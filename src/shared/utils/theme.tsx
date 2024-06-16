'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

// https://mui.com/material-ui/customization/theming/#custom-variables
declare module '@mui/material/styles' {
  interface Theme {}
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const memoizedValue = useMemo(
    () => ({
      shape: { borderRadius: 8 },
      breakpoints: {
        values: {
          xs: 0,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1360,
        },
      },
    }),
    []
  );

  const theme = createTheme(memoizedValue);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
