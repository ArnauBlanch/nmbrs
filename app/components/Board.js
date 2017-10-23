import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import Cell from './Cell';
import NumberDialog from './NumberDialog';

const baseStyle = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
};

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { number: -1 };
    this.alertNumber = this.alertNumber.bind(this);
  }
  renderColumns(offset) {
    const { board, checkNumber, undo } = this.props;
    const cells = [];
    for (let i = 1; i <= 10; i += 1) {
      const num = offset + i;
      cells.push(<Cell
        key={num}
        num={num}
        checked={board.indexOf(num) !== -1}
        check={() => checkNumber(num)}
        last={board.indexOf(num) === (board.length - 1) && board.length > 0}
        uncheck={board.indexOf(num) === (board.length - 1) ? () => undo() : () => null}
        style={{ width: '10%' }}
        alertNumber={this.alertNumber}
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
  alertNumber(number) {
    this.setState({ number });
    setTimeout(() => {
      if (this.state.number === number) this.setState({ number: -1 });
    }, 5000);
  }

  render() {
    const { dispatch, clearBoard } = this.props;
    return (
      <div style={{ height: '100%' }}>
        <div
          style={{
            position: 'fixed',
            zIndex: 10,
            top: 0,
            left: 0,
            width: '100%',
            pointerEvents: 'none',
            height: '100%',
            overflow: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <NumberDialog
            number={this.state.number}
            style={{ margin: 'auto' }}
            alertNumber={this.alertNumber}
            visible={this.state.number !== -1}
          />
        </div>
        <div style={{ padding: 5, height: 'calc(100% - 10px)' }}>
          <div style={{ height: 40 }}>
            <a
              onTouchTap={() => {
                dispatch(push('/'));
                clearBoard();
              }}
            >
              <i className="fa fa-arrow-left fa-2x" />
            </a>
          </div>
          <div style={{ height: 'calc(100% - 40px)' }}>
            { this.renderRows() }
          </div>
        </div>
      </div>
    );
  }
}
Board.propTypes = {
  board: PropTypes.isRequired,
  checkNumber: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  clearBoard: PropTypes.func.isRequired,
};

export default Board;
