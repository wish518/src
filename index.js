import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Common.css';
import { BrowserRouter, Route,Link,Routes } from 'react-router-dom';
import './JS/config.js'
import Home from './component/Home';
import ITNotes from './component/ITNotes';
global.Env= process.env
ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route exact index element={<Home />} />
        <Route path="/ITNotes" element={<ITNotes />}/>
    </Routes>
  </BrowserRouter>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
