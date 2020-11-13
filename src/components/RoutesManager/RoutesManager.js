import React, { Component } from 'react';
import { MainLayout, OutLayout } from '../../layouts';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { connect } from 'react-redux';

class RoutesManager extends Component {
    getRoutes() {
        if (this.props.token) {
            return (
                <Switch>
                    <Route path='/ngcs' render={(props) => (<MainLayout {...props} basePath='/ngcs' routes={routes} />)} />
                    <Redirect to="/ngcs" />
                </Switch>
            )
        } else {
            return (
                <Switch>
                    <Route path="/auth" component={OutLayout} />
                    <Redirect to="/auth" />
                </Switch>
            );
        }
    }
    render() {
        return (
            <BrowserRouter>
                {this.getRoutes()}
            </BrowserRouter>
        )
    }
};

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}


export default connect(mapStateToProps, null)(RoutesManager);