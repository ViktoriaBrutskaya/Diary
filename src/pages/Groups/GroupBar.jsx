import React from 'react';

const GroupBar = ({ dayTime, groupName, color, onClick }) => {
  const barStyle = {
    backgroundColor: color,
    borderRadius: '20px',
    padding: '10px 25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '15px',
    transition: 'transform 0.1s',
  };

  const textStyle = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333'
  };

  return (
    <div 
      style={barStyle} 
      onClick={onClick}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <span style={textStyle}>{dayTime}</span>
      <span style={textStyle}>{groupName}</span>
    </div>
  );
};

export default GroupBar;