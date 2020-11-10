import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from "react-router-dom";
import routes from '../routes';
import { Grid } from '@material-ui/core';

const switchRoutes = (
    <Switch>
        {routes.map((route, key) => {
            if (route.layout === '/auth') {
                return (
                    <Route
                        path={route.layout + route.path}
                        component={route.component}
                        key={key}
                    />
                )
            } else {
                return null;
            }
        })}
        <Redirect from="/auth" to="/auth/signin" />
    </Switch>
);

const styles = theme => ({
    root: {
        minHeight: '100vh'
    },
    imgGrid: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    formGrid: {
        padding: 10,
        minHeight: '100vh',
        backgroundImage: '/static/virtualship.png',
        backgroundPosition: 'cover'

    }
});

class OutLayout extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container alignItems="center" direction="column" justify="space-between" className={classes.formGrid}>
                <div/>
                {switchRoutes}
                <div/>
            </Grid>
        )
    }
}

export default withStyles(styles)(OutLayout);
