import React, { Component } from 'react';
import { withStyles, withTheme } from '@material-ui/core';
import { AppToolbar, Sidebar, MainPanel } from '../../components';


const styles = theme => ({
    root: {
        display: 'flex'
    },
    toolbarMargin: theme.mixins.toolbar,
});

class MainLayout extends Component {
    state = {
        open: true
    }

    handleToolbarState = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        const { routes, basePath, classes } = this.props;
        return (
            <div className={classes.root}>
                <AppToolbar target="AppBar" routes={routes} appTitle="SIMULATION MANAGER" stateChanged={this.handleToolbarState} />
                <Sidebar collapsed={this.state.open} />
                <MainPanel routes={routes} basePath={basePath}></MainPanel>
            </div>
        );
    };
};

export default withStyles(styles)(withTheme(MainLayout));