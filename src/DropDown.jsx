import React from 'react';

const DropDown = (props) => (
  <React.Fragment>
    <select>
      {props.teams.map(el => (
        <option key={el}> {el} </option>
      ))}
    </select>
  </React.Fragment>
);

export default DropDown;
