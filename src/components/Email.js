import React from 'react';
import './Email.scss';

const Email = ({from, subject, tags, body}) => {
  return(
    <div className="email__box">
      <div className="email">
        <h2>{from}</h2>
        <h3>{subject}</h3>
      </div>
      <div className="email__info">
        <i className="email__hour small">
          <p>9.33 AM</p>
        </i>
        <i className="fa fa-paperclip"></i>
      </div>
    </div>
  );
};

export default Email;