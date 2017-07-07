import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <div>
          <h1 style={{ fontWeight: 600 }}>QuinaClic</h1>
          <br />
          <h2 style={{ fontWeight: 300 }}><Link to="/board">Nova quina</Link></h2>
        </div>
      </div>
    );
  }
}
