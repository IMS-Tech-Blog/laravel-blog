/**
 * app entrance
 */

 import { Component, PropTypes } from 'react';
 import { render } from 'react-dom';
 // import { AppContainer } from 'react-hot-loader';
 import App from './components/App.js';

 render(
   // <AppContainer>
     <App />,
   // </AppContainer>,
   document.getElementById('app')
 );

/*if (module.hot) {
  module.hot.accept('./components/App', function() {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}*/
