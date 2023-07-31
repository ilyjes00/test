import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Book from './chapter_03/Book';
import Library from './chapter_03/Library';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Book name="리액트 라우팅" numOfPage={500}></Book>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
