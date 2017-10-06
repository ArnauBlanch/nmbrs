import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'material-ui';

class Cell extends Component {
  getColor() {
    const { checked, last } = this.props;
    if (!checked) {
      return '#E3F2FD';
    } else if (last) {
      return 'red';
    }
    return '#1E88E5';
  }

  render() {
    const { num, checked, check, uncheck, last } = this.props;
    return (
      <td style={{ width: '100%', margin: 2 }}>
        <Button
          raised
          style={{
            backgroundColor: this.getColor(),
            color: (checked || last) ? '#FFFFFF' : '#0D47A1',
            height: '100%',
            width: '100%',
            fontSize: '3.5vw',
            minWidth: 0,
            padding: 0,
            margin: 0,
            fontWeight: 700
          }}
          onTouchTap={checked ? uncheck : check}
          disabled={checked && !last}
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
  check: PropTypes.func.isRequired,
  uncheck: PropTypes.func.isRequired,
  last: PropTypes.bool.isRequired,
};

export default Cell;
