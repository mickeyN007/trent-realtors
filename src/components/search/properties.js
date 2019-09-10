import React, { Component } from 'react'

import { Link } from "react-router-dom";
import Header from './../header/Header'
import LoadingScreen from './../loadingScreen'

import Map from './../map'
import { Row, Col,  } from 'react-bootstrap';

import {
  Card,
  Button,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  CardActionArea
} from '@material-ui/core'

export default class NoProperty extends Component {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }
  render() {
    if (this.props.location.state)
    return (
      <div>
      <Header {...this.props} headerStyle={styles.headerStyle} toggleLoading={this.toggleLoading.bind(this)}/>
      <div style={styles.container}>
        <Row>


        <Col xs={12} lg={6}>
        <Row style={{overflow: 'scroll'}}>
        {
          this.displayHouses()
        }
        </Row>
        </Col>
        <Col xs={12} lg={6}>
          <Map />
        </Col>
        </Row>
      </div>
      {this.state.loading && <LoadingScreen /> }
      </div>
    )
    else
      window.location.href='/'
  }
  toggleLoading(loading) {
    this.setState({loading})
  }
  displayHouses() {
    const { properties } = this.props.location.state
    var houses=[]
    var media
    for (var i=0; i<properties.length; i++) {
      media = (window.innerWidth>360)?{height: 300} : {height:150}
      houses.push(
        <Col xs={12} lg={6}>
          <Card style={styles.card} onClick={this.viewProperty.bind(this, properties[i])}>
      <CardActionArea>
        <CardMedia
          style={media}
          image={properties[i].images[0]}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          <center>{properties[i].name}</center>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{backgroundColor: '#b22222'}}>
        <Button size="small" style={styles.color}>
          Share
        </Button>
        <Button size="small" style={styles.color}>
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Col>
      )
    }
    return houses
  }
  viewProperty(house) {
    var sponsored =
              [
          {email: 'admin', price: '2000000', neighborhood: 'Great established neighborhood about 15 minute walk up Main Street to downtown shops and restaurants. Napa neighborhoods/streets are very diverse regarding types of houses, parking, etc. The Farmhouse sits on beautiful part of Main Street with great parking.', description: 'Completely renovated quality 31-foot Airstream in the backyard of the Main Street Farmhouse. Sealy Posturpedic Full bed, bathroom, kitchenette, couch, dinette, flatscreen TV and wifi. Sorry, NO PETS allowed. We allow cooking our farm fresh eggs but no cooking meats, bacon, sausage, fish, etc. in the unit. Not suitable for children under the age of 12 years. Community fee (local lodging tax of 14%) is added to reservation when confirmed by guest.', features: [], type: 'Sale', name: "Off 69th road Gwarinpa estate Abuja", images: ['https://i.ibb.co/Y7vfqdR/20190502-132402.jpg','https://i.ibb.co/rQrrtvB/20190502-132332.jpg', 'https://i.ibb.co/7y0MbJX/20190502-132425.jpg',]},
          {email: 'admin', price: '2000000', neighborhood: '', description: '', features: ['3 Bedrooms', '3 Toilets', '3 Kitchens'], type: 'Rent', name: "AB Close off 1st Avenue Gwarinpa ", images: ['https://i.ibb.co/RHdprzd/20181226-132113.jpg']},
          {email: 'admin', price: '2000000', neighborhood: '', description: '', features: [], type: 'Sale', name: "Off Lake Chad, Maitama", images: ['https://i.ibb.co/bJJ6yG7/IMG-20190507-WA0062.jpg']},
          {email: 'admin', price: '2000000', neighborhood: '', description: '', features: [], type: 'Sale', name: "By sigma apartment Jabi", images: ['https://i.ibb.co/kc4CYjD/sigma.jpg']},
          {email: 'admin', price: '2000000', neighborhood: '', description: '', features: [], type: 'Sale', name: "Efab Metropolis Gwarinpa", images: ['https://i.ibb.co/RbK23Z7/Efab-Metropolis-Gwarinpa.jpg']}
        ]
    this.props.history.push({
      pathname: '/property',
      state: {
        properties: sponsored,
        house
      }
    })
    window.location.href='/property'
  }
}

const styles = {
  container: {
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
    borderBottomStyle: 'solid',
  },
}
