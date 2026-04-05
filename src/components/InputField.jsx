import React from 'react';

const InputField = ({ 
  label, 
  type = "text", 
  placeholder, 
  width = "200px", 
  borderColor = "var(--color-blue)",
  value,     
  onChange    
}) => {
  const containerStyle = {
    width: width,
    marginBottom: '20px'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 20px',
    borderRadius: '20px',
    border: `2px solid ${borderColor}`, 
    backgroundColor: '#EAEAEA',
    boxSizing: 'border-box',
    outline: 'none'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0px',
    marginLeft: '15px',
    fontSize: '14px',
    color: borderColor, 
    fontWeight: '500'
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>{label}</label>
      <input 
        type={type} 
        style={inputStyle} 
        placeholder={placeholder} 
        value={value}     
        onChange={onChange} 
      />
    </div>
  );
};

export default InputField;