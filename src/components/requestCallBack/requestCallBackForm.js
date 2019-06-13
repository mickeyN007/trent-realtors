import React, { Component } from 'react'

import { mySettings } from "./../../settings"

export default class RequestCallBackForm extends Component {
  constructor() {
    super()
    this.state = {
      active: false,
      firstname: "",
      lastname: "",
      phone: "",
      email: ""
    }
  }
  render() {
    const display = this.state.active===true ? {display: "block"} : {display: "none"}

    return (
      <div style={{...styles.container, ...display}}>
          <h2>Book your appointment by phone</h2>
          <p>Enter your name, email and phone number and we'll call you back</p>
          <span onClick={this.closeModal.bind(this)} style={{float: "right", clear: "right"}}>X</span>
          <div style={styles.left}>
            <input value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})} placeholder="First name" type="text" style={styles.input} />
            <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="Email address" type="text" style={styles.input}/>
          </div>
          <div style={styles.left}>
            <input value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})} placeholder="Last name" type="text" style={styles.input} />
            <input value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})} placeholder="Phone number" type="text" style={styles.input} />
          </div>
          <div onClick={this.requestCallBack.bind(this)} style={styles.cmb}><center>CALL ME BACK</center></div>
          <p>By clicking the button above, I acknowledge that I have read and <br />agree to the Terms of Use and  Privacy Policy.</p>
      </div>
    )
  }
  closeModal() {
    this.setState({active: false})
  }
  openModal() {
    //const open = this.props.openModal()
    this.setState({active: true})
  }
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  validateInfo() {
    var err = {
      status: false,
      msg: ''
    }
    const { firstname, lastname, phone, email } = this.state
    var validEmail = this.validateEmail(email)
    if (/\S/.test(phone)==false || /\S/.test(firstname)==false || /\S/.test(lastname)==false || validEmail==false) {
      if (!validEmail)
        err.msg = "Please enter a valid email address"
      else
        err.msg = "Please fill all fields"
    }
    else {
      err.status = true
    }
    return err
  }
  requestCallBack() {
    var err = this.validateInfo()
    if (err.status) {
    const { firstname, lastname, phone, email } = this.state
    const date = new Date()

    fetch(mySettings.serverID+"api/requestCallback", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname, lastname, phone,
        email, date
      })
    })
    .then((data) => {
      this.setState({
        firstname: "",
        lastname: "",
        phone: "",
        email: ""
      })
      alert("Your callback request has been saved.")
    })
    .catch((error) => {
      alert("Can't connect to Trent Realtor's server at this time.")
    })
  }
  else {
    alert(err.msg)
  }
}
}

const styles = {
  container: {
    paddingLeft: "5%",
    paddingRight: "1.5%",
    borderStyle: "thin",
    borderColor: "gray",
    //marginLeft: "20%"
  },
  left: {
    float: "left",
    width: "45%",
    marginRight: "2%",
    paddingBottom: "3%"
  },
  cmb: {
    clear: "both",
    backgroundColor: "#B22222",
    color: "white",
    width: "30%",
    alignItems: "center",
    padding: "2%"
  },
  input: {
    width: "80%",
    padding: "3%",
    marginBottom: "5%"
  }
}
