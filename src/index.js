import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const rootdiv = document.getElementById('root');

function trackMouse(e){
  let pos = document.getElementById('lightbox');
  pos.style.setProperty('--x',e.clientX + 'px');
  pos.style.setProperty('--y',e.clientY + 'px');
}

rootdiv.addEventListener('mousemove',(e)=>{trackMouse(e)});


const root = ReactDOM.createRoot(rootdiv);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
