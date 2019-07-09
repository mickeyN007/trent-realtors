import React, { Component } from 'react'

import { Container, Row, Col,  } from 'react-bootstrap';

import RegisterForm from './registerForm'
export default class Register extends Component {
  constructor() {
    super()
    this.state = {
      who: null
    }
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.who}>
          <Row>
          <Col xs={12} lg={12}><h2>Who are you registering as?</h2></Col>
          </Row>
          <Row style={styles.options}>
            <Col xs={4} lg={4}><span style={{...styles.option, ...{backgroundColor: this.state.who==='SELLER' ? 'whitesmoke':'white'}}} onClick={this.selectWho.bind(this, 'SELLER')}>
              SELLER
            </span>
            </Col>
            <Col xs={4} lg={4}><span style={{...styles.option, ...{backgroundColor: this.state.who==='BUYER' ? 'whitesmoke':'white'}}} onClick={this.selectWho.bind(this, 'BUYER')}>
              BUYER
            </span></Col>
            <Col xs={4} lg={4}><span style={{...styles.option, ...{backgroundColor: this.state.who==='AGENT' ? 'whitesmoke':'white'}}} onClick={this.selectWho.bind(this, 'AGENT')}>
              AGENT
            </span></Col>
          </Row>
        </div>
        {this.state.who && <RegisterForm toggleView={this.toggleView.bind(this)} who={this.state.who}/>}
      </div>
    )
  }
  selectWho(who) {
    this.setState({who})
  }
  toggleView(view) {
    this.props.toggleView(view)
  }
}

const styles = {
  container: {
    flex: 1,
    clear: 'both',
    marginRight: '14%',
    paddingBottom: '8%',
    fontSize: '18px'

  },
  options: {
    height: '50%',
    width: '100%',
    paddingTop: '3%',
    marginLeft: '4%'
  },
  option: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: '1.5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    cursor: 'pointer'
  },
  who: {
    paddingTop: '2%',
    backgroundColor: 'white',
    width: '100%',
    paddingBottom: '5%'
  }
}
