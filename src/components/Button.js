import React from 'react';


const Button = ({ type, onClick, isEnabled, children }) => (
  <div className='submit-button'>
    <button type={type} onClick={onClick} disabled={!isEnabled}>{children}</button>
  </div>
);

export default Button;
