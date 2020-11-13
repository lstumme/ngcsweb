import React, { Component } from 'react';
import {
    Grid,
    Card, CardHeader, CardContent, Avatar,
    TextField, Checkbox, Button,
    FormControlLabel, Box, Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import {
    AccessibilityNewSharp as AccessibilityNewSharpIcon,
    ListAlt as ListAltIcon
} from '@material-ui/icons';

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
        minHeight: 380,
        margin: theme.spacing(2)
    },
    formroot: {
        '& > *': {
            marginBottom: theme.spacing(3),
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



class AccountView extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h2 className='title-border'>Compte utilisateur</h2>
                <div>
                    <Grid container className={classes.root}>
                        <Grid item md={6} sm={12}>
                            <Card className={classes.cardroot}>
                                <CardHeader title={
                                    <Typography variant="h4">Stacked Form</Typography>
                                }
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            <AccessibilityNewSharpIcon />
                                        </Avatar>
                                    } />
                                <CardContent>
                                    <form className={classes.formroot} noValidate autoComplete="off">
                                        <Box component="span" display="block">
                                            <TextField label="Email adress" fullWidth="true" />
                                        </Box>
                                        <Box component="span" display="block">
                                            <TextField label="Password" type="password" fullWidth="true" />
                                        </Box>
                                        <Box component="span" display="block">
                                            <FormControlLabel control={<Checkbox color="primary" />} label="Subscribe to newsletter" />
                                        </Box>
                                        <Box component="span" display="block">
                                            <Button variant="contained" color="primary">Submit</Button>
                                        </Box>
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

export default withStyles(styles)(AccountView);