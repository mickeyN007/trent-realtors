import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col,  } from 'react-bootstrap';

import './../../css/header.css'
// import AvailableHouses from './../ads/availableHouses'
// imported components
import Header from './../header/Header'
import Footer from './../footer/footer'
import SponsoredHouses from './../ads/sponsoredHouses'
import LoadingScreen from './../loadingScreen'

// images
import blackHouseB from './../../images/blackHouseB.jpg'
import blackHouse4 from './../../images/blackHouse4.jpg'


import rightArrow from './../../images/rightArrow.png'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      ourProcess: 0,
      zipCode: "",
      noAgentFound: false,
      loading: false,
      showAvailableHouses: false,
      house: {}
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
    var noAgentFound =
    <div style={{padding: '10%', backgroundColor: '#F5F5F5'}}>
        <h2>We're having trouble finding the price for your zip code, but don't worry</h2>
        <p>We want to make sure we have the most accurate information in order to get you the best price so let's talk.</p>

        <b>Call us at:</b>
        <p>(+234)-8098-410-475 24 hours a day, 7 days a week</p>
        <p>If you'd like to try a new search, please enter a new zip code.</p>
      </div>
    var id = (window.screen.width>637) ? 'boxImage' : 'boxImageB'
    if (true)return (
      <div style={styles.container}>
        <div id={id}>
          <Header {...this.props} toggleLoading={this.toggleLoading.bind(this)} headerStyle={this.props.headerStyle} search={this.search.bind(this)} toggleLoginModal={this.toggleLoading.bind(this)}/>
        </div>
        <Container style={{zIndex: 2, paddingLeft: '2%', paddingTop: '2%',}}>
        <Row>
          <Col lg={12} xs={12}>
            <SponsoredHouses {...this.props} sponsoredHouses={this.props.sponsoredHouses} showAvailableHouses={this.showAvailableHouses.bind(this)}/>
          </Col>
        </Row>
        <Row style={{paddingTop: '5%'}}>
          <Col lg={6}>
            <p><h2>Our agents have joined us from leading brokerages</h2></p>

            <p>Many of our agents have made the switch from traditional real estate companies because Trent Realtors enables them to focus entirely on you, not on prospecting for customers.</p>
            <p>Our agents work exclusively for Trent Realtors and have developed strong local networks of motivated buyers and sellers.</p>

            <br /><span>Find your local agent</span><input onChange={(e) => this.setState({zipCode: e.target.value})} style={{width: "40%", padding: "1%", paddingLeft: "4%", marginLeft: "3%"}} placeholder="Your zip code" />
            <span onClick={this.findAgent.bind(this)} style={{padding: "1.5%", backgroundColor: "#B22222"}}><img src={rightArrow} width="4%" /></span>
          </Col>
          <Col lg={6}>
            {!this.state.noAgentFound && <img src={blackHouseB} height="100%" width="100%" alt="Pic not found" style={{paddingTop: '4%'}}/>}
            {this.state.noAgentFound && noAgentFound}
          </Col>
        </Row>
        </Container>
        <div style={styles.whatsIncluded}>
        <Container>
        <Row>
        <Col lg={12}>
          <p><h3><b>A fair, fixed fee — not an unfair commission</b></h3></p>
          <p><span style={{fontSize: "19px"}}>Your fair, fixed fee includes a full-service real estate agency experience from start to finish — and it's only payable when you sell</span></p>
        </Col>
        </Row>
        <Row>
          <Col lg={12}>
          <br/><h3><b>What's included</b></h3>
          </Col>
        </Row>
        <Row>
          <div style={styles.whatsIncludedLeft}>
            <div style={styles.whatsIncludedSub}>A professional, local Trent Realtors' real estate agent dedicated to you from listing to closing</div>
            <div style={styles.whatsIncludedSub}>Your agent will handle all showings and negotiations personally on your behalf</div>
            <div style={styles.whatsIncludedSub}>Professional photography, 3D virtual tour and premier marketing to optimize exposure</div>
            <div style={styles.whatsIncludedSub}>Advice on staging strategies to cast a positive light on the features most important to buyers</div>
          </div>
          <div style={styles.whatsIncludedRight}>
            <div style={styles.whatsIncludedSub}>Access to extensive local network of motivated buyers looking to purchase with Trent Realtors</div>
            <div style={styles.whatsIncludedSub}>Receive status updates and see offers and buyer feedback instantly</div>
            <div style={styles.whatsIncludedSub}>Your property will be listed on trentrealtors.com which has a huge customer base</div>
          </div>
          </Row>
          <Row style={{marginTop: '15%'}}>
          <Col lg={4}>
          <div style={{clear: "both"}}><br /><br /><br /><center><Link style={styles.getStarted} to="/valuation/">BOOK A FREE CONSULTATION</Link></center></div>
          </Col>
          </Row>
          </Container>
          </div>
        <Container style={{padding:'4%'}}>
        <Row>
          <Col lg={6}>
          <h2><b>It all starts with a conversation</b></h2>
            <p style={{fontSize: 20}}>A qualified local agent is always available to speak with you about buying or selling with Trent realtors, with no obligation and no pressure. Interested?</p>
              <span style={styles.start}>
                <b>Book a consultation</b>
                <p>Select a date and time for an in-home visit with a local agent</p><br />
              </span>
              <span style={styles.start}>
                <b>Email us</b>
                <p>Send us a note or ask a question and we'll reply right away.</p><br />
              </span>
            <div style={{clear: "both"}}>
              <span style={styles.start}>
                <b>Call me back</b>
                <p>We'll call you at a time that's convenient for you</p><br />
              </span>
              <span style={styles.start}>
                <b>Speak to an agent</b>
                <p>We'll match you with an agent instantly, so you can get in touch on your own time.</p>
              </span>
            </div>
          </Col>
          <Col lg={6}>
          <div style={{paddingTop: "25%", width:"90%", height:"60%", float: "left", width: "30%", paddingLeft: "5%",}}>
            <img src={blackHouse4} width="400vh" height="400px" />
          </div>
          </Col>
          </Row>
        </Container>
        <Footer subscribeToNewsletter={this.subscribeToNewsletter.bind(this)} />
        {this.state.loading && <LoadingScreen />}
      </div>
    )
  }
  findAgent() {
    this.toggleLoading(true)
    var result = this.props.findAgent(this.state.zipCode)
    if (result) this.toggleLoading(false)
    if (!result.error) {
      //
    }
    else {
      this.setState({noAgentFound: true})
    }
  }
  toggleLoading(loading) {
    this.setState({loading})
  }
  subscribeToNewsletter(email) {
    this.props.subscribeToNewsletter(email)
  }
  showAvailableHouses(val, house) {
    console.log(house, 'uuu')
    this.setState({showAvailableHouses: val, house})
  }
  search(location) {
    this.props.search(location)
  }
}



const styles = {
  container: {
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
    paddingLeft: '5.5%',
    backgroundColor: "#f6f6f6",
    marginTop: "10.5%",
    paddingBottom: "5%"
  },
  whatsIncludedSub: {
    height: '30%',
    padding: '10% 5% 0 5%',
    backgroundColor: 'white',
    marginBottom: '5%'
  },
  start: {
    float: "left",
    width: "40%",
    height: 180,
    borderStyle: "solid",
    borderWidth: "thin",
    padding: "4%",
    marginRight: "3.5%",
    marginLeft: "3.5%",
    marginBottom: "5%",
    backgroundColor: "#B22222",
    color: "white"
  },
  whatsIncludedLeft: {
    width: "45%",
    fontSize: "20px",
    lineHeight: "1.5",
    float: "left",
    paddingRight: '2.5%'
  },
  whatsIncludedRight: {
    paddingLeft: "2.5%",
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
    color: "white",
    fontWeight: "bold",
    padding: '5%',
    marginBottom: '4%'
  },
  backgroundImage: {
  }
}

