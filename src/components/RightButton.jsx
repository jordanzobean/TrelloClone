import React from 'react';
import rightArrow from '../Assets/right-arrow.svg';

const RightButton = props => {
  return (
    <button {...props}>
      <img src={rightArrow} alt="left-arrow" width="15px" height="15px" />
    </button>
  );
};

RightButton.defaultProps = {
  type: 'button'
};

export default React.memo(RightButton);
