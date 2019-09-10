import React, { Component } from 'react'

import AdminDashboard from './adminDashboard'
import AdminLogin from './adminLogin'

export default class Admin extends Component {
  render() {
    var name = "Admin"
    var usr = localStorage.getItem('token') !== null ? JSON.parse(localStorage.getItem('token')).user : null
    if (usr) {
      if (usr.type=='admin')
        return <AdminDashboard {...this.props} name={name} />
      else {
        alert('Unauthorised access... Event reported!')
        window.location.href = '/'
      }
    }
    else {
      return <AdminLogin {...this.props} />
    }
  }
}
