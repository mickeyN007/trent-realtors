import React, { Component } from 'react'

import { mySettings } from './../../settings'
import  bcrypt from 'bcryptjs'

import LoadingScreen from './../loadingScreen'
import { Container, Row, Col,  } from 'react-bootstrap';

export default class RegisterForm extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Mr',
      titleDrpDwnStatus: false,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      confirm: '',
      license: '',
      jurisdiction: '',
      loading: false
    }
  }
  render() {
    const agents =
    (<Row style={styles.row}>
      <Col lg={6} xs={12}><input style={styles.input} placeholder='License' onChange={(e) => this.setState({license : e.target.value})}/></Col>
      <Col lg={6} xs={12}><input style={styles.input} placeholder='Jurisdiction' onChange={(e) => this.setState({jurisdiction : e.target.value})}/></Col>
    </Row>)
    const titles = ['Mr', 'Mrs', 'Miss', 'Dr']
    const titleDrpDwn = titles.map((title, key) =>
                            <div style={{cursor: 'pointer', fontSize: '18px'}} key={key} onClick={this.selectTitle.bind(this, title)}>
                              {title}
                            </div>
                        )
    return (
      <div style={styles.container}>
        <div style={styles.miniContainer}>
        <Row>
        <Col lg={12} xs={12}><div onClick={this.toggleTitle.bind(this)} style={styles.title}>{this.state.title}</div>
        {this.state.titleDrpDwnStatus && <div style={{...{clear: 'both'}, ...styles.title}}>{titleDrpDwn}</div>}
        </Col>
        </Row>
        <Row style={styles.row}>
          <Col lg={6} xs={12}><input style={styles.input} placeholder='First Name' onChange={(e) => this.setState({firstname : e.target.value})}/></Col>
          <Col lg={6} xs={12}><input style={styles.input} placeholder='Last Name' onChange={(e) => this.setState({lastname : e.target.value})}/></Col>
        </Row>
        <Row style={styles.row}>
          <Col lg={6} xs={12}><input style={styles.input} placeholder='Email Address' onChange={(e) => this.setState({email : e.target.value})}/></Col>
          <Col lg={6} xs={12}><input style={styles.input} placeholder='Phone Number' onChange={(e) => this.setState({phone : e.target.value})}/></Col>
        </Row>
        <Row style={styles.row}>
          <Col lg={6} xs={12}><input style={styles.input} placeholder='Password' type='password' onChange={(e) => this.setState({password : e.target.value})}/></Col>
          <Col lg={6} xs={12}><input style={styles.input} placeholder='Confirm Password' type='password' onChange={(e) => this.setState({confirm : e.target.value})}/></Col>
        </Row>
        {this.props.who==="AGENT" && agents}
        </div>
        <Row>
          <Col xs={12} lg={8}>By proceeding you agree to our terms of use</Col>

          <Col xs={4} lg={3} style={styles.signin} onClick={this.register.bind(this)}>
            REGISTER
          </Col>
        </Row>
        {this.state.loading && <LoadingScreen />}
      </div>
    )
  }
  toggleTitle() {
    this.setState({titleDrpDwnStatus: !this.state.titleDrpDwnStatus})
  }
  toggleLoading(loading) {
    this.props.toggleLoading(loading)
  }
  selectTitle(title) {
    this.setState({title, titleDrpDwnStatus: false})
  }
  toggleView(view) {
    this.props.toggleView(view)
  }
  register() {
    const {
      firstname,
      lastname,
      email,
      password,
      title,
      phone,
      confirm,
      license,
      jurisdiction
    } = this.state
    var body;
    if (/\S/.test(email) && /\S/.test(password) && /\S/.test(firstname) && /\S/.test(lastname) && /\S/.test(confirm) && /\S/.test(phone)) {
      // if (this.props.who==="AGENT") {
      //   if (/\S/.test(license) && /\S/.test(jurisdiction))

      if (confirm !== password)
        alert("Password fields don't match!")
      else
      {// enrypt password
        this.toggleLoading(true)
      bcrypt.hash(password, 10, function(err, hash) {
        //password = hash
        const {method, headers} = mySettings.optionsB
        var body = JSON.stringify({
          email,
          password: hash,
          firstname,
          lastname,
          title,
          phone,
          confirm,
          license,
          jurisdiction,
          type: this.props.who
        })
        var options = {body, method, headers}
        fetch(mySettings.serverID+'api/register', options)
        .then(data => data.json())
        .then (data => {
          this.toggleLoading(false)
          if (data.status) {
            alert("Thank you for registering with us!")
            this.setState({loading: false})
            this.toggleView('login')
          }
          else {
            alert(data.msg)
          }
        })
        .catch(err =>{ alert("Can't conect to Trent Realtor's server at the moment"); this.toggleLoading(false)})
      }.bind(this));
    }}
    else{
      alert('Please fill all fields!')
    }
  }
}

const styles = {
  container: {
    width: '100%',
    flex: 1,
    paddingBottom: '15%',
    backgroundColor: 'white',
    fontSize: '18px'

  },
  tAndC: {
    width: '100%',
    paddingBottom: '15%',
  },
  input: {
    width: '100%',
    marginLeft: '3%',
    marginRight: '3%',
    float: 'left',
    //backgroundColor: 'gray'
  },
  signin: {
    float: 'right',
    width: '20%',
    height: '10%',
    color: 'white',
    padding: '1.5%',
    marginTop: '2%',
    //paddingTop: '10%',
    backgroundColor: '#B22222',
    cursor: 'pointer'
  },
  row: {
    paddingTop: '3%',
    height: '20%',
    backgroundColor: 'white',
    //paddingRight: '1%',
    width: '100%',
    clear: 'both',
    fontSize: '18px'

  },
  title: {
    width: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: '1%',
    marginLeft: '3%',
    float: 'left',
    cursor: 'pointer',
    fontSize: '18px'
  },
  miniContainer: {
    paddingBottom: '10%'
  }
}
