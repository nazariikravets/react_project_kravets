import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import {setupStore} from "./redux";
import App from './App';
import './index.css'


const store=setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
   <BrowserRouter>
       <App />
   </BrowserRouter>

</Provider>


);

