import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

export default class AdminLogin extends Component {
  render() {
    return (
      <Container style={styles.container} fluid>
        <Row>
          <Col xs={12} lg={12}>
            <span style={styles.center}></span>
          </Col>
        </Row>
      </Container>
    )
  }
}

const styles = {
  container: {
    //backgroundColor: 'red',
    background: 'linear-gradient(to right bottom, #b22222, #FFF, #b22222)',
    minHeight: '100vh',
    minWidth: '100vh',
    display: 'flex'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: '45vh',
    borderRadius: '45vh',
    height: '60vh',
    width: '60vh',
    backgroundColor: 'white'
  }
}
