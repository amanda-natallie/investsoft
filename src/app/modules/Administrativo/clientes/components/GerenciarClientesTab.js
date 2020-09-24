/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
// eslint-disable-next-line no-restricted-imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Paper, Grid } from "@material-ui/core/";
import TabelaClientes from "./tables/TabelaClientes";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { AppBar, Tabs, Tab, Box } from "@material-ui/core/";
import { data } from "../../../../helpers/utils";

import { InformacoesJuridicasForm } from "../components/forms/InformacoesJuridicasForm";
import { SociosForm } from "../components/forms/SociosForm";
import { RegimeTributarioForm } from "../components/forms/RegimeTributarioForm";
import { EnderecoLocalizacaoForm } from "../components/forms/EnderecoLocalizacaoForm";
import { ContatosForm } from "../components/forms/ContatosForm";
import { AlvaraAtividadesForm } from "../components/forms/AlvaraAtividadesForm";
import TabelaSenhaAcessos from "./tables/TabelaSenhaAcessos";
import TabelaArquivos from "./tables/TabelaArquivos";

import { Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import { useSelector, useDispatch } from "react-redux";
import { setIsDisable } from "../../clientes/_redux/clientesActions";

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
        <Box p={0} className="pt-5">
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

const GerenciarClientesTab = ({ clientData }) => {
  const classesTabs = useStylesTabs();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const inputState = useSelector((state) => state.client);
  const dispatch = useDispatch();

  const handleEditButton = () => {
    dispatch(setIsDisable(inputState));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const classesTable = useStylesTable();

  const dataTableSenhaAcessos = [
    {
      name: "Marcus",
      url: "teste",
      dataField: "21/09/2020",
      user: "teste",
      password: "123123",
    },
    {
      name: "Teste",
      url: "teste",
      dataField: "21/09/2020",
      user: "teste",
      password: "123123",
    },
  ];

  const dataTableArquivos = [
    {
      description: "teste",
      name: "Marcus",
      user: "teste",
      use: "a",
    },
    {
      description: "teste",
      name: "Marcus",
      user: "teste",
      use: "a",
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
                <Fab
                  size="small"
                  color="inherit"
                  aria-label="Editar"
                  className="mr-3"
                  style={{ marginLeft: "16px" }}
                >
                  <button
                    type="button"
                    onClick={handleEditButton}
                    style={{ border: 0, backgroundColor: "transparent" }}
                  >
                    <EditIcon />
                  </button>
                </Fab>
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <h4>Informações Jurídicas</h4>
                <InformacoesJuridicasForm clientData={clientData} />
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <h4>Socios</h4>
                <SociosForm />
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <h4>Atividades</h4>
                <AlvaraAtividadesForm />
              </TabPanel>
              <TabPanel value={value} index={3} dir={theme.direction}>
                <h4>Arquivos</h4>
                <TabelaArquivos data={dataTableArquivos} />
              </TabPanel>
              <TabPanel value={value} index={4} dir={theme.direction}>
                <h4>Senha e Acessos</h4>
                <TabelaSenhaAcessos data={dataTableSenhaAcessos} />
              </TabPanel>
            </SwipeableViews>
          </div>
        </Grid>
      </Paper>
    </div>
  );
};
export default GerenciarClientesTab;
