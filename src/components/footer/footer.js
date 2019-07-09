import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import { Link } from "react-router-dom"

import { mySettings } from './../../settings.js'
import rightArrowB from './../../images/rightArrowB.png'
import logo from './../../images/logo.PNG'
import LoadingScreen from './../loadingScreen'

export default class Footer extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      loading: false
    }
  }
  render(){
    const footerMenu = [
      {
        header: "Trent Realtors",
        subs: [
          {text: "Join the Team", to: ""},
          {text: "About Us", to: ""},
          {text: "Our Agents", to: ""},
          {text: "Investors", to: ""},
          {text: "Blog", to: ""},
          {text: "Media Center", to: ""},
        ]
      },
      {
        header: "BUYING / SELLING",
        subs: [
          {text: "Buy a Home", to: ""},
          {text: "Sell your Home", to: ""},
        ]
      },
      {
        header: "HELP & SUPPORT",
        subs: [
          {text: "Log in", to: ""},
          {text: "Contact Us", to: ""},
          {text: "Terms & Conditions", to: ""},
        ]
      },
    ]
    return (
      <div style={styles.container}>
        <Container style={{paddingLeft: '2%'}}>
        <Row >
        <Col lg={6}>
          <h4><b>Subscribe to our newsletter</b></h4>
          <p>Meet our people, read commentary on the latest market trends, get
            sound advice and discover home décor and design ideas.</p>
          <p>Email address</p>
          <input
            type="text"
            value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}
            style={styles.txtInput}
            placeholder="Enter your email address"
          />
          <span onClick={this.subscribeToNewsletter.bind(this)} style={{cursor: 'pointer', padding: "2.8%", backgroundColor: "red"}}><img src={rightArrowB} width="4%" /></span>
        </Col>
          <Col lg={6}>
          <h4><b>Follow us</b></h4>
          <p>Catch us on Facebook, Twitter, YouTube and Instagram, where we offer daily real estate tips, engaging articles and home-related humor.</p>

        <div style={{clear: "right", marginTop: "8%"}}>
          <span style={{paddingRight: "2%"}}>
            <img src="https://pbonlineassets.azureedge.net/web-images/marketing-websiteui-us/svg/facebook-color.svg" alt="Icon" />
          </span>
          <span style={{paddingRight: "2%"}}>
            <img src="https://pbonlineassets.azureedge.net/web-images/marketing-websiteui-us/svg/twitter-color.svg" alt="Icon" />
          </span>
          <span style={{paddingRight: "2%"}}>
            <a href="https://www.youtube.com/channel/UCFyhYGYntZvBRTLckDaJIhA/" target="_blank" rel="noopener"><img src="https://pbonlineassets.azureedge.net/web-images/marketing-websiteui-us/svg/youtube-color.svg" alt="Icon"/></a>
          </span>
          <span style={{paddingRight: "2%"}}>
            <img src="https://pbonlineassets.azureedge.net/web-images/marketing-websiteui-us/svg/instagram-color.svg" alt="Icon" />
          </span>
        </div>
        </Col>
        </Row>
        </Container>
        <div>
        <hr style={{clear: "both", marginTop: "10.5%"}}/>
        </div>
        <Container style={{paddingLeft: '5%'}}>
        <Row>
        <Col lg={2} xs={6}>
            <h6 style={styles.color}>TRENT REALTORS</h6>

            <Link style={styles.colorStyle} to="/buy/">Join the Team</Link>
            <Link style={styles.colorStyle} to="/buy/">About Us</Link>
            <Link style={styles.colorStyle} to="//#ourAgents">Our Agents</Link>
          </Col>
          <Col lg={2} xs={6}>
            <h6 style={styles.color}>BUYING / SELLING</h6>

            <Link style={styles.colorStyle} to="/buy/">BUY A HOME</Link>
            <Link style={styles.colorStyle} to="/sell/">SELL YOUR HOME</Link>
          </Col>
          <Col lg={2} xs={6}>
            <h6 style={styles.color}>HELP & SUPPORT</h6>

            <Link style={styles.colorStyle} to="/LoginRegister/">Log in</Link>
            <Link style={styles.colorStyle} to="/buy/">Contact Us</Link>
            <Link style={styles.colorStyle} to="/buy/">Terms & Conditions</Link>
          </Col>
          <Col lg={3} xs={6}>
            <h6 style={styles.color}>CONTACT</h6>

            <div style={styles.font}><b style={{color: 'black'}}>Head Office: </b>Manhattan Mall Plot 414, 4th Avenue Gwarinpa Estate, Abuja.</div>
        </Col>
        <Col lg={3} xs={6} style={{marginTop: '1.5%'}}>
          <h6 style={styles.color}></h6>
              <div style={styles.font}><b>Branch Office: </b>Standard Plaza Plot 2302 Herbert Macaulay Way Opposite Sky Memorial Complex, Wuse, Zone 6, Abuja.</div><br />
              <div style={styles.font}>+2348098410475</div>
              <div style={styles.font}>+2348037410475</div>
              <div style={styles.font}>enquiries@trentrealtors.com</div>
      </Col>
        </Row>
        <Row>
        <Col lg={12} style={{paddingBottom: "7%", paddingTop: '5%'}}>
          <p><img src={logo} width="10%" /></p>
          <span>Trent Realtors, is a liscensed real estate broker in Nigeria and UK.</span><br />
          <span>&copy; 2019 Trent Realtors | All Rights Reserved.</span>
        </Col>
        </Row>
        </Container>
        {this.state.loading && <LoadingScreen loading={this.state.loading} />}
      </div>
    )
  }
  subscribeToNewsletter() {
    // verify email
    const email = this.state.email
    // add email to newsletter
    if (this.validateEmail(email)) {
      this.toggleLoading(true)
      fetch(mySettings.serverID+"api/subscribe", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
        })
      })
      .then(res => {
        this.toggleLoading(false);
        this.setState({email: ''})
        alert("Thank you for subscribing to our newsletter.")
      })
      .catch(err => {this.toggleLoading(false); alert("Can't connect to Trent Realtor's server at the moment.")})
      //this.props.subscribeToNewsletter(this.state.email)
    }
    else {
      alert("Please enter a valid email address")
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  toggleLoading(loading) {
    this.setState({loading})
  }
}

const styles = {
  container: {
    paddingTop: '7.5%',
    clear: "both",
    zIndex: 1,
  },
  txtInput: {
    width: "60%",
    padding: "2%",
    color: "black",
  },
  menu: {
    paddingLeft: '10%',
  },
  font: {
    display: 'block',
    lineHeight: 2,
    //color: '#007bff',
    fontSize: 16
  },
  subscribe: {
    float: "left",
    width: "40%",
    paddingLeft: '10.5%',
    paddingRight: "5%"
  },
  followUs: {
    float: "left",
    width: "40%",
  },
  subMenu: {
    float: "left",
    color: "black",
    marginRight: "10%"
  },
  colorStyle: {
    display: "block",
    textDecoration: "none",
    paddingBottom: "5%"
  },
  lastFooter: {
    paddingTop: '1.5%',
    paddingLeft: '10.5%',
    clear: "both",
    fontSize: 12,
    paddingBottom: "10%"
  },
  color: {
    color: 'black'
  }
}
