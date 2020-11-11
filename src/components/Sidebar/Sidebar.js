import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import {
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@material-ui/core'

const drawerWidth = 220;

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        background: "#F9F9FC"
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        background: "#F9F9FC"
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    icon: {
        color: '#1F4492'
    },
    itemText: {
        primary: '#1F4492',
        secondary: '#1F4492'
    }
});


class Sidebar extends Component {
    state = {
        open: true
    }

    getRoutesDefinition() {
        const { routes, target, classes } = this.props;
        console.log(routes);
        if (routes) {
            return routes.map((route, index) => {
                if (route.target === target) {
                    return (
                        <Link to={route.layout + route.path} style={{ textDecoration: 'none' }} key={route.name}>
                            <ListItem button key={route.name}>
                                <ListItemIcon className={classes.icon}>{route.icon}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.icon }} primary={route.name} />
                            </ListItem>
                        </Link>
                    )
                }
            })
        }
    }

    render() {
        const { collapsed, classes } = this.props;
        return (
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: collapsed,
                    [classes.drawerClose]: !collapsed,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: collapsed,
                        [classes.drawerClose]: !collapsed,
                    }),
                }}>
                <Toolbar />
                <div>
                    <List>
                        {this.getRoutesDefinition()}
                    </List>
                </div>
            </Drawer>
        );
    };
}


export default withStyles(styles)(Sidebar);