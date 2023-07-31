import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Book from './chapter_03/Book';
import Library from './chapter_03/Library';
import reportWebVitals from './reportWebVitals';
import Clock from './chapter_03/Clock';
import Commentlist from './chapter_03/Commentlist';


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>

          <Commentlist/>

    </React.StrictMode>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
