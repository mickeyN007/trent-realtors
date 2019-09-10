import React, { Component } from 'react'
import { Row, Col,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default class HouseImages extends Component {

  render() {
    //var items = this.props.house.images.map((img) =>  { return{original: img}})
    // return <ImageGallery items={items} />
    return (
      <div>
        <Row>
          <Col lg={12} md={12} >
          <AwesomeSlider style={{height: '50vh', alignItems: 'center'}}>
            {this.getImages()}
          </AwesomeSlider>
          </Col>
        </Row>
      </div >
    )
  }
  getImages() {
    return this.props.house.images.map((img, i) =>
      <div data-src={img} style={{height: '50vh', alignItems: 'center'}}/>
  )}
  componentWillReceiveProps(props) {
    this.getImages()
  }
  // getImages() {
  //
  // }
}
