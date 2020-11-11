import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import { Provider } from 'react-redux';
import emailApp from './redux/reducers/index.js';

import './styles.scss';

let store = createStore(emailApp);

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));