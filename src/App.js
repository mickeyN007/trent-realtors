import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Admin from "./components/admin/layouts/Admin.jsx";

// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { mySettings } from './settings.js'
//import './css/main.css'

// imported components
import Home from './components/home/Home'
import Sell from './components/sell/sell'
import Buy from './components/buy/buy'
import Valuation from './components/valuation/valuation'
import Search from './components/search/search'
import LoginRegister from './components/loginRegister/loginRegister'
import Account from './components/account/account'
// import Admin from "layouts/Admin.jsx";

import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      headerStyle: {
        zIndex: 9999999999999,
      },
      headerStyleB: {
        zIndex: 9999999999999,
      },
      headerStyleSet: false,
      searchForHomes: false,
      properties: [],
      agents: [],
      location: '',
      username: 'Michael',
      availableHouses: [],
    }
  }
  componentWillMount() {
    var top=0, left=0
    window.scrollTo({ left, top});
  }
  render() {
    return (
      <Router history={hist}>
        <div>
          <Route
            exact={true}
            path="/"
            render={(props) =>
              <Home {...props}
                availableHouses={this.state.availableHouses}
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
                availableHouses={this.state.availableHouses}
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
            path="/account/"
            render={(props) =>
              <Account {...props}
                username={this.state.username}
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
    this.getAvailableHouses()
    window.addEventListener('scroll', this.listenScrollEvent.bind(this))
  }
  changePage(page) {
    //
  }
  findAgent(zipCode) {
    return {error: true}
  }
  hideSearchBox() {
    this.setState({searchForHomes: false})
  }
  saveData(data) {
    Window.sessionStorage.setItem('user', data);
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
  getAvailableHouses() {
    this.setState({availableHouses: [{name: "Apo", images: ['/images/account.png']}, {name: "Garki", images: []}, {name: "Maitama", images: []}, {name: "Area 1", images: ['./images/account.png']}, {name: "Wuye", images: []}, {name: "Asokoro", images: []}]})
  }
  listenScrollEvent(e) {
    let { headerStyleSet } = this.state
    let headerStyle = {
      backgroundColor: "white",
      color: "black",
      fontWeight: "bold",
      position: 'fixed',
      height: "100px",
      paddingTop: '2%',
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
      height: "100px",
      paddingTop: '2%',
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
