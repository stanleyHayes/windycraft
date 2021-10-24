import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import 'react-multi-carousel/lib/styles.css';

const theme = createTheme({
    typography: {
        fontFamily: 'Quicksand, Raleway, Noto Sans Mono'
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
        borderRadius: 4
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
