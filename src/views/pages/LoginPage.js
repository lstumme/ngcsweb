import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, TextField, Button, InputAdornment, Card,
    CardContent
  } from '@material-ui/core';
  
  import { AccountCircle, LockRounded } from '@material-ui/icons';
  
  const useStyles = makeStyles({
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
      minHeight: '100vh'
    },
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
  

function LoginPage() {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" direction="column" justify="space-between" className={classes.formGrid}>
            <div />
            <Card className={classes.card}>
                <img src="/static/digitalship.png" width="350" height="120" size="cover" alt="Digital Ship" />
                <CardContent>
                    <div className={classes.formDiv}>
                        <TextField label="Username" InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }} margin="normal" />
                        <TextField label="Password" InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }} type="password" margin="normal" />
                        <div style={{ height: 20 }} />
                        <Button color="primary" variant="contained">LOG IN</Button>
                    </div>
                </CardContent>
            </Card>
            <div />
        </Grid >
    );
}

export default LoginPage;
