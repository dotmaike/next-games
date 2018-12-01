import React from 'react';
import './Spinner.css';

const Spinner = props => (
  <div className="spinner-wrapper" {...props}>
    <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  </div>
);

export default Spinner;
