// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

import {
    BrowserRouter as Router
} from 'react-router-dom';


import './index.css';

// arg1: Component
// arg2: real dom
ReactDOM.render(<Router>
                    <App />
                </Router>, 
                document.getElementById('root'));
