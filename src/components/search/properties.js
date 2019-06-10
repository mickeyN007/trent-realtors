import React, { Component } from 'react'

export default class Properties extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          {this.displayProperties()}
        </div>
        <div style={styles.right}>
        </div>
      </div>
    )
  }
  displayProperties() {
    return this.props.properties.map(property => {
      return (
        <div>
        </div>
      )
    })
  }
}

const styles = {
  container: {
    flex: 1
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
