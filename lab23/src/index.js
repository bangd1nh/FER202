import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Navbar from './header/navbar';
import Carousals from './header/carousal';
import Cards from './body/cards';
import News from './body/news';
import Life from './body/lifestyle';
import Footers from './body/footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <>
    <Navbar></Navbar>
    <Carousals></Carousals>
    <Cards></Cards>
    <News></News>
    <Life></Life>
    <Footers></Footers>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
