import React from 'react';

const Message = ({ text, type = 'info', className = '' }) => {
  return (
    <div className={`message ${type} ${className}`}>
      {text}
    </div>
  );
};

export default Message;