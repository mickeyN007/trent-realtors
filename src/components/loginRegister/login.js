import React, { Component } from 'react'

import { Link } from "react-router-dom";
import { mySettings } from './../../settings'

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
      <div style={{...styles.container, ...this.props.loginPadding}}>
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
      </div>
    )
  }
  toggleLoading(loading) {
    this.props.toggleLoading(loading)
  }
  login() {
    const { email, password } = this.state
    var body;
    if (/\S/.test(email) && /\S/.test(password)) {
      this.toggleLoading(true)
      //this.setState({loading: true})
      // enrypt password
      // bcrypt.hash(password, 10, function(err, hash) {
        //password = hash

        const {method, headers} = mySettings.optionsB
        body = JSON.stringify({email, password})
        var options = {body, method, headers}
        fetch(mySettings.serverID+'api/login', options)
        .then(data => data.json())
        .then (data => {
          this.toggleLoading(false)
          if (data.status){
            this.goToAccount(data.token)
          }
          else {
            alert(data.msg)
          }
        })
        .catch(err =>{ alert("Can't connect to Trent Realtor's server at the moment"); this.toggleLoading(false)})
    }
    else{
      alert('Please fill all fields!')
    }
  }
  storeSession(token) {
    localStorage.setItem('token', JSON.stringify(token))
  }
  isLoggedIn(token) {
    return localStorage.getItem('token') ? true : false
  }
  logOut() {
    localStorage.removeItem('token')
  }
  goToAccount(token) {
    this.storeSession(token)
    this.props.history.push({
      pathname: '/account',
      state: {
        username: token.user.name,
      }
    })
    window.location.href='/account'
  }
}

const styles = {
  container: {
    backgroundColor: 'white',
    marginTop: '.5%',
    paddingLeft: '2%',
    paddingTop: '2%',
    paddingRight: '2%',
    position: 'fixed',
    marginLeft: '75%',
    width: '21%',
    fontSize: '15px',
    //boxShadow: '1px 2px 5px 5px #888888',
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
    marginBottom: '4%',
    cursor: 'pointer'
  }
}
