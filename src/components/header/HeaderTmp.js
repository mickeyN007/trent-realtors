import React, { Component } from 'react'
import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
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
    let headerStyle = {
      zIndex: 9999999999999999999,
      backgroundColor: 'white',
      color: 'black',
      fontWeight: 'bold',
      position: 'fixed',
      height: '100px',
      paddingTop: '2%',
      paddingBottom: '0',
      margin: 0,
      borderColor: '#B22222',
      borderBottomStyle: 'solid',
      width: '100%'
    }
    let colorStyle = (Object.keys(this.props.headerStyle).length != 0) ? {color: 'white'} : {color: "black"}
    let imagePadding = (Object.keys(this.props.headerStyle).length != 0) ? {marginTop: '-90%'} : {}
    let loginPadding = (Object.keys(this.props.headerStyle).length != 0) ? {marginTop: '10%'} : {marginTop: '1%'}
    let mColorStyle = (Object.keys(this.props.headerStyle).length != 0) ? {color: 'black', cursor: 'pointer'} : {color: 'white', cursor: 'pointer'}
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
          {this.state.showMobileMenu && <Row style={{padding: '3%', zIndex: 999999999999, width: '100%', height: '100%', opacity: '1', position: 'fixed', marginTop: '17.5%', backgroundColor: '#5E1914'}}>
            <Col xs={12} style={{width: '1%', padding: '3%', cursor: 'pointer'}}>
            <Link style={mColorStyle} to="/buy/">BUY</Link>
            </Col>
            <Col xs={12} style={{width: '100%', padding: '3%', cursor: 'pointer'}}>
            <Link style={mColorStyle} to="/sell/">SELL</Link>
            </Col>
            <Col xs={12} style={{width: '100%', padding: '3%', cursor: 'pointer'}}>
            <Link style={mColorStyle} to="/valuation">LISTING APPOINTMENT</Link>
            </Col>
            <Col xs={12} style={{width: '100%', padding: '3%', cursor: 'pointer'}}>
            <Link style={mColorStyle} to="/valuation">TOUR LISTS</Link>
            </Col>
            <Col xs={12} style={{width: '100%', padding: '3%', cursor: 'pointer'}}>
            <Link to="/account" style={mColorStyle}>ACCOUNT</Link>
            </Col>
          </Row>}
        </Breakpoint>
        <Breakpoint large up>
        <nav>
          <Row style={{...{padding: '1.5%', zIndex: 9999999999999999}, ...headerStyle}}>
            <Col lg={3}>
              <Link to="/">
                <img src={logo} width="40%" height="100%" style={imagePadding}/>
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

            <Col lg={2}  style={{cursor: 'pointer'}}>
                <span onClick={this.toggleLoginModal.bind(this)}><img src="https://img.icons8.com/cotton/64/000000/gender-neutral-user.png" width="25%" height="45%"/><span style={{...colorStyle, ...{marginTop: '50%'}}}>Sign In</span></span>
            </Col>
          </Row>
          </nav>
          {this.state.showLoginModal && <Row>
            <Col lg={12}>
               <Login loginPadding={loginPadding}  toggleLoading={this.toggleLoading.bind(this)}/>
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
    minHeight: '12vh',
  },
  inputPS: {
    padding: "0.5%"
  },
  semiContainer: {zIndex: 999999999999, padding: '4%', paddingBottom:'10%', height: '10%', backgroundColor: 'white', borderBottomStyle: 'solid', borderBottomColor: '#B22222', position:'fixed', }
}
