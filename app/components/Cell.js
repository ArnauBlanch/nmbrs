import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'material-ui';

class Cell extends Component {
  getColor() {
    const { checked, last } = this.props;
    if (!checked) {
      return 'rgba(255, 255, 255, 0.2)';
    } else if (last) {
      return 'rgba(204, 65, 46, 0.9)';
    }
    return 'rgba(63, 63, 63, 0.8)';
  }

  render() {
    const { num, checked, check, uncheck, last, alertNumber } = this.props;
    return (
      <td style={{ width: '100%', margin: 2 }}>
        <Button
          raised
          disableRipple
          style={{
            boxShadow: 'none',
            backgroundColor: this.getColor(),
            color: (checked || last) ? '#FFFFFF' : '#fff',
            height: '100%',
            width: '100%',
            maxHeight: '100%',
            fontSize: '6vh',
            minWidth: 0,
            padding: 0,
            margin: 0,
            fontWeight: 400,
            borderRadius: 10,
          }}
          onTouchTap={
            checked ? uncheck :
              () => {
                check();
                alertNumber(num);
            }}
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
  alertNumber: PropTypes.func.isRequired,
};

export default Cell;
