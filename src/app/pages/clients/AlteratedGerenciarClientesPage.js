import React, { useState } from "react";
// eslint-disable-next-line no-restricted-imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Typography, Paper, Grid } from "@material-ui/core/";
import { NavLink } from "react-router-dom";
import TabelaClientes from "./components/TabelaClientes";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

const useStylesTable = makeStyles((theme) => ({
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStylesTabs = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    flexGrow: 1,
  },
  resetCss: {
    border: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

export const AlteratedGerenciarClientesPage = () => {
  const classesTabs = useStylesTabs();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const classesTable = useStylesTable();

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
    <div className={classesTable.root}>
      <Paper className={classesTable.paper}>
        <Grid
          container
          className={`justify-content-between align-self-center ${classesTable.marginBottom}`}
        >
          {/* Tabs */}
          <div className={classesTabs.root} disabled={true}>
            <AppBar
              position="static"
              color="default"
              className={classesTabs.resetCss}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                aria-label="full width tabs example"
              >
                <Tab label="Informações Básicas" {...a11yProps(0)} />
                <Tab label="Socios" {...a11yProps(1)} />
                <Tab label="Atividades" {...a11yProps(2)} />
                <Tab label="Arquivos" {...a11yProps(3)} />
                <Tab label="Senha e Acessos" {...a11yProps(4)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                Informações Básicas
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Socios
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                Atividades
              </TabPanel>
              <TabPanel value={value} index={3} dir={theme.direction}>
                Arquivos
              </TabPanel>
              <TabPanel value={value} index={4} dir={theme.direction}>
                Senha e Acessos
              </TabPanel>
            </SwipeableViews>
          </div>

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
            className={classesTable.button1}
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
