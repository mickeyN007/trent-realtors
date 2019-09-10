import React, { Component } from 'react'

import { Container } from 'react-bootstrap';
import { BreakpointProvider } from 'react-socks';

export default class Showings extends Component {
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
    return <div><center>You dont have any showings</center></div>
  }
}
