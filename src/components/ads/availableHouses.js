import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './../../css/availableHouses.css'
// =============================================================================
// One item component
// selected prop will be passed
const MenuItem = ({house, selected}) => {
  //var images =
  //var img = './../../images/account.png'
  var img = 'https://s18.postimg.cc/9vhgup22x/img1.jpg'
  var img = house.images[0]
  console.log(house.images.length)
  return <div
    style={{ height: '100%', background: `url('${img}') no-repeat center center` }}
    className={`menu-item ${(selected==house.name) ? '.active' : ''}`}
    >
    <div style={styles.name}><p>{house.name}</p></div>
    </div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(house => {
    const {name} = house;
    return <MenuItem house={house} key={name} selected={selected} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

// =============================================================================

export default class AvailableHouses extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.state = {
      selected: ''
    };
  }
  onSelect = key => {
    this.setState({ selected: key });
  }
  componentWillReceiveProps(props) {
    const { availableHouses } = props
    var selected = availableHouses[0].name
    this.setState({selected})

    console.log(availableHouses, 99)
    this.menuItems = Menu(availableHouses, this.state.selected);
  }

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
    if (this.props.availableHouses.length > 0)
    return (
      <div style={styles.container}>
        <center><h4>Available Houses</h4></center>
        <ScrollMenu
         data={menu}
         arrowLeft={ArrowLeft}
         arrowRight={ArrowRight}
         selected={selected}
         onSelect={this.onSelect}
       />
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
    paddingBottom: '4%'
  },
  name: {
    position: 'absolute',
    bottom: 0,
    color: 'white'
  }
}
