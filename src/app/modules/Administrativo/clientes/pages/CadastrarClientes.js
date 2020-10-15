import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-restricted-imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Button,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core/";

import DeleteIcon from "@material-ui/icons/Delete";
import { InformacoesJuridicasForm } from "../components/forms/InformacoesJuridicasForm";
import { EnderecoLocalizacaoForm } from "../components/forms/EnderecoLocalizacaoForm";
import { AlvaraAtividadesForm } from "../components/forms/AlvaraAtividadesForm";
import { RegimeTributarioForm } from "../components/forms/RegimeTributarioForm";
import { ContatosForm } from "../components/forms/ContatosForm";
import { SociosForm } from "../components/forms/SociosForm";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, backStep, resetStep } from "../../steps/_redux/stepsActions";

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
  connectorActive: {
    "& $connectorLine": {
      borderColor: theme.palette.secondary.main,
    },
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: theme.palette.primary.main,
    },
  },
  connectorDisabled: {
    "& $connectorLine": {
      borderColor: theme.palette.grey[100],
    },
  },
  connectorLine: {
    transition: theme.transitions.create("border-color"),
  },
  button1: {
    color: "white",
  },
}));

export const CadastrarClientes = () => {
  const [formDisabled, setFormDisabled] = useState(true);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const dispatch = useDispatch();
  const stepRedux = useSelector((state) => state.step);

  const getSteps = () => {
    return [
      "Informações Jurídicas",
      "Endereço & Localização",
      "Alvará & Atividades",
      "Regime Tributário",
      "Contatos",
      "Sócios",
    ];
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <InformacoesJuridicasForm />;
      case 1:
        return <EnderecoLocalizacaoForm />;
      case 2:
        return <AlvaraAtividadesForm />;
      case 3:
        return <RegimeTributarioForm />;
      case 4:
        return <ContatosForm />;
      case 5:
        return <SociosForm />;
      default:
        return "Página desconhecida";
    }
  };

  const steps = getSteps();

  const handleNext = () => {
    dispatch(nextStep(stepRedux));
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    dispatch(backStep(stepRedux));
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    dispatch(resetStep(stepRedux));
  };

  const connector = (
    <StepConnector
      classes={{
        active: classes.connectorActive,
        completed: classes.connectorCompleted,
        disabled: classes.connectorDisabled,
        line: classes.connectorLine,
      }}
    />
  );
  useEffect(() => {}, [formDisabled]);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          className="justify-content-between align-self-center mb-5 pl-2"
        >
          <div>
            <Typography variant="h5" component="h3">
              Cadastro de Novo Cliente
            </Typography>
            <Typography component="p">
              Preencha todas informações de clique em próximo.
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button1}
            onClick={() => setFormDisabled(!formDisabled)}
          >
            Cancelar
            <DeleteIcon className={classes.rightIcon} />
          </Button>
        </Grid>

        <Stepper
          activeStep={stepRedux.step}
          connector={connector}
          style={{ padding: "10px 0" }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {/* {stepRedux.step === steps.length ? ( */}
          {stepRedux.step === 6 ? (
            <div>
              <Typography className={classes.instructions}>
                Você finalizou todas as etapas desta atividade!
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Resetar
              </Button>
            </div>
          ) : (
            <>
              <Grid container>{getStepContent(stepRedux.step)}</Grid>

              {/* <Grid container>
                <Button
                  disabled={stepRedux.step === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Voltar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  
                  {stepRedux.step === 5 ? "Finalizar" : "Próximo"}
                </Button>
              </Grid> */}
            </>
          )}
        </div>
      </Paper>
    </div>
  );
};
