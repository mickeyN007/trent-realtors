import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './../../css/buyHeader.css'
import logo from './../../images/logo.PNG'

import Login from './../loginRegister/login'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      showLoginModal: false,
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
              <input style={styles.inputPS} placeholder="PROPERTY SEARCH" />
            </li>
            <li style={{alignItems: "center", lineHeight: "2px", textAlign: "center"}}>
              <span onClick={this.toggleLoginModal.bind(this)} style={colorStyle}>Sign in</span>
            </li>
          </ul>
        </div>
        </nav>
        {this.state.showLoginModal && <Login />}
      </div>
    )
  }
  toggleLoginModal() {
    if (this.state.showLoginModal) {
      this.setState({showLoginModal: false})
    }
    else {
      this.setState({showLoginModal: true})
    }
  }
}

const styles = {
  container: {
    flex: 1,
    zIndex: 999999999999999
  },
  inputPS: {
    padding: "0.5%"
  }
}
