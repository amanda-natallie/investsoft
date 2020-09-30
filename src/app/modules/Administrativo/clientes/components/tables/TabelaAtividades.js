import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Icon } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import CustomTable from "../../../../../components/CustomTable/CustomTable";
import { ActivityStatusColumnFormatter } from "./utils/ActivityStatusColumnFormatter";

const headerStyle = {
  backgroundColor: "#F3F6F9",
  border: 0,
  color: "#3F4254",
};

const columns = [
  {
    field: "icon",
    title: "Nome",
    headerStyle: {
      width: 260,
      backgroundColor: "#F3F6F9",
      border: 0,
      color: "#3F4254",
      borderRadius: "0 0.42rem 0.42rem 0",
    },

     render: (row) => (
      <div className="d-flex align-items-center">
        <Icon className="table_icon">{row.icon}</Icon>
        <span>{row.name}</span>
      </div>
    ),
  },

  {
    field: "description",
    title: "Descrição",
    headerStyle: headerStyle,
  },

  {
    field: "status",
    title: "Tipo",
    render: (row) => ActivityStatusColumnFormatter(row) ,
    headerStyle: {
      backgroundColor: "#F3F6F9",
      border: 0,
      color: "#3F4254",
      borderRadius: "0 0.42rem 0.42rem 0",
      width: 205,
    },
    style: {
      textAlign: "center"
    }
  },
  {
    field: "acaoRapida",
    title: "Ações",
    filtering: false,
    headerStyle: {
      backgroundColor: "#F3F6F9",
      border: 0,
      color: "#3F4254",
      borderRadius: "0 0.42rem 0.42rem 0",
      width: 120,
    },

     render: (row) => (
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Fab
          size="small"
          color="secondary"
          aria-label="Editar"
          className="mr-3"
        >
          <Link to="/">
            <EditIcon />
          </Link>
        </Fab>
        <Fab size="small" aria-label="Editar">
          <Link to="/">
            <DeleteIcon />
          </Link>
        </Fab>
      </div>
    ),
  },
];

const TabelaAtividades = ({ data }) => {
  return <CustomTable data={data} columns={columns} title="Atividades" />;
};

export default TabelaAtividades;
