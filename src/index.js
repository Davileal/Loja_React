import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loja from './componentes/Loja';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Loja nome="Facisa Store"/>
    </BrowserRouter>,
    document.getElementById('root'));

// Se for user serviceworker, troca por .register
serviceWorker.unregister();