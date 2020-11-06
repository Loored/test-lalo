import React, { useState } from 'react';

const Inbox = () => {
  const numInbox = useState('1');
  return (
    <div className="inbox__box"><p className="inbox__text">Inbox <span className="inbox__count" >{numInbox}</span></p></div>);
};

export default Inbox;