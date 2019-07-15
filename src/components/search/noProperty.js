import React, { Component } from 'react'

import { Link } from "react-router-dom";
import Header from './../header/HeaderC'

import Map from './../map'
import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';

export default class NoProperty extends Component {
  render() {
    return (
      <div>
      <Header headerStyle={styles.headerStyle} />
      <div style={styles.container}>
        <Row>


        <Col xs={12} lg={6}>
          <center><h3><b>Sorry, we are not currently operating in your area:</b></h3></center>
          <center><h1>h</h1></center>

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
        </Col>
        <Col xs={12} lg={6}>
          <Map />
        </Col>
        </Row>
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
    paddingTop: 150,
    paddingLeft: '3%',
    paddingRight: '3%',

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
    float: 'left',
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
  },
  headerStyle: {

  },
}
