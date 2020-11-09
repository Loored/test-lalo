import React from 'react';
// import { render } from 'react-dom';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.scss';

const Index = () => {
  return (
    <App />
  );
};
ReactDOM.render(<Index />, document.getElementById('root'));

