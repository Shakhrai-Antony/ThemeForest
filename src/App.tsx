import React from 'react';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from '@/components/ErrorBoundary';
import { DynamicRoutes } from '@/dynamicRoutes';
import GlobalStyle from '@/theme/globalStyle';
import baseTheme from '@/theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <ErrorBoundary>
        <DynamicRoutes />
      </ErrorBoundary>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
