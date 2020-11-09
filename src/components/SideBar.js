import React from 'react';
import Input from './Input';
import FilterBy from './FilterBy';
import Inbox from './Inbox';
import DisplayEmail from './DisplayEmail';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__box">
        <div className="sidebar__row">
          <Inbox />
          <FilterBy />
        </div>
        <hr/>
        <div className="sidebar__column"> 
          {/* <Input /> */}
          <DisplayEmail />
        </div>
      
      </div>
    </div>
  );
};

export default SideBar;