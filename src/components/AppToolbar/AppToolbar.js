import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Notifications, AccountCircle} from '@material-ui/icons';

import {
    List as ListIcon,
    MoreVert as MoreVertIcon
} from '@material-ui/icons';

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
        open: true
    }
    handleDrawerState = () => {
        let newState = !this.state.open;
        this.setState({ open: newState });
        if (this.props.stateChanged) {
            this.props.stateChanged(newState);
        }
    }

    render() {
        const { classes } = this.props;
        return (
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
                    <div style={{display: 'flex'}}>
                    <IconButton className={classes.margin} color='inherit'>
                            <Notifications />
                        </IconButton>
                        <IconButton className={classes.margin} color='inherit'>
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
};

export default withStyles(styles)(AppToolbar);