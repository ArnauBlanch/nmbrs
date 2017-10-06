import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';

class NumberDialog extends React.Component {
  render() {
    const { number, alertNumber, visible } = this.props;
    return (
      <Paper
        elevation={20}
        style={{
          paddingLeft: 40,
          paddingRight: 40,
          width: 400,
          fontSize: 300,
          fontWeight: 600,
          color: '#FFFFFF',
          backgroundColor: 'rgba(204, 65, 46, 0.9)',
          borderRadius: 40,
          pointerEvents: 'auto',
          display: visible ? 'inline' : 'none',
        }}
        onTouchTap={() => alertNumber(-1)}
      >
        {number}
      </Paper>
    );
  }
}

NumberDialog.propTypes = {
  number: PropTypes.number.isRequired,
  alertNumber: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default NumberDialog;
