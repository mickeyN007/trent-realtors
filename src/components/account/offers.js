import React, { Component } from 'react'

import { BreakpointProvider } from 'react-socks';
import { Container,  } from 'react-bootstrap';

export default class Offers extends Component {
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
    return <div><center>You dont have any offers</center></div>
  }
}

