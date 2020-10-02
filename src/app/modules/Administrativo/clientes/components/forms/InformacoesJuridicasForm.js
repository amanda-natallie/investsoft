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
  Button,
} from "@material-ui/core";
import ImageUpload from "../../../../../components/ImageUpload/ImageUpload";
import { format } from "date-fns/esm";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsDisable } from "../../../clientes/_redux/clientesActions";
import * as Yup from "yup";
import { useRef } from "react";

import {
  nextStep,
  backStep,
  resetStep,
} from "../../../steps/_redux/stepsActions";

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

export const InformacoesJuridicasForm = ({
  clientData = "",
  managerCustomer = false,
}) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const inputState = useSelector((state) => state.client);
  const stepRedux = useSelector((state) => state.step);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [optionsOpen, handleAvatarClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState("/media/client-logos/brand.png");

  const [arrayOfErrors, setArrayOfErrors] = useState([]);

  const [values, setValues] = useState({
    codigo: "",
    tipo: "",
    cnpj: "",
    razaoSocial: "",
    nomeFantasia: "",
    dataAbertura: "",
    clienteDesde: "",
    observacao: "",
  });

  function formattingDate(date = "") {
    if (date !== "") {
      return format(new Date(date), "dd/MM/yyyy");
    } else {
      return "";
    }
  }

  useEffect(() => {
    // const formattedDate = clientData.dataAbertura
    //   ? format(new Date(clientData.dataAbertura), "dd/MM/yyyy")
    //   : "";

    const formattedDateAbertura = formattingDate(clientData.dataAbertura);
    const formattedDateClienteDesde = formattingDate(clientData.clienteDesde);

    setValues({
      codigo: clientData.codigo,
      tipo: clientData.tipoCliente,
      cnpj: clientData.cnpj,
      razaoSocial: clientData.razaoSocial,
      nomeFantasia: clientData.nomeFantasia,
      dataAbertura: formattedDateAbertura,
      clienteDesde: formattedDateClienteDesde,
      observacao: clientData.observacao,
    });

    setPicture(clientData.logo);
  }, [clientData]);

  const handleChange = (name) => (event) => {
    console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const schema = Yup.object().shape({
        codigo: Yup.string().required("Código do Cliente"),
        tipo: Yup.string().required("Selecione um Tipo"),
        cnpj: Yup.string().required("CNPJ Obrigatório"),
        // .min(14, "Mínimo 14 dígitos")
        // .max(14, "Máximo 14 dígitos"),
        razaoSocial: Yup.string().required("Qual a Razão Social?"),
        nomeFantasia: Yup.string().required("Requer um Nome Fantasia"),
        dataAbertura: Yup.string().required("Qual a Data de Abertura?"),
        clienteDesde: Yup.string().required("Cliente Desde?"),
        observacao: Yup.string(),
      });

      await schema.validate(values, {
        abortEarly: false,
      });

      console.log("OKAY");
      dispatch(nextStep(stepRedux));
    } catch (err) {
      const validationErros = {};
      let InputError = [];

      err.inner.forEach((error, i) => {
        validationErros[error.path] = error.message;
        InputError[i] = error.path;
      });

      setArrayOfErrors(InputError);
      console.log(validationErros);
    }
  };

  const checkingArrayOfErrors = (name) => {
    const find = arrayOfErrors.findIndex((error) => error === name);
    if (find !== -1) return true;
    else return false;
  };

  const handleBack = () => {
    dispatch(backStep(stepRedux));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.container}
      noValidate
      autoComplete="off"
    >
      <p className="ml-3 font-weight-bold">
        Passo 01: Informe os dados básicos{" "}
      </p>

      <Grid container justify="space-between" spacing={3} className="mt-5 ml-0">
        <Grid md={9}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                disabled={
                  managerCustomer === true ? inputState.isDisable : false
                }
                label="Código do Cliente"
                fullWidth
                value={values.nome}
                onChange={handleChange("codigo")}
                error={checkingArrayOfErrors("codigo")}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                disabled={
                  managerCustomer === true ? inputState.isDisable : false
                }
                fullWidth
                value={values.tipo}
                onChange={handleChange("tipo")}
                error={checkingArrayOfErrors("tipo")}
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
                disabled={
                  managerCustomer === true ? inputState.isDisable : false
                }
                label="Número do CNPJ"
                fullWidth
                value={values.cnpj}
                onChange={handleChange("cnpj")}
                error={checkingArrayOfErrors("cnpj")}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                disabled={
                  managerCustomer === true ? inputState.isDisable : false
                }
                label="Razão Social"
                fullWidth
                value={values.razaoSocial}
                onChange={handleChange("razaoSocial")}
                error={checkingArrayOfErrors("razaoSocial")}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                disabled={
                  managerCustomer === true ? inputState.isDisable : false
                }
                label="Nome Fantasia"
                fullWidth
                value={values.nomeFantasia}
                onChange={handleChange("nomeFantasia")}
                error={checkingArrayOfErrors("nomeFantasia")}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="date"
                label="Data de Abertura"
                type="date"
                defaultValue="24-05-2020"
                className={classes.textField}
                value={values.dataAbertura}
                onChange={handleChange("dataAbertura")}
                error={checkingArrayOfErrors("dataAbertura")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="date"
                label="Cliente Desde"
                type="date"
                defaultValue="24-05-2020"
                className={classes.textField}
                value={values.clienteDesde}
                onChange={handleChange("clienteDesde")}
                error={checkingArrayOfErrors("clienteDesde")}
                InputLabelProps={{
                  shrink: true,
                }}
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
            disabled={managerCustomer === true ? inputState.isDisable : false}
            multiline
            rows={6}
            label="Observações do cliente"
            variant="outlined"
            style={{ width: "92%" }}
          />
        </Grid>

        <Grid item md={6}>
          {managerCustomer === false && (
            <Grid container>
              <Grid item md={2}>
                <Button
                  disabled={stepRedux.step === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Voltar
                </Button>
              </Grid>

              <Grid item md={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.button}
                >
                  {stepRedux.step === 5 ? "Finalizar" : "Próximo"}
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Divider />
    </form>
  );
};
