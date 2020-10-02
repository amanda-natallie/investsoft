/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, TextField, Grid, Button } from "@material-ui/core";
import * as Yup from "yup";

import { useSelector, useDispatch } from "react-redux";
import {
  nextStep,
  backStep,
  resetStep,
} from "../../../steps/_redux/stepsActions";
import { setClientes } from "../../_redux/clientesActions";

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

export const EnderecoLocalizacaoForm = ({ managerCustomer = false }) => {
  const stepRedux = useSelector((state) => state.step);
  const dispatch = useDispatch();
  const [arrayOfErrors, setArrayOfErrors] = useState([]);

  const classes = useStyles();
  const [values, setValues] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    municipio: "",
    complemento: "",
    uf: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const setAddress = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) =>
      response.json().then((data) => {
        setValues({
          ...values,
          logradouro: data.logradouro,
          bairro: data.bairro,
          municipio: data.localidade,
          uf: data.uf,
        });
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const schema = Yup.object().shape({
        cep: Yup.string().required("Campo CEP obrigatório"),
        logradouro: Yup.string().required("Campo Logradouro obrigatório"),
        numero: Yup.string().required("Campo número obrigatório"),
        bairro: Yup.string().required("Campo bairro obrigatório"),
        municipio: Yup.string().required("Campo município obrigatório"),
        uf: Yup.string().required("Campo UF obrigatório"),
        complemento: Yup.string(),
      });

      await schema.validate(values, {
        abortEarly: false,
      });

      console.log("OKAY");
      dispatch(setClientes(values));
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
            error={checkingArrayOfErrors("cep")}
            onBlur={(e) => setAddress(e.target.value)}
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
            error={checkingArrayOfErrors("logradouro")}
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
            error={checkingArrayOfErrors("numero")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            disabled={false}
            label="Bairro"
            fullWidth
            value={values.bairro}
            onChange={handleChange("bairro")}
            error={checkingArrayOfErrors("bairro")}
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
            error={checkingArrayOfErrors("municipio")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            disabled={false}
            label="UF"
            fullWidth
            value={values.uf}
            onChange={handleChange("uf")}
            error={checkingArrayOfErrors("uf")}
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
            error={checkingArrayOfErrors("complemento")}
            className={classes.textField}
            variant="outlined"
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
