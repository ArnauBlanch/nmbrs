/**
 * Based on 'react-notify' (https://github.com/k4wo/react-notify)
**/

import React, { Component } from 'react';
export default class Notify extends Component {
  constructor() {
    super();
    this.wasMounted = true;
    this.key = 0;
    this.state = {};
  }

  componentWillUnmount() {
    this.wasMounted = false;
  }

  new(number, time) {
    this.setState({ number }, () => this.countToHide(time));
  }

  countToHide(duration) {
    setTimeout(() => {
      this.hideNotification();
    }, duration);
  }

  hideNotification() {
    if (!this.wasMounted) {
      return;
    }
    this.setState(({ num: undefined }));
  }

  render() {
    const { number } = this.state;
    return (
      <div style={{ height: 200, width: 200, backgroundColor: 'orange' }}>
        {number}
      </div>
    );
  }
}
