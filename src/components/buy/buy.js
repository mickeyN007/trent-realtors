import React, { Component } from "react"

import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import LoadingScreen from './../loadingScreen'

//import './../../css/buyHeader.css'
import Header from './../header/HeaderB'
import Footer from './../footer/footer'

import { mySettings } from "./../../settings"

export default class Buy extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
      loading: false

    }
  }
  render() {
    return (
      <div style={styles.container}>
      <BreakpointProvider>
        <div id='boxImageSell'>
          <Header headerStyle={this.props.headerStyle} search={this.search.bind(this)} toggleLoading={this.toggleLoading.bind(this)}/>
          <Breakpoint medium down>
          <center><div style={{backgroundColor: 'black', position: 'absolute', top: 440, marginLeft: 100, padding: '2%'}}>
            <h4>FIND YOUR DREAM HOME</h4>
            <div>
              <center><input style={styles.in} placeholder="ENTER ZIP CODE, ADDRESS OR CITY" onChange={(e) => this.setState({location: e.target.value})}/>
              <span onClick={this.search.bind(this)} style={styles.search}>SEARCH</span></center>
            </div>
          </div></center>
          </Breakpoint>
          <Breakpoint large up>
          <center><div style={{width: '40%', backgroundColor: 'black', position: 'absolute', top: 490, marginLeft: 430, padding: '2%'}}>
            <h4>FIND YOUR DREAM HOME</h4>
            <div>
              <center><input style={styles.in} placeholder="ENTER ZIP CODE, ADDRESS OR CITY" onChange={(e) => this.setState({location: e.target.value})}/>
              <span onClick={this.search.bind(this)} style={styles.search}>SEARCH</span></center>
            </div>
          </div></center>
          </Breakpoint>
        </div>
        <Breakpoint medium down>
        <div style={{paddingBottom: "2%", paddingTop: "15%", zIndex: -999999, position: "relative"}}>
          <center><h4>A FASTER PROCESS WHEN YOU BUY. THE FUTURE OF REAL ESTATE.</h4></center>
          <center><h1>Innovation driving a better buyer experience</h1></center>
        </div>
        </Breakpoint>
        <Breakpoint large up>
        <div style={{paddingBottom: "2%", paddingTop: "10%", zIndex: -999999, position: "relative"}}>
          <center><h4>A FASTER PROCESS WHEN YOU BUY. THE FUTURE OF REAL ESTATE.</h4></center>
          <center><h1>Innovation driving a better buyer experience</h1></center>
        </div>
        </Breakpoint>
        <Footer subscribeToNewsletter={this.subscribeToNewsletter.bind(this)} />
        </BreakpointProvider>
        {this.state.loading && <LoadingScreen />}
      </div>
    )
  }
  subscribeToNewsletter(email) {
    this.props.subscribeToNewsletter(email)
  }
  search() {
    this.props.search(this.state.location)
  }
  componentWillMount() {
    var top=0, left=0
    window.scrollTo({ left, top});
  }
  toggleLoading(loading) {
    this.setState({loading})
  }
}

const styles = {
  container: {
    fontSize: '15px'
  },
  in: {
    width: "60%",
    padding: "2.5%"
  },
  findDreamHome: {
    padding: "1.5%",
    color: "white",
    backgroundColor: "black",
    width: "35%",
    marginLeft: "30%"
  },
  search: {
    backgroundColor: "#0080FF",
    padding: "2%"
  }
}
