import React, { Component } from 'react'

import { Link } from "react-router-dom";
import { mySettings } from './../../settings'
import  bcrypt from 'bcryptjs'

import Loader from './../loader/loader'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }
  render() {
    return (
      <div style={styles.container}>
        <p><b>Sign In</b></p>
        <div>Enter your email address and password to login.</div>

        <br /><span><b>Email Address</b></span>
        <input
          onChange={(e) => this.setState({email: e.target.value})}
          placehoder="Email Address"
          type='email' style={styles.input}
        />

        <span><b>Password</b></span>
        <input
          onChange={(e) => this.setState({password: e.target.value})}
          placehoder="Password"
          type='password'
          style={styles.input}
        />

        <div>Trouble logging in? <Link to='/recover'>Recover your account.</Link></div>
        <div>Don't have an account? <Link to='/LoginRegister'>Register</Link></div>

        <div onClick={this.login.bind(this)} style={styles.btn}>SIGN IN</div>
        <Loader loading={this.state.loading} />
      </div>
    )
  }
  login() {
    const { email, password } = this.state
    var body;
    if (/\S/.test(email) && /\S/.test(password)) {
      //this.setState({loading: true})
      // enrypt password
      bcrypt.hash(password, 10, function(err, hash) {
        //password = hash

        const {method, headers} = mySettings.optionsB
        var body = {email, password: hash}
        var options = {body, method, headers}
        fetch(mySettings.serverID+'api/login', options)
        .then(data => {
          this.setState({loading: false})
        })
        .catch(err => alert("Can't conect to Trent Realtor's server at the moment"))
      });
    }
    else{
      this.setState({loading: false})
      alert('Please fill all fields!')
    }
  }
}

const styles = {
  container: {
    backgroundColor: 'white',
    marginTop: '10%',
    paddingLeft: '2%',
    paddingRight: '2%',
    position: 'fixed',
    marginLeft: '73%',
    width: '21%',
    fontSize: '15px',
    boxShadow: '1px 2px 5px 5px #888888',
    zIndex: 9999999999
  },
  input: {
    padding: '3%',
    display: 'block',
    marginBottom: '7%'
  },
  btn: {
    marginTop: '3%',
    width: '50%',
    padding: '3%',
    backgroundColor: "#B22222",
    textAlign: 'center',
    color: 'white',
    marginBottom: '4%'
  }
}
