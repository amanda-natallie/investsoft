/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  TextField,
  Grid,
  InputLabel,
  Fab,
  Tooltip,
  Button,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { CustomDropzone } from "../../../../../components/Dropzone/CustomDropzone";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
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
  divider: {
    display: "block",
    width: "100%",
  },
  plusButton: {
    cursor: "pointer",
    marginBottom: 20,
  },
}));

export const AlvaraAtividadesForm = ({ managerCustomer = false }) => {
  const inputState = useSelector((state) => state.client);
  const stepRedux = useSelector((state) => state.step);
  const dispatch = useDispatch();

  const [arrayOfErrors, setArrayOfErrors] = useState([]);

  const classes = useStyles();
  const [values, setValues] = useState({
    alvaraLicenca: "",
    inscricaoMunicipal: "",
    inscricaoEstadual: "",
    nire: "",
  });

  const [atividades, setAtividades] = useState([
    { id: 0, cnae: "", principalSecundaria: "", itemServico: "" },
  ]);

  const addInformationOption = (type, index, e) => {
    const newArray = JSON.parse(JSON.stringify(atividades));

    switch (type) {
      case "cnae":
        newArray[index].cnae = e.target.value;

        break;
      case "principalSecundaria":
        newArray[index].principalSecundaria = e.target.value;

        break;
      case "itemServico":
        newArray[index].itemServico = e.target.value;
        break;
      default:
        break;
    }

    setAtividades(newArray);
  };

  const addOption = () => {
    const id = atividades.length;
    const optionLine = {
      id: id,
      cnae: "",
      principalSecundaria: "",
      itemServico: "",
    };

    setAtividades([...atividades, optionLine]);
  };

  const deleteOption = (index) => {
    setAtividades(atividades.filter((_, i) => i !== index));
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const schema = Yup.object().shape({
        alvaraLicenca: Yup.string().required(
          "Campo Numero do Alvara, obrigatório"
        ),
        inscricaoMunicipal: Yup.string().required(
          "Campo Inscrição Municipal, obrigatório"
        ),
        inscricaoEstadual: Yup.string().required(
          "Campo Inscrição Estadual, obrigatório"
        ),
        nire: Yup.string().required("Campo NIRE, obrigatório"),
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
        Passo 03: Informe os dados de Alvará & Atividades{" "}
      </p>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField
            disabled={managerCustomer === true ? inputState.isDisable : false}
            label="Número do Alvará"
            fullWidth
            value={values.alvaraLicenca}
            onChange={handleChange("alvaraLicenca")}
            error={checkingArrayOfErrors("alvaraLicenca")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            disabled={managerCustomer === true ? inputState.isDisable : false}
            label="Inscrição Municipal"
            fullWidth
            value={values.inscricaoMunicipal}
            onChange={handleChange("inscricaoMunicipal")}
            error={checkingArrayOfErrors("inscricaoMunicipal")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            disabled={managerCustomer === true ? inputState.isDisable : false}
            label="Inscrição Estadual"
            fullWidth
            value={values.inscricaoEstadual}
            onChange={handleChange("inscricaoEstadual")}
            error={checkingArrayOfErrors("inscricaoEstadual")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            disabled={managerCustomer === true ? inputState.isDisable : false}
            label="NIRE"
            fullWidth
            value={values.nire}
            onChange={handleChange("nire")}
            error={checkingArrayOfErrors("nire")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} className="pl-6">
          {managerCustomer === true ? (
            !inputState.isDisable && (
              <>
                <InputLabel>
                  <strong>
                    Anexar o contrato social da empresa e alterações
                    contratuiais existentes.
                    <Tooltip title="Documentos anexos contrato social da empresa e alterações contratuiais existentes">
                      <InfoIcon />
                    </Tooltip>
                  </strong>
                </InputLabel>
                <CustomDropzone />
              </>
            )
          ) : (
            <>
              <InputLabel>
                <strong>
                  Anexar o contrato social da empresa e alterações contratuiais
                  existentes.
                  <Tooltip title="Documentos anexos contrato social da empresa e alterações contratuiais existentes">
                    <InfoIcon />
                  </Tooltip>
                </strong>
              </InputLabel>
              <CustomDropzone />
            </>
          )}
        </Grid>

        <Grid item xs={12} className="pl-6 mb-4">
          <Divider className={classes.divider} />
          <InputLabel className="mt-4">Atividades da Empresa</InputLabel>
        </Grid>
      </Grid>
      {atividades &&
        atividades.map((item, index) => (
          <Grid container key={index} spacing={5} className="mb-5">
            <Grid item xs>
              <TextField
                disabled={
                  managerCustomer === true ? inputState.isDisable : false
                }
                label="CNAE"
                fullWidth
                value={item[index]}
                onChange={(e) => addInformationOption("cnae", index, e)}
                error={checkingArrayOfErrors("cnae")}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs>
              <TextField
                disabled={
                  managerCustomer === true ? inputState.isDisable : false
                }
                label="Principal ou Secundaria"
                fullWidth
                value={item[index]}
                onChange={(e) =>
                  addInformationOption("principalSecundaria", index, e)
                }
                error={checkingArrayOfErrors("principalSecundaria")}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs>
              <TextField
                disabled={
                  managerCustomer === true ? inputState.isDisable : false
                }
                label="Item de Servico"
                fullWidth
                value={item[index]}
                onChange={(e) => addInformationOption("itemServico", index, e)}
                error={checkingArrayOfErrors("itemServico")}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={1}>
              {managerCustomer === true ? (
                inputState.isDisable === true ? (
                  ""
                ) : (
                  <Tooltip title="Deletar Opção">
                    <Fab
                      style={{
                        width: "26px",
                        height: "26px",
                        fontSize: "1.5rem",
                      }}
                      color="primary"
                      aria-label="Deletar Opção"
                      onClick={() => deleteOption(index)}
                    >
                      <DeleteIcon
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </Fab>
                  </Tooltip>
                )
              ) : (
                <Tooltip title="Deletar Opção">
                  <Fab
                    style={{
                      width: "26px",
                      height: "26px",
                      fontSize: "1.5rem",
                    }}
                    color="primary"
                    aria-label="Deletar Opção"
                    onClick={() => deleteOption(index)}
                  >
                    <DeleteIcon
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </Fab>
                </Tooltip>
              )}
            </Grid>
          </Grid>
        ))}
      <Grid container>
        {managerCustomer === true ? (
          inputState.isDisable === true ? (
            ""
          ) : (
            <Grid
              lg={3}
              className={classes.plusButton}
              onClick={() => addOption()}
            >
              <Fab
                style={{
                  width: "26px",
                  height: "26px",
                  fontSize: "1.5rem",
                }}
                size="small"
                color="primary"
              >
                <AddIcon
                  style={{
                    margin: "0 auto",
                    maxWidth: "20px",
                    maxHeight: "20px",
                    textAlign: "center",
                  }}
                />
              </Fab>
              <span className="ml-4">Adicionar Atividade</span>
            </Grid>
          )
        ) : (
          <Grid
            lg={3}
            className={classes.plusButton}
            onClick={() => addOption()}
          >
            <Fab
              style={{
                width: "26px",
                height: "26px",
                fontSize: "1.5rem",
              }}
              size="small"
              color="primary"
            >
              <AddIcon
                style={{
                  margin: "0 auto",
                  maxWidth: "20px",
                  maxHeight: "20px",
                  textAlign: "center",
                }}
              />
            </Fab>
            <span className="ml-4">Adicionar Atividade</span>
          </Grid>
        )}
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
    </form>
  );
};
