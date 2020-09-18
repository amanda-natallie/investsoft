import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-restricted-imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Paper,
  Grid,
  TextField,
  Typography
} from "@material-ui/core/";

import PlusOneIcon from "@material-ui/icons/PlusOne";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { data } from "../../helpers/utils";
import GerenciarClientesTab from "./components/GerenciarClientesTab";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "90%",
    margin: "0 auto",
    display: "table",
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  button1: {
    color: "white",
    padding: "15px 40px",
  },
  divider: {
    margin: "40px 0",
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  marginBottom: {
    marginBottom: 50,
  },
  header: {
    height: 60,
    marginBottom: 30
  }
}));

export const GerenciarClientesPage = () => {
  
  const classes = useStyles();

  const [name, setName] = useState("");
  useEffect(() => {
    console.log("name", name);
  }, [name]);
  return (
    <>
      <Paper className={classes.paper}>
        <Grid container justify="space-between" alignItems="center" className={classes.header}>
          <div>
          <Typography variant="h5" component="h3">
            Gerenciar clientes
          </Typography>
          <Typography component="p">
            Consulte informações do seu cliente e edite-as. Escolha um registro abaixo.
          </Typography>
          </div>
          <NavLink className="menu-link menu-toggle" to="/cadastrar-clientes">
              <Button
                variant="contained"
                color="primary"
                className={classes.button1}
                onClick={undefined}
              >
                Cadastrar novo cliente
                <PlusOneIcon className={classes.rightIcon} />
              </Button>
            </NavLink>
        </Grid>
        <Grid container>
          <Grid item lg={12}>
            <Autocomplete
              fullWidth
              options={data}
              classes={{
                option: classes.option,
              }}
              onChange={(event, newValue) => {
                setName(newValue.id);
              }}
              autoHighlight
              getOptionLabel={(option) =>
                option.cnpj + " - " + option.razaoSocial
              }
              renderOption={(option) => (
                <React.Fragment>
                  <span>{option.cnpj}</span>
                  {option.razaoSocial} ({option.emailContato})
                </React.Fragment>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Digite o nome, endereço, cnpj ou empresa"
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </Grid>
          
        </Grid>
      </Paper>
      {name && <GerenciarClientesTab id={name.id} />}
    </>
  );
};
