import React, { Component } from 'react'
import { Row, Col, } from 'react-bootstrap';

export default class Filter extends Component {
  constructor() {
    super()
    this.state = {
      dropdown: <div></div>,
      moreFilter: false,
      location: ''
    }
  }
  render() {
    return (
      <div style={styles.container}>
        <Row>
          <Col xs={6} lg={2}><input placeholder='search'  onChange={(e) => this.setState({location: e.target.value})} value={this.props.location}  style={styles.dropdown}/></Col>
          <Col xs={6} lg={2} style={styles.dropdown} onClick={this.displayDropDown.bind(this, 'propertyTypes')}>Property Type</Col>
          <Col xs={6} lg={2} style={styles.dropdown} onClick={this.displayDropDown.bind(this, 'minPrice')}>Price (min)</Col>
          <Col xs={6} lg={2} style={styles.dropdown} onClick={this.displayDropDown.bind(this, 'maxPrice')}>Price (max)</Col>
          <Col xs={6} lg={1} style={styles.dropdown} onClick={this.displayDropDown.bind(this, 'beds')}>Beds</Col>
          <Col xs={6} lg={1} style={styles.dropdown} onClick={this.displayDropDown.bind(this, 'baths')}>Baths</Col>

          <Col xs={6} lg={1} style={styles.dropdown} onClick={this.toggleMoreFilters.bind(this)}>More Filters</Col>
        </Row>
        {
          this.state.moreFilter === true &&
            <div style={styles.moreFilterRowA}>
              <div>
                <span style={styles.dropdown} onClick={this.displayDropDown.bind(this, 'minSquareFootage')}>Min Square footage</span>
                <span style={styles.dropdown} onClick={this.displayDropDown.bind(this, 'maxMonthlyFee')}>Max Monthly Fee</span>
                <span style={styles.dropdown} onClick={this.displayDropDown.bind(this, 'minimumLot')}>Minimum Lot</span>

              </div>
            </div>
        }
        <div>{this.state.dropdown}</div>
      </div>
    )
  }
  displayDropDown(option) {
    alert(option)
  }
  toggleMoreFilters() {
    const { moreFilter } = this.state
    this.setState({moreFilter: !moreFilter})
  }
}

// displayPropertyTypes
// displayMinPrices
// displayMaxPrices
// displayBedTypes
// displayBathTypes

const styles = {
  container: {
    backgroundColor: 'white',
    flex: 1,
    zIndex: 999999,
    position: 'fixed',
    width: '100%',
    height: '7%',
    marginTop:'6%',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '4%',
    paddingBottom: '5%'
  },
  dropdown: {
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    marginRight: '1%'
  },
  moreFilterRowA: {
    position: 'fixed',
    backgroundColor: 'white',
    height: '2%',
    width: '100%',
    left: 0,
    right: 0,
    marginTop: '1%',
    padding: '2%',
    paddingLeft: '10%',
  }
}
