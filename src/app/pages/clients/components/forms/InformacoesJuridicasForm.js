/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, TextField, Grid, MenuItem } from "@material-ui/core";
import ImageUpload from "../../../../components/ImageUpload/ImageUpload";

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

export const InformacoesJuridicasForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    codigo: "",
    tipo: "",
    cnpj: "",
    razaoSocial: "",
    nomeFantasia: "",
    dataAbertura: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const [optionsOpen, handleAvatarClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState("/media/client-logos/brand.png");
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <p className="ml-3 font-weight-bold">
        Passo 01: Informe os dados básicos{" "}
      </p>
      <Grid container justify="space-between" spacing={3} className="mt-5 ml-0">
        <Grid md={9}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                disabled={false}
                label="Código do Cliente"
                fullWidth
                value={values.nome}
                onChange={handleChange("nome")}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                disabled={false}
                fullWidth
                value={values.tipo}
                onChange={handleChange("tipo")}
                className={classes.textField}
                variant="outlined"
                id="select"
                label="Tipo"
                select
              >
                <MenuItem value="Ativo">Ativo</MenuItem>
                <MenuItem value="Inativo">Inativo</MenuItem>
                <MenuItem value="Eventual">Eventual</MenuItem>
                <MenuItem value="Doméstico">Doméstico</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField
                disabled={false}
                label="Número do CNPJ"
                fullWidth
                value={values.cnpj}
                onChange={handleChange("cnpj")}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                disabled={false}
                label="Razão Social"
                fullWidth
                value={values.razaoSocial}
                onChange={handleChange("razaoSocial")}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                disabled={false}
                label="Nome Fantasia"
                fullWidth
                value={values.nomeFantasia}
                onChange={handleChange("nomeFantasia")}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                disabled={false}
                label="Data de Abertura"
                fullWidth
                value={values.dataAbertura}
                onChange={handleChange("dataAbertura")}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid md={2}>
          <ImageUpload
            handleAvatarClick={handleAvatarClick}
            optionsOpen={optionsOpen}
            loading={loading}
            setLoading={setLoading}
            picture={picture}
            setPicture={setPicture}
          />
        </Grid>
      </Grid>
      <Divider />
    </form>
  );
};
