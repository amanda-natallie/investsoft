import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Fab } from "@material-ui/core";
import CustomTable from "../../../../../components/CustomTable/CustomTable";
import { StatusColumnFormatter } from "./utils/StatusColumnFormatter";

const headerStyle = {
  backgroundColor: "#F3F6F9",
  border: 0,
  color: "#3F4254",
};

const columns = [
  {
    field: "name",
    title: "Name",
    headerStyle: {
      backgroundColor: "#F3F6F9",
      border: 0,
      color: "#3F4254",
      borderRadius: "0.42rem 0 0 0.42rem",
    },
    style: {
      width: 20,
    },
  },

  {
    field: "url",
    title: "URL",
    render: (row) => (
      <a
        href={row.url}
        target="_blank"
        rel="noreferrer noopenner"
        className="label label-lg label-light-info label-inline"
      >
        {row.url}
      </a>
    ),
    headerStyle: headerStyle,
  },
  {
    field: "description",
    title: "Descrição",
    headerStyle: headerStyle,
  },
  {
    field: "user",
    title: "Usuario",
    headerStyle: headerStyle,
  },

  {
    field: "password",
    title: "Senha",
    render: (row) => (
      <span className="label label-lg label-inline font-italic font-weight-bold">
        {row.password}
      </span>
    ),
    headerStyle: {
      backgroundColor: "#F3F6F9",
      border: 0,
      color: "#3F4254",
      borderRadius: "0 0.42rem 0.42rem 0",
    },
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

const TabelaSenhaAcessos = ({ data }) => {
  return <CustomTable data={data} columns={columns} title="Senha e Acessos" />;
};

export default TabelaSenhaAcessos;
