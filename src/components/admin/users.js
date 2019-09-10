import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import cellEditFactory from 'react-bootstrap-table2-editor';
const { SearchBar } = Search;

/*const users = [
   {name: 'Tiffany Oduah', type: 'Seller', status: 'Active'},
 {name: 'Michael Oduah', type: 'Agent', status: 'Inactive'},
   {name: 'Tiffany Oduah', type: 'Seller', status: 'Active'},
 {name: 'Ekene Oduah', type: 'Buyer', status: 'Active'},
]*/
const columns = [{
  dataField: 'id',
  formatter: (cell, row, rowIndex) => `${rowIndex+1}`,
  text: 'S/N'
}, {
  dataField: 'firstname',
  formatter: (cell, row) => `${row.firstname} ${row.lastname}`,
  text: 'Name'
}, {
  dataField: 'type',
  text: 'Type'
}, {
  dataField: 'status',
  formatter: (cell, row) => `${(row.status) ? row.status : 'Inactive'}`,
  text: 'Status'
}];

export default class Users extends Component {
  render() {
    const { users } = this.props
    return (
      <Container style={styles.container}>
        <Row style={styles.title}>
          <h2>Users</h2>
        </Row>

        <Row style={styles.spacing}>
          <Col lg={12} md={12}>
            <hr />
          </Col>
        </Row>

        <Row style={styles.spacing}>
          <h4><b>Statistics:</b></h4>
        </Row>
        <Row style={styles.spacing}>
          <Col lg={3} md={3}>
            Total:
          </Col>
          <Col lg={9} md={9}>
            <span style={styles.circle}></span>
          </Col>
        </Row>
        <Row style={styles.spacing}>
          <Col lg={3} md={3}>
            Status:
          </Col>
          <Col lg={4} md={4}>
            <span style={styles.cirlce}></span>
            <div>Active</div>
          </Col>
          <Col lg={4} md={4}>
            <div style={styles.cirlce}></div>
            <div>Inactive</div>
          </Col>
        </Row>
        <Row style={styles.spacingB}>
          <Col lg={3} md={3}>
            Type:
          </Col>
          <Col lg={3} md={3}>
            <div style={styles.cirlce}></div>
            <div>Agent</div>
          </Col>
          <Col lg={3} md={3}>
            <div style={styles.cirlce}>Buyer</div>
            <div></div>
          </Col>
          <Col lg={3} md={3}>
            <div style={styles.cirlce}></div>
            <div>Seller</div>
          </Col>
        </Row>
        <Row style={styles.spacing}>
          <Col lg={12} md={12}>
            <hr />
          </Col>
        </Row>
        <Row style={styles.spacing}>
          <h4><b>List of users:</b></h4>
        </Row>
        <Row style={styles.marginLeft}>
              <ToolkitProvider
  keyField="id"
  data={ users }
  columns={ columns }
  search
  >
  {
    props => (
      <div>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable
          cellEdit={ cellEditFactory({ mode: 'dbclick' }) }
          { ...props.baseProps }
        />
      </div>
    )
  }
</ToolkitProvider>

        </Row>
      </Container>
    )
  }
}

const styles = {
  input: {
    padding: '3%',
  },
  container: {
    marginTop: '5%',
  },
  title: {
    paddingBottom: '2.5%'
  },
  circle: {
    width: 20,
    padding: '1%',
    height: 20,
    borderRadius: '10%',
    borderStyle: 'solid',
    borderWidth: '10%'
  },
  spacing: {
    marginBottom: '3%'
  },
  spacingB: {
    marginBottom: '5%'
  },
  marginLeft: {
    marginLeft: '0.1%',
    marginBottom: '5%'
  }
}
