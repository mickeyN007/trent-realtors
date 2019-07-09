import React, { Component } from 'react'

import Breakpoint, { BreakpointProvider } from 'react-socks';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';

import Loader from 'react-loader-spinner'

export default class LoadingScreen extends Component {
  render() {
    return (
      <Container fluid style={{width: '100%', height: '100%', zIndex: 9999999999999999, margin: 0}}>
        <Loader
           type="ThreeDots"
           color="#B22222"
           height="20%"
           width="20%"
        />
      </Container>
    )
  }
}
