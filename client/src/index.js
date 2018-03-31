import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store'
import includes from 'lodash/includes'
window.includes = includes

const setupStore = () => {
  let store
  const currentUser = sessionStorage.getItem('session')
  
  store = currentUser ?
            configureStore({ session: JSON.parse(currentUser) }) :
            configureStore()

  window.store = store
  return store
}


ReactDOM.render(<App store={setupStore()} />, document.getElementById('root'));
registerServiceWorker();
