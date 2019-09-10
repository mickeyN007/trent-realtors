import React, { Component } from 'react'

import { Row, Col,  } from 'react-bootstrap';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import LoadingScreen from './../loadingScreen'

import Header from './../header/Header'
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
      color: (this.state.view==='login') ? 'white':'black',
      backgroundColor: (this.state.view==='login') ? '#B22222':'white',
      padding: '2%',
      cursor: 'pointer'
    }
    var register = {
      color: (this.state.view==='register') ? 'white':'black',
      backgroundColor: (this.state.view==='register') ? '#B22222':'white',
      padding: '2%',
      cursor: 'pointer'
    }
    return (
      <div style={styles.container}>
        <BreakpointProvider>
        <Header {...this.props} toggleLoading={this.toggleLoading.bind(this)} headerStyle={styles.headerStyle} />
        <center><div style={styles.miniContainer}>
          <Breakpoint medium down>
          <Row>
          <Col xs={12} style={{paddingTop: '20%', paddingBottom: '5%'}} lg={8}><h2><center>Sign in or Register</center></h2></Col>
          </Row>
          <Row style={{marginLeft: '7.6%'}}>
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
          <Row style={{padding: '3%', width: '54.1%', marginLeft: 23}}>
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
         {this.state.loading && <LoadingScreen />}
       </BreakpointProvider>
      </div>
    )
  }
  toggleLoading(loading) {
    this.setState({loading})
  }
  displayView() {
    const menu = {
      login: <LoginB {...this.props} toggleLoading={this.toggleLoading.bind(this)}/>,
      register: <Register toggleLoading={this.toggleLoading.bind(this)} toggleView={this.toggleView.bind(this)}/>
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
    marginLeft: '18%',
  },
  headerStyle: {
    zIndex: 9999999999999,
           backgroundColor: "white",
      color: "black",
      fontWeight: "bold",
      position: 'fixed',
      height: "100px",
      paddingTop: '2%',
      paddingBottom: '0',
      paddingLeft: '10%',
      margin: 0,
      borderColor: "#B22222",
      borderBottomStyle: "solid",
      width: '100%'
  },
  miniContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%'
  }
}
