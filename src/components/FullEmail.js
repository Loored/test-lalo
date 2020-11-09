import React from 'react';
import EmailInfo from './EmailInfo';
import Emaildata from '../../mail-data.json';

const mappedEmails = Emaildata.map((email) => (
  <EmailInfo
    key={email.from} tags={email.tags} body={email.body}/>
));
  
// console.log(mappedEmails);
const FullEmail = ({tags, body}) => {
  return (
    <div className="full__email">
      <div className="buttons">
        <button className="red__button">Delete</button>
        <button className="grey__button">Spam</button>
        <button className="blue__button">Mark as unread</button>
      
      </div>
      <hr/>
      {mappedEmails}
    </div>
  );
};

export default FullEmail;