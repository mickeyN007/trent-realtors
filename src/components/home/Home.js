import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './../../css/header.css'
// imported components
import Header from './../header/Header'
import BoxImage from './BoxImage'
import Footer from './../footer/footer'

// images
import blackHouse from './../../images/blackHouse.jpg'
import blackHouse2 from './../../images/blackHouse2.jpg'
import blackHouse4 from './../../images/blackHouse4.jpg'


import leftArrow from './../../images/leftArrow.png'
import rightArrow from './../../images/rightArrow.png'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      ourProcess: 0,
      zipCode: "",
      noAgentFound: false
    }
  }
  componentWillMount() {
    var top=0, left=0
    if (this.props.location.hash == '#ourAgents') {
        top=500
        window.scrollTo({ left, top});
    }
    window.scrollTo({ left, top});
  }
  render() {

    const listA = [
      "A ddddedicated, full service local licensed real estate agent",
      "A commitment to getting the best price for you",
      "A professional photography suite, yard sign and 3-D virtual tour",
    ]

    const listB = [
      "Listing on all major listing sites and your local MLS",
      "A Purplebricks account accessed on your desktop or mobile device",
      "Exclusive early access to buyers through our 'Coming Soon' listing feature",
    ]

    const ourProcess = [
      {
        name: "Book a Listing Appointment",
        desc: "Meet with a Trent Realtors' agent to get a comparative market analysis of your home. Discover your home’s value and talk market trends to develop a successful listing. Your agent will arrange for high-quality photos and a 3-D virtual tour of your home."
      },
      {
        name: "List Your Home",
        desc: "We’ll list your home through the MLS and all other major listing sites. We’ll start marketing your property right away through our website and with a yard sign, advertising, open houses and more. We’ll also introduce your listing to an extensive group of people looking for a home in your area."
      },
      {
        name: "Get Support at Every Step",
        desc: "Receive offers, negotiate feedback on your home and schedule open houses and private showings 24/7 through your Purplebricks account. Your agent and our wider customer service team will be with you every step of the way to advise, dialogue with potential buyers, and advocate for you."
      },
      {
        name: "Close With Confidence",
        desc: "Should you choose, we’ll support you through legal and compliance requirements so you can close quickly and get on with the things that matter most in life."
      },
    ]

    var noAgentFound =
    <div style={{padding: '10%', backgroundColor: '#F5F5F5'}}>
        <h2>We're having trouble finding the price for your zip code, but don't worry</h2>
        <p>We want to make sure we have the most accurate information in order to get you the best price so let's talk.</p>

        <b>Call us at:</b>
        <p>(888) 822-8008 24 hours a day, 7 days a week</p>
        <p>If you'd like to try a new search, please enter a new zip code.</p>
      </div>
    return (
      <div style={styles.container}>
        <div id='boxImage'>
          <Header headerStyle={this.props.headerStyle} search={this.search.bind(this)}/>
        </div>
        <div style={styles.ourAgents} id="ourAgents">
          <div style={styles.ourAgentsLeft}>
            <p><h2>Our agents have joined us from leading brokerages</h2></p>

            <p>Many of our agents have made the switch from traditional real estate companies because Purplebricks enables them to focus entirely on you, not on prospecting for customers..</p>
            <p>Our agents work exclusively for Purplebricks and have developed strong local networks of motivated buyers and sellers.</p>

            <br /><span>Find your local agent</span><input onChange={(e) => this.setState({zipCode: e.target.value})} style={{width: "20%", padding: "2%", paddingLeft: "4%", marginLeft: "3%"}} placeholder="Your zip code" />
            <span onClick={this.findAgent.bind(this)} style={{padding: "1.5%", backgroundColor: "#B22222"}}><img src={rightArrow} width="4%" /></span>
          </div>
          <div style={styles.ourAgentsRight}>
            {!this.state.noAgentFound && <img src={blackHouse} height="100%" width="100%" alt="Pic not found" />}
            {this.state.noAgentFound && noAgentFound}
          </div>
        </div>
        <div style={styles.whatsIncluded}>
          <div style={{paddingLeft: "10.6%"}}>
          <p><h3><b>A fair, fixed fee — not an unfair commission</b></h3></p>
          <p><span style={{fontSize: "19px"}}>Your fair, fixed fee includes a full-service real estate agency experience <br />from start to finish — and it's only payable when you sell</span></p>

          <br/><h3><b>What's included</b></h3>
          <div style={styles.whatsIncludedLeft}>
            <div style={styles.whatsIncludedSub}>A professional, local Purplebricks real estate agent dedicated to you from listing to closing</div>
            <div style={styles.whatsIncludedSub}>Your agent will handle all showings and negotiations personally on your behalf</div>
            <div style={styles.whatsIncludedSub}>Professional photography, 3D virtual tour and premier marketing to optimize exposure</div>
            <div style={styles.whatsIncludedSub}>Advice on staging strategies to cast a positive light on the features most important to buyers</div>
          </div>
          <div style={styles.whatsIncludedRight}>
            <div style={styles.whatsIncludedSub}>Access to extensive local network of motivated buyers looking to purchase with Purplebricks</div>
            <div style={styles.whatsIncludedSub}>Receive status updates and see offers and buyer feedback instantly</div>
            <div style={styles.whatsIncludedSub}>Your property will be listed on Purplebricks.com, Zillow, Trulia, Realtor.com and every local MLS</div>
            <div style={styles.whatsIncludedSub}></div>
          </div>
          <div style={{clear: "both"}}><br /><br /><br /><center><Link style={styles.getStarted} to="/valuation/">BOOK A FREE CONSULTATION</Link></center></div>
          </div>
        </div>
        <div style={styles.letsShowYou}>
          <h2><b>It all starts with a conversation</b></h2>
          <div style={{float: "left", width: "50%"}}>
            <p style={{fontSize: 20}}>A qualified local agent is always available to speak with you about buying or selling with Trent realtors, with no obligation and no pressure. Interested?</p>
            <div>
              <span style={styles.start}>
                <b>Book a consultation</b>
                <p>Select a date and time for an in-home visit with a local agent</p><br />
              </span>
              <span style={styles.start}>
                <b>Email us</b>
                <p>Send us a note or ask a question and we'll reply right away.</p><br />
              </span>
            </div>
            <div style={{clear: "both"}}>
              <span style={styles.start}>
                <b>Call me back</b>
                <p>We'll call you at a time that's convenient for you</p><br />
              </span>
              <span style={styles.start}>
                <b>Speak to my local agent</b>
                <p>We'll match you with your agent instantly, so you can get in touch on your own time.</p>
              </span>
            </div>
          </div>
          <div style={{paddingTop: "2%", width:"90%", height:"60%", float: "left", width: "30%", paddingLeft: "5%",}}>
            <img src={blackHouse4} width="400vh" height="400px" />
          </div>
        </div>
        <Footer subscribeToNewsletter={this.subscribeToNewsletter.bind(this)} />
      </div>
    )
  }
  /*nextProcess() {
    var { ourProcess } = this.state.ourProcess
    console.log(this.state.ourProcess)
    if (this.state.ourProcess<3)
      this.setState({ourProcess: this.state.ourProcess+1})
    else {
      ourProcess=0
      this.setState({ourProcess: ourProcess})
    }
  }
  previousProcess() {
    var { ourProcess } = this.state.ourProcess
    if (this.state.ourProcess>0)
      this.setState({ourProcess: this.state.ourProcess-1})
    else {
      ourProcess=3
      this.setState({ourProcess: ourProcess})
    }
  }*/
  findAgent() {
    var result = this.props.findAgent(this.state.zipCode)
    if (!result.error) {
      //
    }
    else {
      this.setState({noAgentFound: true})
    }
  }
  subscribeToNewsletter(email) {
    this.props.subscribeToNewsletter(email)
  }
  search(location) {
    this.props.search(location)
  }
}

const styles = {
  container: {
    margin: 0
  },
  ourAgents: {
    paddingLeft: '10.5%',
    paddingTop: '7.5%',
    paddingRight: '5.5%',
  },
  ourAgentsLeft: {
    width: "40%",
    lineHeight: 1.5,
    float: "left"
  },
  ourAgentsRight: {
    width: "50%",
    float: "left",
    paddingLeft: "6%"
  },
  whatsIncluded: {
    clear: "both",
    paddingTop: '2.5%',
    paddingRight: '5.5%',
    backgroundColor: "#f6f6f6",
    marginTop: "40.5%",
    paddingBottom: "5%"
  },
  whatsIncludedSub: {
    padding: "1.5%"
  },
  start: {
    float: "left",
    width: "40%",
    borderStyle: "solid",
    borderWidth: "thin",
    padding: "2%",
    marginRight: "2.5%",
    marginBottom: "5%",
    backgroundColor: "#B22222",
    color: "white"
  },
  whatsIncludedLeft: {
    width: "45%",
    fontSize: "20px",
    lineHeight: "1.5",
    float: "left"
  },
  whatsIncludedRight: {
    paddingLeft: "10%",
    width: "45%",
    fontSize: "20px",
    lineHeight: "1.5",
    float: "left"
  },
  howItWorks: {
    paddingTop: "7.5%",
    paddingLeft: "10.5%",
  },
  howItWorksLeft: {
    float: "left",
    width: "35%",
  },
  letsShowYou: {
    paddingTop: "7.5%",
    paddingLeft: "10.5%",
    clear: "both"
  },
  howItWorksRight: {
    float: "left",
    width: "35%",
    paddingLeft: "6%"
  },
  featuresHeader: {
     paddingTop: '7.5%',
     paddingLeft: '10.5%',
     clear: "both"
  },
  features: {
    backgroundColor: "white",
    width: "25%",
    height: "20%",
    display: "inline",
    paddingRight: "3%",
    marginLeft: "3%",
    marginBottom: "3%",
    float: "left"
  },
  getStarted: {
    width: "700px",
    height: "200px",
    backgroundColor: "#B22222",
    textDecoration: "none",
    padding: "2%",
    color: "white",
    fontWeight: "bold"
  }
}
