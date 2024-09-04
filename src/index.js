// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import {createRoot} from 'react-dom/client'
// import App from './App'
// import { BrowserRouter } from 'react-router-dom'
// createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>)

import { GlobalProvider } from './Context/GlobalContext'

import {createRoot} from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(<BrowserRouter><GlobalProvider><App /></GlobalProvider></BrowserRouter>)