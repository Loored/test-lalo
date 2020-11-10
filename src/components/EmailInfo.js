import React from 'react';

function emailClicked({tags, subject}) {
  return emailClicked ? (console.log('Clicked')) : null;
}

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