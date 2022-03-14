import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ServicesProvider from './store/provider';
import Services from "./services";

import App from './app/index';
const root = document.getElementById("root") as HTMLElement;//утверждение типа
// Сервисы приложения
const services = new Services();

ReactDOM.render(
    <ServicesProvider services={services}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ServicesProvider>,
root);