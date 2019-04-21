import React, { Component } from 'react';
import uuid4 from 'uuid/v4';

import Column from '../components/Column';
import '../styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          column: 0,
          name: 'Winnie',
          color: '#8e6e95',
          tasks: ['Lorem ipsum dolor', 'amet bushwick knausgaard']
        },
        {
          column: 1,
          name: 'Bob',
          color: '#39a59c',
          tasks: ['Lorem ipsum dolor', 'amet bushwick knausgaard']
        },
        {
          column: 2,
          name: 'Thomas',
          color: '#344759',
          tasks: ['Lorem ipsum dolor', 'amet bushwick knausgaard']
        },
        {
          column: 3,
          name: 'George',
          color: '#e8741e',
          tasks: ['Lorem ipsum dolor', 'amet bushwick knausgaard']
        }
      ]
    };
  }

  componentDidMount() {
    const savedState = JSON.parse(window.localStorage.getItem('saved_state'));
    if (savedState) {
      this.setState({
        columns: savedState
      });
    }
  }

  componentDidUpdate() {
    const stateToSave = [...this.state.columns];
    window.localStorage.setItem('saved_state', JSON.stringify(stateToSave));
  }

  moveCardLeft = (column, taskIndex) => {
    let newColumns = [...this.state.columns];
    let taskToMove = newColumns[column].tasks.splice(taskIndex, 1);
    let newColumnNum = column - 1;
    newColumns[newColumnNum].tasks.push(taskToMove);
    this.setState({
      columns: newColumns
    });
  };
  moveCardRight = (column, taskIndex) => {
    let newColumns = [...this.state.columns];
    let taskToMove = newColumns[column].tasks.splice(taskIndex, 1);
    let newColumnNum = column + 1;
    newColumns[newColumnNum].tasks.push(taskToMove);
    this.setState({
      columns: newColumns
    });
  };

  addNewCard = column => {
    let newTask = window.prompt('Enter your new task below', 'Build cool shit');
    let newColumns = [...this.state.columns];
    newColumns[column].tasks.push(newTask);
    this.setState({
      columns: newColumns
    });
  };

  render() {
    const { columns } = this.state;
    const columnComponents = columns.map(elem => {
      let { column, name, color, tasks } = elem;
      return (
        <Column
          moveCardRight={this.moveCardRight}
          moveCardLeft={this.moveCardLeft}
          addNewCard={this.addNewCard}
          column={column}
          tasks={tasks}
          color={color}
          name={name}
          key={uuid4()}
          id={column}
        />
      );
    });
    return <div className="App">{columnComponents}</div>;
  }
}
