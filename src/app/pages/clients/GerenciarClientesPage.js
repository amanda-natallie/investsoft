import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-restricted-imports
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Paper, Grid, TextField } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import { FormDois } from "../../components/pagina-um/FormDois";
import api from "../../../api";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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

  button1: {
    color: "white",
  },
  marginBottom: {
    marginBottom: 50,
  },
}));

export const GerenciarClientesPage = () => {
  const [clientesList, setClientesListt] = useState();
  const [selectedCliente, setSelectedCliente] = useState();
  const [showCliente, setShowCliente] = useState(false);

  const getClientes = async () => {
    const response = await api.get("/clientes");
    setClientesListt(response.data);
  };

  useEffect(() => {
    getClientes();
  }, []);

  const classes = useStyles();

  function handleSelection(cliente) {
    let selected = clientesList.filter((item) => {
      return item.razao_social === cliente;
    });
    setSelectedCliente(selected);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <div>
            <Typography variant="h5" component="h3">
              Gerenciar clientes
            </Typography>
            <Typography component="p">
              Consulte aqui todos os registros de clientes
            </Typography>
          </div>
          <Grid item lg={9}>
            <Autocomplete
              id="combo-box-demo"
              options={clientesList}
              getOptionLabel={(option) => option.razao_social}
              style={{ width: "100%", marginTop: 20 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Buscar Cliente"
                  variant="outlined"
                  onBlur={(e) => handleSelection(e.target.value)}
                />
              )}
            />
          </Grid>
          <Grid
            item
            lg={3}
            className="d-flex flex-row-reverse align-self-center align-items-center"
          >
            <Button
              size="large"
              variant="contained"
              color="primary"
              className={classes.button1}
              onClick={() => setShowCliente(true)}
            >
              Buscar cliente
              <SearchIcon className={classes.rightIcon} />
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        {showCliente && <FormDois selectedCliente={selectedCliente} />}
      </Paper>
    </div>
  );
};
