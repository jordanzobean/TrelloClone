import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Cards.css';
import RightButton from './RightButton';
import LeftButton from './LeftButton';

const Cards = ({ moveCardRight, moveCardLeft, task, column, index }) => {
  const rightStyle = { float: 'right', marginLeft: '8px', marginRight: '12px' };
  const leftStyle = { float: 'left', marginLeft: '8px', marginRight: '12px' };
  return (
    <div className="card">
      {column !== 0 ? (
        <LeftButton
          onClick={() => moveCardLeft(column, index)}
          style={leftStyle}
        />
      ) : (
        ''
      )}
      <span>{task}</span>
      {column !== 3 ? (
        <RightButton
          onClick={() => moveCardRight(column, index)}
          style={rightStyle}
        />
      ) : (
        ''
      )}
    </div>
  );
};

Cards.propTypes = {
  moveCardLeft: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
  column: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default React.memo(Cards);
