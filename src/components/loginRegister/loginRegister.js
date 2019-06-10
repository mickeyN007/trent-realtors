import React, { Component } from 'react'

import Header from './../header/HeaderC'
import Register from './register'
import LoginB from './loginB'

export default class LoginRegister extends Component {
  constructor() {
    super()
    this.state = {
      view: 'register'
    }
  }
  render() {
    var login = {
      color: (this.state.view==='login') ? 'black':'white',
      backgroundColor: (this.state.view==='login') ? 'white':'#B22222'
    }
    var register = {
      color: (this.state.view==='register') ? 'black':'white',
      backgroundColor: (this.state.view==='register') ? 'white':'#B22222'
    }
    return (
      <div style={styles.container}>
        <Header  headerStyle={styles.headerStyle} />
        <center><div style={styles.miniContainer}>
          <h2><center>Sign in or Register</center></h2>
          <div style={styles.loginRegister}>
            <center><span style={{...styles.header, ...login }} onClick={this.toggleView.bind(this, 'login')}>
              SIGN IN
            </span></center>
            <center>
            <span style={{...styles.header, ...register}} onClick={this.toggleView.bind(this, 'register')}>
              REGISTER
            </span>
            </center>
          </div>
          <div style={styles.loginRegister}>
            {this.displayView()}
          </div>
        </div>
        </center>
      </div>
    )
  }
  displayView() {
    const menu = {
      login: <LoginB />,
      register: <Register />
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
    paddingBottom:'15%'
  },
  loginRegister: {
    //width: '80%'
    marginLeft: '20%'

  },
  header: {
    float: 'left',
    width: '30%',
    padding: '2%'
  },
  headerStyle: {
    backgroundColor: "#B22222",
    color: "white",
    fontWeight: "bold",
    position: 'fixed',
    width: '100%',
    height: "90px",
    paddingTop: '0',
    paddingBottom: '0',
    margin: 0,
  },
  miniContainer: {
    paddingTop: '10%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
