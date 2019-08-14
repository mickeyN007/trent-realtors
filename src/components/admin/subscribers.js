import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import BootstrapTable from 'react-bootstrap-table-next';

const products = [ 'rice', 'spags' ]
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

export default class Subscribers extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h2>Users</h2>
        </Row>
        <Row>
          <input style={styles.input} placeholder="Search for subscribers" />
        </Row>
        <Row>
          <BootstrapTable keyField='id' data={ products } columns={ columns } />
        </Row>
      </Container>
    )
  }
}

const styles = {
  input: {
    padding: '3%',
  }
}
