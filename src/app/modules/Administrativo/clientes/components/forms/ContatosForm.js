/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Fab, Tooltip, Button } from "@material-ui/core";
import * as Yup from "yup";

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

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

export const ContatosForm = ({ managerCustomer = false }) => {
  const classes = useStyles();

  const stepRedux = useSelector((state) => state.step);
  const dispatch = useDispatch();

  const [arrayOfErrors, setArrayOfErrors] = useState([]);

  const [contatosState, setContatosState] = useState([
    {
      id: 0,
      pessoaContato: "",
      telefoneContato: "",
      emailContato: "",
      departamento: "",
    },
  ]);

  const [contatosRefatorados, setContatosRefatorados] = useState({
    contatos: [{}],
  });

  const addInformationOption = (type, index, e) => {
    const newArray = JSON.parse(JSON.stringify(contatosState));

    switch (type) {
      case "pessoaContato":
        newArray[index].pessoaContato = e.target.value;

        break;
      case "telefoneContato":
        newArray[index].telefoneContato = e.target.value;

        break;
      case "emailContato":
        newArray[index].emailContato = e.target.value;
        break;
      case "departamento":
        newArray[index].departamento = e.target.value;
        break;
      default:
        break;
    }

    setContatosRefatorados({ contatos: [...newArray] });

    setContatosState(newArray);
  };
  const addOption = () => {
    const id = contatosState.length;
    const optionLine = {
      id: id,
      pessoaContato: "",
      telefoneContato: "",
      emailContato: "",
      departamento: "",
    };

    setContatosState([...contatosState, optionLine]);
  };

  const deleteOption = (index) => {
    setContatosState(contatosState.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const schema = Yup.array(
        Yup.object({
          id: Yup.number(),
          pessoaContato: Yup.string().required(
            "Campo Nome do contato, obrigatório"
          ),
          telefoneContato: Yup.string().required(
            "Campo Telefone do contato, obrigatório"
          ),
          emailContato: Yup.string().required(
            "Campo E-mail do contato, obrigatório"
          ),
          departamento: Yup.string().required(
            "Campo Departamento do contato, obrigatório"
          ),
        })
      );

      await schema.validate(contatosState, {
        abortEarly: false,
      });

      console.log("OKAY");
      // dispatch(setClientes(contatosRefatorados));
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

  const checkingArrayOfErrors = (name, index) => {
    const find = arrayOfErrors.findIndex(
      (error) => error === `[${index}].${name}`
    );
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
        Passo 05: Informe os dados de contatos. Você pode adicionar quantos
        quiser. O primeiro é obrigatório.
      </p>

      {contatosState &&
        contatosState.map((item, index) => (
          <Grid container key={index} spacing={2} className="mb-5">
            <Grid item xs>
              <TextField
                disabled={false}
                label="Nome do contato"
                fullWidth
                value={item[index]}
                onChange={(e) =>
                  addInformationOption("pessoaContato", index, e)
                }
                error={checkingArrayOfErrors("pessoaContato", index)}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs>
              <TextField
                disabled={false}
                label="Telefone do contato"
                fullWidth
                value={item[index]}
                onChange={(e) =>
                  addInformationOption("telefoneContato", index, e)
                }
                error={checkingArrayOfErrors("telefoneContato", index)}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs>
              <TextField
                disabled={false}
                label="E-mail do contato"
                fullWidth
                value={item[index]}
                onChange={(e) => addInformationOption("emailContato", index, e)}
                error={checkingArrayOfErrors("emailContato", index)}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs>
              <TextField
                disabled={false}
                label="Departamento do contato"
                fullWidth
                value={item[index]}
                onChange={(e) => addInformationOption("departamento", index, e)}
                error={checkingArrayOfErrors("departamento", index)}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            {contatosState.length > 1 && (
              <Grid item xs={1}>
                <Tooltip title="Deletar Opção">
                  <Fab
                    color="primary"
                    aria-label="Deletar Opção"
                    onClick={() => deleteOption(index)}
                  >
                    <DeleteIcon />
                  </Fab>
                </Tooltip>
              </Grid>
            )}
          </Grid>
        ))}
      <Grid container>
        <Grid lg={3} className={classes.plusButton} onClick={() => addOption()}>
          <Fab size="small" color="primary">
            <AddIcon />
          </Fab>
          <span className="ml-4">Adicionar novo contato</span>
        </Grid>
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
