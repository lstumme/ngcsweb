import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Notifications, AccountCircle, RouterSharp } from '@material-ui/icons';

import {
    List as ListIcon,
    MoreVert as MoreVertIcon
} from '@material-ui/icons';
import { Menu, MenuItem } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    margin: {
        margin: theme.spacing(1),
    },
    menuButton: {
        marginLeft: -20,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar
});

class AppToolbar extends Component {
    state = {
        anchorE1: null
    }

    handleDrawerState = () => {
        let newState = !this.state.open;
        this.setState({ open: newState });
        if (this.props.stateChanged) {
            this.props.stateChanged(newState);
        }
    }

    handleProfileMenuOpen = (event) => {
        this.setState({ anchorE1: event.currentTarget });
    };

    handleProfileMenuClose = (event) => {
        this.setState({ anchorE1: null });
    }

    getMenuRoutes = () => {
        const { routes, target } = this.props;
        return routes.map((route, index) => {
            if (route.target === target) {
                return (
                    <Link to={route.layout + route.path} style={{ textDecoration: 'none' }} key={route.name}>
                        <MenuItem onClick={this.handleProfileMenuClose}>{route.name}</MenuItem>
                    </Link>
                );
            } else {
                return null;
            }
        });
    }

    render() {
        const menuId = 'primary-search-account-menu';
        const isMenuOpen = Boolean(this.state.anchorE1);
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.appBar}>
                    <Toolbar variant="dense">
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.handleDrawerState}
                        >

                            {this.state.open ? <MoreVertIcon /> : <ListIcon />}
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.flex}
                        >
                            {this.props.appTitle}
                        </Typography>
                        <div style={{ display: 'flex' }}>
                            <IconButton className={classes.margin} color='inherit'>
                                <Notifications />
                            </IconButton>
                            <IconButton
                                className={classes.margin}
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit">
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                anchorEl={this.state.anchorE1}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                id={menuId}
                                keepMounted
                                transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                open={isMenuOpen}
                                onClose={this.handleProfileMenuClose}
                            >
                                {this.getMenuRoutes()}
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
};

export default withStyles(styles)(AppToolbar);