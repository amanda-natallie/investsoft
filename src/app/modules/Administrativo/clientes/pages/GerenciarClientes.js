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
  const [name, setName] = useState("");
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };

    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await api
        .get("/clients/filter", { buscar: name }, config)
        .then((response) => console.log(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro: " + err);
        });

      // if (active) {
      //   setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
      // }
    })();

    return () => {
      active = false;
    };
  }, [name, loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <>
      <GerenciarClientesTab />
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
                option.cnpj + " - " + option.razaoSocial
              }
              options={options}
              loading={loading}
              autoHighlight
              renderOption={(option) => (
                <React.Fragment>
                  <span>{option.cnpj}</span>
                  {option.razaoSocial} ({option.emailContato})
                </React.Fragment>
              )}
              renderInput={(params) => (
                <TextField
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
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
      {/* {name && <GerenciarClientesTab id={name.id} />} */}
    </>
  );
};
