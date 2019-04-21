import React from 'react';
import uuid4 from 'uuid/v4';
import Cards from './Cards';
import PropTypes from 'prop-types';
import '../styles/Column.css';

const Columns = ({
  moveCardRight,
  moveCardLeft,
  addNewCard,
  column,
  name,
  color,
  tasks
}) => {
  const cardsComponent = tasks.map((task, index) => {
    console.log(typeof task);
    return (
      <Cards
        moveCardRight={moveCardRight}
        moveCardLeft={moveCardLeft}
        task={task}
        column={column}
        index={index}
        key={uuid4()}
      />
    );
  });

  return (
    <div className="column">
      <div className="columnHead" style={{ backgroundColor: color }}>
        <span>{name}</span>
      </div>
      <div>{cardsComponent}</div>
      <button onClick={() => addNewCard(column)}>+ Add a card</button>
    </div>
  );
};
Columns.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired
};

export default React.memo(Columns);
