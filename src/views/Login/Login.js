import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    TextField, Button, InputAdornment, Card,
    CardContent
} from '@material-ui/core';

import { AccountCircle, LockRounded } from '@material-ui/icons';
import {connect} from 'react-redux';

import * as actions from '../../store/actions';

const styles = theme => ({
    card: {
        padding: 0
    },
    formDiv: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        minWidth: 300
    }

});

class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: "",
            password: "",
            error: ""
        }
    }

    onChangeHandler = (name) => (event) => {
        this.setState({ [name]: event.target.value });
        console.log(this.state);
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.login, this.state.password);
    }

    render() {
        const { classes } = this.props;

        return (
            <form onSubmit={this.submitHandler}>
                <Card className={classes.card} elevation={5}>
                    <img src="/static/virtualship.png" width="350" height="63" size="cover" alt="Digital Ship" />
                    <CardContent>
                        <div className={classes.formDiv}>
                            <TextField
                                label="Username"
                                name="login"
                                autoComplete="username"
                                InputProps={{
                                    startAdornment:
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                }}
                                margin="normal"
                                onChange={this.onChangeHandler("login")}
                            />
                            <TextField
                                label="Password"
                                name="password"
                                autoComplete="current-password"
                                InputProps={{
                                    startAdornment:
                                        <InputAdornment position="start">
                                            <LockRounded />
                                        </InputAdornment>
                                }}
                                type="password"
                                margin="normal"
                                onChange={this.onChangeHandler("password")}
                            />
                            <div style={{ height: 20 }} />
                            <Button type="submit" color="primary" variant="contained">LOG IN</Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAlreadyAuth: state.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (login, password) => dispatch(actions.auth(login, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));

