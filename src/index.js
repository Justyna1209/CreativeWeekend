import React from 'react';
import ReactDOM from 'react-dom';
import './main.css'
import App from './App';

// import background from './images/rough_diagonal.png'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


