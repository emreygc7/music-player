import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main.css'
import './assets/style.css'
import App from './App';
import PlayerContextProvider from './context/PlayerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<PlayerContextProvider>
    <App />
</PlayerContextProvider>
);
