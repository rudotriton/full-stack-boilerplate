import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'style';
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import 'sanitize.css/sanitize.css';

const Root = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
