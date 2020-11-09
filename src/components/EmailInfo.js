import React from 'react';

function emailClicked({tags, subject}) {
  return emailClicked ? (console.log('Clicked')) : null;
//   return emailClicked ? (<div className="full__email"><h2>{tags}</h2><h2>{subject}</h2></div>) : (console.log('Not clicked'));
}
// console.log(Emaildata);
const EmailInfo = ({tags, body}) => {
  return(
    <div onClick={emailClicked}>
      <div>
        <h2>{tags}</h2>
        <h3>{body}</h3>
      </div>
    </div>
  );
};

export default EmailInfo;