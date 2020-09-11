import React from "react";

import BootstrapTable from "./CustomTable";
import { Link } from "react-router-dom";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const headerStyle = {
  backgroundColor: "#F3F6F9",
  border: 0,
  color: "#3F4254",
};

const columnStyle = {
  border: 0,
};

const columns = [
  {
    dataField: "id",
    text: "Código do Cliente",
    headerStyle: {
      backgroundColor: "#F3F6F9",
      border: 0,
      color: "#3F4254",
      borderRadius: "0.42rem 0 0 0.42rem",
    },
    style: columnStyle,
  },
  {
    dataField: "tipo",
    text: "Tipo",
    headerStyle: headerStyle,
    style: columnStyle,
  },
  {
    dataField: "cnpj",
    text: "Nº CNPJ",
    headerStyle: headerStyle,
    style: columnStyle,
  },
  {
    dataField: "razaoSocial",
    text: "Razão Social",
    headerStyle: headerStyle,
    style: columnStyle,
  },
  {
    dataField: "emailContato",
    text: "E-mail de Contato",
    headerStyle: headerStyle,
    style: columnStyle,
  },
  {
    dataField: "pessoaContato",
    text: "Pessoa de Contato",
    headerStyle: headerStyle,
    style: columnStyle,
  },
  {
    dataField: "acaoRapida",
    text: "Ações Rapidas",
    headerStyle: {
      backgroundColor: "#F3F6F9",
      border: 0,
      color: "#3F4254",
      borderRadius: "0 0.42rem 0.42rem 0",
    },
    style: columnStyle,
    formatter: (cell, row, rowIndex, extraData) => (
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to="/">
          <EditIcon />
        </Link>
        <Link to="/">
          <DeleteIcon />
        </Link>
      </div>
    ),
  },
];

const CustomizatedExampleTable = ({ products }) => {
  return (
    <BootstrapTable
      headerClasses="testeTabela"
      keyField="id"
      data={products}
      columns={columns}
    />
  );
};

export default CustomizatedExampleTable;
