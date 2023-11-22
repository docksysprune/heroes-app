import React from 'react';

const ButtonInfo = ({ onClick }) => {
  return (
    <button className="nav-item nav-link btn" onClick={onClick}>
      What is heroes app?
    </button>
  );
};

export default ButtonInfo;
