import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cell from './Cell';

const baseStyle = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
};

class Board extends Component {
  renderColumns(offset) {
    const { board, checkNumber, undo } = this.props;
    const cells = [];
    for (let i = 1; i <= 10; i += 1) {
      const num = offset + i;
      cells.push(<Cell
        num={num}
        checked={board.indexOf(num) !== -1}
        check={() => checkNumber(num)}
        uncheck={() => undo()}
        style={{ width: '10%' }}
      />);
    }
    return <tr style={{ ...baseStyle, height: '11%', width: '100%' }}>{cells}</tr>;
  }
  renderRows() {
    const rows = [];
    for (let i = 0; i < 9; i += 1) {
      rows.push(this.renderColumns(i * 10));
    }
    return (
      <table style={{ height: '100%', width: '100%' }}>
        <tbody style={{ height: '100%', width: '100%' }}>
          {rows}
        </tbody>
      </table>
    );
  }

  render() {
    const { board } = this.props;
    return (
      <div style={{ padding: 5, height: 'calc(100% - 10px)' }}>
        <div style={{ height: 40 }}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-2x" />
          </Link>
        </div>
        <div style={{ height: 'calc(100% - 40px)' }}>
          { this.renderRows() }
        </div>
      </div>
    );
  }
}
Board.propTypes = {
  board: PropTypes.isRequired,
  checkNumber: PropTypes.func.isRequired,
  uncheckNumber: PropTypes.func.isRequired,
};

export default Board;
