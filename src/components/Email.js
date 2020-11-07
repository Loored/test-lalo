import React from 'react';

// console.log(Emaildata);
function Email({from, subject}) {
  return(
    <div className="email__box">
      <div className="email">
        <h2>{from}</h2>
        <h3>{subject}</h3>
      </div>
    </div>
  );
}

export default Email;