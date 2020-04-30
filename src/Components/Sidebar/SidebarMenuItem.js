import React from 'react'
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'

import {List, ListItem, ListItemText, Divider, Collapse} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './Sidebar.scss'

// import dashboard from '../../pages/Dashboard/Background'
// import Dashboard from '../../pages/Dashboard/Dashboard';

export default function SidebarMenuItem(props) {

    const { name, Icon, link, items = [] } = props
    const classes = useStyles()
    const isExpandable = items && items.length > 0
    const [open, setOpen] = React.useState(false)

    function handleClick() {
        setOpen(!open)
      }
    
      const MenuItemRoot = (

        <ListItem className={classes.listItem} divider={true} button onClick={handleClick} >
          {/* Display an icon if any */}
          {!!Icon && (
            // <ListItemIcon >
            //   <Icon />
            // </ListItemIcon>
            <img className="sidebarIcon" src={Icon} alt="icon" />
            
          )}
          
            <Link to={link} style={{ textDecoration: 'none', color: 'black' }}>
              <ListItemText className={classes.textSize} primary={name} inset={!Icon} />
            </Link>
        
            
          {/* Display the expand menu if the item has children */}
          {isExpandable && !open && <AddIcon fontSize={'small'} />}
          {isExpandable && open && <RemoveIcon fontSize={'small'} />}
        </ListItem>


      )
    
      const MenuItemChildren = isExpandable ? (
        <Collapse in={open && props.close} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            {items.map((item, index) => (
              <SidebarMenuItem {...item} key={index} />
            ))}
          </List>
        </Collapse>
      ) : null
    

    return (

    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
    )
}
const useStyles = makeStyles(theme => ({
  listItem: {
    paddingBottom: '17px',
    paddingTop: '17px'
  },
  textSize:{
    fontSize: '15px',
    whiteSpace: 'normal'
  }
}))