import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './../../css/availableHouses.css'
// =============================================================================
// One item component
// selected prop will be passed
const MenuItem = ({house, selected}) => {
  //var images =
  //var img = './../../images/account.png'
  var img = house.images[0]
  console.log(img)
  return <div
    style={{ position: 'relative', height: '100%', width: '95%', background: `url('${img}') no-repeat center center`, backgroundSize: '400px 300px' }}
    className={`menu-item ${(selected==house.name) ? '.active' : ''}`}
    >
    <div style={styles.type}>{house.type}</div>

    <div style={styles.name}><p>{house.name}</p></div>
    </div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>{
  console.log(list)

  return list.map(house => {
    return <MenuItem house={house} key={JSON.stringify(house)} selected={selected} />;
  })};


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

export default class SponsoredHouses extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.state = {
      selected: '',
      house: {}
    };
  }
  onSelect = (house) => {
    house = JSON.parse(house)
    this.setState({ selected: house.name, house });
    // var { selected } = this.state
    // var house = {name: key}
    const { history, sponsoredHouses, } = this.props
    history.push({
      pathname: '/property',
      state: {
        properties: sponsoredHouses,
        house
      }
    })
    //this.props.showAvailableHouses(true, house)
  }
  componentWillReceiveProps(props) {
    const { sponsoredHouses } = props
    var selected = Object.keys(this.state.house).length==0 ? sponsoredHouses[0].name : this.state.house.name
    this.setState({selected})

    console.log(sponsoredHouses, 99)
    this.menuItems = Menu(sponsoredHouses, this.state.selected);
  }

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
    if (this.props.sponsoredHouses.length > 0)
    return (
      <div style={styles.container}>
        <center><h2>Sponsored Houses</h2></center>
        <br />
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
    paddingBottom: '4%',
    height: '20%'
  },
  name: {
    //justifyContent:
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '1%',
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flex: 1,
    backgroundImage: 'linear-gradient(to right, #B22222 , #db4545)',
  },
  type: {
    position: 'absolute',
    right: 10,
    top: 10,
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#B22222'
  },
  controls:{
    position: 'absolute',
  }
}
