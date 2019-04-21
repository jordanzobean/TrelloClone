import React from 'react';
import leftArrow from '../Assets/back.svg';

const LeftButton = props => {
  return (
    <button {...props}>
      <img src={leftArrow} alt="left-arrow" width="15px" height="15px" />
    </button>
  );
};

LeftButton.defaultProps = {
  type: 'button'
};

export default React.memo(LeftButton);
