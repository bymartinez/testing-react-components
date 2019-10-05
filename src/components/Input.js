import React from 'react';

const Input = ({ id, label, type, onChange, value }) => (
  <div className='form-element-input'>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type} 
      value={value}
      onChange={onChange} />
  </div>
);

export default Input;