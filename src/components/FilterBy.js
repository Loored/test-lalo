import React from 'react';

const FilterBy = () => {
  return(
    <div className="filter__box">
      <select className="arrows" name="type_email">
        <option className="grey" value="">Filter by</option>
        <option>Inbox</option>
        <option>Spam</option>
        <option>Deleted</option>
      </select>
    </div>
  );
};

export default FilterBy;