import React, { Component } from 'react'
import { Row, Col,  } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Breakpoint, { BreakpointProvider } from 'react-socks';
import 'bootstrap/dist/css/bootstrap.css';

import './../../css/buyHeader.css'
import logo from './../../images/logo.PNG'
import menu from './../../images/menu.png'
import account from './../../images/account.png'
import Login from './../loginRegister/login'
import close from './../../images/close.png'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
      showMobileMenu: false,
      showLoginModal: false
    }
  }
  render() {
    let colorStyle = (Object.keys(this.props.headerStyle).length != 0) ? {color: 'black'} : {color: "white"}
    let imagePadding = (Object.keys(this.props.headerStyle).length != 0) ? {marginTop: '-5%'} : {}
    let loginPadding = (Object.keys(this.props.headerStyle).length != 0) ? {marginTop: 110} : {marginTop: '1%'}
    let mColorStyle = {color: 'white', cursor: 'pointer'}
    let usr = localStorage.getItem('token')
    //(Object.keys(this.props.headerStyle).length != 0) ? {color: "black"} : {color: "white"}
    return (
      <BreakpointProvider>
      <div style={styles.container}>
      <Breakpoint medium down>
        <Row style={styles.semiContainer}>
          <Col xs={10}>
            <Link to="/">
              <img src={logo} width="30%" height="100%"/>
            </Link>
          </Col>
          {this.state.showMobileMenu===false && <Col xs={2}>
            <span onClick={this.toggleShowMobileMenu.bind(this)}><img src={menu}  width="80%" height="60%"/></span>
          </Col>}
          {this.state.showMobileMenu===true && <Col xs={2}>
            <span onClick={this.toggleShowMobileMenu.bind(this)}><img src={close}  width="80%" height="60%"/></span>
          </Col>}
          </Row>
          {this.state.showMobileMenu && <div style={{padding: '3%', zIndex: 999999999999, width: '100%', height: '100%', opacity: '1', position: 'fixed', marginTop: '17.5%', backgroundColor: '#5E1914'}}>
            <div style={styles.nav_mob}>
            <Link style={mColorStyle} to="/buy/">BUY</Link>
            </div>
            <div style={styles.nav_mob}>
            <Link style={mColorStyle} to="/sell/">SELL</Link>
            </div>
            <div style={styles.nav_mob}>
            <Link style={mColorStyle} to="/valuation">LISTING APPOINTMENT</Link>
            </div>
            <div style={styles.nav_mob}>
            <Link style={mColorStyle} to="/valuation">TOUR LISTS</Link>
            </div>
            <div style={styles.nav_mob}>
            <Link to="/account" style={mColorStyle}>{usr ? 'ACCOUNT' : 'Log In / Register'}</Link>
            </div>
          </div>}
        </Breakpoint>
        <Breakpoint large up>
        <nav>
          <Row style={{...{padding: '1.5%', zIndex: 9999999999999999}, ...this.props.headerStyle}}>
            <Col lg={3}>
              <Link to="/">
                <img src={logo} width="50%" height="100%" style={imagePadding}/>
              </Link>
            </Col>
            <Col lg={1}>
            <Link style={colorStyle} to="/buy/">BUY</Link>
            </Col>
            <Col lg={1}>
            <Link style={colorStyle} to="/sell/">SELL</Link>
            </Col>
            <Col lg={2}>
            <Link style={colorStyle} to={`/#ourAgents`}>OUR AGENTS</Link>
            </Col>
            <Col lg={2}>
            <Link style={colorStyle} to="/valuation">LISTING APPOINTMENT</Link>
            </Col>
            {usr==null && <Col lg={2} style={{cursor: 'pointer'}}>
                <span onClick={this.toggleLoginModal.bind(this)}><img src={account} width="10%" height="50%" /><span style={{...colorStyle, ...{marginLeft: '2.5%', marginTop: '50%'}}}>Sign In / Register</span></span>
            </Col>}
            {usr && <Col lg={2} style={{cursor: 'pointer'}}>
                <Link style={colorStyle} to="/account"><img src={account} width="10%" height="50%" /><span style={{...colorStyle, ...{marginLeft: '2.5%', marginTop: '50%'}}}>Account</span></Link>
            </Col>}
          </Row>
          </nav>
          {this.state.showLoginModal && <Row>
            <Col lg={12}>
               <Login {...this.props} loginPadding={loginPadding}  toggleLoading={this.toggleLoading.bind(this)}/>
            </Col>
          </Row>}
        </Breakpoint>
      </div>
      </BreakpointProvider>
    )
  }
  toggleShowMobileMenu() {
    var { showMobileMenu } = this.state
    this.setState({showMobileMenu: !showMobileMenu})
  }
  toggleLoading(loading) {
    this.props.toggleLoading(loading)
  }
  toggleLoginModal() {
    if (this.state.showLoginModal) {
      this.setState({showLoginModal: false})
    }
    else {
      this.setState({showLoginModal: true})
    }
  }
  closeLoginModal() {
    this.setState({showLoginModal: false})
  }
}

const styles = {
  container: {
    minHeight: '80vh',
  },
  inputPS: {
    padding: "0.5%"
  },
  nav_mob: {
    width: '100%',
    padding: '3%',
    borderBottomStyle: 'solid',
    cursor: 'pointer',
    borderBottomWidth: 1, borderBottomColor: 'white'
  },
  semiContainer: {zIndex: 999999999999, padding: '4%', paddingBottom:'10%', height: '10%', backgroundColor: 'white', borderBottomStyle: 'solid', borderBottomColor: '#B22222', position:'fixed', paddingLeft: '10%'}
}
