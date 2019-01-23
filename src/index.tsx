// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

import './index.css';

// arg1: Component
// arg2: real dom
ReactDOM.render(<App />, 
                document.getElementById('root'));
