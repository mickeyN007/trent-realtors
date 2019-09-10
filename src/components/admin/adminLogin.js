import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Breakpoint, { BreakpointProvider } from 'react-socks'

import Login from './../loginRegister/loginZ'
import LoadingScreen from './../loadingScreen'

export default class AdminLogin extends Component {
  constructor() {
    super()
    this.state ={
      loading: false
    }
  }
  render() {
    return (
      <BreakpointProvider>
      <Breakpoint medium down>
      <Container style={styles.container} fluid>
        <Row>
          <Col xs={12} lg={6}>
            <span style={styles.center}></span>
          </Col>
        </Row>
      </Container>
      </Breakpoint>
      <Breakpoint large up>
      <Container fluid>
        <Row style={styles.container}>
          <Col lg={6} style={styles.background}>
            <span style={styles.center}><img style={{width: '70%', height: '20%'}}src={require("./../../images/logo.PNG")} /></span>
          </Col>
          <Col lg={6} style={styles.loginB}>
            <Login {...this.props} toggleLoading={this.toggleLoading.bind(this)}/>
          </Col>
        </Row>
      </Container>
      </Breakpoint>
      {this.state.loading && <LoadingScreen />}
      </BreakpointProvider>
    )
  }
  toggleLoading(loading) {
    this.setState({loading})
  }
}

const styles = {
  container: {
    //backgroundColor: 'red',
    //background: 'linear-gradient(to right bottom, #b22222, #FFF, #b22222)',
    display: 'flex',
    minHeight: '100vh',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: '45vh',
    borderRadius: '45vh',
    height: '40vh',
    width: '40vh',
    background: 'radial-gradient(white, #f4f4f4)'
    //backgroundColor: 'white'
  },
  background: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    background: 'linear-gradient(to right bottom, #b22222, #FFF, #b22222)',
  },
  loginB: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    paddingLeft: '15vh'
  }
}
