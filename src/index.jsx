import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
<<<<<<< HEAD
import 'semantic-ui-css/semantic.min.css'
=======
import { HashRouter } from 'react-router-dom';
>>>>>>> produce

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,

  document.getElementById('app')
);

if(module.hot) {
  module.hot.accept();
}
