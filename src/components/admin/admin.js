import React, { Component } from 'react'

import AdminDashboard from './adminDashboard'
import AdminLogin from './adminLogin'
import { mySettings } from './../../settings.js'

export default class Admin extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      houses: []
    }
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    var name = "Admin"
    if (true) {
      return <AdminDashboard {...this.props} name={name} data={this.state}/>
    }
    else {
      return <AdminLogin />
    }
  }
  getUsers() {
    fetch(mySettings.serverID+'api/getUsers')
      .then(users => {
          this.setState({users})
        })
  }
  getHouses() {
    alert('ff')
    fetch(mySettings.serverID+'api/getHouses')
      .then(houses => {
          alert(houses)
          this.setState({houses})
        })
  }

  getData() {
    this.getUsers()
    this.getHouses()
  }
}
