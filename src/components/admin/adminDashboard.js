import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import {
  Button,
} from '@material-ui/core'
import CustomDrawer from './customDrawer'
import Breakpoint, { BreakpointProvider } from 'react-socks'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Users from './users'
import Houses from './houses'
import Appointments from './appointments'
import Callbacks from './callbacks'
import Subscribers from './subscribers'

import LoadingScreen from './../loadingScreen'

import { mySettings } from './../../settings.js'
//import usersImg from 'images/home.png'

export default class AdminDashboard extends Component {
  constructor() {
    super()
    this.state = {
      view: true,
      display: 'Dashboard',
      loading: false,
      users: [],
      houses: [],
      appointments:[], callbacks:[], subscribers:[]
    }
  }
  /*componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this))
  }
  componentDidUnmount() {
    window.removeEventListener('resize', this.resize.bind(this))
  }*/
  componentDidMount() {
    this.getData()
  }
  render() {
    return (
      <Container fluid>
        <BreakpointProvider>
        <Breakpoint medium down>
        <Row style={{marginBottom: 55}}>
          <Col xs={12} md={12}><CustomDrawer changeMenu={this.changeMenu.bind(this)} {...this.props} /></Col>
        </Row>
        <Row style={styles.header}>
          <Col xs={7} md={7}><h5 style={{color: 'black'}}>Welcome, {this.props.name}</h5></Col>
          <Col xs={5} md={5}>
                <Col xs={12} lg={12}>
                <p style={{fontSize: 11, color: 'black'}}>
                  {new Date().toString().split('GMT')[0]}
                </p>
                </Col>
                <Col xs={12} lg={12} onClick={this.logOut.bind(this)}>
                  <img src={require('./../../images/logout.jpeg')} />
                </Col>

          </Col>
          </Row>
          <Container style={{marginLeft: '2.5%', marginRight: '2.5%'}}>
            {this.display()}
          </Container>
        </Breakpoint>
        <Breakpoint large up>
        <Row>
          <Col lg={1}><CustomDrawer changeMenu={this.changeMenu.bind(this)} {...this.props} /></Col>
          <Col lg={11}>
            <Row style={styles.headerB}>
               <Col xs={7} lg={7}><h5 style={{color: 'black'}}>Welcome, {this.props.name}</h5></Col>
              <Col xs={5} lg={5}>
                <Col xs={12} lg={12}>
                <p style={{fontSize: 11, color: 'black'}}>
                  {new Date().toString().split('GMT')[0]}
                </p>
                </Col>
                <Col xs={12} lg={12} onClick={this.logOut.bind(this)}>
                  <img src={require('./../../images/logout.jpeg')} width='10%'/>
                </Col>
              </Col>
            </Row>
            <Row>
              <Container style={{marginLeft: '10.5%', marginRight: '2.5%'}}>
                {this.display()}
              </Container>
            </Row>
          </Col>
        </Row>
        </Breakpoint>
        </BreakpointProvider>
        {this.state.loading && <LoadingScreen />}
      </Container>
    )
  }
  displayMenu() {
    const menu = [
      {
        name: 'Users',
        image: require('./../../images/users.png')

      },
      {
        name: 'Houses',
        image: require('./../../images/home.png')
      },
      {
        name: 'Appointments',
        image: require('./../../images/appointments.png')
      },
      {
        name: 'Callbacks',
        image: require('./../../images/callbacks.png')
      },
      {
        name: 'Subscribers',
        image: require('./../../images/subscribers.png')
      }
    ]
    var display=[]
    var media = (window.innerWidth>360)?{height: 300} : {height:150}
    if (window.innerWidth<=1025)
      for (var i=0; i<menu.length; i+=2) {
        display.push(
          <Row>
            <Col xs={6} sm={6} md={6} style={{}}>
              <Card style={styles.card} onClick={this.changeMenu.bind(this, menu[i].name)}>
      <CardActionArea>
        <CardMedia
          style={media}
          image={menu[i].image}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          <center>{menu[i].name}</center>
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
            <Col xs={6} sm={6} md={6}>
          {i+1<menu.length &&
            <Card style={styles.card}  onClick={this.changeMenu.bind(this, menu[i+1].name)}>
      <CardActionArea>
        <CardMedia
          style={media}
          image={menu[i+1].image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          <center>{menu[i+1].name}</center>
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
          }
            </Col>
          </Row>
        )
      }
    else {
      //alert('ff')
       for (var i=0; i<menu.length; i+=3) {
        display.push(
          <Row>
            <Col lg={4}>
              <Card style={styles.card} onClick={this.changeMenu.bind(this, menu[i].name)}>
      <CardActionArea>
        <CardMedia
          style={media}
          image={menu[i].image}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          <center>{menu[i].name}</center>
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
            <Col lg={4}>
              {
                i+1<menu.length &&
                   <Card style={styles.card} onClick={this.changeMenu.bind(this, menu[i+1].name)}>
      <CardActionArea>
        <CardMedia
          style={media}
          image={menu[i+1].image}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          <center>{menu[i+1].name}</center>
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

              }
            </Col>
            <Col lg={4}>
              {
                i+1<menu.length-1 &&
                    <Card style={styles.card} onClick={this.changeMenu.bind(this, menu[i+2].name)}>
      <CardActionArea>
        <CardMedia
          style={media}
          image={menu[i+2].image}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          <center>{menu[i+2].name}</center>
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
              }
            </Col>
          </Row>
        )
      }
    }
    return display
  }
  resize() {
    if (window.innerWidth<=991) {
      this.setState({view: true})
    }
    else {
      this.setState({view: false})
    }
  }
  display() {
    const { users, houses, appointments, callbacks, subscribers } = this.state
    const menu = {
      Users: <Users users={users}/>,
      Houses: <Houses houses={houses}/>,
      Appointments: <Appointments appointments={appointments} />,
      Callbacks: <Callbacks callbacks={callbacks}/>,
      Subscribers: <Subscribers subscribers={subscribers}/>
    }
    //alert(this.state.display)
    if (this.state.display !== 'Dashboard')
      return menu[this.state.display]
    else
      return this.displayMenu()
  }
  changeMenu(display) {
    if (display=='Listing Appointments')
      this.setState({display: 'Appointments'})
    else
      this.setState({display})
  }
  getUsers() {
    this.toggleLoading(true)
    fetch(mySettings.serverID+'api/getUsers')
      .then(users => users.json())
      .then(users => {
          this.setState({users})
          this.toggleLoading(false)
        })
      .catch(err => {
        alert("Can't connect to Trent Realtor's server at the moment!")
        this.toggleLoading(false)
      })
  }
  getHouses() {
    this.toggleLoading(true)
    fetch(mySettings.serverID+'api/getHouses')
      .then(houses => houses.json())
      .then(houses => {
          this.setState({houses})
          this.toggleLoading(false)
        })
      .catch(err => {
        alert("Can't connect to Trent Realtor's server at the moment!")
        this.toggleLoading(false)
      })
  }
  getSubscribers() {
    this.toggleLoading(true)
    fetch(mySettings.serverID+'api/getSubscribers')
      .then(subscribers => subscribers.json())
      .then(subscribers => {
          this.setState({subscribers})
          this.toggleLoading(false)
        })
      .catch(err => {
        alert("Can't connect to Trent Realtor's server at the moment!")
        this.toggleLoading(false)
      })
  }
  getAppointments() {
    this.toggleLoading(true)
    fetch(mySettings.serverID+'api/getAppointments')
      .then(appointments => appointments.json())
      .then(appointments => {
          this.setState({appointments})
          this.toggleLoading(false)
        })
      .catch(err => {
        alert("Can't connect to Trent Realtor's server at the moment!")
        this.toggleLoading(false)
      })
  }
  getCallbacks() {
    this.toggleLoading(true)
    fetch(mySettings.serverID+'api/getCallbacks')
      .then(callbacks => callbacks.json())
      .then(callbacks => {
          this.setState({callbacks})
          this.toggleLoading(false)
        })
      .catch(err => {
        alert("Can't connect to Trent Realtor's server at the moment!")
        this.toggleLoading(false)
      })
  }

  getData() {
    this.getUsers()
    this.getHouses()
    this.getAppointments()
    this.getCallbacks()
    this.getSubscribers()
  }
  toggleLoading(loading) {
    this.setState({loading})
  }
  logOut() {
    localStorage.removeItem('token')
    window.location.href='/admin'
  }
}

const styles = {
  header: {
    //marginTop: '5%',
    padding: '5%',
    //paddingTop: '5%',
    backgroundColor: '#f6f6f6',
  },headerB: {
    //marginTop: '5%',
    padding: '5%',
    //paddingTop: '5%',
    backgroundColor: '#f6f6f6',
    marginLeft: '5%'
  },

  card: {
    maxWidth: 345,
    marginTop: '20%',
    //marginLeft: '5%'
  },
  media: {
    height: 150,
    marginTop: '10%'
  },
  color: {
    backgroundColor: 'white'
  }
}
