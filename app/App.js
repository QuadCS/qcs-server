import React, { Component } from 'react';

import Orders from './components/Orders';
import Quadcopters from './components/Quadcopters';

import styles from './app.css';

export default class App extends Component {
  render() {
    return (
      <div
        className={styles.app}
      >
        <div className={styles.orders}>
          <Orders />
        </div>
        <div className={styles.quadcopters}>
          <Quadcopters />
        </div>
      </div>
    )
  }
}
