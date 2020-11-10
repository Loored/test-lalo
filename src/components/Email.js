import React from 'react';

function emailClicked({tags, subject}) {
  return emailClicked ? (<div className="full__email"><h2>{tags}</h2><h2>{subject}</h2></div>) : (console.log('Not clicked'));
}

const Email = ({from, subject, tags, body}) => {
  return(
    <div className="email__box" onClick={emailClicked}>
      <div className="email">
        <h2>{from}</h2>
        <h3>{subject}</h3>
      </div>
      <div className="email__info">
        <i className="email__hour small"><p>9.33 AM</p></i>
        <i className="fa fa-paperclip"></i>
      </div>
      {emailClicked}
    </div>
  );
};

export default Email;