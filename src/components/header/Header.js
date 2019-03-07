import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './../../css/header.css'

export default class Header extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={styles.container} id='boxImage'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/buy/">Buy a Home</Link>
            </li>
            <li>
              <Link to="/sell/">Selll Your Home</Link>
            </li>
            <li>
              <Link to="/agents/">Meet Your Agent</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

const styles = {
  container: {
    minHeight: '70vh',
  }
}
