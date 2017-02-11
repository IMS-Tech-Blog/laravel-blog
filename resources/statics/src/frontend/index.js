/**
 * app entrance
 */

 import { Component, PropTypes } from 'react';
 import { Provider } from 'react-redux';
 import { render } from 'react-dom';
 import App from './components/App.js';
 import { configStore } from './redux/store.js';

 const store = configStore();

 render(
   <Provider store={store}>
     <App />
   </Provider>,
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
