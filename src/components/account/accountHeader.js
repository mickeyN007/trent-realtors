import React, { Component } from 'react'

import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import logo from './../../images/logo.PNG'
import './../../css/account.css'

import 'bootstrap/dist/css/bootstrap.css';

import Breakpoint, { BreakpointProvider } from 'react-socks';

export default class AccountHeader extends Component {
  constructor() {
    super()
  }
  render() {
    var { username, } = this.props
    return (
      <BreakpointProvider>
        <div>
          <Breakpoint medium down>
            <Container>
              <Row>
                <Col sm={3}>
                    <Link to='/'>
                      <img src={logo} width='20%'/>
                    </Link>
                </Col>
                {this.displaySubMenuB()}
              </Row>
            </Container>
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
                      <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
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
          <Col id='pointer' sm={12} className='text-center' style={{color: 'white'}} onClick={this.changeView.bind(this, item)}>
            <span>{item}</span>
          </Col>
        )
      })
    )
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
    this.props.changeView(view)
  }
}

const styles = {
  //container={}
}
