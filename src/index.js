import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import 'antd/dist/antd.css';
import GlobalStyles from "./styles/GlobalStyles";
import SoketContext from "./components/SocketContext/SoketContext";

ReactDOM.render(
    <>
        <GlobalStyles/>
        <BrowserRouter>
            <Provider store={store}>
                <SoketContext>
                    <App />
                </SoketContext>
            </Provider>
        </BrowserRouter>
    </>,
    document.getElementById('root'));

