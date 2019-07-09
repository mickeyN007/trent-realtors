import React, { Component } from 'react'

import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Breakpoint, { BreakpointProvider } from 'react-socks';

import Offers from './offers'
import Dashboard from './dashboard'
import Feedback from './feedback'
import Messages from './messages'
import MyProperties from './myProperties'
import Showings from './showings'
import AccountHeader from './accountHeader'

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
    var { username, } = this.props
    return (
      <BreakpointProvider>
        <Breakpoint medium down>
        <div>
          <AccountHeader changeView={this.changeView.bind(this)} views={this.views} username={username} />
          <Container fluid style={{backgroundColor: 'whitesmoke'}}>
          <Container style={{minHeight: '90vh', margin:'auto', paddingTop: '1.5%', backgroundColor: 'white'}}>
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
          <AccountHeader changeView={this.changeView.bind(this)} views={this.views} username={username} />
          <Container fluid style={{backgroundColor: 'whitesmoke'}}>
          <Container style={{minHeight: '75vh', margin:'auto', paddingTop: '1.5%', backgroundColor: 'white'}}>
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
    )
  }
  displayView() {
    return this.components[this.state.view]
  }
  changeView(view) {
    this.setState({view})
  }
}

const styles = {
  //container={}
}
