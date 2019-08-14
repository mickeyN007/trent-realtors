import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './../../css/availableHouses.css'

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Header from './../header/HeaderC'
import Footer from './../footer/footer'
import HouseImages from './houseImages'
import SponsoredHouses from './../ads/sponsoredHouses'
import MessageOffer from './messageOffer'
import Breakpoint, { BreakpointProvider } from 'react-socks'
import Maps from './../map'

export default class Properties extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     house: {}
  //   }
  // }
  render() {
    return (
        <BreakpointProvider>
        <Breakpoint large up>
                  <div style={{display: 'flex', flex: 1,}}>
            <Header headerStyle={styles.headerStyle} toggleLoading={this.toggleLoading.bind(this)} />
            <Container fluid style={styles.container}>
          <Row>
            <Col lg={12}>
              <HouseImages house={this.props.house}/>
            </Col>
          </Row>
          <Container style={{paddingRight: '3%', marginLeft: '10%', marginTop: '5%'}}>
          <Row>
            <Col lg={7} md={12} style={{marginRight: '5%'}}>
              <div style={{fontSize: 19}}><b>{this.props.house.name}</b></div>
              <div style={{fontSize: 14, marginBottom: '2%'}}>{this.props.house.name}</div>

              <div style={{padding: '3%', borderStyle: 'thin', backgroundColor: 'whitesmoke', width: '100%'}}>
                <h6><b>Features:</b></h6>
                <div style={{marginTop: '3%'}}>{this.getFeatures()}</div>
              </div>

              <hr />

              <div>
                <h6><b>Brief Description:</b></h6>
                {this.props.house.description}
              </div>

              <hr />

              <div>
                <h6><b>The neighborhood</b></h6>
                {this.props.house.neighborhood}
              </div>
            </Col>
            <Col lg={4} md={12}>
              <MessageOffer house={this.props.house} />
            </Col>
          </Row>
          <Row style={{marginTop: '20%'}}>
            <Col lg={12} xs={12}>
              <SponsoredHouses {...this.props} showAvailableHouses={this.showAvailableHouses.bind(this)} sponsoredHouses={this.props.sponsoredHouses} showAvailableHouses={this.showAvailableHouses.bind(this)}/>
            </Col>
          </Row>
          </Container>
          <Footer />
          </Container>
        </div>

        </Breakpoint>
        <Breakpoint medium down>
                  <div style={{display: 'flex', flex: 1,}}>
            <Header headerStyle={styles.headerStyle} toggleLoading={this.toggleLoading.bind(this)} />
            <Container fluid style={styles.containerB}>
          <Row>
            <Col lg={12}>
              <HouseImages house={this.props.house}/>
            </Col>
          </Row>
          <Container style={{paddingRight: '3%', marginLeft: '10%', marginTop: '5%'}}>
          <Row>
            <Col lg={7} md={12} style={{marginRight: '5%'}}>
              <div style={{fontSize: 19}}><b>{this.props.house.name}</b></div>
              <div style={{fontSize: 14, marginBottom: '2%'}}>{this.props.house.name}</div>

              <div style={{padding: '3%', borderStyle: 'thin', backgroundColor: 'whitesmoke', width: '100%'}}>
                <h6><b>Features:</b></h6>
                <div style={{marginTop: '3%'}}>{this.getFeatures()}</div>
              </div>

              <hr />

              <div>
                <h6><b>Brief Description:</b></h6>
                {this.props.house.description}
              </div>

              <hr />

              <div>
                <h6><b>The neighborhooduuu</b></h6>
                {this.props.house.neighborhood}
              </div>
            </Col>
            <Col lg={4} md={12}>
              <MessageOffer house={this.props.house} />
            </Col>
          </Row>
          <Row style={{marginTop: '20%'}}>
            <Col lg={12} xs={12}>
              <SponsoredHouses {...this.props} showAvailableHouses={this.showAvailableHouses.bind(this)} sponsoredHouses={this.props.sponsoredHouses} showAvailableHouses={this.showAvailableHouses.bind(this)}/>
            </Col>
          </Row>
          </Container>
          <Footer />
          </Container>
        </div>

        </Breakpoint>
        </BreakpointProvider>
    )
  }
  showAvailableHouses(val, house) {
    this.props.showAvailableHouses(val, house)
  }
  getFeatures() {
    return this.props.house.features.map((feature) =>
      <span style={{backgroundColor: 'white', marginRight: '2%', padding: '2%'}}>
        {feature}&nbsp;&nbsp;
      </span>
    )
  }
  toggleLoading() {

  }
}

const styles = {
  container: {
    paddingTop: '7.5%'
  },
  containerB: {
    paddingTop: '20.5%'
  },

  headerStyle: {
  },
}
