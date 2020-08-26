/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, TextField, Grid } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    paddingRight: 15
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minwidth: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

export const FormUm = (formDisabled) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "Cliente João",
    cnpj: "27.211.888/0001-70",
    email: "jose@villadapaz.com.br",
    telefone: "(41) 98998-9898",
    empresa: "Vallori Solutions",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      
      <Grid container spacing={3} >
      <Grid item md={3}>
          <TextField
            disabled={formDisabled}
            label="Nome"
            fullWidth
            value={values.nome}
            onChange={handleChange("nome")}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            id="standard-name"
            label="Endereço: "
            fullWidth
            className={classes.textField}
            value={values.endereco}
            onChange={handleChange("endereco")}
            disabled={formDisabled}
            margin="normal"
          />
        </Grid>
        <Grid item md={3}>
          <TextField
            disabled={formDisabled}
            label="CNPJ"
            fullWidth
            value={values.cnpj}
            onChange={handleChange("cnpj")}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <TextField
            id="standard-name"
            label="E-mail: "
            fullWidth
            className={classes.textField}
            value={values.email}
            onChange={handleChange("email")}
            disabled={formDisabled}
            margin="normal"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            disabled={formDisabled}
            label="Telefone"
            fullWidth
            value={values.telefone}
            onChange={handleChange("telefone")}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            disabled={formDisabled}
            label="Empresa"
            fullWidth
            value={values.empresa}
            onChange={handleChange("empresa")}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
      </Grid>
      <Divider />
    </form>
  );
};
