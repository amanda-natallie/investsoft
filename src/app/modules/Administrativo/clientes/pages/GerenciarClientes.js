import React, { useState, useEffect } from "react";
import api from "../../../../../services/api";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-restricted-imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Paper,
  Grid,
  TextField,
  Typography,
  CircularProgress,
} from "@material-ui/core/";

import PlusOneIcon from "@material-ui/icons/PlusOne";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { data } from "../../../../helpers/utils";
import GerenciarClientesTab from "../components/GerenciarClientesTab";
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
    marginBottom: 30,
  },
}));

export const GerenciarClientes = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const { user } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [inputValue, setInputValue] = React.useState("");

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };

    let active = true;

    if (!loading) {
      return undefined;
    }

    api
      .get("/clients", { params: { buscar: name }, config  })
      .then((response) => {
        setOptions(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });

    return () => {
      active = false;
    };
  }, [name, loading, user.token]);

  function MascaraParaLabel(valorDoTextBox) {
    if (valorDoTextBox.length <= 14) {
      let x = valorDoTextBox
        .replace(/\D/g, "")
        .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);

      valorDoTextBox = !x[2]
        ? x[1]
        : x[1] +
          "." +
          x[2] +
          "." +
          x[3] +
          "/" +
          x[4] +
          (x[5] ? "-" + x[5] : "");
    }
    return valorDoTextBox;
  }

  return (
    <>
      <Paper className={classes.paper}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.header}
        >
          <div>
            <Typography variant="h5" component="h3">
              Gerenciar clientes
            </Typography>
            <Typography component="p">
              Consulte informações do seu cliente e edite-as. Escolha um
              registro abaixo.
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
              onChange={(event, newValue) => {
                setName(newValue);
              }}
              inputValue={inputValue ? inputValue : ""}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              
              fullWidth
              getOptionSelected={(option, value) => option.name === value.name}
              getOptionLabel={(option) =>
                `${MascaraParaLabel(option.cnpj)} _ ${option.nomeFantasia}`
              }
              options={options}
              loading={loading}
              autoHighlight
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Digite o nome, endereço, cnpj ou empresa"
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    autoComplete: "new-password",
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
      </Paper>
      {/* <GerenciarClientesTab clientData={name} /> */}
      {name && <GerenciarClientesTab clientData={name} />}
    </>
  );
};
