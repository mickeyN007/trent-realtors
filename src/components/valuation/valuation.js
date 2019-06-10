import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AvailableDates from './../availableDates'

import logo from "./../../images/logo.PNG"

export default class Valuation extends Component {
  constructor() {
    super()
    this.state = {
      location: ''
    }
  }
  render() {
    // availableDatesStyle
    return (
      <div>
        <div style={styles.header}>
          <span><Link to="/"><img src={logo} width="10%" height="50px"/></Link></span>
          <span style={styles.contact}>24/7 Support &nbsp; (888) 822-8008<hr /></span>
        </div>
        <div style={styles.container}>
          <p><h2><b>Schedule your free, no-obligation listing appointment with a Trent Realtors agent.</b></h2></p>

          <div style={styles.location}>
            <span style={{color: "white", marginRight:"10px", backgroundColor: "#B22222", borderRadius: "40%", padding: "0.5%"}}>1</span>
            <span style={{fontSize: "17px"}}><b>We just need a few details from you to get started.</b></span><br />
            <span style={{marginLeft: "4%", fontSize: "17px"}}>What’s your home address?</span><br />
            <input style={styles.input} type="text" placeholder="Street address" /><br />
            <Link style={{marginLeft: "4%", paddingTop: "2%", paddingBottom: "3%"}} to="/buy/">Enter your address manually</Link>
          </div>
          <div style={{...styles.whiteBoxes, ...{opacity: 0.5}}}>
            <span style={{color: "white", marginRight:"10px", backgroundColor: "#B22222", borderRadius: "40%", padding: "0.5%"}}>2</span>
            <span style={{fontSize: "17px"}}><b>Select a Date and Time to meet your agent.</b></span><br />
            <span style={{marginLeft: "4%", fontSize: "17px"}}>Choose one of the available dates and times below.</span><br /><br />

            <span style={{marginLeft: "4%", float: "left", width: "45%"}}>Date:</span>
            <span style={{marginLeft: "4%", float: "left", width: "45%"}}>Time:</span><br /><br />
            <span style={{marginLeft: "4%", float: "left", width: "45%"}}><input type="date" /></span>
            <span style={{marginLeft: "4%", float: "left", width: "45%"}}><input type="time" /></span>
          </div>
          <div style={{opacity: 0.5}}><AvailableDates /></div>

          <div style={{...styles.location, ...{opacity: 0.5}}}>
            <span style={{color: "white", marginRight:"10px", backgroundColor: "#B22222", borderRadius: "40%", padding: "0.5%"}}>3</span>
            <span style={{fontSize: "17px"}}><b>Contact Information</b></span><br />
            <span style={{marginLeft: "4%", fontSize: "17px"}}>Enter your name, email address and phone number.</span><br />
            <div style={{marginLeft: "4%"}}>
            <div style={styles.left}>
              <p>First name</p>
              <input style={{width: "80%", padding: "5%"}} type="text" placeholder="First name" /><br />

              <p>Phone number</p>
              <input style={{width: "80%", padding: "5%"}} type="text" placeholder="Phone number" /><br />
            </div>
            <div style={styles.right}>
              <p>Last name</p>
              <input style={{width: "80%", padding: "5%"}} type="text" placeholder="Last name" /><br />

              <p>Email address</p>
              <input style={{width: "80%", padding: "5%"}} type="text" placeholder="Email address" /><br />
            </div>
            <div style={{clear: "both", paddingTop: "5%"}}>
            <span>By clicking the Book Appointment button below you agree to </span><br />
            <span>our Terms of Use and Privacy Statement</span>
            <div style={styles.button}>BOOK APPOINTMENT</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    marginLeft: "15%",
    marginRight: "15%",
    width: "50%"
  },
  header: {
    paddingBottom: "1.5%",
    paddingTop: "2%",
    marginBottom: "1.5%",
    paddingLeft: "15%",
    backgroundColor: "#B22222",
    clear: 'both'
  },
  left: {
    float: "left",
    width: "40%"
  },
  right: {
    float: "left",
    width: "40%"
  },
  contact: {
    color: 'white',
    float: 'right',
    marginRight: '22%',
    paddingTop: '1.5%'
  },
  logo: {
    float: 'left'
  },
  location: {
    borderWidth: 1,
    borderStyle: "thin",
    padding: "3%",
    boxShadow: "0 0 0.83333em rgba(0,0,0,.15)"
  },
  whiteBoxes: {
    borderWidth: 1,
    borderStyle: "thin",
    padding: "3%",
    paddingBottom: "10%",
    boxShadow: "0 0 0.83333em rgba(0,0,0,.15)"
  },
  input: {
    padding: "3%",
    width: "80%",
    marginLeft: "4%",
    marginTop: "4%"
  },
  button: {
    width: "30%",
    backgroundColor: "#B22222",
    color: "white",
    padding: "2%",
    paddingLeft: "10%",
    marginTop: "3%"
  }
}
