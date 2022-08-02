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

// You can't do React without importing React, can you?
import React from 'react'
import ReactDOM from 'react-dom/client'

// Well, import the App from the App.js file.
import App from './App'

// Uhm... create React root at HTML element `root` as an App component.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
