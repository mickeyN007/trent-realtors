import React, { Component } from 'react'

import {  withStyles} from '@material-ui/core/styles';

import {
  List,
  Toolbar,
  Drawer,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Divider,
  AppBar,
  Badge,
} from '@material-ui/core'

import {
  Mail as MailIcon,
  Menu as MenuIcon,
  MoveToInbox as InboxIcon,
  Notifications as NotificationsIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  AccountCircle
} from '@material-ui/icons';

import Breakpoint, { BreakpointProvider } from 'react-socks'

const menuId = 'primary-search-account-menu';

const classes = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
  },
  title: {
    display: 'none',
    //[theme.breakpoints.up('sm')]: {
      display: 'block',
    //},
  },
  search: {
    position: 'relative',
    //borderRadius: theme.shape.borderRadius,
    //backgroundColor: fade(theme.palette.common.white, 0.15),
    //'&:hover': {
    //  backgroundColor: fade(theme.palette.common.white, 0.25),
    //},
    marginRight: 10,//theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    //[theme.breakpoints.up('sm')]: {
    //  marginLeft: theme.spacing(3),
      width: 'auto',
    },
  searchIcon: {
    //width: theme.spacing(7),
    width: 70,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    //padding: theme.spacing(1, 1, 1, 7),
    //transition: theme.transitions.create('width'),
    width: '100%',
    //[theme.breakpoints.up('md')]: {
    //  width: 200,
    //},
  },
  sectionDesktop: {
    display: 'none',
    //[theme.breakpoints.up('md')]: {
     // display: 'flex',
    //},
  },
  sectionMobile: {
    display: 'flex',
    //[theme.breakpoints.up('md')]: {
     // display: 'none',
    //},
  },
  paper: {
    //width: drawerWidth,,
    background: '#B22222'
  },

}

class CustomDrawer extends Component {
  constructor() {
    super()
    this.state = {
      open: true
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    this.setState({open: false})
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this))
  }
  render() {
    //alert(window.innerWidth && this.state.open)
    var variant = (this.state.open) ? 'permanent' : 'temporary'
    return (
      <div>
      <BreakpointProvider>
      <Breakpoint medium down>
      <AppBar position="fixed" style={{backgroundColor: '#B22222'}}>
        <Toolbar>
                              <IconButton
            edge="end"
            color="inherit"
            onClick={this.handleDrawerOpen.bind(this)}
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={this.adminPage.bind(this)}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
      <Drawer
        style={styles.drawer}
        variant={variant}
        classes={{
          paper: classes.paper,
        }}
      containerStyle={{backgroundColor: 'black'}}


        anchor="left"
        open={false}//{this.state.open && window.innerWidth>360}
      >
        <div className={styles.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose.bind(this)}>
            {this.state.open===true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Dashboard', 'Users', 'Houses', 'Listing Appointments', 'Callbacks', 'Subscribers'].map((text, index) => (
            <ListItem button key={text} onClick={this.selectMenu.bind(this, text)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Emails', 'Notifications', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      </Breakpoint>
      <Breakpoint large up>
      <Drawer
        style={styles.drawer}
        variant="permanent"
        classes={{
          paper: classes.paper,
        }}
        anchor="left"
        open={false}//{this.state.open && window.innerWidth>360}
      >
         <div className={styles.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose.bind(this)}>
            {this.state.open===true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Dashboard', 'Users', 'Houses', 'Listing Appointments', 'Callbacks', 'Subscribers'].map((text, index) => (
            <ListItem button key={text} onClick={this.selectMenu.bind(this, text)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Emails', 'Notifications', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </Drawer>
      </Breakpoint>
      </BreakpointProvider>
      </div>
    )
  }
  handleDrawerClose() {
    this.setState({open: !this.state.open})
  }
  handleDrawerOpen() {
    this.setState({open: true})
  }
  adminPage() {
    this.props.history.push({
      pathname: '/admin'
    })
  }
  selectMenu(menu) {
    this.setState({open: false})
    this.props.changeMenu(menu)
  }
}
const styles = {
  drawer: {
    width: '400vh',
    //width: drawerWidth,
    //flexShrink: 0,
    backgroundColor: 'red'
  },
  drawerHeader: {
    //display: 'flex',
    //alignItems: 'center',
    //padding: '0 8px',
    //...theme.mixins.toolbar,
    //justifyContent: 'flex-end',
    //backgroundColor: 'red'
  },
  //toolbar: //theme.mixins.toolbar,
}

export default withStyles(styles)(CustomDrawer)
