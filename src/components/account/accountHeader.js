import React, { Component } from 'react'

import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import logo from './../../images/logo.PNG'
import menu from './../../images/menu.png'
import close from './../../images/close.png'
import './../../css/account.css'

import 'bootstrap/dist/css/bootstrap.css';

import Breakpoint, { BreakpointProvider } from 'react-socks';

export default class AccountHeader extends Component {
  constructor() {
    super()
    this.state = {
      showMobileMenu: false,
    }
  }
  render() {
    //alert(Object.keys(localStorage.getItem('token')))
    var username = this.props.username
    return (
      <BreakpointProvider>
        <div>
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
          {this.displaySubMenuB()}
          <div style={{...{marginTop: 100}, ...styles.nav_mob}} onClick={this.logOut.bind(this)}>
          <span>Log Out</span>
          </div>

          </div>}
      </Breakpoint>

          <Breakpoint large up>
            <Container fluid style={{ backgroundColor: '#B22222'}} >
              <Container fluid style={{padding: '1.5%', paddingLeft: 0}}>
              <Row>
                <Col lg={6} className='text-center'>
                    <Link to='/'>
                      <img src={logo} width='20%'/>
                    </Link>
                </Col>
                <Col lg={6} className='text-center'>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      {username}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item >Settings</Dropdown.Item>
                      <Dropdown.Item onClick={this.logOut.bind(this)}>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
              </Container>
            </Container>

            <Container fluid style={{ backgroundColor: '#cc3333'}} >
              <Container style={{padding: '1.2%'}}>
              <Row>
                {this.getSubMenu()}
              </Row>
              </Container>
            </Container>
          </Breakpoint>
        </div>
      </BreakpointProvider>
    )
  }
  displaySubMenuB() {
    const views = this.props.views //['Dashboard', 'My Properties', 'Messages', 'Showings', 'Feedback', 'Offer']
    return (
      views.map((item) => {
        return (
          <div style={styles.nav_mob} onClick={this.changeView.bind(this, item)}>
          <span>{item}</span>
          </div>
        )
      })
    )
  }
  toggleShowMobileMenu() {
    var { showMobileMenu } = this.state
    this.setState({showMobileMenu: !showMobileMenu})
  }
  getSubMenu() {
    const views = this.props.views //['Dashboard', 'My Properties', 'Messages', 'Showings', 'Feedback', 'Offer']
    return (
      views.map((item) => {
        return (
          <Col id='pointer' lg={2} className='text-center' style={{color: 'white'}} onClick={this.changeView.bind(this, item)}>
            <span>{item}</span>
          </Col>
        )
      })
    )
  }
  changeView(view) {
    this.toggleShowMobileMenu()
    this.props.changeView(view)
  }
  logOut() {
    this.props.logOut()
  }
}

const styles = {
  nav_mob: {
    width: '100%',
    padding: '3%',
    borderBottomStyle: 'solid',
    cursor: 'pointer',
    borderBottomWidth: 1, borderBottomColor: 'white'
  },
  q: {zIndex: 999999999999, width: '100%', height: '100%', opacity: '1', position: 'fixed', color: 'white', marginTop: '20.5%', backgroundColor: '#5E1914'},
  p: {marginBottom: '1000%', zIndex: 999999999999, padding: '4%', paddingBottom:'10%', height: '10%', backgroundColor: 'white', borderBottomStyle: 'solid', borderBottomColor: '#B22222', position:'fixed', paddingLeft: '10%' },
}
