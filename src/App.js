import React, { Component } from 'react';
import './App.css';
// import Admin from "./components/admin/layouts/Admin.jsx";

// router
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import { mySettings } from './settings.js'
//import './css/main.css'

// imported components
import Home from './components/home/Home'
import Sell from './components/sell/sell'
import Buy from './components/buy/buy'
import Valuation from './components/valuation/valuation'
import Search from './components/search/search'
import Property from './components/search/property'

import LoginRegister from './components/loginRegister/loginRegister'
import Account from './components/account/account'
import Admin from "./components/admin/admin";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

export default class App extends Component {
  constructor() {
    super()
    this.refToggleLoading = React.createRef()
    this.state = {
      headerStyle: {
      zIndex: 9999999999999,
      backgroundColor: "white",
      color: "black",
      fontWeight: "bold",
      position: 'fixed',
      height: "100px",
      paddingTop: '2%',
      paddingBottom: '0',
      paddingLeft: '10%',
      margin: 0,
      borderColor: "#B22222",
      borderBottomStyle: "solid",
      width: '100%'

      },
      headerStyleB: {
        zIndex: 9999999999999,
       backgroundColor: "white",
      color: "black",
      fontWeight: "bold",
      position: 'fixed',
      height: "100px",
      paddingTop: '2%',
      paddingBottom: '0',
      paddingLeft: '10%',
      margin: 0,
      borderColor: "#B22222",
      borderBottomStyle: "solid",
      width: '100%'
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
      <Router history={hist} forceRefresh={true}>
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
                ref={this.refToggleLoading}
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
                logOut={this.logOut.bind(this)}
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
          <Route
            path="/property/"
            render={(props) =>
              <Property {...props}
                  properties={this.state.properties}
                  house={[]}
              />
            }
          />
          <Route
            path="/admin"
            render={(props) =>
              <Admin {...props}/>
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
    if (/\S/.test(location)) {
      const {method, headers} = mySettings.optionsB
      var body = JSON.stringify({location})
      var options = {method, headers, body}
    this.setState({location})
    fetch(mySettings.serverID+'api/search',options)
    .then(res => res.json())
    .then(properties => {
      //const { properties } = data
      this.setState({properties})
      hist.push({
        pathname: '/search',
        state: {
          properties,
          location
        }
      })
      this.toggleLoading(false)
      window.location.href = '/search'
      //return true
      //return {data, error: "Success"}
    })
    .catch(err => {
      //return true
      this.toggleLoading(false)
      alert("Can't connect to Trent Realtor's server at the moment")
    })
    }
    else {
      //return true
      alert('Enter an address')
      this.toggleLoading(false)
    }
  }
  subscribeToNewsletter(email) {
    //console.log(email)
  }
  toggleLoading(loading) {
    //alert(Object.keys(this.refToggleLoading.current))
    this.refToggleLoading.current.toggleLoading(loading)
  }
  sponsoredHouses() {
    this.setState({
      sponsoredHouses:
        [
          {email: 'admin', price: '2000000', neighborhood: 'Great established neighborhood about 15 minute walk up Main Street to downtown shops and restaurants. Napa neighborhoods/streets are very diverse regarding types of houses, parking, etc. The Farmhouse sits on beautiful part of Main Street with great parking.', description: 'Completely renovated quality 31-foot Airstream in the backyard of the Main Street Farmhouse. Sealy Posturpedic Full bed, bathroom, kitchenette, couch, dinette, flatscreen TV and wifi. Sorry, NO PETS allowed. We allow cooking our farm fresh eggs but no cooking meats, bacon, sausage, fish, etc. in the unit. Not suitable for children under the age of 12 years. Community fee (local lodging tax of 14%) is added to reservation when confirmed by guest.', features: [], type: 'Sale', name: "Off 69th road Gwarinpa estate Abuja", images: ['https://i.ibb.co/Y7vfqdR/20190502-132402.jpg','https://i.ibb.co/rQrrtvB/20190502-132332.jpg', 'https://i.ibb.co/7y0MbJX/20190502-132425.jpg',]},
          {email: 'admin', price: '2000000', neighborhood: '', description: '', features: ['3 Bedrooms', '3 Toilets', '3 Kitchens'], type: 'Rent', name: "AB Close off 1st Avenue Gwarinpa ", images: ['https://i.ibb.co/RHdprzd/20181226-132113.jpg']},
          {email: 'admin', price: '2000000', neighborhood: '', description: '', features: [], type: 'Sale', name: "Off Lake Chad, Maitama", images: ['https://i.ibb.co/bJJ6yG7/IMG-20190507-WA0062.jpg']},
          {email: 'admin', price: '2000000', neighborhood: '', description: '', features: [], type: 'Sale', name: "By sigma apartment Jabi", images: ['https://i.ibb.co/kc4CYjD/sigma.jpg']},
          {email: 'admin', price: '2000000', neighborhood: '', description: '', features: [], type: 'Sale', name: "Efab Metropolis Gwarinpa", images: ['https://i.ibb.co/RbK23Z7/Efab-Metropolis-Gwarinpa.jpg']}
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
      paddingLeft: '10%',
      borderColor: "#B22222",
      borderBottomStyle: "solid",
      width: '100%'
    }
    let headerStyleB = {
      backgroundColor: "white",
      color: "black",
      fontWeight: "bold",
      position: 'fixed',
      height: "100px",
      paddingTop: '2%',
      paddingBottom: '0',
      margin: 0,
      paddingLeft: '10%',
      width: '100%',
      borderColor: '#B22222',
      borderBottomStyle: 'solid'
    }
    if ( window.scrollY <= 10 ) {
      //if (!headerStyleSet)
        /*this.setState({
          headerStyle: {},
          headerStyleB: {}
        })*/
    } else {
      // ( window.scrollY <= 40 && window.scrollY > 10) {
      this.setState({headerStyle,headerStyleB})
    }
  }
  storeSession(token) {
    localStorage.setItem('token', JSON.stringify(token))
  }
  isLoggedIn(token) {
    return localStorage.getItem('token') ? true : false
  }
  logOut() {
    localStorage.removeItem('token')
    window.location.href='/loginRegister'
  }
}
