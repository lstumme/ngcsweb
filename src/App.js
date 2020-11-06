import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, TextField, Button, InputAdornment, Card,
  Container, Box
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
    padding: 20
  },
  formDiv: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    minWidth: 300
  }
});

function App() {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" direction="column" justify="space-between" className={classes.formGrid}>
      <div />
      <Card className={classes.card}>
        <div className={classes.formDiv}>
          <Grid container justify="center">
            <img src="https://logos-world.net/wp-content/uploads/2020/08/CBS-Logo-1951-present-700x394.jpg" width={200} alt="logo" />
          </Grid>
          <TextField label="Username" InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }} margin="normal" />
          <TextField label="Password" InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }} type="password" margin="normal" />
          <div style={{ height: 20 }} />
          <Button color="primary" variant="contained">LOG IN</Button>
        </div>
      </Card>
      <div />
    </Grid >
  );
}

export default App;
