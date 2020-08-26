/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, TextField, Grid, MenuItem, Button } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    paddingRight: 15,
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

export const FormUm = (formDisable) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    cnpj: "",
    email: "",
    telefone: "",
    empresa: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      Nome:
      <Grid container spacing={3}>
        <Grid item md={6}>
          <TextField
            disabled={false}
            label="Nome da Empresa"
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
            label="Nome Fantasia "
            fullWidth
            className={classes.textField}
            value={values.endereco}
            onChange={handleChange("endereco")}
            disabled={false}
            margin="normal"
          />
        </Grid>
      </Grid>
      Informações Fiscais:
      <Grid container spacing={3}>
        <Grid item md={4}>
          <TextField
            id="standard-name"
            label="CNPJ "
            fullWidth
            className={classes.textField}
            value={values.endereco}
            onChange={handleChange("endereco")}
            disabled={false}
            margin="normal"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            id="standard-name"
            label="Alvará de Licença "
            fullWidth
            className={classes.textField}
            value={values.endereco}
            onChange={handleChange("endereco")}
            disabled={false}
            margin="normal"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            id="standard-name"
            label="Inscrição Estadual "
            fullWidth
            className={classes.textField}
            value={values.endereco}
            onChange={handleChange("endereco")}
            disabled={false}
            margin="normal"
          />
        </Grid>
      </Grid>
      Endereço:
      <Grid container spacing={3}>
        <Grid item md={6}>
          <TextField
            id="standard-name"
            label="Rua: "
            fullWidth
            className={classes.textField}
            value={values.email}
            onChange={handleChange("email")}
            disabled={false}
            margin="normal"
          />
        </Grid>
        <Grid item md={3}>
          <TextField
            disabled={false}
            label="Bairro"
            fullWidth
            value={values.telefone}
            onChange={handleChange("telefone")}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item md={2}>
          <TextField
            disabled={false}
            label="Cidade"
            fullWidth
            value={values.empresa}
            onChange={handleChange("empresa")}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item md={1}>
          <TextField
            disabled={false}
            label="Estado"
            fullWidth
            value={values.empresa}
            onChange={handleChange("empresa")}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
      </Grid>
      Contatos:
      <Grid container spacing={3}>
        <Grid item md={4}>
          <TextField
            disabled={false}
            label="Telefone"
            fullWidth
            value={values.empresa}
            onChange={handleChange("empresa")}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            disabled={false}
            label="E-mail"
            fullWidth
            value={values.empresa}
            onChange={handleChange("empresa")}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            disabled={false}
            label="Departamento"
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
