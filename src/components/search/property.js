import React, { Component } from 'react'
import { Container, Row, Col,  } from 'react-bootstrap';
//import { Link } from "react-router-dom"
import Header from './../header/Header'
import Footer from './../footer/footer'
import HouseImages from './houseImages'
import SponsoredHouses from './../ads/sponsoredHouses'
import MessageOffer from './messageOffer'
import Breakpoint, { BreakpointProvider } from 'react-socks'
//import Maps from './../map'

//import Home from './../../Home'
import LoadingScreen from './../loadingScreen'

export default class Property extends Component {
  constructor() {
     super()
     this.state = {
       loading: false
     }
  }
  render() {
    //alert(Object.keys(this.props.location.state))
    if (this.props.location.state)
    return (
        <BreakpointProvider>
        <Breakpoint large up>
                  <div>
            <Header {...this.props} headerStyle={styles.headerStyle} toggleLoading={this.toggleLoading.bind(this)} />
            <Container fluid style={styles.container}>
          <Row style={{paddingTop: 120}}>
            <Col lg={12}>
              <HouseImages house={this.props.location.state.house}/>
            </Col>
          </Row>
          <Container style={{paddingRight: '3%', marginLeft: '10%', marginTop: '5%'}}>
          <Row>
            <Col lg={7} md={12} style={{marginRight: '5%'}}>
              <div style={{fontSize: 19}}><b>{this.props.location.state.house.name}</b></div>
              <div style={{fontSize: 14, marginBottom: '2%'}}>{this.props.location.state.house.name}</div>

              <div style={{padding: '3%', borderStyle: 'thin', backgroundColor: 'whitesmoke', width: '100%'}}>
                <h6><b>Features:</b></h6>
                <div style={{marginTop: '3%'}}>{this.getFeatures()}</div>
              </div>

              <hr />

              <div>
                <h6><b>Brief Description:</b></h6>
                {this.props.location.state.house.description}
              </div>

              <hr />

              <div>
                <h6><b>The neighborhood</b></h6>
                {this.props.location.state.house.neighborhood}
              </div>
            </Col>
            <Col lg={4} md={12}>
              <MessageOffer house={this.props.location.state.house} />
            </Col>
          </Row>
          <Row style={{marginTop: '20%'}}>
            <Col lg={12} xs={12}>
              <SponsoredHouses {...this.props} sponsoredHouses={this.props.location.state.properties} showAvailableHouses={this.showAvailableHouses.bind(this)}/>
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
              <HouseImages house={this.props.location.state.house}/>
            </Col>
          </Row>
          <Container style={{paddingRight: '3%', marginLeft: '1.5%', marginTop: '5%'}}>
          <Row>
            <Col lg={7} md={12} style={{marginRight: '5%'}}>
              <div style={{fontSize: 19}}><b>{this.props.location.state.house.name}</b></div>
              <div style={{fontSize: 14, marginBottom: '2%'}}>{this.props.location.state.house.name}</div>

              <div style={{padding: '3%', borderStyle: 'thin', backgroundColor: 'whitesmoke', width: '100%'}}>
                <h6><b>Features:</b></h6>
                <div style={{marginTop: '3%'}}>{this.getFeatures()}</div>
              </div>

              <hr />

              <div>
                <h6><b>Brief Description:</b></h6>
                {this.props.location.state.house.description}
              </div>

              <hr />

              <div>
                <h6><b>The neighborhooduuu</b></h6>
                {this.props.location.state.house.neighborhood}
              </div>
            </Col>
            <Col lg={4} md={12}>
              <MessageOffer house={this.props.location.state.house} />
            </Col>
          </Row>
          <Row style={{marginTop: '20%'}}>
            <Col lg={12} xs={12}>
              <SponsoredHouses {...this.props} showAvailableHouses={this.showAvailableHouses.bind(this)} sponsoredHouses={this.props.location.state.properties} showAvailableHouses={this.showAvailableHouses.bind(this)}/>
            </Col>
          </Row>
          </Container>
          <Footer />
          </Container>
        </div>

        </Breakpoint>
        {this.state.loading && <LoadingScreen />}
        </BreakpointProvider>
    )
    else
      window.location.href='/'
  }
  showAvailableHouses(val, house) {
    this.props.showAvailableHouses(val, house)
  }
  getFeatures() {
    return this.props.location.state.house.features.map((feature) =>
      <span style={{backgroundColor: 'white', marginRight: '2%', padding: '2%'}}>
        {feature}&nbsp;&nbsp;
      </span>
    )
  }
  toggleLoading(loading) {
    this.setState({loading})
  }
}

const styles = {
  containerB: {
    paddingTop: '20.5%'
  },
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
      width: '100%',
  },
}
