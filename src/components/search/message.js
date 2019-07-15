import React, { Component } from 'react'

import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Message extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Row style={styles.row}>
          <Col lg={12} md={12} style={styles.col}>
            <span style={styles.color}>* Subject</span><br />
            <input
              placeholder='Subject'
              style={{width: '90%'}}
            />
          </Col>
          <Col lg={12} md={12}  style={styles.col}>
            <span style={styles.color}>* Message</span><br />
            <textarea style={{width: '90%', height: '100%'}} placeholder='Message' cols="32" rows="5">
            </textarea>
          </Col>
          <Col lg={12} md={12}  style={styles.col}>
            <input type="button" style={styles.btn} value="Submit" />
          </Col>
        </Row>
      </Container>
    )
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
