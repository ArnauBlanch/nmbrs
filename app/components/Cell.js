import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'material-ui';

class Cell extends Component {

  render() {
    const { num, checked, check, uncheck } = this.props;
    return (
      <td style={{ width: '100%', margin: 2 }}>
        <Button
          raised
          style={{
            backgroundColor: checked ? '#1E88E5' : '#E3F2FD',
            color: checked ? '#FFFFFF' : '#0D47A1',
            height: '100%',
            width: '100%',
            fontSize: '3.5vw',
            minWidth: 0,
            padding: 0,
            margin: 0,
            fontWeight: 700
          }}
          onTouchTap={checked ? uncheck : check}
        >
          {num}
        </Button>
      </td>
    );
  }
}
Cell.propTypes = {
  num: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Cell;
