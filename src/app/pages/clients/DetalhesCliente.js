import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-restricted-imports
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Paper, Grid, TextField } from "@material-ui/core/";
import { FormDois } from "../../components/pagina-um/FormDois";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "0 auto",
    display: "table",
  },
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(1),
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  button1: {
    color: "white",
  },
  marginBottom: {
    marginBottom: 50,
  },
}));

export const DetalhesCliente = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <FormDois />
      </Paper>
    </div>
  );
};
