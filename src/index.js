import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    mixins: {
        toolbar: {
            minHeight: 56,
            '@media (min-width:0px) and (orientation: landscape)': {
                minHeight: 48,
            },
            '@media (min-width:600px)': {
                minHeight: 64,
            },
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
