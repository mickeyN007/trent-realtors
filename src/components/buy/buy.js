import React, { Component } from "react"

//import './../../css/buyHeader.css'
import Header from './../header/HeaderB'
import Footer from './../footer/footer'

import { mySettings } from "./../../settings"

export default class Buy extends Component {
  constructor() {
    super()
    this.state = {
      location: ''
    }
  }
  render() {
    return (
      <div style={styles.container}>
        <div id='boxImageSell'>
          <Header headerStyle={this.props.headerStyle} search={this.search.bind(this)}/>
          <div style={styles.findDreamHome}>
            <center><h4>FIND YOUR DREAM HOME</h4></center>
            <div>
              <center><input style={styles.in} placeholder="ENTER ZIP CODE, ADDRESS OR CITY" onChange={(e) => this.setState({location: e.target.value})}/>
              <span onClick={this.search.bind(this)} style={styles.search}>SEARCH</span></center>
            </div>
          </div>
        </div>
        <div style={{paddingBottom: "2%", paddingTop: "2%", zIndex: -999999, position: "relative"}}>
          <center><h4>A FASTER PROCESS WHEN YOU BUY. THE FUTURE OF REAL ESTATE.</h4></center>
          <center><h1>Innovation driving a better buyer experience</h1></center>
        </div>
        <Footer subscribeToNewsletter={this.subscribeToNewsletter.bind(this)} />
      </div>
    )
  }
  subscribeToNewsletter(email) {
    this.props.subscribeToNewsletter(email)
  }
  search() {
    this.props.search(this.state.location)
  }
}

const styles = {
  container: {

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
