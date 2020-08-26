import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-restricted-imports
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Grid, TextField } from "@material-ui/core/";
import { FormDois } from "../components/pagina-um/FormDois";
import SearchIcon from "@material-ui/icons/Search";

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
}));

export const PaginaDois = () => {
  const [formDisabled, setFormDisabled] = useState(true);
  const classes = useStyles();

  useEffect(() => {}, [formDisabled]);
  const [name, setName] = useState("");
  return (
    <>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item lg={9}>
            <TextField
              id="outlined-name"
              label="Buscar"
              placeholder="Digite o nome, endereço, cnpj ou empresa "
              fullWidth
              className={classes.textField}
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              variant="outlined"
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
              onClick={() => setFormDisabled(!formDisabled)}
            >
              Buscar cliente
              <SearchIcon className={classes.rightIcon} />
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <FormDois />
    </>
  );
};
