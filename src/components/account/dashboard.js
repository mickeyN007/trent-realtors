import React, { Component } from 'react'

import { Container, Row, Col, Dropdown,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import './../../css/account.css'

import AccountHeader from './accountHeader'
export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      feedback: 0,
      messages: 0,
      offers: 0,
      showings: 0
    }
  }
  render() {
    return (
      <BreakpointProvider>
        <div>
          <Container>
            <Row>
              <Col lg={10}>
                <h4><b>Dashboard</b></h4><hr />
                <p>This dashboard is an overview
                    of any activity in your account that requires
                    your attention, such as a showing or offer that
                    needs to be actioned. You can use the main navigation above or click the boxes below to take action.
                    There is also a notification icon in the top right hand corner of your account which will show any activity that requires your attention.
                </p>
              </Col>
              <Col lg={2}>
              </Col>
            </Row>

            <Row>
              {this.getSubMenu('a')}
            </Row><br />
            <Row>
              {this.getSubMenu()}
            </Row>
          </Container>
        </div>
      </BreakpointProvider>
    )
  }
  changeView(view) {
    this.props.changeView(view)
  }
  getSubMenu(type) {
    const views = ['Messages', 'Showings', 'Feedback']
    const viewsB = ['Offers', 'My Properties']

    if (type=='a')
      return (
        views.map((item) => {
          return (<Col id='pointer' lg={3} className='text-center' style={{width: '30%', height:'60%', }} onClick={this.changeView.bind(this, item)}>
                    <div style={{padding: '2.5%', color: 'black', borderStyle: 'solid', borderWidth: 1, borderColor: 'black', boxShadow: '1px 1px 3px 3px #888888',}}>
                      <span>{this.state[item]>0 ? (`${this.state[item]} Activities`) : 'No activity'}</span><br/>
                      {item}
                    </div>
                  </Col>)

        })
      )
    else
    return (
      viewsB.map((item) => {
        if (item !== 'My Properties')
        return (<Col id='pointer' lg={3} className='text-center' style={{width: '30%', height:'60%', }} onClick={this.changeView.bind(this, item)}>
                  <div style={{padding: '2.5%', color: 'black', borderStyle: 'solid', borderWidth: 1, borderColor: 'black', boxShadow: '1px 1px 3px 3px #888888',}}>
                    <span>{this.state[item]>0 ? (`${this.state[item]} Activities`) : 'No activity'}</span><br />
                    {item}
                  </div>
                </Col>)
        else {
          return (<Col id='pointer' lg={6} className='text-center' style={{width: '60%', height:'100%', }} onClick={this.changeView.bind(this, item)}>
                    <div style={{padding: '2.5%', color: 'black', borderStyle: 'solid', borderWidth: 1, borderColor: 'black', boxShadow: '1px 1px 3px 3px #888888',}}>
                      {item}
                    </div>
                  </Col>)
        }
      })
    )
  }
}

const styles = {
  //container={}
}
