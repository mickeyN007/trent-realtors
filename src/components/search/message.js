import React, { Component } from 'react'

import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { mySettings } from './../../settings'

export default class Message extends Component {
  constructor() {
    super()
    this.state = {
      msg: '',
      to: '',
      email: '',
      subject: ''
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Row style={styles.row}>
          <Col lg={12} md={12} style={styles.col}>
            <span style={styles.color}>* Subject</span><br />
            <input
              placeholder='Subject'
              style={{width: '90%'}}
              value={this.state.subject}
              onChange={(e) => this.setState({subject: e.target.value})}
            />
          </Col>
          <Col lg={12} md={12}  style={styles.col}>
            <span style={styles.color}>* Message</span><br />
            <textarea
              onChange={(e) => this.setState({msg: e.target.value})}
              value={this.state.msg}
              style={{width: '90%', height: '100%'}}
              placeholder='Message' cols="32" rows="5">
            </textarea>
          </Col>
          <Col lg={12} md={12}  style={styles.col}>
            <input type="button" style={styles.btn} value="Submit" onClick={this.message.bind(this)}/>
          </Col>
        </Row>
      </Container>
    )
  }
  message() {
    const valid = this.validateInfo()
    if (valid.status) {
    const { email, msg, to, subject } = this.state
    fetch(mySettings.serverID+'api/message', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        msg, email, to, date: new Date(), subject
      })
    })
    .then((data) => {
      this.setState({msg: '',
      subject: ''})
    })
    .catch((err) => alert("Can't connect to Trent Realtor's server at this time."))
    }
    else {
      alert(valid.msg)
    }
  }
  validateInfo() {
    var err = {
      status: false,
      msg: ''
    }
    const { msg, subject } = this.state
    if (/\S/.test(msg)==false || /\S/.test(subject)==false) {
      err.msg = 'Please fill all fields!'
    }
    else {
      err.status = true
    }
    return err
  }
}

const styles = {
  container: {
    boxShadow: '1px 1px 3px 3px #888888',
    padding: '3%',
  },
  row: {
    marginLeft: '2%',
    borderBottomColor: 'yellow'
  },
  col: {
    padding: '2%'
  },
  btn: {
    width: '90%',
    color: 'white',
    backgroundColor: '#B22222',
    marginTop: '10%'
  },
  color: {
    color: '#B22222'
  }
}
