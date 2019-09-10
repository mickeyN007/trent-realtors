import React, { Component } from 'react'

import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Message from './message'
import Offer from './offer'

export default class MessageOffer extends Component {
  constructor() {
    super()
    this.state = {
      display: 'message'
    }
  }
  render() {
    const messageStyle = (this.state.display=='message') ?
    {backgroundColor: '#B22222', color: 'white'} :
    {backgroundColor: 'whitesmoke', color: 'black'}
    const offerStyle = (this.state.display=='offer') ?
                              {backgroundColor: '#B22222', color: 'white'} :
                              {backgroundColor: 'whitesmoke', color: 'black'}
    return (
      <Container style={styles.container}>
        <Row>
          <Col onClick={this.toggleState.bind(this, 'message')} style={{...styles.col, ...messageStyle }}>
            Message
          </Col>
          <Col onClick={this.toggleState.bind(this, 'offer')}  style={{...styles.col, ...offerStyle}}>
            Offer
          </Col>
        </Row>
        <Row>
          {this.display()}
        </Row>
      </Container>
    )
  }
  display() {
    const menu = {
      message: <Message house={this.props.house}/>,
      offer: <Offer house={this.props.house} />
    }
    return menu[this.state.display]
  }
  toggleState(display) {
      this.setState({display})
  }
}

const styles = {
  container: {
    boxShadow: '1px 1px 3px 3px #888888',
  },
  col: {
    textAlign: 'center',
    cursor: 'pointer'
  }
}
