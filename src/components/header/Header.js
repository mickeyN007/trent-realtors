import React, { Component } from 'react'

import { Row, Col,  } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Breakpoint, { BreakpointProvider } from 'react-socks';
import 'bootstrap/dist/css/bootstrap.css';

import './../../css/header.css'
import logo from './../../images/logo.PNG'
import menu from './../../images/menu.png'
import close from './../../images/close.png'

import account from './../../images/account.png'

import Login from './../loginRegister/login'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      searchForHomes: false,
      showLoginModal: false,
      location: '',
      showMobileMenu: false,
    }
  }
  render() {
    let colorStyle =  {color: 'white', listStyleType: 'none'}
    let colorStyleB =  {color: 'black', listStyleType: 'none', fontSize: '16px', fontWeight: 400, }

    let loginPadding = (Object.keys(this.props.headerStyle).length != 0) ? {marginTop: 110} : {marginTop: '1%'}

    let imagePadding = (Object.keys(this.props.headerStyle).length != 0) ? {marginTop: '-5%'} : {}
    let usr = localStorage.getItem('token')
    return (
      <BreakpointProvider>
      <div style={styles.container}>
      <Breakpoint medium down>
        <Row style={styles.p}>
          <Col xs={10}>
            <Link to='/' ><img src={logo} width="30%" height="100%" /></Link>
          </Col>
          {this.state.showMobileMenu===false && <Col xs={2}>
            <span onClick={this.toggleShowMobileMenu.bind(this)}><img src={menu}  width="80%" height="60%"/></span>
          </Col>}
          {this.state.showMobileMenu===true && <Col xs={2}>
            <span onClick={this.toggleShowMobileMenu.bind(this)}><img src={close}  width="80%" height="60%"/></span>
          </Col>}
        </Row>
        {this.state.showMobileMenu && <div style={styles.q}>
          <div style={styles.nav_mob}>
          <Link style={colorStyle} to="/buy/">Buy a Home</Link>
          </div>
          <div style={styles.nav_mob}>
          <Link  style={colorStyle} to="/sell/">Sell Your Home</Link>
          </div>
          <div style={styles.nav_mob}>
          <Link style={colorStyle} to="/#ourAgents/">Meet Your Agent</Link>
          </div>
          <div style={styles.nav_mob}>
          <Link style={colorStyle} to="/account">{usr ? 'Account' : 'Log In / Register'}</Link>
          </div>


        </div>}
      </Breakpoint>
        <Breakpoint large up>
          <div style={styles.navlinksB}>
            <div style={styles.logoContainer}><img src={logo} style={styles.logo}/></div>
          </div>
        <nav>
          <Row style={{...{width: '40%', padding: '1%', zIndex: 9999999999999999}, ...this.props.headerStyle}}>
            <Col lg={3}>
              <Link to="/">
                <img src={logo} width="50%" height="100%" style={imagePadding}/>
              </Link>
            </Col>
            <Col lg={2}>
              <Link style={colorStyleB} to="/buy/">Buy a Home</Link>
            </Col>
            <Col lg={2}>
                <Link style={colorStyleB} to="/sell/">Sell Your Home</Link>
            </Col>
            <Col lg={2}>
                <Link style={colorStyleB} to={`/#ourAgents`}>Meet Your Agent</Link>
            </Col>
            {usr==null && <Col lg={3} style={{cursor: 'pointer'}}>
                <span onClick={this.toggleLoginModal.bind(this)} style={{marginLeft: '10%'}}><img src={account} width="10%" height="50%" /><span style={{...colorStyleB, ...{marginLeft: '2.5%', marginTop: '50%'}}}>Sign In / Register</span></span>
            </Col>}
            {usr && <Col lg={3} style={{cursor: 'pointer'}}>
                <Link to={'/account'} style={{marginLeft: '10%'}}><img src={account} width="10%" height="50%" /><span style={{...colorStyleB, ...{marginLeft: '2.5%', marginTop: '50%'}}}>Account</span></Link>
            </Col>}
          </Row>
          </nav>
          {this.state.showLoginModal && <Row>
            <Col lg={12}>
               <Login {...this.props} loginPadding={loginPadding} toggleLoading={this.toggleLoading.bind(this)}/>
            </Col>
          </Row>}
        </Breakpoint>
      </div>
      </BreakpointProvider>
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
  toggleLoading(loading) {
    this.props.toggleLoading(loading)
  }
  toggleShowMobileMenu() {
    var { showMobileMenu } = this.state
    this.setState({showMobileMenu: !showMobileMenu})
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
    backgroundColor: 'white',
    zIndex: 9999999999999,
    width: '100%',
    borderColor: "#B22222",
    borderBottomStyle: "solid",
    height: "100px",
      //paddingTop: '2%',
      //paddingBottom: '0',
      //paddingLeft: '10%',

  },
  navlinksB: {
      color: "black",
      fontWeight: "bold",
      margin: 'auto',
      width: '80%',
      display: 'flex'
  },
  logoContainer: {
    flex: 1
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
  nav_mob: {
    width: '100%',
    padding: '1.5%',
    borderBottomStyle: 'solid',
    cursor: 'pointer',
    borderBottomWidth: 1, borderBottomColor: 'white'
         },
  p: {marginBottom: '1000%', zIndex: 999999999999, padding: '4%', paddingBottom:'10%', height: '10%', backgroundColor: 'white', borderBottomStyle: 'solid', borderBottomColor: '#B22222', position:'fixed', paddingLeft: '10%' },
  q: {zIndex: 999999999999, width: '100%', height: '100%', opacity: '1', position: 'fixed', color: 'white', marginTop: '20.5%', backgroundColor: '#5E1914'}
}
