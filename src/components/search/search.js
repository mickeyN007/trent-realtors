import React, { Component } from "react"

//import './../../css/buyHeader.css'
//import Footer from './../footer/footer'

//import Filter from './filter'
import NoProperty from './noProperty'
import Properties from './properties'

//import { mySettings } from "./../../settings"

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
        <div style={styles.displayView}>
          {this.displayView()}
        </div>
      </div>
    )
  }
  displayView() {
    //alert(Object.keys(this.props.location.state))
    if (this.props.location.state==undefined) {
      this.props.location.state = {
        house: {}, properties:[]
      }
      const views = {
          notfound: <NoProperty location='' />,
          found: <Properties {...this.props}  />
        }
        if (this.props.location.state.properties.length > 0) {
          return views['found']
        }
        else return views['notfound']}
    else
  {
    const views = {
      notfound: <NoProperty {...this.props} location={this.props.location.state.location} />,
      found: <Properties {...this.props}  properties={this.props.location.state.properties} />
    }
    if (this.props.location.state.properties.length > 0) {
      return views['found']
    }
    else return views['notfound']}
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
  },
  displayView: {
    flex: 1
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

  left: {
    width: '45%',
    float: 'left'
  },
  right: {
    width: '45%',
    float: 'left'
  }
}
