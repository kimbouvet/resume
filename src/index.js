import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Data from './data';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App {...Data} />, global.document.getElementById('root'));
registerServiceWorker();

