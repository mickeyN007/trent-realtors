import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// imported components
import Header from './../header/Header'
import BoxImage from './BoxImage'

export default class Home extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={styles.container}>
        <Header />
      </div>
    )
  }
}

const styles = {
  container: {
    margin: 0
  }
}
