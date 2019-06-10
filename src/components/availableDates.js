import React, { Component } from 'react'

export default class AvailableDates extends Component {
  render() {
    const today = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
      <div style={styles.container}>
        <div style={styles.month}>
          <center><h3>{months[today.getMonth()]}</h3></center>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div style={styles.time}>
          <center><h3>Time</h3></center>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    color: "white",
    clear: "both"
  },
  month: {
    backgroundColor: "red",
    padding: "2%"
  },
  time: {
    backgroundColor: "gray",
    padding: "2%"
  }
}
