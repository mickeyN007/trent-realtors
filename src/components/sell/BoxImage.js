import React, { Component } from 'react'

// import images
import homeImage from './../../images/manhattan.jpg'

export default class BoxImage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img src={homeImage} alt="err" style={styles.img}/>
      </div>
    )
  }
}

const styles = {
  container: {
    minWidth: '20%'
  },
  img: {
    alignItems: 'center'
  }
}
