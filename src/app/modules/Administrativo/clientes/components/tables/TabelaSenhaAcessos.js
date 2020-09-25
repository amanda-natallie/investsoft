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
    dataField: "name",
    text: "Name",
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
    dataField: "url",
    text: "URL",
    headerStyle: headerStyle,
  },
  {
    dataField: "description",
    text: "Descrição",
    headerStyle: headerStyle,
  },
  {
    dataField: "user",
    text: "Usuario",
    headerStyle: headerStyle,
  },

  {
    dataField: "password",
    text: "Senha",
    headerStyle: {
      backgroundColor: "#F3F6F9",
      border: 0,
      color: "#3F4254",
      borderRadius: "0 0.42rem 0.42rem 0",
    },
  },
];

const TabelaSenhaAcessos = ({ data }) => {
  return <CustomTable data={data} columns={columns} />;
};

export default TabelaSenhaAcessos;
