/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  TextField,
  Grid,
  MenuItem,
  TextareaAutosize,
} from "@material-ui/core";
import ImageUpload from "../../../../../components/ImageUpload/ImageUpload";
import { format } from "date-fns/esm";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsDisable } from "../../../clientes/_redux/clientesActions";

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

export const InformacoesJuridicasForm = ({ clientData = "" }) => {
  const inputState = useSelector((state) => state.client);
  const classes = useStyles();
  const [optionsOpen, handleAvatarClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState("/media/client-logos/brand.png");

  const [values, setValues] = useState({
    codigo: "",
    tipo: "",
    cnpj: "",
    razaoSocial: "",
    nomeFantasia: "",
    dataAbertura: "",
  });

  useEffect(() => {
    const formattedDate = clientData.dataAbertura
      ? format(new Date(clientData.dataAbertura), "dd/MM/yyyy")
      : "";

    setValues({
      codigo: "",
      tipo: clientData.tipoCliente,
      cnpj: clientData.cnpj,
      razaoSocial: clientData.razaoSocial,
      nomeFantasia: clientData.nomeFantasia,
      dataAbertura: formattedDate,
    });

    setPicture(clientData.logo);
  }, [clientData]);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

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
                disabled={inputState.isDisable}
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
                disabled={inputState.isDisable}
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
                disabled={inputState.isDisable}
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
                disabled={inputState.isDisable}
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
                disabled={inputState.isDisable}
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
                disabled={inputState.isDisable}
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

        <Grid item xs={10}>
          <TextField
            disabled={inputState.isDisable}
            multiline
            rows={6}
            label="Observações do cliente"
            variant="outlined"
            style={{ width: "92%" }}
          />
        </Grid>
      </Grid>
      <Divider />
    </form>
  );
};
