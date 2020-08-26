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
import { FormUm } from "../components/pagina-um/FormUm";
import DeleteIcon from "@material-ui/icons/Delete";
import {CustomersPage} from "../../app/modules/ECommerce/pages/customers/CustomersPage"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
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

export const PaginaUm = () => {
  const [formDisabled, setFormDisabled] = useState(true);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const getSteps = () => {
    return ["Atividade Passo 1", "Atividade Passo 2", "Atividade Passo 3"];
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (<><FormUm formDisabled={formDisabled} /><CustomersPage /></>)
      case 1:
        return "Passo 2";
      case 2:
        return "Passo 3";
      default:
        return "Unknown step";
    }
  };

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
      useEffect(()=>{},[formDisabled])
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className="justify-content-between align-self-center">
          
          <div>

            <Typography variant="h5" component="h3">
              Este é um exemplo de formulário de atividades
            </Typography>
            <Typography component="p">
              Você poderá criar atividades a partir do menu e visualizar aqui o
              resultado.
            </Typography>
          </div>
         
            <Button
              variant="contained"
              color="primary"
              className={classes.button1}
              onClick={() => setFormDisabled(!formDisabled)}>
              Editar estas informações
              <DeleteIcon className={classes.rightIcon} />
            </Button>
        
        </Grid>

        <Stepper activeStep={activeStep} connector={connector}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="d-flex align-items-center">
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Você finalizou todas as etapas desta atividade!
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Resetar
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
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
                  {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Paper>
    </div>
  );
};
