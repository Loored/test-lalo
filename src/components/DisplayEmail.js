import React, {useState} from 'react';
import Email from './Email';
import Emaildata from '../../mail-data.json';

const mappedEmails = Emaildata.map((email) => (
  <Email 
    key={email.from} from={email.from} subject={email.subject}/>
));

export default function DisplayEmail() {
  const [email, setEmail] = useState('');
  return (
    <div className="input__box">
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        type="text" name="search" placeholder="Search"/>
      <i className="fa fa-search"></i>
      <div className="sidebar__column"> 
        {mappedEmails}
      </div>
    </div>
  );
}

