import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col,  } from 'react-bootstrap';
import LoadingScreen from './../loadingScreen'

import './../../css/header.css'

// imported components
import Header from './../header/Header'
import BoxImage from './BoxImage'
import Footer from './../footer/footer'
import RequestCallBackForm from './../requestCallBack/requestCallBackForm'

// images
import blackHouse from './../../images/blackHouse.jpg'
import blackHouse2 from './../../images/blackHouse2.jpg'
import blackHouse3 from './../../images/blackHouse3.jpg'

import leftArrow from './../../images/leftArrow.png'
import rightArrow from './../../images/rightArrow.png'
import redCheckMark from './../../images/redCheckMark.png'

export default class Sell extends Component {
  constructor() {
    super()
    this.openModal = React.createRef();
    this.state = {
      ourProcess: 0,
      cmbOpen: false
    }
  }
  componentWillMount() {
    var top=0, left=0
    window.scrollTo({ left, top});
  }
  render() {
    const listA = [
      "A dedicated, full service local licensed real estate agent",
      "A commitment to getting the best price for you",
      "A professional photography suite, yard sign and 3-D virtual tour",
    ]

    const listB = [
      "Listing on all major listing sites and your local MLS",
      "A Trent Realtors' account accessed on your desktop or mobile device",
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
        desc: "Receive offers, negotiate feedback on your home and schedule open houses and private showings 24/7 through your Trent Realtors account. Your agent and our wider customer service team will be with you every step of the way to advise, dialogue with potential buyers, and advocate for you."
      },
      {
        name: "Close With Confidence",
        desc: "Should you choose, we’ll support you through legal and compliance requirements so you can close quickly and get on with the things that matter most in life."
      },
    ]
    return (
      <div style={styles.container}>
        <div id='boxImageSell'>
          <Header headerStyle={this.props.headerStyle}  search={this.search.bind(this)} />
        </div>
        <Container fluid style={{zIndex: 2, paddingTop: '2%'}}>
        <Row style={styles.featuresHeader}>
          <Col lg={6} xs={12}>
            <p><h4><b>What you will get</b></h4></p>
            <p>Our experts are some of the most experienced agents in your area, dedicated to achieving the best results and saving you thousands in commission with our low, fixed fee.</p>

              <div><img src={redCheckMark} width="4%" />&nbsp;&nbsp;<b>Dedicated local real estate agent</b></div>
              <div><img src={redCheckMark} width="4%" />&nbsp;&nbsp;<b>Professional photography suite, yard sign and 3D virtual tour</b></div>
              <div><img src={redCheckMark} width="4%" />&nbsp;&nbsp;<b>Listing on your local MLS and all major listing sites</b></div>
              <div><img src={redCheckMark} width="4%" />&nbsp;&nbsp;<b>Exclusive early access to buyers through our "Coming Soon" listing feature</b></div>

            <br /><p>Get started by booking a free, no-obligation listing appointment with one of our qualified agents.</p>

            <h5><b>Low, fixed fee. Pay only when you sell</b></h5>
            <br/><Link style={styles.getStarted} to="/valuation/">Get Started</Link><br/>

          </Col>
          <Col lg={6} xs={12} style={{paddingTop: '6%', paddingLeft: '3%'}}>
            <img src={blackHouse} height="80%" width="100%" alt="Pic not found" />
          </Col>
          </Row>
          <Row>
          <Col lg={12} xs={12}>
          <p style={styles.featuresHeader}><h4><b>Here's what you receive for your low, fixed fee</b></h4></p>
          </Col>
          </Row>
          <Row style={{left: 0, right: 0, textAlign: 'center', justifyContent: 'center', backgroundColor: "#f6f6f6",  paddingTop: "3.5%"}}>
            {listA.map((menu) =>
              <Col xs={4} lg={3}  style={styles.features}>
                <center><p>{menu}</p></center>
              </Col>
            )}
            {listB.map((menu) =>
              <Col xs={4} lg={3} style={styles.features}>
                <center><p>{menu}</p></center>
                </Col>
            )}
          </Row>
        <Row style={styles.featuresHeader}>
          <Col lg={12} xs={12}>
          <p><h4><b>How it works</b></h4></p>
          </Col>
          <Col lg={6} xs={12}>
            <br /><h5><b>Our process</b></h5>
            <p>Here’s what you can expect from the Trent Realtors experience.</p>
            <div>
              <h5><b>{this.state.ourProcess+1}. {ourProcess[this.state.ourProcess].name}</b></h5><br />
              <p>{ourProcess[this.state.ourProcess].desc}</p>
              <span onClick={this.previousProcess.bind(this)} style={styles.backButton}><img src={leftArrow} width="7%" /></span>
              <span onClick={this.nextProcess.bind(this)} style={styles.backButton}><img src={rightArrow} width="7%" /></span>
              <span style={{fontSize: 25, paddingLeft: "5%"}}>{this.state.ourProcess+1}/4</span>
              <br /><br /><Link style={styles.getStarted} to="/valuation/">Get started</Link><br/><br/>
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <img src={blackHouse2} width="90%" height="80%" alt="No pic"/>
          </Col>
        </Row>
        <Row style={styles.featuresHeader}>
          <Col lg={12} xs={12}>
            <h4><b>Let us show you</b></h4>
          </Col>
          <Col lg={6} xs={12}>
            <img src={blackHouse3} width="90%" height="80%" alt="No pic"/>
          </Col>
          <Col lg={6} xs={12}>
            <p style={{fontSize: 25}}>Schedule your free, no-obligation listing appointment</p>
            <p style={{fontSize: 20, marginBottom: "10%"}}>Your Trent Realtors' agent will work with you to better understand your selling needs and answer any questions you may have.</p>
            <Link style={styles.getStarted} to="/valuation/">BOOK ONLINE</Link>
            <span onClick={this.openModalB.bind(this)} style={{cursor: 'pointer', backgroundColor: "white", borderWidth: "thin", textDecoration: "none",  padding: "2%", color:"black", marginLeft: "5%", borderStyle: "solid", borderColor: "black"}}>REQUEST A CALLBACK</span>
            <RequestCallBackForm
              ref={this.openModal}
            />
          </Col>
        </Row>
        <Footer />
        </Container>
        {this.state.loading && <LoadingScreen />}
      </div>
    )
  }
  nextProcess() {
    var { ourProcess } = this.state.ourProcess
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
  }
  subscribeToNewsletter(email) {
    this.props.subscribeToNewsletter(email)
  }
  openModalB() {
    this.openModal.current.openModal()
    //return true
  }
  search(location) {
    this.props.search(location)
  }
}

const styles = {
  container: {
  },
  expectationsLeft: {
    paddingLeft: '10.5%',
    paddingTop: '7.5%',
    width: "40%",
    fontSize: "20px",
    lineHeight: "1.5",
    float: "left"
  },
  expectationsRight: {
    paddingRight: '5.5%',
    paddingLeft: "6%",
    paddingTop: '10.5%',
    width: "35%",
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
     paddingLeft: '7%',
     paddingRight: '7%'
  },
  features: {
    backgroundColor: "white",
    width: "25%",
    height: "20%",
    display: "inline",
    padding: '3%',
    paddingRight: "3%",
    marginLeft: "3%",
    marginBottom: "3%",
    float: "left"
  },
  getStarted: {
    width: "100%",
    height: "200px",
    backgroundColor: "#B22222",
    textDecoration: "none",
    padding: "2%",
    color: "white",
    fontWeight: "bold"
  }
}
