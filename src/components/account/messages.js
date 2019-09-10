import React, { Component } from 'react'

import { Container  } from 'react-bootstrap';
import { BreakpointProvider } from 'react-socks';

export default class Messages extends Component {
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
    return <div><center>You dont have any messages</center></div>
  }
}

