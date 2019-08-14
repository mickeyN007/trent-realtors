import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import {
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { styled } from '@material-ui/styles';
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


export default class AdminDashboard extends Component {
  constructor() {
    super()
    this.state = {
      view: true,
      display: 'Dashboard'
    }
  }
  /*componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this))
  }
  componentDidUnmount() {
    window.removeEventListener('resize', this.resize.bind(this))
  }*/
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
          <Col xs={5} md={5}><p style={{fontSize: 11, color: 'black'}}>{new Date().toString().split('GMT')[0]}</p></Col>
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
              <Col xs={5} lg={5}><p style={{fontSize: 11, color: 'black'}}>{new Date().toString().split('GMT')[0]}</p></Col>
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
                   <Card style={styles.card} onClick={this.changeMenu.bind(this, menu[i].name)}>
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
                    <Card style={styles.card} onClick={this.changeMenu.bind(this, menu[i].name)}>
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
    alert(window.innerWidth)
    if (window.innerWidth<=991) {
      this.setState({view: true})
    }
    else {
      this.setState({view: false})
    }
  }
  display() {
    const { users, houses } = this.props.data
    const menu = {
      Users: <Users users={users}/>,
      Houses: <Houses houses={houses}/>,
      Appointments: <Appointments />,
      Callbacks: <Callbacks />,
      Subscribers: <Subscribers />
    }
    //alert(this.state.display)
    if (this.state.display !== 'Dashboard')
      return menu[this.state.display]
    else
      return this.displayMenu()
  }
  changeMenu(display) {
    this.setState({display})
  }
}

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

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
