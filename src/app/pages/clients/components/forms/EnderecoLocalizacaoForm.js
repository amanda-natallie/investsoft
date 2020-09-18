/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, TextField, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "30px 15px 30px 0",
    width: "100%",
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

export const EnderecoLocalizacaoForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    municipio: "",
    complemento: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <p className="ml-3 font-weight-bold">
        Passo 02: Informe os dados de endereço do cliente{" "}
      </p>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            disabled={false}
            label="CEP"
            fullWidth
            value={values.cep}
            onChange={handleChange("cep")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={7}>
          <TextField
            disabled={false}
            label="Logradouro"
            fullWidth
            value={values.logradouro}
            onChange={handleChange("logradouro")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={5}>
          <TextField
            disabled={false}
            label="Número"
            fullWidth
            value={values.numero}
            onChange={handleChange("numero")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled={false}
            label="Bairro"
            fullWidth
            value={values.bairro}
            onChange={handleChange("bairro")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            disabled={false}
            label="Município"
            fullWidth
            value={values.municipio}
            onChange={handleChange("municipio")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled={false}
            label="Complemento"
            fullWidth
            value={values.complemento}
            onChange={handleChange("complemento")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Divider />
    </form>
  );
};
