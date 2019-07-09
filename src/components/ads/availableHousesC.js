import React, { Component } from 'react'
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

export default class AvailableHouses extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.state = {
      selected: ''
    };
  }
  componentWillReceiveProps(props) {
    const { availableHouses } = props
  }
  render() {
    const { availableHouses } = this.props
    var img = 'https://s18.postimg.cc/9vhgup22x/img1.jpg'
    if (availableHouses.length > 0)
    return (
      <div style={styles.container}>
      <Slider >
        {availableHouses.map((house, index) => (
          <div
            key={index}
            style={{ height: '10%',background: `url('${img}') no-repeat center center` }}
          >
            <div style={{position: 'absolute', bottom: 0, backgroundColor: 'white'}}>
              <h1>{house.name}</h1>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    )
    else {
      return (
        <div style={{minHeight: '20vh', paddingTop: '5%'}}>
          <center><h4>No available houses</h4></center>
        </div>
      )
    }
  }
}

const styles = {
  container: {
    height: '1%'
  }
}
