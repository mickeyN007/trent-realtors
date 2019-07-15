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
      sponsoredHouses: [],
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
                sponsoredHouses={this.state.sponsoredHouses}
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
                sponsoredHouses={this.state.sponsoredHouses}
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
                  //location={this.state.location}
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
    this.sponsoredHouses()
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
      hist.push({
        pathname: '/search',
        state: {
          properties,
          house: {},
          location
        }
      })
      //return {data, error: "Success"}
    })
    .catch(err => {
      hist.push({
        pathname: '/search',
        state: {
          properties: [],
          house: {},
          location
        }
      })
    })
  }
  subscribeToNewsletter(email) {
    //console.log(email)
  }
  sponsoredHouses() {
    this.setState({
      sponsoredHouses:
        [
          {price: '2000000', neighborhood: 'Great established neighborhood about 15 minute walk up Main Street to downtown shops and restaurants. Napa neighborhoods/streets are very diverse regarding types of houses, parking, etc. The Farmhouse sits on beautiful part of Main Street with great parking.', description: 'Completely renovated quality 31-foot Airstream in the backyard of the Main Street Farmhouse. Sealy Posturpedic Full bed, bathroom, kitchenette, couch, dinette, flatscreen TV and wifi. Sorry, NO PETS allowed. We allow cooking our farm fresh eggs but no cooking meats, bacon, sausage, fish, etc. in the unit. Not suitable for children under the age of 12 years. Community fee (local lodging tax of 14%) is added to reservation when confirmed by guest.', features: [], type: 'Sale', name: "Off 69th road Gwarinpa estate Abuja", images: ['https://i.ibb.co/Y7vfqdR/20190502-132402.jpg','https://i.ibb.co/rQrrtvB/20190502-132332.jpg', 'https://i.ibb.co/7y0MbJX/20190502-132425.jpg',]},
          {price: '2000000', neighborhood: '', description: '', features: ['3 Bedrooms', '3 Toilets', '3 Kitchens'], type: 'Rent', name: "AB Close off 1st Avenue Gwarinpa ", images: ['https://i.ibb.co/RHdprzd/20181226-132113.jpg']},
          {price: '2000000', neighborhood: '', description: '', features: [], type: 'Sale', name: "Off Lake Chad, Maitama", images: ['https://i.ibb.co/bJJ6yG7/IMG-20190507-WA0062.jpg']},
          {price: '2000000', neighborhood: '', description: '', features: [], type: 'Sale', name: "By sigma apartment Jabi", images: ['https://i.ibb.co/kc4CYjD/sigma.jpg']},
          {price: '2000000', neighborhood: '', description: '', features: [], type: 'Sale', name: "Efab Metropolis Gwarinpa", images: ['https://i.ibb.co/RbK23Z7/Efab-Metropolis-Gwarinpa.jpg']}
        ]
      })
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
