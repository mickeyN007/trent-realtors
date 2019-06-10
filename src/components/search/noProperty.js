import React, { Component } from 'react'

import { Link } from "react-router-dom";

import Map from './../map'

export default class NoProperty extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <center><h3><b>Sorry, we are not currently operating in your area:</b></h3></center>
          <center><h1>{this.props.location}</h1></center>

          <center>
          <div style={styles.box}>
            <p>Buying a property?</p>
            <hr style={{color: '#0080FF'}}/>
            <p>Please adjust your search criteria and try again.</p>
          </div>
          </center>
          <center>
          <div style={styles.box}>
            <p>Selling a property?</p>
            <hr style={{color: '#0080FF'}}/>

            <p>Book a free <Link to='/valuation/'>valuation</Link> and learn more about listing your property with Trent Realtors.</p>
          </div>
          </center>
        </div>
        <div style={styles.right}>
          <Map />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    backgroundColor: 'red',
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  left: {
    paddingTop: '2%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: '45%',
    float: 'left',
    marginTop: '10%',
    paddingBottom: '5%',
    backgroundColor: '#F5F5F5',

  },
  right: {
    marginTop: '5%',
    width: '55%',
    float: 'right',
    backgroundColor: 'red',
    backgroundColor: '#F5F5F5',
  },
  box: {
    padding: '4%',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'white',
    width: '60%',
    marginBottom: '3%',
    fontStyle: 'bold'
  }
}
