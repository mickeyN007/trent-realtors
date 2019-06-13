import React, { Component } from "react"

//import './../../css/buyHeader.css'
import Header from './../header/HeaderC'
import Footer from './../footer/footer'

import Filter from './filter'
import NoProperty from './noProperty'
import Properties from './properties'

import { mySettings } from "./../../settings"

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      location: ''
    }
  }
  componentWillMount() {
    var top=0, left=0
    window.scrollTo({ left, top});
  }
  render() {
    return (
      <div style={styles.container}>
        <div>
          <Header headerStyle={styles.headerStyle} />
          <Filter location={this.props.location}/>
        </div>
        <div style={styles.displayView}>
          {this.displayView()}
        </div>
      </div>
    )
  }
  displayView() {
    const views = {
      notfound: <NoProperty location={this.props.location} />,
      found: <Properties location={this.props.location} properties={this.props.properties} />
    }
    if (this.props.properties.length > 0) {
      return views['found']
    }
    else return views['notfound']
  }
  // componentWillReceiveProps(props) {
  //   const { location } = this.props
  //   this.setState({location})
  // }
  subscribeToNewsletter(email) {
    this.props.subscribeToNewsletter(email)
  }
  search(location) {
    this.props.search(location)
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  displayView: {

  },
  in: {
    width: "60%",
    padding: "2.5%"
  },
  findDreamHome: {
    padding: "1.5%",
    color: "white",
    backgroundColor: "black",
    width: "35%",
    marginLeft: "30%"
  },
  search: {
    padding: "2%"
  },
  headerStyle: {
    backgroundColor: "#B22222",
    color: "white",
    fontWeight: "bold",
    position: 'fixed',
    width: '100%',
    height: "90px",
    paddingTop: '0',
    paddingBottom: '0',
    margin: 0,
  },
  left: {
    width: '45%',
    float: 'left'
  },
  right: {
    width: '45%',
    float: 'left'
  }
}
