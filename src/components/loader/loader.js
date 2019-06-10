import React, { Component } from 'react'

import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';

export default class Loader extends Component {
  render() {
    const display = this.props.loading?'block':'none'
      if (this.props.loading)
      return (
        <div style={[styles.container]}>
          <Dots animating={this.props.loading} size={20} color="#B22222" />
        </div>
      )
      else
        return (<div></div>)
    }
}

const styles = {
  container: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    paddingTop: '20%',
    paddingLeft: 0,
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  }
}
