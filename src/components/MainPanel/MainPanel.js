import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';
const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        background: '#F9F9FC'
    },
    footer: {
        textAlign: "center",
        margin: theme.spacing(3),
        padding: theme.spacing(2),
        borderStyle: "solid none none none",
        border: 1,
        borderColor: "lightgray",
    }
});

class MainPanel extends Component {
    getRoutes = () => {
        const { routes, basePath } = this.props;
        if (routes) {
            return routes.map((route, index) => {
                if (route.layout === basePath) {
                    return (
                        <Route exact path={route.layout + route.path} key={route.name}>{route.component}</Route>
                    )
                } else {
                    return null;
                }
            });
        }
    }

    getFirstRoute() {
        const { routes, basePath } = this.props;
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].layout === basePath) {
                return routes[i].layout + routes[i].path;
            }
        }
    }

    render() {
        const { classes, basePath } = this.props;
        return (
            <div className={classes.content}>
                <div className={classes.root}>
                    <Switch>
                        {this.getRoutes()}
                        <Redirect from={basePath} to={this.getFirstRoute()} />
                    </Switch>
                </div>
                <footer className={classes.footer}>
                    <span>
                        <Typography variant="subtitle2">
                            &copy; {1900 + new Date().getYear()}{" "}
                            Ludovic Stumme, made for whatever we need !
                        </Typography>
                    </span>
                </footer>

            </div>
        );
    }
};

export default withStyles(styles)(MainPanel);