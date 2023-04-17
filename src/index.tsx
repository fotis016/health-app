import '../src/i18n/i18n';

import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import OpenSans from './theme/fonts/OpenSans-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSans}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  h1 {
    font-family: 'Open Sans';
  }
`;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
