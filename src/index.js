import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';


const theme = {
  
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode theme={theme}>
    <App />
  </React.StrictMode>
);
