import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from "./theme";
import { HashRouter } from 'react-router-dom'

import App from './App';


ReactDOM.render(
    <React.StrictMode>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
    </React.StrictMode>
    , document.getElementById('root'));



