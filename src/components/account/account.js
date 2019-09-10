import React, { Component } from 'react'

import { Container, Row, Col, } from 'react-bootstrap';
import Breakpoint, { BreakpointProvider } from 'react-socks';

import Offers from './offers'
import Dashboard from './dashboard'
import Feedback from './feedback'
import Messages from './messages'
import MyProperties from './myProperties'
import Showings from './showings'
import AccountHeader from './accountHeader'

import LoginRegister from './../loginRegister/loginRegister'

export default class Account extends Component {
  constructor() {
    super()
    this.views = ['Dashboard', 'My Properties', 'Messages', 'Showings', 'Feedback', 'Offers']
    this.state = {
      view: 'Dashboard'
    }
    this.components = {
      'Dashboard': <Dashboard changeView={this.changeView.bind(this)}/>,
      'My Properties': <MyProperties />,
      'Messages': <Messages />,
      'Showings': <Showings />,
      'Feedback': <Feedback />,
      'Offers': <Offers />
    }
  }
  render() {
    var usr = JSON.parse(localStorage.getItem('token'))
    if (usr) {
    var username =  usr.user.name
    return (
      <BreakpointProvider>
        <Breakpoint medium down>
        <div>
          <AccountHeader username={username} logOut={this.logOut.bind(this)} changeView={this.changeView.bind(this)} views={this.views} />
          <Container fluid style={{backgroundColor: 'whitesmoke'}}>
          <Container style={{minHeight: '90vh', margin:'auto', paddingTop: 100, backgroundColor: 'white'}}>
            {this.displayView()}
          </Container>
          <Row>
            <Col xs={12} lg={12} style={{textAlign: 'center'}}>
              <span>&copy; 2019 Trent Realtors | All Rights Reserved.</span>
            </Col>
          </Row>
          </Container>
        </div>
        </Breakpoint>
        <Breakpoint large up>
        <div>
          <AccountHeader username={username} logOut={this.logOut.bind(this) } changeView={this.changeView.bind(this)} views={this.views} />
          <Container fluid style={{backgroundColor: 'whitesmoke'}}>
          <Container style={{minHeight: '75vh', margin:'auto', paddingTop: '2%', backgroundColor: 'white'}}>
            {this.displayView()}
          </Container>
          <Row>
            <Col xs={12} lg={12} style={{textAlign: 'center'}}>
              <span>&copy; 2019 Trent Realtors | All Rights Reserved.</span>
            </Col>
          </Row>
          </Container>
        </div>
        </Breakpoint>
      </BreakpointProvider>
    )}
    else
      return <LoginRegister />

  }
  displayView() {
      return this.components[this.state.view]
  }
  isLoggedIn() {
      }
  changeView(view) {
    this.setState({view})
  }
  logOut() {
    this.props.logOut()
  }
}

const styles = {
  //container={}
}
