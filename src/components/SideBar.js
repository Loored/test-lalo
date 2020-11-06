import React from 'react';
import Input from './Input';
import FilterBy from './FilterBy';
import Inbox from './Inbox';
import Email from './Email';

const SideBar = () => {
  return (
    <div className="sidebar__box">
      <div className="sidebar__row">
        <Inbox />
        <FilterBy />
      </div>
      <hr/>
      <div className="sidebar__column"> 
        <Input />
      </div>
      <div className="sidebar__column"> 
        <Email />
      </div>
    </div>
  );
};

export default SideBar;