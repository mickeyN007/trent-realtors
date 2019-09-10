import React, { Component } from "react"
import { Link } from "react-router-dom";

import AvailableDates from './../availableDates'
import { Row, Col,  } from 'react-bootstrap';
import Breakpoint, { BreakpointProvider } from 'react-socks';

import logo from "./../../images/logo.PNG"
import { mySettings } from "./../../settings"

export default class Valuation extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
      date: null,
      time: null,
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
    }
  }
  render() {
    var availableDatesStyle = (/\S/.test(this.state.location)) ? {opacity: 1} : {opacity: 0.5}
    var contactStyle = (this.state.date && this.state.time) ? {opacity: 1} : {opacity: 0.5}
    return (
      <div>
        <BreakpointProvider>
          <Breakpoint large up>
          <Row style={styles.header}>
            <Col lg={5}><span><Link to="/"><img src={logo} width="30%" height="100%"/></Link></span></Col>
            <Col lg={7}><span style={styles.contactB}>24/7 Support &nbsp; +234 809 841 0475<hr /></span></Col>
          </Row>
          <div style={styles.container}>
            <Row>
            <Col xs={12} lg={12}>
              <p><h2><b>Schedule your free, no-obligation listing appointment with a Trent Realtors agent.</b></h2></p>
            </Col>
            </Row>
            <div style={styles.location}>
              <span style={{color: "white", marginRight:"10px", backgroundColor: "#B22222", borderRadius: "40%", padding: "0.5%"}}>1</span>
              <span style={{fontSize: "17px"}}><b>We just need a few details from you to get started.</b></span><br />
              <span style={{marginLeft: "4%", fontSize: "17px"}}>What’s your home address?</span><br />
              <input style={styles.input} type="text" placeholder="Street address" onChange={(e) => this.setState({location: e.target.value})}/><br />
              <Link style={{marginLeft: "4%", paddingTop: "2%", paddingBottom: "3%"}} to="/buy/">Enter your address manually</Link>
            </div>
            <div style={{...styles.whiteBoxes, ...availableDatesStyle}}>
              <span style={{color: "white", marginRight:"10px", backgroundColor: "#B22222", borderRadius: "40%", padding: "0.5%"}}>2</span>
              <span style={{fontSize: "17px"}}><b>Select a Date and Time to meet your agent.</b></span><br />
              <span style={{marginLeft: "4%", fontSize: "17px"}}>Choose one of the available dates and times below.</span><br /><br />

              <span style={{marginLeft: "4%", float: "left", width: "45%"}}>Date:</span>
              <span style={{marginLeft: "4%", float: "left", width: "45%"}}>Time:</span><br /><br />
              <span style={{marginLeft: "4%", float: "left", width: "45%"}}><input type="date" onChange={(e) => this.setState({date: e.target.value})}/></span>
              <span style={{marginLeft: "4%", float: "left", width: "45%"}}><input type="time" onChange={(e) => this.setState({time: e.target.value})}/></span>
            </div>
            <div style={availableDatesStyle}><AvailableDates /></div>

            <div style={{...styles.location, ...contactStyle}}>
              <span style={{color: "white", marginRight:"10px", backgroundColor: "#B22222", borderRadius: "40%", padding: "0.5%"}}>3</span>
              <span style={{fontSize: "17px"}}><b>Contact Information</b></span><br />
              <span style={{marginLeft: "4%", fontSize: "17px"}}>Enter your name, email address and phone number.</span><br />
              <div style={{marginLeft: "4%"}}>
              <div style={styles.left}>
                <p>First name</p>
                <input style={{width: "80%", padding: "5%"}} type="text" placeholder="First name" onChange={(e) => this.setState({firstname: e.target.value})} /><br />

                <p>Phone number</p>
                <input style={{width: "80%", padding: "5%"}} type="text" placeholder="Phone number" onChange={(e) => this.setState({phone: e.target.value})} /><br />
              </div>
              <div style={styles.right}>
                <p>Last name</p>
                <input style={{width: "80%", padding: "5%"}} type="text" placeholder="Last name" onChange={(e) => this.setState({lastname: e.target.value})} /><br />

                <p>Email address</p>
                <input style={{width: "80%", padding: "5%"}} type="text" placeholder="Email address" onChange={(e) => this.setState({email: e.target.value})} /><br />
              </div>
              <div style={{clear: "both", paddingTop: "5%"}}>
              <span>By clicking the Book Appointment button below you agree to </span><br />
              <span>our Terms of Use and Privacy Statement</span>
              <div style={styles.button} onClick={this.bookAppt.bind(this)}>
                BOOK APPOINTMENT
              </div>
              </div>
            </div>
            </div>
          </div>
          </Breakpoint>
          <Breakpoint medium down>
          <Row style={styles.header}>
            <Col xs={12}><span><Link to="/"><img src={logo} width="30%" height="100%"/></Link></span></Col>
            <Col xs={12}><span style={styles.contact}>24/7 Support &nbsp; +234 809 841 0475<hr /></span></Col>
          </Row>
          <div style={styles.containerB}>
            <Row>
            <Col xs={12} lg={12}>
              <p><h2><b>Schedule your free, no-obligation listing appointment with a Trent Realtors agent.</b></h2></p>
            </Col>
            </Row>
            <div style={styles.location}>
              <span style={{color: "white", marginRight:"10px", backgroundColor: "#B22222", borderRadius: "40%", padding: "0.5%"}}>1</span>
              <span style={{fontSize: "17px"}}><b>We just need a few details from you to get started.</b></span><br />
              <span style={{marginLeft: "4%", fontSize: "17px"}}>What’s your home address?</span><br />
              <input style={styles.input} type="text" placeholder="Street address" onChange={(e) => this.setState({location: e.target.value})}/><br />
              <Link style={{marginLeft: "4%", paddingTop: "2%", paddingBottom: "3%"}} to="/buy/">Enter your address manually</Link>
            </div>
            <div style={{...styles.whiteBoxes, ...availableDatesStyle}}>
              <span style={{color: "white", marginRight:"10px", backgroundColor: "#B22222", borderRadius: "40%", padding: "0.5%"}}>2</span>
              <span style={{fontSize: "17px"}}><b>Select a Date and Time to meet your agent.</b></span><br />
              <span style={{marginLeft: "4%", fontSize: "17px"}}>Choose one of the available dates and times below.</span><br /><br />

              <span style={{marginLeft: "4%", float: "left", width: "45%"}}>Date:</span>
              <span style={{marginLeft: "4%", float: "left", width: "45%"}}>Time:</span><br /><br />
              <span style={{marginLeft: "4%", float: "left", width: "45%"}}><input type="date" onChange={(e) => this.setState({date: e.target.value})}/></span>
              <span style={{marginLeft: "4%", float: "left", width: "45%"}}><input type="time" onChange={(e) => this.setState({time: e.target.value})}/></span>
            </div>
            <div style={availableDatesStyle}><AvailableDates /></div>

            <div style={{...styles.location, ...contactStyle}}>
              <span style={{color: "white", marginRight:"10px", backgroundColor: "#B22222", borderRadius: "40%", padding: "0.5%"}}>3</span>
              <span style={{fontSize: "17px"}}><b>Contact Information</b></span><br />
              <span style={{marginLeft: "4%", fontSize: "17px"}}>Enter your name, email address and phone number.</span><br />
              <div style={{marginLeft: "4%"}}>
              <div style={styles.left}>
                <p>First name</p>
                <input style={{width: "80%", padding: "5%"}} type="text" placeholder="First name" onChange={(e) => this.setState({firstname: e.target.value})} /><br />

                <p>Phone number</p>
                <input style={{width: "80%", padding: "5%"}} type="text" placeholder="Phone number" onChange={(e) => this.setState({phone: e.target.value})} /><br />
              </div>
              <div style={styles.right}>
                <p>Last name</p>
                <input style={{width: "80%", padding: "5%"}} type="text" placeholder="Last name" onChange={(e) => this.setState({lastname: e.target.value})} /><br />

                <p>Email address</p>
                <input style={{width: "80%", padding: "5%"}} type="text" placeholder="Email address" onChange={(e) => this.setState({email: e.target.value})} /><br />
              </div>
              <div style={{clear: "both", paddingTop: "5%"}}>
              <span>By clicking the Book Appointment button below you agree to </span><br />
              <span>our Terms of Use and Privacy Statement</span>
              <div style={styles.buttonB} onClick={this.bookAppt.bind(this)}>
                BOOK APPOINTMENT
              </div>
              </div>
            </div>
            </div>
          </div>
          </Breakpoint>

        </BreakpointProvider>
      </div>
    )
  }
  componentWillMount() {
    var top=0, left=0
    window.scrollTo({ left, top});
  }
  bookAppt() {
    var err = this.validateInfo()
    if (err.status) {
    const { firstname, lastname, phone,
    email, location } = this.state
    //const date = new Date()
    var { time, date} = this.state
    date = new Date(`${date} ${time}`)
    //var t = `${date.toString() }${time.toString() }`

    fetch(mySettings.serverID+"api/bookAppt", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname, lastname, phone,
        email, date, location
      })
    })
    .then((data) => {
      // this.setState({
      //   firstname: "",
      //   lastname: "",
      //   phone: "",
      //   email: "",
      //   date: null,
      //   time: null,
      //   location: ""
      // })
      alert("Your appointment has been scheduled!")
    })
    .catch((error) => {
      alert("Can't connect to Trent Realtor's server at this time.")
    })
  }
  else {
    alert(err.msg)
  }
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
    const { time, date, firstname, lastname, phone, email } = this.state
    var validEmail = this.validateEmail(email)
    if (/\S/.test(time)==false || /\S/.test(date)==false || /\S/.test(phone)==false || /\S/.test(firstname)==false || /\S/.test(lastname)==false || validEmail==false) {
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
}

const styles = {
  container: {
    marginLeft: "15%",
    marginRight: "25%",
  },
  containerB: {
    marginLeft: "5%",
    marginRight: "5%",
  },
  header: {
    paddingBottom: "1%",
    paddingTop: "1%",
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
    marginRight: '34.5%',
    paddingTop: '1.5%',
  },
  contactB: {
    paddingTop: '2%',
    color: 'white',
    float: 'right',
    paddingRight: '45%'
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
    width: "40%",
    backgroundColor: "#B22222",
    color: "white",
    padding: "2%",
    paddingLeft: "10%",
    marginTop: "3%",
    cursor: 'pointer'
  },
  buttonB: {
    width: "60%",
    backgroundColor: "#B22222",
    color: "white",
    padding: "2%",
    paddingLeft: "10%",
    marginTop: "3%",
    cursor: 'pointer'
  }
}
