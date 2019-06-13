import React, { Component } from 'react'

import { Link } from "react-router-dom"
import { mySettings } from './../../settings.js'

import rightArrowB from './../../images/rightArrowB.png'
import logo from './../../images/logo.PNG'

export default class Footer extends Component {
  constructor() {
    super()
    this.state = {
      email: ""
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
        <div style={styles.subscribe}>
          <h2><b>Subscribe to our newsletter</b></h2>
          <p>Meet our people, read commentary on the latest market trends, get
            sound advice and discover home décor and design ideas.</p>
          <br /><p>Email address</p>
          <input
            type="text"
            onChange={(e) => this.setState({email: e.target.value})}
            style={styles.txtInput}
            placeholder="Enter your email address"
          />
          <span onClick={this.subscribeToNewsletter.bind(this)} style={{padding: "2.8%", backgroundColor: "red"}}><img src={rightArrowB} width="4%" /></span>
        </div>
        <div style={styles.followUs}>
          <h2><b>Follow us</b></h2>
          <p>Catch us on Facebook, Twitter, YouTube and Instagram, where we offer daily real estate tips, engaging articles and home-related humor.</p>
        </div>
        <div style={{clear: "right", marginTop: "15%"}}>
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
        <hr style={{clear: "both", marginTop: "10.5%"}}/>

        <div style={styles.menu}>
          <div style={styles.subMenu}>
            <h3>TRENT REALTORS</h3>

            <Link style={styles.colorStyle} to="/buy/">Join the Team</Link>
            <Link style={styles.colorStyle} to="/buy/">About Us</Link>
            <Link style={styles.colorStyle} to="/buy/">Our Agents</Link>
            <Link style={styles.colorStyle} to="/buy/">Investors</Link>
            <Link style={styles.colorStyle} to="/buy/">Blog</Link>
            <Link style={styles.colorStyle} to="/buy/">Media Center</Link>
          </div>

          <div style={styles.subMenu}>
            <h3>BUYING / SELLING</h3>

            <Link style={styles.colorStyle} to="/buy/">BUY A HOME</Link>
            <Link style={styles.colorStyle} to="/sell/">SELL YOUR HOME</Link>
          </div>

          <div style={styles.subMenu}>
            <h3>HELP & SUPPORT</h3>

            <Link style={styles.colorStyle} to="/buy/">Log in</Link>
            <Link style={styles.colorStyle} to="/buy/">Contact Us</Link>
            <Link style={styles.colorStyle} to="/buy/">Terms & Conditions</Link>
          </div>

          <div style={styles.subMenu}>
            <h3>ADDRESS</h3>

            <p>Abuja, Nigeria</p>
            <p>+234 809 841 0475</p>
            <p>enquiries@trent_realtors.com</p>
          </div>
        </div>
        <div style={styles.lastFooter}>
          <p><img src={logo} width="10%" /></p>
          <p>Trent Realtors, is a liscensed real estate broker in Nigeria and UK.
          <br/>Trent Realtors pledges to support the fair Housing Act, Equal Housing
          Opportunity laws and Equal Employment Opportunity.</p>

          <p>&copy; 2019 Trent Realtors | All Rights Reserved.</p>
        </div>
      </div>
    )
  }
  subscribeToNewsletter() {
    // verify email
    const email = this.state.email
    // add email to newsletter
    if (this.validateEmail(email)) {
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
      .then(res => alert("Thank you for subscribing to our newsletter."))
      .catch(err => alert("Can't connect to Trent Realtor's server at the moment."))
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
}

const styles = {
  container: {
    paddingTop: '7.5%',
    clear: "both"
  },
  txtInput: {
    width: "60%",
    padding: "2%",
    color: "black"
  },
  menu: {
    paddingLeft: '10%',
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
    paddingBottom: "10%"
  },
  lastFooter: {
    paddingTop: '1.5%',
    paddingLeft: '10.5%',
    clear: "both",
    fontSize: 12,
    paddingBottom: "10%"
  }
}
