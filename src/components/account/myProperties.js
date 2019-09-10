import React, { Component } from 'react'

import { Container  } from 'react-bootstrap';
import { BreakpointProvider } from 'react-socks';

export default class MyProperties extends Component {
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
    return <div><center>Coming soon..</center></div>
  }
}
