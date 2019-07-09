import React, { Component } from 'react'

import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Breakpoint, { BreakpointProvider } from 'react-socks';

export default class Feedback extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <BreakpointProvider>
        <div>
          <Container style={{textAlign:'center'}}>
            {this.displayView()}
          </Container>
        </div>
      </BreakpointProvider>
    )
  }
  displayView() {
    return <div><center>You dont have any feedback</center></div>
  }
}

const styles = {
  //container={}
}
