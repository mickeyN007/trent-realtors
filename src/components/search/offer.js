import React, { Component } from 'react'

import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { mySettings } from './../../settings'

export default class Offer extends Component {
  constructor() {
    super()
    this.state = {
      offer: '',
      msg: '',
      email: '',
      to: ''
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Row style={styles.row}>
          <Col lg={12} md={12} style={styles.col}>
            <span style={styles.color}>* Asking price</span><br />
            <input
              readonly
              value={this.props.house.price}
              style={{width: '90%', padding: '2%'}}
            />
          </Col>
          <Col lg={12} md={12} style={styles.col}>
            <span style={styles.color}>* Offer</span><br />
            <input
              type='number'
              placeholder='Offer'
              value={this.state.offer}
              onChange={(e) => this.setState({offer: e.target.value})}
              style={{width: '90%', padding: '2%'}}
            />
          </Col>
          <Col lg={12} md={12}  style={styles.col}>
            <span style={styles.color}>* Message</span><br />
            <textarea
              value={this.state.msg}
              onChange={(e) => this.setState({msg: e.target.value})}
              style={{width: '90%', height: '100%'}}
              placeholder='Message' cols="32" rows="5">
            </textarea>
          </Col>
          <Col lg={12} md={12}  style={styles.col}>
            <input type="button" onClick={this.offer.bind(this)} style={styles.btn} value="Submit" />
          </Col>
        </Row>
      </Container>
    )
  }
  offer() {
    const valid = this.validateInfo()
    if (valid.status) {
    const { email, msg, to, offer } = this.state
    fetch(mySettings.serverID+'api/offer', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        msg, email, to, date: new Date(), offer
      })
    })
    .then((data) => {
      this.setState({msg: '',
      offer: ''})
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
    const { msg, offer } = this.state
    if (/\S/.test(msg)==false || /\S/.test(offer)==false) {
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
