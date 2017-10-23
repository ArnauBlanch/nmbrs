import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Routes from '../routes';

type RootType = {
  store: {},
  history: {}
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
});
/* const typography = createTypography(theme.palette, {
  fontFamily: 'Montserrat'
});
theme = {
  ...theme,
  typography: {
    ...typography,
    body1: {
      ...typography.body1,
    },
    button: {
      ...typography.button,
    },
  },
};
*/
export default function Root({ store, history }: RootType) {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>
  );
}
