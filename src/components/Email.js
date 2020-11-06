import React from 'react';

import Emaildata from '../../mail-data.json';

console.log(Emaildata);
const Email = () => {
  return(
    <div className="email__box">
      <div className="email">
      <h2>{Emaildata.[0].from}</h2>
      <h3>{Emaildata.[0].subject}</h3>
      </div>
      <div className="email">
      <h2>{Emaildata.[1].from}</h2>
      <h3>{Emaildata.[1].subject}</h3>
      </div>
    </div>
  );
};

export default Email;