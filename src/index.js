import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import './index.css';
import ProjektiApp from './ProjektiApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <MuiThemeProvider>
  <React.StrictMode>
    <ProjektiApp />
  </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
