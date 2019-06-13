import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './../../css/header.css'
import logo from './../../images/logo.PNG'
import search from './../../images/search.png'
import rightArrow from './../../images/rightArrow.png'
import account from './../../images/account.png'

import Login from './../loginRegister/login'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      searchForHomes: false,
      showLoginModal: false,
      location: ''
    }
  }
  render() {
    let colorStyle = (Object.keys(this.props.headerStyle).length != 0) ? {color: "black"} : {color: "white"}
    let contactStyle = (Object.keys(this.props.headerStyle).length != 0) ? {textDecoration: 'none', color: 'black', fontColor: 'black', fontWeight: 'bold', fontSize: '14px'} : {textDecoration: 'none', fontColor: 'white', fontSize: '14px', fontWeight: 'bold', color: 'white'}
    let rightArrowStyle = (Object.keys(this.props.headerStyle).length != 0) ? {backgroundColor: '#d1d1d1', height: '5%', marginTop: -51, position: 'aboslute'} : {backgroundColor: 'red',  height: '5%', position: 'aboslute', marginTop: 5}

    let searchForHomes = (this.state.searchForHomes) ? <span><input style={styles.input}  onChange={(e) => {this.setState({location: e.target.value})}} placeholder="Search by city or state" /><span onClick={this.search.bind(this)} style={rightArrowStyle}><img style={rightArrowStyle} src={rightArrow} width='5%' /></span></span> : <span style={{marginLeft: '35%', marginTop: '-12%'}}><img src={search} width='5%' height="34%"/> <span>Search for Homes</span></span>
    return (
      <div style={styles.container}>
        <nav style={this.props.headerStyle}>
        <div style={{width: '60%', float: 'left', display: 'inline', paddingTop: '3%', paddingBottom: '3%', height: "35%", lineHeight: "35%"}}>
          <ul>
            <li>
              <Link to="/">
                <img src={logo} width="10%" height="100%"/>
              </Link>
            </li>
            <li>
              <Link style={colorStyle} to="/buy/">Buy a Home</Link>
            </li>
            <li>
              <Link style={colorStyle} to="/sell/">Sell Your Home</Link>
            </li>
            <li>
              <Link style={colorStyle} to={`/#ourAgents`}>Meet Your Agent</Link>
            </li>
          </ul>
        </div>
        <div style={{marginTop: -20, top: 0, position: 'aboslute', float: 'right', width: '40%', display: 'inline', paddingTop: '3%', paddingBottom: '3%', height: "35%", lineHeight: "35%"}}>
          <div style={styles.topLeftHeader}>
            <span><Link to='/valuation' style={contactStyle}>Book a Listing Appointment </Link></span>
            <span style={contactStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24/7 Support &nbsp; +234 809 841 0475</span>
          </div>
          <div>
            <span onClick={this.toggleSearchHomes.bind(this)}>{searchForHomes}</span>
            <span onClick={this.toggleLoginModal.bind(this)} style={{marginLeft: '10%'}}><img src={account} width="5%" height="10%" /><span style={{...colorStyle, ...{marginTop: '50%'}}}>Sign In</span></span>
          </div>
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
  toggleSearchHomes() {
    this.setState({searchForHomes: true})
  }
  search() {
    this.props.search(this.state.location)
    //this.setState({location: ''})
  }
}

const styles = {
  container: {
    minHeight: '100vh',
    clear: 'both'
  },
  topLeftHeader: {
    paddingBottom: '4%',
    color: 'white'
  },
  contact: {
    paddingLeft: '2%'
  },
  btn: {
    width: '40%',
    textAlign: 'center',
    color: 'white'
  },
  input: {
    width: '50%',
    padding: '2%',
    background: 'url(./../../images/search.png) no-repeat scroll 557px 7px',
    paddingLeft:'30px'
  },
}
