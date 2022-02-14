import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import 'react-multi-carousel/lib/styles.css';
import GoogleSansRegular from "./fonts/GoogleSans-Regular.ttf";
import {CssBaseline} from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'GoogleSans';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('GoogleSans'), local('GoogleSansRegular'), url(${GoogleSansRegular}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
            `
        }
    },
    typography: {
        fontFamily: 'GoogleSans, Quicksand, Raleway, Noto Sans Mono'
    },
    palette: {
        secondary: {
            main: '#f9a34f'
        },
        primary: {
            main: '#212529'
        },
        background: {
            default: '#ffffff',
            dark: '#e5e5e5',
            paper: '#ffffff'
        }
    },
    shape: {
        borderRadius: 0
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <App/>
                    </LocalizationProvider>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
