import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer, List} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

// import Collapse from '@material-ui/core/Collapse'
// import Typography from '@material-ui/core/Typography';

import dashboard from '../../Assets/Images/Dashboard Active State.png'
import parking from '../../Assets/Images/Parking Mgmt Deactive State.png'
import role from '../../Assets/Images/role management deactive state.png'
import user from '../../Assets/Images/user management deactive state.png'
import service from '../../Assets/Images/services requested deactive state.png'
import report from '../../Assets/Images/reports deactive state.png'
import payment from '../../Assets/Images/payments deactive state.png'
import settings from '../../Assets/Images/settings deactive state.png'


import SidebarMenuItem from './SidebarMenuItem'


const drawerWidth = 225;


const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: dashboard
  },
  {
    name: 'Parking Management',
    // Icon: 'notification',
    Icon: parking,
    items: [
      {
        name: 'Parking Space Overview',
        link: '/parkingmanagment',
        // Icon: IconBarChart,
      }
    ]
  },
  {
    name: 'User Management',
    Icon: user,
    items: [
      {
        name: 'Level 1',
        link: '/users',
        // Icon: IconBarChart,
      }
    ]
  },
  {
    name: 'Role Management',
    Icon: role,
    items: [
      {
        name: 'Level 1',
        link: '/users',
        // Icon: IconBarChart,
      }
    ]
  },
  {
    name: 'Service Request',
    Icon: service,
    link: '/users',
  },
  {
    name: 'Reports',
    Icon: report,
    link: '/users',
  },
  {
    name: 'Payments',
    Icon: payment,
    link: '/users',
  },
  
  {
    name: 'Settings',
    Icon: settings,
    link: '/users',
  },
]



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appMenu: {
    paddingTop: 15,
    paddingBottom:15,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    position: "relative",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    position: "relative",
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },

}));

function Sidebar(props) {

  const classes = useStyles();

  // toggle sidebar drawer
  const open = props.openState 

  // const [close, setClose] = React.useState(true)


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: !open,
          [classes.drawerClose]: open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: !open,
            [classes.drawerClose]: open,
          }),
        }}
      >
        <List component="nav" disablePadding>
          {appMenuItems.map((item, index) => (
            <SidebarMenuItem {...item} key={index} close={!open} />
          ))}
        </List>
      </Drawer>
      {/* <Dashboard /> */}
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main> */}
    </div>
  );
}

export default Sidebar