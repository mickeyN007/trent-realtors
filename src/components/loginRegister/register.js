import React, { Component } from 'react'

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
          <h1>Who are you registering as?</h1>
          <div style={styles.options}>
            <span style={{...styles.option, ...{backgroundColor: this.state.who==='SELLER' ? 'whitesmoke':'white'}}} onClick={this.selectWho.bind(this, 'SELLER')}>
              SELLER
            </span>
            <span style={{...styles.option, ...{backgroundColor: this.state.who==='BUYER' ? 'whitesmoke':'white'}}} onClick={this.selectWho.bind(this, 'BUYER')}>
              BUYER
            </span>
            <span style={{...styles.option, ...{backgroundColor: this.state.who==='AGENT' ? 'whitesmoke':'white'}}} onClick={this.selectWho.bind(this, 'AGENT')}>
              AGENT
            </span>
          </div>
        </div>
        {this.state.who && <RegisterForm who={this.state.who}/>}
      </div>
    )
  }
  selectWho(who) {
    this.setState({who})
  }
}

const styles = {
  container: {
    flex: 1,
    clear: 'both',
    marginRight: '32%',
    paddingBottom: '8%'
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
    marginRight: '15%'
  },
  who: {
    paddingTop: '2%',
    backgroundColor: 'white',
    width: '100%',
    paddingBottom: '5%'
  }
}
