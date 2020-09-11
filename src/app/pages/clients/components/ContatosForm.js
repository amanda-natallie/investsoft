/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Fab, Tooltip } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

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

export const ContatosForm = () => {
  const classes = useStyles();

  const [contatos, setContatos] = useState([
    {
      id: 0,
      pessoaContato: "",
      telefoneContato: "",
      emailContato: "",
      departamento: "",
    },
  ]);

  const addInformationOption = (type, index, e) => {
    const newArray = JSON.parse(JSON.stringify(contatos));

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

    setContatos(newArray);
  };
  const addOption = () => {
    const id = contatos.length;
    const optionLine = {
      id: id,
      pessoaContato: "",
      telefoneContato: "",
      emailContato: "",
      departamento: "",
    };

    setContatos([...contatos, optionLine]);
  };

  const deleteOption = (index) => {
    setContatos(contatos.filter((_, i) => i !== index));
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <p className="ml-3 font-weight-bold">
        Passo 05: Informe os dados de contatos. Você pode adicionar quantos
        quiser. O primeiro é obrigatório.
      </p>

      {contatos &&
        contatos.map((item, index) => (
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
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            {contatos.length > 1 && (
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
    </form>
  );
};
