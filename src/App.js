import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { mySettings } from './settings.js'

// imported components
import Home from './components/home/Home'
import Sell from './components/sell/sell'
import Buy from './components/buy/buy'
import Valuation from './components/valuation/valuation'
import Search from './components/search/search'
import LoginRegister from './components/loginRegister/loginRegister'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      headerStyle: {
      },
      headerStyleB: {
      },
      headerStyleSet: false,
      searchForHomes: false,
      properties: [],
      agents: [],
      location: ''
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Route
            exact={true}
            path="/"
            render={(props) =>
              <Home {...props}
                search={this.search.bind(this)}
                findAgent={this.findAgent.bind(this)}
                headerStyle={this.state.headerStyle}
              />
            }
          />
          <Route
            path="/sell/"
            render={(props) =>
              <Sell {...props}
                //subscribeToNewsletter={this.subscribeToNewsletter.bind(this)}
                headerStyle={this.state.headerStyle}
                search={this.search.bind(this)}
              />
            }
          />
          <Route
            path="/buy/"
            render={(props) =>
              <Buy {...props}
                search={this.search.bind(this)}
                //subscribeToNewsletter={this.subscribeToNewsletter.bind(this)}
                headerStyle={this.state.headerStyleB}
              />
            }
          />
          <Route
            path={`/#ourAgents`}
            render={
              (props) =>
              <Home {...props}
                search={this.search.bind(this)}
                //subscribeToNewsletter={this.subscribeToNewsletter.bind(this)}
                findAgent={this.findAgent.bind(this)}/>
            }
          />
          <Route
            path="/valuation/"
            render={(props) =>
              <Valuation {...props}

              />
            }
          />
          <Route
            path="/LoginRegister/"
            render={(props) =>
              <LoginRegister {...props}

              />
            }
          />
          <Route
            path="/search/"
            render={(props) =>
              <Search {...props}
                  location={this.state.location}
                  properties={this.state.properties}
                  search={this.search.bind(this)}
              />
            }
          />
        </div>
      </Router>
    );
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent.bind(this))
  }
  findAgent(zipCode) {
    return {error: true}
  }
  hideSearchBox() {
    this.setState({searchForHomes: false})
  }
  hideMenuItems() {
    if (this.state.searchForHomes) {
      this.setState({searchForHomes: false})
    }
  }
  search(location) {
    //this.setState({})
    this.setState({location})
    fetch(mySettings.serverID+'/api/search',
      mySettings.optionsB
    )
    .then(res => res.json())
    .then(data => {
      const { properties } = data
      this.setState({properties})
      window.location.href = "/search";
      //return {data, error: "Success"}
    })
    .catch(err => {
      window.location.href = "/search";
    })
  }
  subscribeToNewsletter(email) {
    //console.log(email)
  }
  listenScrollEvent(e) {
    let { headerStyleSet } = this.state
    let headerStyle = {
      backgroundColor: "white",
      color: "black",
      fontWeight: "bold",
      position: 'fixed',
      width: '100%',
      height: "120px",
      paddingTop: '0',
      paddingBottom: '0',
      margin: 0,
      borderColor: "#B22222",
      borderBottomStyle: "solid"
    }
    let headerStyleB = {
      backgroundColor: "#B22222",
      color: "white",
      fontWeight: "bold",
      position: 'fixed',
      width: '100%',
      height: "90px",
      paddingTop: '0',
      paddingBottom: '0',
      margin: 0,
    }
    if ( window.scrollY <= 10 ) {
      //if (!headerStyleSet)
        this.setState({
          headerStyle: {},
          headerStyleB: {}
        })
    } else {
      // ( window.scrollY <= 40 && window.scrollY > 10) {
      this.setState({headerStyle,headerStyleB})
    }
  }
}
