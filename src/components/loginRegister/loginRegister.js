import React, { Component } from 'react'

import { Container, Row, Col,  } from 'react-bootstrap';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import LoadingScreen from './../loadingScreen'

import Header from './../header/HeaderC'
import Register from './register'
import LoginB from './loginB'

export default class LoginRegister extends Component {
  constructor() {
    super()
    this.state = {
      view: 'register',
      loading: false
    }
  }
  render() {
    var login = {
      color: (this.state.view==='login') ? 'black':'white',
      backgroundColor: (this.state.view==='login') ? 'white':'#B22222',
      padding: '2%',
      cursor: 'pointer'
    }
    var register = {
      color: (this.state.view==='register') ? 'black':'white',
      backgroundColor: (this.state.view==='register') ? 'white':'#B22222',
      padding: '2%',
      cursor: 'pointer'
    }
    return (
      <div style={styles.container}>
        <BreakpointProvider>
        <Header toggleLoading={this.toggleLoading.bind(this)} headerStyle={styles.headerStyle} />
        <center><div style={styles.miniContainer}>
          <Breakpoint medium down>
          <Row>
          <Col xs={12} style={{paddingTop: '13%', paddingBottom: '5%'}} lg={8}><h2><center>Sign in or Register</center></h2></Col>
          </Row>
          <Row style={{marginLeft: '7%'}}>
            <Col xs={10} lg={3} style={{ ...login }} onClick={this.toggleView.bind(this, 'login')}>
              SIGN IN
            </Col>
            <Col xs={10} lg={3} style={{...register}} onClick={this.toggleView.bind(this, 'register')}>
              REGISTER
            </Col>
          </Row>
          <Row style={{marginLeft: '4%'}}>
          <Col xs={12} lg={6}><h2><center>{this.displayView()}</center></h2></Col>
          </Row>
          </Breakpoint>
          <Breakpoint large up>
          <Row>
          <Col xs={12} lg={12}><h2><center>Sign in or Register</center></h2></Col>
          </Row>
          <Row style={styles.loginRegister}>
            <Col xs={6} lg={4} style={{...{marginLeft: '5%'}, ...login }} onClick={this.toggleView.bind(this, 'login')}>
              SIGN IN
            </Col>
            <Col xs={6} lg={4} style={{...register}} onClick={this.toggleView.bind(this, 'register')}>
              REGISTER
            </Col>
          </Row>
          <Row style={styles.loginRegister}>
          <Col xs={12} lg={10} style={{marginLeft: '3.8%', paddingRight: '4.7%'}}><h2><center>{this.displayView()}</center></h2></Col>
          </Row>
          </Breakpoint>
        </div>
        </center>
        </BreakpointProvider>
        {this.state.loading && <LoadingScreen />}
      </div>
    )
  }
  toggleLoading(loading) {
    //alert(555)
    this.setState({loading})
  }
  displayView() {
    const menu = {
      login: <LoginB />,
      register: <Register toggleView={this.toggleView.bind(this)}/>
    }
    return menu[this.state.view]
  }
  toggleView(view) {
    this.setState({view})
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)',
    minHeight: '100vh',
    paddingBottom: '15%',
    fontSize: '15px'
  },
  loginRegister: {
    //width: '80%'
    marginLeft: '20%'

  },
  headerStyle: {
    zIndex: 9999999999999,
  },
  miniContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '14%'
  }
}
