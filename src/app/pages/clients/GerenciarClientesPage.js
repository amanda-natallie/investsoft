import React from "react";
import CustomTable from "../../components/CustomTable/CustomTable";
// eslint-disable-next-line no-restricted-imports
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Paper, Grid } from "@material-ui/core/";
import { NavLink } from "react-router-dom";
import TabelaClientes from "./components/TabelaClientes";

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

  button1: {
    color: "white",
  },
  marginBottom: {
    marginBottom: 50,
  },
}));

export const GerenciarClientesPage = () => {
  const classes = useStyles();

  const data = [
    {
      id: 1,
      tipo: "Ativo",
      cnpj: "08.753.063/0001-20",
      razaoSocial: "Stanton, Feeney and Pacocha",
      emailContato: "ggolling0@list-manage.com",
      pessoaContato: "Gar Golling",
    },
    {
      id: 2,
      tipo: "Inativo",
      cnpj: "58.089.031/0001-40",
      razaoSocial: "Spencer Group",
      emailContato: "jdanbury1@omniture.com",
      pessoaContato: "Joanne Danbury",
    },
    {
      id: 3,
      tipo: "Eventual",
      cnpj: "96.438.030/0001-53",
      razaoSocial: "Sauer-Thiel",
      emailContato: "echoffin2@youtube.com",
      pessoaContato: "Elisha Choffin",
    },
    {
      id: 4,
      tipo: "Doméstico",
      cnpj: "68.621.856/0001-18",
      razaoSocial: "Harris LLC",
      emailContato: "mdaber3@boston.com",
      pessoaContato: "Marty Daber",
    },
    {
      id: 5,
      tipo: "Ativo",
      cnpj: "27.531.186/0001-61",
      razaoSocial: "Green, Spinka and Jacobson",
      emailContato: "llorait4@cloudflare.com",
      pessoaContato: "Leon Lorait",
    },
    {
      id: 6,
      tipo: "Inativo",
      cnpj: "78.234.392/0001-40",
      razaoSocial: "Runolfsson, Nienow and Koelpin",
      emailContato: "cduinbleton5@reverbnation.com",
      pessoaContato: "Cirillo Duinbleton",
    },
    {
      id: 7,
      tipo: "Eventual",
      cnpj: "68.020.230/0001-56",
      razaoSocial: "Simonis, Hodkiewicz and Treutel",
      emailContato: "ijimenez6@phoca.cz",
      pessoaContato: "Iver Jimenez",
    },
    {
      id: 8,
      tipo: "Doméstico",
      cnpj: "33.350.162/0001-09",
      razaoSocial: "Bogan, Nienow and Schultz",
      emailContato: "jkasher7@1und1.de",
      pessoaContato: "Jess Kasher",
    },
    {
      id: 9,
      tipo: "Ativo",
      cnpj: "52.250.484/0001-20",
      razaoSocial: "Beahan-Carroll",
      emailContato: "dfentem8@drupal.org",
      pessoaContato: "Desirae Fentem",
    },
    {
      id: 10,
      tipo: "Doméstico",
      cnpj: "39.738.943/0001-51",
      razaoSocial: "Bergnaum and Sons",
      emailContato: "astoade9@about.com",
      pessoaContato: "Auroora Stoade",
    },
  ];
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          className={`justify-content-between align-self-center ${classes.marginBottom}`}
        >
          <div>
            <Typography variant="h5" component="h3">
              Gerenciar clientes
            </Typography>
            <Typography component="p">
              Consulte aqui todos os registros de clientes
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button1}
            onClick={undefined}
          >
            <NavLink className="menu-link menu-toggle" to="/cadastrar-clientes">
              Cadastrar novo cliente
            </NavLink>
          </Button>
        </Grid>

        <TabelaClientes data={data} />
      </Paper>
    </div>
  );
};
