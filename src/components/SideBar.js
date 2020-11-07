import React from 'react';
import Input from './Input';
import FilterBy from './FilterBy';
import Inbox from './Inbox';
import Email from './Email';
import Emaildata from '../../mail-data.json';

const SideBar = () => {

  const [email, setEmail] = React.useState('');
  const filteredEmails = Emaildata.filter((email) => {
    email.isReaded;
  });
  
  console.log(filteredEmails);
  // const mappedEmails = Emaildata.map((email) => (
  //   <Email key={email.from} from={email.from} subject={email.subject}/>
  // ));
  const mappedEmails = Emaildata.map((email) => (
    <Email key={email.from} from={email.from} subject={email.subject}/>
  ));

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
        {/* <Email /> */}
        {mappedEmails}
      </div>
    </div>
  );
};

export default SideBar;