import React, { Component } from 'react'

import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Breakpoint, { BreakpointProvider } from 'react-socks';
import 'bootstrap/dist/css/bootstrap.css';

import './../../css/header.css'
import logo from './../../images/logo.PNG'
import menu from './../../images/menu.png'
import close from './../../images/close.png'

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
      location: '',
      showMobileMenu: false,
    }
  }
  render() {
    let colorStyle =  {color: "black", listStyleType: 'none'}
    let loginPadding = (Object.keys(this.props.headerStyle).length != 0) ? {marginTop: '10%'} : {marginTop: '1%'}

    let imagePadding = (Object.keys(this.props.headerStyle).length != 0) ? {marginTop: '-5%'} : {}
    let contactStyle = (Object.keys(this.props.headerStyle).length != 0) ? {textDecoration: 'none', color: 'black', fontColor: 'black', fontWeight: 'bold', fontSize: '14px'} : {textDecoration: 'none', fontColor: 'white', fontSize: '14px', fontWeight: 'bold', color: 'white'}
    let rightArrowStyle = (Object.keys(this.props.headerStyle).length != 0) ? {backgroundColor: '#d1d1d1', height: '5%', marginTop: -51, position: 'aboslute'} : {backgroundColor: 'red',  height: '5%', position: 'aboslute', marginTop: 5}

    let searchForHomes = (this.state.searchForHomes) ? <span><input style={styles.input}  onChange={(e) => {this.setState({location: e.target.value})}} placeholder="Search by city or state" /><span onClick={this.search.bind(this)} style={rightArrowStyle}><img style={rightArrowStyle} src={rightArrow} width='5%' /></span></span> : <span style={{marginLeft: '35%', marginTop: '-12%'}}><img src={search} width='5%' height="34%"/> <span>Search for Homes</span></span>
    return (
      <BreakpointProvider>
      <div style={styles.container}>
      <Breakpoint medium down>
        <Row style={{marginBottom: '1000%', zIndex: 999999999999, padding: '4%', paddingBottom:'10%', height: '10%', backgroundColor: 'white', borderBottomStyle: 'solid', borderBottomColor: '#B22222', position:'fixed', }}>
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
        {this.state.showMobileMenu && <Row style={{zIndex: 999999999999, width: '100%', height: '100%', opacity: '1', position: 'fixed', marginTop: '15%', backgroundColor: '#bc222222'}}>
          <Col xs={12} style={{width: '1%', padding: '3%'}}>
          <Link style={colorStyle} to="/buy/">Buy a Home</Link>
          </Col>
          <Col xs={12} style={{width: '100%', padding: '3%'}}>
          <Link  style={colorStyle} to="/sell/">Sell Your Home</Link>
          </Col>
          <Col xs={12} style={{width: '100%', padding: '3%'}}>
          <Link style={colorStyle} to="/#ourAgents/">Meet Your Agent</Link>
          </Col>
        </Row>}
      </Breakpoint>
        <Breakpoint large up>
        <nav>
          <Row style={{...{padding: '2%', zIndex: 9999999999999999}, ...this.props.headerStyle}}>
            <Col lg={3}>
              <Link to="/">
                <img src={logo} width="50%" height="100%" style={imagePadding}/>
              </Link>
            </Col>
            <Col lg={2}>
              <Link style={colorStyle} to="/buy/">Buy a Home</Link>
            </Col>
            <Col lg={2}>
                <Link style={colorStyle} to="/sell/">Sell Your Home</Link>
            </Col>
            <Col lg={2}>
                <Link style={colorStyle} to={`/#ourAgents`}>Meet Your Agent</Link>
            </Col>
            <Col lg={3} style={{cursor: 'pointer'}}>
                <span onClick={this.toggleLoginModal.bind(this)} style={{marginLeft: '10%'}}><img src={account} width="10%" height="50%" /><span style={{...colorStyle, ...{marginTop: '50%'}}}>Sign In</span></span>
            </Col>
          </Row>
          </nav>
          {this.state.showLoginModal && <Row>
            <Col lg={12}>
               <Login loginPadding={loginPadding} toggleLoading={this.toggleLoading.bind(this)}/>
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
    clear: 'both',
    zIndex: 9999999999999,

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
