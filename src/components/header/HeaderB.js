import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './../../css/buyHeader.css'
import logo from './../../images/logo.PNG'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      location: ''
    }
  }
  render() {
    let colorStyle = {color: "white", textAlign: "center"}
    //(Object.keys(this.props.headerStyle).length != 0) ? {color: "black"} : {color: "white"}
    return (
      <div style={styles.container}>
        <nav style={this.props.headerStyle}>
        <div style={{paddingTop: '1%', paddingBottom: '3%', height: "35%", lineHeight: "5%"}}>
          <ul>
            <li>
              <Link to="/">
                <img src={logo} width="10%" height="100%"/>
              </Link>
            </li>
            <li style={{alignItems: "center"}}>
              <Link style={colorStyle} to="/buy/">BUY</Link>
            </li>
            <li>
              <Link style={colorStyle} to="/sell/">SELL</Link>
            </li>
            <li>
              <Link style={colorStyle} to={`/#ourAgents`}>OUR AGENTS</Link>
            </li>
            <li>
              <Link style={colorStyle} to="/valuation">LISTING APPOINTMENT</Link>
            </li>
            <li>
              <Link style={colorStyle} to="/valuation">TOUR LISTS</Link>
            </li>
            <li>
              <input style={styles.inputPS} placeholder="PROPERTY SEARCH" onChange={(e) => this.setState({location: e.target.value})}/>
            </li>
            <li style={{alignItems: "center", lineHeight: "2px", textAlign: "center"}}>
              <span style={colorStyle}>ACCOUNT</span>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    )
  }
}

const styles = {
  container: {
    minHeight: '80vh',
  },
  inputPS: {
    padding: "0.5%"
  }
}
