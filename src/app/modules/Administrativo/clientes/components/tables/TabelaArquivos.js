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
    dataField: "description",
    text: "Descrição",
    headerStyle: {
      backgroundColor: "#F3F6F9",
      border: 0,
      color: "#3F4254",
      borderRadius: "0.42rem 0 0 0.42rem",
    },
    style: {
      width: 20,
    },
    formatter: (cell, row, rowIndex, extraData) => (
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Fab size="small" color="primary" aria-label="Editar" className="mr-3">
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

  {
    dataField: "name",
    text: "Nome",
    headerStyle: headerStyle,
  },
  {
    dataField: "user",
    text: "Usuário",
    headerStyle: headerStyle,
  },
  {
    dataField: "use",
    text: "Uso",
    headerStyle: headerStyle,
  },

  {
    dataField: "download",
    text: "",
    headerStyle: {
      backgroundColor: "#F3F6F9",
      border: 0,
      color: "#3F4254",
      borderRadius: "0 0.42rem 0.42rem 0",
    },

    formatter: (cell, row, rowIndex, extraData) => (
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="#"
          className="btn btn-light-success font-weight-bolder font-size-sm"
        >
          Download
        </a>
      </div>
    ),
  },
];

const TabelaArquivos = ({ data }) => {
  return <CustomTable data={data} columns={columns} />;
};

export default TabelaArquivos;
