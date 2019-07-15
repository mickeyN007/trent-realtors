import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './../../css/availableHouses.css'

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import { Link } from "react-router-dom"

import HouseImages from './houseImages'
import SponsoredHouses from './sponsoredHouses'

export default class AvailableHouses extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     house: {}
  //   }
  // }
  render() {
    return (
        <Container fluid>
          <Row>
            <Col lg={12}>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <HouseImages house={this.props.house}/>
            </Col>
          </Row>
          <Container style={{marginTop: '1.5%', marginLeft: '10%'}}>
          <Row>
            <Col lg={8}>
              <p style={{fontSize: 19}}><b>{this.props.house.name}</b></p>
              <p style={{fontSize: 16}}>{this.props.house.name}</p>
            </Col>
            <Col lg={4}>
              {this.props.house.name}
            </Col>
          </Row>
          <Row>
            <Col lg={12} xs={12}>
              <SponsoredHouses showAvailableHouses={this.showAvailableHouses.bind(this)} sponsoredHouses={this.props.sponsoredHouses} showAvailableHouses={this.showAvailableHouses.bind(this)}/>
            </Col>
          </Row>
          </Container>
        </Container>
    )
  }
  showAvailableHouses(val, house) {
    this.props.showAvailableHouses(val, house)
  }
}

const styles = {
  container: {

  },
}
