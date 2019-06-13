import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './../../css/header.css'

export default class Header extends Component {
  constructor() {
    super()
  }
  render() {
    let colorStyle = (Object.keys(this.props.headerStyle).length != 0) ? {color: "black"} : {}
    return (
      <div style={styles.container} id='boxImage'>
        <nav style={this.props.headerStyle}>
        <div style={this.props.headerStyle}>
          <ul style={{...this.props.headerStyle, ...{width: "40%"}}}>
            <li>
              <Link style={colorStyle} to="/">Home</Link>
            </li>
            <li>
              <Link style={colorStyle} to="/buy/">Buy a Home</Link>
            </li>
            <li>
              <Link style={colorStyle} to="/sell/">Selll Your Home</Link>
            </li>
            <li>
              <Link style={colorStyle} to="/agents/">Meet Your Agent</Link>
            </li>
          </ul>
          <div>
            <p>T</p>
          </div>
        </div>
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
