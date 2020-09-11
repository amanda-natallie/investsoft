import React from "react";
import CustomTable from "../../components/CustomTable/CustomTable";
// eslint-disable-next-line no-restricted-imports
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Paper, Grid } from "@material-ui/core/";
import { NavLink } from "react-router-dom";

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

export const GerenciarClientesPage = () => {
  const classes = useStyles();

  const data = [
    { id: 1, name: "priscila", price: 654 },
    { id: 2, name: "priscila", price: 654 },
    { id: 3, name: "priscila", price: 654 },
    { id: 4, name: "priscila", price: 654 },
    { id: 5, name: "priscila", price: 654 },
    { id: 6, name: "priscila", price: 654 },
    { id: 7, name: "priscila", price: 654 },
    { id: 8, name: "priscila", price: 654 },
    { id: 9, name: "priscila", price: 654 },
    { id: 10, name: "priscila", price: 654 },
    { id: 11, name: "priscila", price: 654 },
    { id: 12, name: "priscila", price: 654 },
    { id: 13, name: "priscila", price: 654 },
    { id: 14, name: "priscila", price: 654 },
  ];
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Product Name",
    },
    {
      dataField: "price",
      text: "Product Price",
    },
  ];

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          className={`justify-content-between align-self-center ${classes.marginBottom}`}
        >
          <div>
            <Typography variant="h5" component="h3">
              Gerenciar clientes
            </Typography>
            <Typography component="p">
              Consulte aqui todos os registros de clientes
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button1}
            onClick={undefined}
          >
            <NavLink
              className="menu-link menu-toggle"
              to="/cadastrar-clientes"
            >
              Cadastrar novo cliente
            </NavLink>
          </Button>
        </Grid>

        <CustomTable data={data} columns={columns} />
      </Paper>
    </div>
  );
};
