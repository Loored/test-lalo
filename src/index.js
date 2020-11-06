import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/SideBar';

import './styles.scss';


const Index = () => {
  return (<div className="sidebar">
    <SideBar />
  </div>);
};
ReactDOM.render(<Index />, document.getElementById('root'));