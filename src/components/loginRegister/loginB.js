import React, { Component } from 'react'

import { Link } from "react-router-dom";
import  bcrypt from 'bcryptjs'

import Loader from './../loader/loader'

import { mySettings } from './../../settings'

export default class LoginB extends Component {
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
        <div style={styles.credentials}>
          <div style={styles.cred}>
            <p style={{left: 0}}>Email Address</p>
            <input
              type='email'
              style={styles.input}
              placehoder='Email Address'
              onChange={(e) => this.setState({email: e.target.value})}
            />
          </div>
          <div style={{marginLeft: '6.7%', float: 'left'}}> &nbsp;</div>
          <div style={styles.cred}>
            <p>Password</p>
            <input
              type='password'
              style={styles.input}
              placehoder='Password'
              onChange={(e) => this.setState({password: e.target.value})}
            />
          </div>
        </div>
        <div style={styles.options}>
        <div style={styles.forgot}>
          <Link to="/forgot/">Forgotten your password?</Link>
        </div>
        <div style={styles.btn} onClick={this.login.bind(this)}>
          SIGN IN
        </div>
        </div>
        <Loader loading={this.state.loading} />
      </div>
    )
  }
  login() {
    const { email, password } = this.state
    var body;
    if (/\S/.test(email) && /\S/.test(password)) {
      // enrypt password
      //this.setState({loading: true})
      bcrypt.hash(password, 10, function(err, hash) {
        //password = hash

        const {method, headers} = mySettings.optionsB
        var body = JSON.stringify({email, password: hash})
        var options = {body, method, headers}
        fetch(mySettings.serverID+'api/login', options)
        .then(data => data.json())
        .then (data => {
          if (data.status)
            this.setState({loading: false})
          else {
            alert(data.msg)
          }
        })
        .catch(err => alert("Can't conect to Trent Realtor's server at the moment"))
      }.bind(this));
    }
    else{
      this.setState({loading: false})
      alert('Please fill all fields!')
    }
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: '7%',
    backgroundColor: 'white',
    marginRight: '32%'

  },
  options: {
    width: '90%',
    clear: 'both',
    paddingTop: '5%',
    paddingBottom: '10%',
    marginLeft: '3%',
    backgroundColor: 'white',
  },
  credentials: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    height: '20%'
  },
  input: {
    padding: '2.5%',
    width: '70%'
  },
  forgot: {
    float: 'left'
  },
  btn: {
    width: '20%',
    padding: '2%',
    color: 'white',
    marginRight: '5%',
    backgroundColor: '#B22222',
    float: 'right'
  },
  cred: {
    width: '45%',
    float: 'left'
  }
}
