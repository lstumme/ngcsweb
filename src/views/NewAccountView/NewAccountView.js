import React, { Component } from 'react';
import {
    Grid,
    Card, CardHeader, CardContent, Avatar,
    TextField, Button,
    Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import {
    AccessibilityNewSharp as AccessibilityNewSharpIcon,
} from '@material-ui/icons';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import * as links from '../../components/RoutesManager/routelinks';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
    cardroot: {
        minHeight: 300,
    },
    formroot: {
        '& > *': {
            marginBottom: theme.spacing(1),
        }
    },
    horizontalItem: {
        paddingTop: theme.spacing(2),
    },
    horizontalItemLabel: {
        paddingTop: theme.spacing(3),
        textAlign: "right",
        paddingRight: theme.spacing(3)
    }
});

class NewAccountView extends Component {
    constructor() {
        super();
        this.state = {
            firstname: null,
            lastname: null,
            email: null,
            login: null,
            password: null,
            ready: false
        };
    }

    onChangeHandler = (name) => (event) => {
        const newState = { ...this.state, [name]: event.target.value };
        const ready = newState.email && newState.login && newState.password;
        this.setState({ ...newState, ready: ready });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onCreateUser(this.state.login, this.state.password, this.state.email, this.state.firstname, this.state.lastname, null);
        this.props.history.push(links.SHOW_USERS.layout + links.SHOW_USERS.path);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h2 className='title-border'>Nouveau compte utilisateur</h2>
                <div>
                    <Grid container className={classes.root} justify="center">
                        <Grid item md={8} sm={12}>
                            <Card className={classes.cardroot}>
                                <CardHeader title={
                                    <Typography variant="h4">Utilisateur</Typography>
                                }
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            <AccessibilityNewSharpIcon />
                                        </Avatar>
                                    } />
                                <CardContent>
                                    <form className={classes.formroot} noValidate autoComplete="off" onSubmit={this.submitHandler}>
                                        <TextField label="Nom" fullWidth="true" onChange={this.onChangeHandler("lastname")} />
                                        <TextField label="Prénom" fullWidth="true" onChange={this.onChangeHandler("firstname")} />
                                        <TextField required label="email" fullWidth="true" type="email" onChange={this.onChangeHandler("email")} />
                                        <TextField required label="login" fullWidth="true" onChange={this.onChangeHandler("login")} />
                                        <TextField required label="password" fullWidth="true" type="password" onChange={this.onChangeHandler("password")} />
                                        {/* <FormControlLabel control={<Checkbox color="primary" />} label="Subscribe to newsletter" /> */}
                                        <div style={{ height: 20 }} />
                                        <Button variant="contained" color="secondary" type="submit" disabled={!this.state.ready}>Créer</Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}


// const mapStateToProps = state => {
//     return null;
// }

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: (login, password, email, firstname, lastname, avatar) => dispatch(actions.createUser(login, password, email, firstname, lastname, avatar))
    }
}

export default connect(null, mapDispatchToProps)(
    withStyles(styles)(
        withRouter(
            NewAccountView
        )
    )
);
