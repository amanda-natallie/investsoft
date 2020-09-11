/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  TextField, Grid, Paper } from "@material-ui/core/";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

import { ProductsPage } from "../../modules/ECommerce/pages/products/ProductsPage";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "90%",
    margin: "0 auto",
    display: "table",
    marginTop: theme.spacing(1),
  },
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
  roundedAvatar: {
    borderRadius: "100%",
    maxWidth: "80%",
    margin: " 0 auto",
  },
  subheader: {
    fontSize: "1rem",
    margin: "20px 0 0 8px",
  },
  paper: {
    width: "90%",
    margin: "0 auto",
    display: "table",
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(1),
  },
}));

export const FormDois = (formDisabled) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    codigo: "#65416548196-41",
    nome: "Nome da empresa",
    tipo: "Domésticos",
    cnpj: "27.211.888/0001-70",
    razaoSocial: "Nome da empresa EIRELI",
    nomeFantasia: "Nome da empresa",
    dataAbertura: "24/12/1994",
    cep: "04638-120",
    logradouro: "Rua Desire Contier",
    numero: 39,
    bairro: "Jardim Petrópolis",
    municipio: "São Paulo",
    complemento: "Rua do Ragazzo",
    email: "jose@villadapaz.com.br",
    telefone: "(41) 98998-9898",
    empresa: "Vallori Solutions",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <Paper className={classes.paper}>
        <h4>Código do cliente: {values.codigo}</h4>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item md={9}>
              <div className="d-flex align-items-center justify-content-between">
                <TextField
                  disabled={formDisabled}
                  label="Nome"
                  value={values.nome}
                  onChange={handleChange("nome")}
                  className={classes.textField}
                  margin="normal"
                />

                <TextField
                  id="standard-name"
                  label="Número do CNPJ: "
                  className={classes.textField}
                  value={values.cnpj}
                  onChange={handleChange("cnpj")}
                  disabled={formDisabled}
                  margin="normal"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <TextField
                  disabled={formDisabled}
                  label="Razão Social"
                  value={values.razaoSocial}
                  onChange={handleChange("razaoSocial")}
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  disabled={formDisabled}
                  label="Nome Fantasia"
                  value={values.nomeFantasia}
                  onChange={handleChange("nomeFantasia")}
                  className={classes.textField}
                  margin="normal"
                />

                <TextField
                  id="standard-name"
                  label="Data de Abertura: "
                  className={classes.textField}
                  value={values.dataAbertura}
                  onChange={handleChange("dataAbertura")}
                  disabled={formDisabled}
                  margin="normal"
                />
              </div>
              <h5 className={classes.subheader}>Localização</h5>
              <TextField
                disabled={formDisabled}
                label="CEP"
                value={values.cep}
                onChange={handleChange("cep")}
                className={classes.textField}
                style={{ maxWidth: 200 }}
                margin="normal"
              />
              <div className="d-flex align-items-center justify-content-between">
                <TextField
                  disabled={formDisabled}
                  label="Logradouro"
                  value={values.logradouro}
                  onChange={handleChange("logradouro")}
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  disabled={formDisabled}
                  label="Número"
                  value={values.numero}
                  onChange={handleChange("numero")}
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  disabled={formDisabled}
                  label="Bairro"
                  value={values.bairro}
                  onChange={handleChange("bairro")}
                  className={classes.textField}
                  margin="normal"
                />

                <TextField
                  id="standard-name"
                  label="Município"
                  className={classes.textField}
                  value={values.municipio}
                  onChange={handleChange("municipio")}
                  disabled={formDisabled}
                  margin="normal"
                />

                <TextField
                  id="standard-name"
                  label="Complemento"
                  className={classes.textField}
                  value={values.complemento}
                  onChange={handleChange("complemento")}
                  disabled={formDisabled}
                  margin="normal"
                />
              </div>
            </Grid>
            <Grid item md={3} className="text-center">
              <img
                src={toAbsoluteUrl("/media/client-logos/logo4.png")}
                alt="yu"
                className={classes.roundedAvatar}
              />
              <button className="btn btn-primary mt-2">Editar dados</button>
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
        </form>
      </Paper>
      <div className={classes.wrapper}>
        <ProductsPage />
      </div>
    </>
  );
};
