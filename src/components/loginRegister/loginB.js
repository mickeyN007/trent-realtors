import React, { Component } from 'react'

import { Link } from "react-router-dom";
import  bcrypt from 'bcryptjs'

import LoadingScreen from './../loadingScreen'
import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';

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
        <Row style={styles.row}>
          <Col xs={12} lg={6}>
            <p style={{marginLeft: '-64%'}}>Email Address</p>
            <input
              type='email'
              style={styles.input}
              placehoder='Email Address'
              onChange={(e) => this.setState({email: e.target.value})}
            />
          </Col>
          <Col xs={12} lg={6} >
            <p style={{marginLeft: '-72%'}}>Password</p>
            <input
              type='password'
              style={styles.input}
              placehoder='Password'
              onChange={(e) => this.setState({password: e.target.value})}
            />
          </Col>
        </Row>
        <Row style={styles.row}>
        <Col xs={12} lg={8} style={{marginLeft: '-14%'}}>
          <Link to="/forgot/">Forgotten your password?</Link>
        </Col>
        <Col xs={12} lg={4} style={styles.btn} onClick={this.login.bind(this)}>
          SIGN IN
        </Col>
        </Row>
        {this.state.loading && <LoadingScreen />}
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
          this.toggleLoading(false)

          if (data.status)
            this.setState({loading: false})
          else {
            alert(data.msg)
          }
        })
        .catch(err =>{ alert("Can't cconect to Trent Realtor's server at the moment"); this.toggleLoading(false)})
      }.bind(this));
    }
    else{
      alert('Please fill all fields!')
    }
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: '7%',
    backgroundColor: 'white',
    marginRight: '14%',
    fontSize: '18px'

  },
  options: {
    width: '100%',
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
    width: '100%'
  },
  btn: {
    width: '20%',
    padding: '2%',
    color: 'white',
    backgroundColor: '#B22222',
    cursor: 'pointer',
    marginBottom: '3%'

  },
  cred: {
    width: '45%',
    float: 'left'
  },
  row: {
    paddingTop: '3%',
    height: '20%',
    backgroundColor: 'white',
    //paddingRight: '1%',
    width: '100%',
    clear: 'both'
  },
}
