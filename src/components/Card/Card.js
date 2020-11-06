import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default function Card(props) {
  const { children, ...rest } = props;
  return (
    <Card>
      {children}
    </Card>
  );
}


