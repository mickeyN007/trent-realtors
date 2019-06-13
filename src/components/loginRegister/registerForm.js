import React, { Component } from 'react'

import { mySettings } from './../../settings'
import  bcrypt from 'bcryptjs'

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
      jurisdiction: ''
    }
  }
  render() {
    const agents =
    (<div style={styles.row}>
      <input style={styles.input} placeholder='License' onChange={(e) => this.setState({license : e.target.value})}/>
      <input style={styles.input} placeholder='Jurisdiction' onChange={(e) => this.setState({jurisdiction : e.target.value})}/>
    </div>)
    const titles = ['Mr', 'Mrs', 'Miss', 'Dr']
    const titleDrpDwn = titles.map((title, key) =>
                            <div key={key} onClick={this.selectTitle.bind(this, title)}>
                              {title}
                            </div>
                        )
    return (
      <div style={styles.container}>
        <div style={styles.miniContainer}>
        <div onClick={this.toggleTitle.bind(this)} style={styles.title}>{this.state.title}</div>
        {this.state.titleDrpDwnStatus && <div style={{...{clear: 'both'}, ...styles.title}}>{titleDrpDwn}</div>}
        <div style={styles.row}>
          <input style={styles.input} placeholder='First Name' onChange={(e) => this.setState({firstname : e.target.value})}/>
          <input style={styles.input} placeholder='Last Name' onChange={(e) => this.setState({lastname : e.target.value})}/>
        </div>
        <div style={styles.row}>
          <input style={styles.input} placeholder='Email Address' onChange={(e) => this.setState({email : e.target.value})}/>
          <input style={styles.input} placeholder='Phone Number' onChange={(e) => this.setState({phone : e.target.value})}/>
        </div>
        <div style={styles.row}>
          <input style={styles.input} placeholder='Password' type='password' onChange={(e) => this.setState({password : e.target.value})}/>
          <input style={styles.input} placeholder='Confirm Password' type='password' onChange={(e) => this.setState({confirm : e.target.value})}/>
        </div>
        {this.props.who==="AGENT" && agents}
        </div>
        <div style={styles.tAndC}>
          <span style={{paddingLeft: '3%', float: 'left'}}>By proceeding you agree to our terms of use</span>
          <div style={styles.signin} onClick={this.register.bind(this)}>
            REGISTER
          </div>
        </div>

      </div>
    )
  }
  toggleTitle() {
    this.setState({titleDrpDwnStatus: !this.state.titleDrpDwnStatus})
  }
  selectTitle(title) {
    this.setState({title, titleDrpDwnStatus: false})
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
      // enrypt password
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
          if (data.status) {
            alert("Thank you for registering with us!")
            this.setState({loading: false})
          }
          else {
            alert(data.msg)
          }
        })
        .catch(err => alert("Can't conect to Trent Realtor's server at the moment"))
      }.bind(this));
    }
    else{
      alert('Please fill all fields!')
    }
  }
}

const styles = {
  container: {
    width: '100%',
    flex: 1,
    paddingBottom: '5%',
    backgroundColor: 'white'
  },
  tAndC: {
    width: '100%',
    paddingBottom: '15%',
    marginLeft: 0,
  },
  input: {
    width: '40%',
    padding: '1%',
    marginLeft: '3%',
    marginRight: '3%',
    float: 'left',
    //backgroundColor: 'gray'
  },
  signin: {
    float: 'right',
    width: '15%',
    height: '20%',
    color: 'white',
    marginRight: '5%',
    padding: '1.5%',
    marginTop: '2%',
    //paddingTop: '10%',
    backgroundColor: '#B22222'
  },
  row: {
    paddingTop: '3%',
    height: '20%',
    backgroundColor: 'white',
    //paddingRight: '1%',
    width: '100%',
    clear: 'both'
  },
  title: {
    width: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: '1%',
    marginLeft: '3%',
    float: 'left'
  },
  miniContainer: {
    paddingBottom: '10%'
  }
}
